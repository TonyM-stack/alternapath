import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { readFileSync } from "node:fs";
import * as path from "node:path";
import { Pool } from "pg";


// ---------- helpers ----------
const pool = new Pool({ connectionString: process.env.DATABASE_URL,
  host: "127.0.0.1",
  port: 5432, 
 });
 (async () => {
  const c = await pool.connect();
  try {
    const r = await c.query(
      `select current_database() as db,
              current_user as usr,
              current_setting('port') as port,
              current_setting('data_directory') as data_dir`
    );
    console.log("DB CONNECT:", r.rows[0]);
  } finally {
    c.release();
  }
})();

const file = path.join(process.cwd(), "data/scraped.ailments.json");
console.log("Loading:", file); 


// normalize whitespace & strip trailing “View Remedy”
function clean(s?: string | null) {
  if (!s) return null;
  return s.replace(/\s*View Remedy\s*$/i, "").replace(/\s+/g, " ").trim();
}

// lightweight aliasing for common short names (extend as you see patterns)
const NAME_ALIASES: Record<string, string> = {
  "carbo veg": "Carbo vegetabilis",
  "ferrum metallicum": "Ferrum metallicum",
  "calcarea fluorica (calc fluor)": "Calcarea fluorica",
};

// crude potency patterns: 6X, 30C, 200C, 1M, LM1, etc.
const POTENCY_RE = /\b(\d+\s?(?:C|X|M)|LM\d+)\b/i;

function normalizeRemedyName(name: string) {
  const n = name.trim();
  const lowered = n.toLowerCase();
  const aliased = NAME_ALIASES[lowered] || n;
  // Capitalize first letter of each word lightly
  return aliased.replace(/\b([a-z])/g, (m) => m.toUpperCase());
}

function parseRemedy(raw: string) {
  const text = clean(raw) || "";
  // try to split out potency + dosage
  const m = text.match(POTENCY_RE);
  if (!m) {
    return { name: normalizeRemedyName(text), potency: null, dosage: null };
  }
  const idx = m.index ?? text.indexOf(m[0]);
  let name = text.slice(0, idx).trim();
  // drop trailing parenthetical aliases in name: "Calcarea Fluorica (Calc Fluor)"
  name = name.replace(/\s*\([^)]*\)\s*$/, "");
  name = normalizeRemedyName(name);

  const rest = text.slice(idx).trim();
  const [potencyToken, ...dosageParts] = rest.split(/\s+/);
  const potency = potencyToken || null;
  const dosage = dosageParts.join(" ").trim() || null;

  return { name, potency, dosage };
}

// ---------- types ----------
type RemedyRow = { symptom: string; remedy: string };
type AilmentRow = {
  ailment_id?: number;
  ailment_slug: string;
  ailment_title: string;
  link?: string;
  remedies: RemedyRow[];
};

// ---------- DB upserts (with small caches to reduce queries) ----------
class IdCache {
  private ailmentBySlug = new Map<string, number>();
  private remedyByName = new Map<string, number>();

  async getAilmentId(client: any, slug: string, title: string, link?: string | null) {
    if (this.ailmentBySlug.has(slug)) return this.ailmentBySlug.get(slug)!;
    const { rows } = await client.query(
      `INSERT INTO ailments (ailment_slug, ailment_title, link)
       VALUES ($1,$2,$3)
       ON CONFLICT (ailment_slug) DO UPDATE
         SET ailment_title = EXCLUDED.ailment_title,
             link = COALESCE(EXCLUDED.link, ailments.link)
       RETURNING ailment_id`,
      [slug, title, link ?? null]
    );
    const id = rows[0].ailment_id as number;
    this.ailmentBySlug.set(slug, id);
    return id;
  }

  async getRemedyId(client: any, name: string, potency: string | null, dosage: string | null) {
    const key = name; // you could include potency in cache key if you want name+potency uniqueness
    if (this.remedyByName.has(key)) return this.remedyByName.get(key)!;
    const { rows } = await client.query(
      `INSERT INTO remedies (remedy_name, potency, dosage_instructions)
       VALUES ($1,$2,$3)
       ON CONFLICT (remedy_name) DO UPDATE
         SET potency = COALESCE(EXCLUDED.potency, remedies.potency),
             dosage_instructions = COALESCE(EXCLUDED.dosage_instructions, remedies.dosage_instructions)
       RETURNING remedy_id`,
      [name, potency, dosage]
    );
    const id = rows[0].remedy_id as number;
    this.remedyByName.set(key, id);
    return id;
  }
}

async function upsertAilmentRemedy(
  client: any,
  ailmentId: number,
  remedyId: number,
  symptom: string,
  sortOrder: number
) {
  await client.query(
    `INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description, sort_order)
     VALUES ($1,$2,$3,$4)
     ON CONFLICT (ailment_id, remedy_id, symptom_description) DO UPDATE
       SET sort_order = LEAST(ailment_remedies.sort_order, EXCLUDED.sort_order)`,
    [ailmentId, remedyId, symptom, sortOrder]
  );
}

// ---------- main ----------
async function main() {
  const file = path.join(process.cwd(), "data/scraped.ailments.json");
  const input: AilmentRow[] = JSON.parse(readFileSync(file, "utf8"));

  const client = await pool.connect();
  const cache = new IdCache();

  try {
    // For very large datasets, you can chunk transactions to avoid huge locks.
    await client.query("BEGIN");

    for (const a of input) {
      const slug = (a.ailment_slug || "").trim();
      const title = clean(a.ailment_title) || slug || "Untitled Ailment";
      const link = clean(a.link);

      if (!slug) continue; // require a slug for idempotency

      const ailmentId = await cache.getAilmentId(client, slug, title, link);

      let order = 1;
      for (const r of a.remedies || []) {
        // Skip header row like {symptom:"Symptoms", remedy:"Remedy"}
        if (/^\s*Symptoms?\s*$/i.test(r.symptom) && /^\s*Remedy\s*$/i.test(r.remedy)) continue;

        const symptom = clean(r.symptom);
        const parsed = parseRemedy(r.remedy || "");
        const name = clean(parsed.name || "");

        if (!symptom || !name) continue;

        const remedyId = await cache.getRemedyId(client, name, parsed.potency, parsed.dosage);
        await upsertAilmentRemedy(client, ailmentId, remedyId, symptom, order++);
      }
    }

    await client.query("COMMIT");
    console.log("✅ Import complete");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("❌ Import failed:", err);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

main();
