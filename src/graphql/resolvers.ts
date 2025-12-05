// Used to access the database other than in the terminal scripts


import { pool } from "@/lib/db.server";
import { QueryResultRow } from "pg"; 

// rows-only helper so existing code works unchanged
const query = async <T extends QueryResultRow = any>(sql: string, params?: any[]) => {
  const { rows } = await pool.query<T>(sql, params);
  return rows;
};


//DB Access 
export const resolvers = {
  // If you want strict Date scalars later, add a Date scalar implementation.
  Query: {
    users: async () =>
      query("SELECT user_id, username, email, first_name, last_name, created_at, updated_at FROM users"),

    user: async (_: any, { id }: { id: string }) => {
      const rows = await query("SELECT * FROM users WHERE user_id = $1", [id]);
      return rows[0] ?? null;
    },

    ailments: async (_: any, { search }: { search?: string }) => {
      if (search) {
        return query(
          `SELECT * FROM ailments
           WHERE ailment_title ILIKE $1 OR ailment_slug ILIKE $1
           ORDER BY ailment_title`,
          [`%${search}%`]
        );
      }
      return query("SELECT * FROM ailments ORDER BY ailment_title");
    },

    ailment: async (_: any, { id, slug }: { id?: string; slug?: string }) => {
      if (id) {
        const rows = await query("SELECT * FROM ailments WHERE ailment_id = $1", [id]);
        return rows[0] ?? null;
      }
      if (slug) {
        const rows = await query("SELECT * FROM ailments WHERE ailment_slug = $1", [slug]);
        return rows[0] ?? null;
      }
      return null;
    },

    remedies: async (_: any, { search }: { search?: string }) => {
      if (search) {
        return query(
          `SELECT * FROM remedies
           WHERE remedy_name ILIKE $1 OR coalesce(description,'') ILIKE $1
           ORDER BY remedy_name`,
          [`%${search}%`]
        );
      }
      return query("SELECT * FROM remedies ORDER BY remedy_name");
    },

    remedy: async (_: any, { id }: { id: string }) => {
      const rows = await query("SELECT * FROM remedies WHERE remedy_id = $1", [id]);
      return rows[0] ?? null;
    },

   ailmentRemedies: async (_: any, { ailmentId }: { ailmentId: string }) => {
  return query(
    `SELECT ailment_remedy_id, ailment_id, remedy_id, symptom_description, sort_order
     FROM ailment_remedies
     WHERE ailment_id = $1
     ORDER BY sort_order, ailment_remedy_id`,
    [ailmentId]
  );
},

  },

  Mutation: {
    addRemedy: async (_: any, { input }: any) => {
      const { remedy_name, description, potency, dosage_instructions } = input;
      const rows = await query(
        `INSERT INTO remedies (remedy_name, description, potency, dosage_instructions)
         VALUES ($1,$2,$3,$4)
         RETURNING *`,
        [remedy_name, description ?? null, potency ?? null, dosage_instructions ?? null]
      );
      return rows[0];
    },

    favoriteRemedy: async (_: any, { userId, remedyId }: { userId: string; remedyId: string }) => {
      const rows = await query(
        `INSERT INTO user_favorites (user_id, remedy_id)
         VALUES ($1,$2)
         RETURNING *`,
        [userId, remedyId]
      );
      return rows[0];
    },

    favoriteAilment: async (_: any, { userId, ailmentId }: { userId: string; ailmentId: string }) => {
      const rows = await query(
        `INSERT INTO user_favorites (user_id, ailment_id)
         VALUES ($1,$2)
         RETURNING *`,
        [userId, ailmentId]
      );
      return rows[0];
    },
  },

  // Field resolvers (relations)
  AilmentRemedy: {
    ailment: async (ar: any) => {
      const rows = await query("SELECT * FROM ailments WHERE ailment_id = $1", [ar.ailment_id]);
      return rows[0];
    },
    remedy: async (ar: any) => {
      const rows = await query("SELECT * FROM remedies WHERE remedy_id = $1", [ar.remedy_id]);
      return rows[0];
    },
  },

  Favorite: {
    user: async (fav: any) => {
      const rows = await query("SELECT * FROM users WHERE user_id = $1", [fav.user_id]);
      return rows[0];
    },
    ailment: async (fav: any) => {
      if (!fav.ailment_id) return null;
      const rows = await query("SELECT * FROM ailments WHERE ailment_id = $1", [fav.ailment_id]);
      return rows[0] ?? null;
    },
    remedy: async (fav: any) => {
      if (!fav.remedy_id) return null;
      const rows = await query("SELECT * FROM remedies WHERE remedy_id = $1", [fav.remedy_id]);
      return rows[0] ?? null;
    },
  },

  Ailment: {
    remedies: async (a: any) => {
      return query(
        `SELECT * FROM ailment_remedies
         WHERE ailment_id = $1
         ORDER BY sort_order, ailment_remedy_id`,
        [a.ailment_id]
      );
    },
  },

  User: {
    favorites: async (u: any) => {
      return query("SELECT * FROM user_favorites WHERE user_id = $1 ORDER BY favorite_id", [u.user_id]);
    },
  },
};
