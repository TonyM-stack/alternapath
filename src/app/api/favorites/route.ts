
import { NextResponse } from "next/server";
import { pool } from "@/lib/db.server";
import { getUserFromCookie } from "@/lib/auth.server";

export const runtime = "nodejs";

// GET: list favorites (ailments + remedies)
export async function GET() {
  const user = await getUserFromCookie();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ailmentsResult = await pool.query(
    `
    SELECT 
      f.favorite_id,
      f.note,
      f.created_at,
      f.updated_at,
      a.ailment_id,
      a.ailment_title,
      a.ailment_slug
    FROM user_favorites f
    JOIN ailments a ON a.ailment_id = f.ailment_id
    WHERE f.user_id = $1
      AND f.ailment_id IS NOT NULL
    ORDER BY a.ailment_title;
    `,
    [user.uid]
  );

  const remediesResult = await pool.query(
    `
    SELECT 
      f.favorite_id,
      f.note,
      f.created_at,
      f.updated_at,
      r.remedy_id,
      r.remedy_name,
      r.description
    FROM user_favorites f
    JOIN remedies r ON r.remedy_id = f.remedy_id
    WHERE f.user_id = $1
      AND f.remedy_id IS NOT NULL
    ORDER BY r.remedy_name;
    `,
    [user.uid]
  );

  return NextResponse.json({
    ailments: ailmentsResult.rows,
    remedies: remediesResult.rows,
  });
}

// PUT: update note for a favorite row
export async function PUT(req: Request) {
  const user = await getUserFromCookie();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { favoriteId, note } = await req.json();
  if (!favoriteId) {
    return NextResponse.json({ error: "Missing favoriteId" }, { status: 400 });
  }

  await pool.query(
    `
    UPDATE user_favorites
       SET note = $2,
           updated_at = NOW()
     WHERE favorite_id = $1
       AND user_id = $3;
    `,
    [favoriteId, note ?? "", user.uid]
  );

  return NextResponse.json({ ok: true });
}

// POST: add a favorite (either ailment or remedy)
export async function POST(req: Request) {
  const user = await getUserFromCookie();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { kind, id } = await req.json();
  if (!kind || !id) {
    return NextResponse.json({ error: "Missing kind or id" }, { status: 400 });
  }

  if (kind !== "ailment" && kind !== "remedy") {
    return NextResponse.json({ error: "Invalid kind" }, { status: 400 });
  }

  if (kind === "ailment") {
    await pool.query(
      `
      INSERT INTO user_favorites (user_id, ailment_id, remedy_id)
      VALUES ($1, $2, NULL)
      ON CONFLICT DO NOTHING;
      `,
      [user.uid, id]
    );
  } else {
    await pool.query(
      `
      INSERT INTO user_favorites (user_id, ailment_id, remedy_id)
      VALUES ($1, NULL, $2)
      ON CONFLICT DO NOTHING;
      `,
      [user.uid, id]
    );
  }

  return NextResponse.json({ ok: true });
}

// DELETE: remove a favorite (either ailment or remedy)
export async function DELETE(req: Request) {
  const user = await getUserFromCookie();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { kind, id } = await req.json();
  if (!kind || !id) {
    return NextResponse.json({ error: "Missing kind or id" }, { status: 400 });
  }

  if (kind !== "ailment" && kind !== "remedy") {
    return NextResponse.json({ error: "Invalid kind" }, { status: 400 });
  }

  if (kind === "ailment") {
    await pool.query(
      `
      DELETE FROM user_favorites
       WHERE user_id = $1
         AND ailment_id = $2;
      `,
      [user.uid, id]
    );
  } else {
    await pool.query(
      `
      DELETE FROM user_favorites
       WHERE user_id = $1
         AND remedy_id = $2;
      `,
      [user.uid, id]
    );
  }

  return NextResponse.json({ ok: true });
}
