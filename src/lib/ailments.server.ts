
import { pool } from "@/lib/db.server";

export async function getAilmentBySlug(slug: string) {
  const result = await pool.query("SELECT * FROM ailments WHERE ailment_slug = $1", [slug]);
  return result.rows[0];
}
