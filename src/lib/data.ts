
import { pool } from "@/lib/db.server";

export type Ailment = { ailment_id: number; ailment_title: string; ailment_slug: string };
export type Remedy  = { remedy_id: number; remedy_name: string; description: string | null; is_active: boolean };

// For admin views: includes description + is_active
export type AdminRemedy = {
  remedy_id: number;
  remedy_name: string;
  description: string | null;
  is_active: boolean;
  from_symptom_data: boolean;
};

export type AdminAilment = {
  ailment_id: number;
  ailment_title: string;
  ailment_slug: string;
  is_active: boolean;
};



export async function getAilmentsPaged({ q, limit = 60, offset = 0 }:{
  q?: string; limit?: number; offset?: number;
}) {
  const params: any[] = [];
  let where = "";
  if (q) { params.push(`%${q}%`); where = "WHERE ailment_title ILIKE $1 OR ailment_slug ILIKE $1"; }
  const { rows } = await pool.query<Ailment>(
    `SELECT ailment_id, ailment_title, ailment_slug
       FROM ailments
       ${where}
      ORDER BY ailment_title
      LIMIT ${limit} OFFSET ${offset}`,
    params
  );
  return rows;
}

export async function getAilmentBySlugWithRemedies(slug: string) {
  const { rows } = await pool.query(
    `SELECT a.ailment_id, a.ailment_title, a.ailment_slug,
            r.remedy_id, r.remedy_name,
            ar.symptom_description, ar.sort_order
       FROM ailments a
       LEFT JOIN ailment_remedies ar ON ar.ailment_id = a.ailment_id
       LEFT JOIN remedies r          ON r.remedy_id   = ar.remedy_id
      WHERE a.ailment_slug = $1
      ORDER BY COALESCE(ar.sort_order, 999), r.remedy_name`,
    [slug]
  );
  if (!rows.length) return null;

  const header = {
    ailment_id: rows[0].ailment_id,
    ailment_title: rows[0].ailment_title,
    ailment_slug: rows[0].ailment_slug,
  };
  const remedies = rows
    .filter(r => r.remedy_id)
    .map(r => ({
      remedy_id: r.remedy_id,
      remedy_name: r.remedy_name,
      symptom_description: r.symptom_description,
      sort_order: r.sort_order,
    }));
  return { ...header, remedies };
}

export async function getRemediesPaged({ q, limit = 60, offset = 0 }:{
  q?: string; limit?: number; offset?: number;
}) {
  const params: any[] = [];
  let where = "";
  if (q) { params.push(`%${q}%`); where = "WHERE remedy_name ILIKE $1 OR COALESCE(description,'') ILIKE $1"; }
  const { rows } = await pool.query<Remedy>(
    `SELECT remedy_id, remedy_name
       FROM remedies
       ${where}
      ORDER BY remedy_name
      LIMIT ${limit} OFFSET ${offset}`,
    params
  );
  return rows;
}

export async function getRemediesCount(q?: string) { // for pagination
  const params: any[] = [];
  let where = "";
  if (q) {
    params.push(`%${q}%`); // ILIKE is case-insensitive, wraps q in % for partial match
    where =
      "WHERE remedy_name ILIKE $1 OR COALESCE(description,'') ILIKE $1";
  }

  const { rows } = await pool.query<{ count: number }>(
    `SELECT COUNT(*)::int AS count
       FROM remedies
       ${where}`,
    params
  );

  return rows[0]?.count ?? 0;
}


export async function getRemedyWithAilments(remedyId: string | number) {
  const { rows } = await pool.query(
    `SELECT r.remedy_id, r.remedy_name,
            a.ailment_id, a.ailment_title, a.ailment_slug,
            ar.symptom_description, ar.sort_order
       FROM remedies r
       LEFT JOIN ailment_remedies ar ON ar.remedy_id = r.remedy_id
       LEFT JOIN ailments a          ON a.ailment_id = ar.ailment_id
      WHERE r.remedy_id = $1
      ORDER BY a.ailment_title`,
    [remedyId]
  );
  if (!rows.length) return null;

  const header = { remedy_id: rows[0].remedy_id, remedy_name: rows[0].remedy_name };
  const ailments = rows
    .filter(r => r.ailment_id)
    .map(r => ({
      ailment_id: r.ailment_id,
      ailment_title: r.ailment_title,
      ailment_slug: r.ailment_slug,
      symptom_description: r.symptom_description,
      sort_order: r.sort_order,
    }));
  return { ...header, ailments };
}

export async function searchAll(q: string) {
  const like = `%${q}%`;
  const [as, rs] = await Promise.all([
    pool.query<Ailment>(
      `SELECT ailment_id, ailment_title, ailment_slug
         FROM ailments
        WHERE ailment_title ILIKE $1 OR ailment_slug ILIKE $1
        ORDER BY ailment_title`, [like]),

    pool.query<Remedy>(
      `
      WITH matched_ailments AS (
        SELECT ailment_id
          FROM ailments
         WHERE ailment_title ILIKE $1 OR ailment_slug ILIKE $1
      ),
      via_ailments AS (
        SELECT DISTINCT r.remedy_id, r.remedy_name
          FROM remedies r
          JOIN ailment_remedies ar ON ar.remedy_id = r.remedy_id
          JOIN matched_ailments a  ON a.ailment_id = ar.ailment_id
      ),
      via_symptoms AS (
        SELECT DISTINCT r.remedy_id, r.remedy_name
          FROM remedies r
          JOIN ailment_remedies ar ON ar.remedy_id = r.remedy_id
         WHERE ar.symptom_description ILIKE $1
      ),
      via_self AS (
        SELECT DISTINCT r.remedy_id, r.remedy_name
          FROM remedies r
         WHERE r.remedy_name ILIKE $1
            OR COALESCE(r.description,'') ILIKE $1
      )
      SELECT DISTINCT remedy_id, remedy_name
        FROM (
          SELECT * FROM via_self
          UNION ALL
          SELECT * FROM via_symptoms
          UNION ALL
          SELECT * FROM via_ailments
        ) AS combined
       ORDER BY remedy_name`, [like]),
  ]);
  return { ailments: as.rows, remedies: rs.rows };
}

export async function getAilmentsAdmin() {
  const { rows } = await pool.query(`
    SELECT ailment_id, ailment_title, ailment_slug, is_active
    FROM ailments
    ORDER BY ailment_title
  `);
  return rows;
}

export async function getAilmentBySlugAdmin(slug: string) {
  const { rows } = await pool.query<AdminAilment>(
    `
    SELECT ailment_id, ailment_title, ailment_slug, is_active
      FROM ailments
     WHERE ailment_slug = $1
    `,
    [slug]
  );
  return rows[0];
}

export async function createAilmentAdmin({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const { rows } = await pool.query(
    `
     INSERT INTO ailments (ailment_title, ailment_slug, is_active)
     VALUES ($1, $2, true)
     RETURNING ailment_id, ailment_title, ailment_slug, is_active
    `,
    [title, slug]
  );
  return rows[0];
}

export async function updateAilmentAdmin({
  slug,
  newTitle,
  newSlug,
  isActive,
}: {
  slug: string;
  newTitle?: string;
  newSlug?: string;
  isActive?: boolean;
}) {
  const { rows } = await pool.query<AdminAilment>(
    `
    UPDATE ailments
       SET ailment_title = COALESCE($2, ailment_title),
           ailment_slug  = COALESCE($3, ailment_slug),
           is_active     = COALESCE($4, is_active)
     WHERE ailment_slug = $1
     RETURNING ailment_id, ailment_title, ailment_slug, is_active
    `,
    [slug, newTitle ?? null, newSlug ?? null, isActive ?? null]
  );

  return rows[0];
}

// export async function updateAilmentAdmin({
//   id,
//   title,
//   slug,
//   description,
//   isActive,
// }: {
//   id: number;
//   title?: string;
//   slug?: string;
//   description?: string | null;
//   isActive?: boolean;
// }) {
//   const { rows } = await pool.query(
//     `
//     UPDATE ailments
//        SET ailment_title = COALESCE($2, ailment_title),
//            ailment_slug  = COALESCE($3, ailment_slug),
//            description   = COALESCE($4, description),
//            is_active     = COALESCE($5, is_active)
//      WHERE ailment_id = $1
//      RETURNING ailment_id, ailment_title, ailment_slug, description, is_active
//     `,
//     [id, title ?? null, slug ?? null, description ?? null, isActive ?? null]
//   );
//   return rows[0];
// }


export async function deleteAilmentAdmin(ailmentId: number) {
  await pool.query(
    `
    DELETE FROM ailments
    WHERE ailment_id = $1
    `,
    [ailmentId]
  );
}

export async function getAdminRemedies() {
  const { rows } = await pool.query<AdminRemedy>(
    `
       SELECT
      r.remedy_id,
      r.remedy_name,
      -- if remedies.description is null, fallback to *some* symptom_description
      COALESCE(
        r.description,
        MIN(ar.symptom_description)
      ) AS description,
      r.is_active,
      -- flag to tell the UI this value came from symptoms, not the remedies table
      (r.description IS NULL AND MIN(ar.symptom_description) IS NOT NULL) AS from_symptom_data
    FROM remedies r
    LEFT JOIN ailment_remedies ar
      ON ar.remedy_id = r.remedy_id
    GROUP BY r.remedy_id, r.remedy_name, r.description, r.is_active
    ORDER BY r.remedy_name
    `
  );
  return rows;
}

// export async function getRemedyById(id: number) {
//   const { rows } = await pool.query<Remedy>(
//     `SELECT remedy_id, remedy_name, description, is_active
//        FROM remedies
//       WHERE remedy_id = $1`,
//     [id]
//   );
//   return rows[0]; // return a single remedy
// }


export async function createRemedyAdmin({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  const { rows } = await pool.query<Remedy>(
    `INSERT INTO remedies (remedy_name, description)
     VALUES ($1, $2)
     RETURNING remedy_id, remedy_name, description, is_active`,
    [name, description ?? null]
  );
  return rows[0];
}

export async function updateRemedyAdmin({
  id,
  name,
  description,
  isActive,
}: {
  id: number;
  name?: string;
  description?: string;
  isActive?: boolean;
}) {
  const { rows } = await pool.query<Remedy>(
    `UPDATE remedies
        SET remedy_name = COALESCE($2, remedy_name),
            description = COALESCE($3, description),
            is_active   = COALESCE($4, is_active)
      WHERE remedy_id = $1
      RETURNING remedy_id, remedy_name, description, is_active`,
    [id, name ?? null, description ?? null, isActive ?? null]
  );
  return rows[0];
}

export async function deleteRemedyAdmin(id: number) {
  await pool.query(
    `DELETE FROM remedies
      WHERE remedy_id = $1`,
    [id]
  );
}

export async function createAilmentRemedyAdmin({
  ailmentId,
  remedyId,
  symptomDescription,
}: {
  ailmentId: number;
  remedyId: number;
  symptomDescription?: string | null;
}) {
  const { rows } = await pool.query(
    `
    INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description)
    VALUES ($1, $2, $3)
    ON CONFLICT (ailment_id, remedy_id) DO UPDATE
      SET symptom_description = EXCLUDED.symptom_description
    RETURNING id, ailment_id, remedy_id, symptom_description
    `,
    [ailmentId, remedyId ?? null]
  );
  return rows[0];
}

export async function deleteAilmentRemedyAdmin(id: number) {
  await pool.query(`DELETE FROM ailment_remedies WHERE id = $1`, [id]);
}

export async function linkAilmentRemedyAdmin({
  ailmentId,
  remedyId,
  symptomDescription,
}: {
  ailmentId: number;
  remedyId: number;
  symptomDescription: string;
}) {
  const { rows } = await pool.query(
    `
    INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description)
    VALUES ($1, $2, $3)
    ON CONFLICT (ailment_id, remedy_id) DO NOTHING
    RETURNING ailment_id, remedy_id, symptom_description
    `,
    [ailmentId, remedyId, symptomDescription]
  );
  return rows[0];
}



