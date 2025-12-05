
import { NextResponse } from "next/server";
import { getAilmentBySlugWithRemedies } from "@/lib/data";
import { requireAdmin } from "@/lib/auth.server";
import { updateAilmentAdmin, getAilmentBySlugAdmin, deleteAilmentAdmin } from "@/lib/data";


export const runtime = "nodejs";
// Always fresh DB reads
export const dynamic = "force-dynamic";

type AilmentParams = { slug: string };

export async function GET(
  _req: Request,
  ctx: { params: Promise<AilmentParams> }
) {
  try {
    // params is now a Promise in Next 15
    const { slug: raw } = await ctx.params;

    if (!raw) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const slug = decodeURIComponent(raw);

    const data = await getAilmentBySlugWithRemedies(slug);
    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("GET /api/ailments/[slug] error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  await requireAdmin();

  const { slug } = await params;
  const body = await req.json();

  const updated = await updateAilmentAdmin({
    slug,
    newTitle: body.title,
    newSlug: body.slug,
    isActive: body.isActive,
  });

  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ ailment: updated });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  await requireAdmin();

  const { slug } = await params;
  const deleted = await deleteAilmentAdmin(slug);

  return NextResponse.json({ message: "Ailment deleted" });
}


// import { NextResponse } from "next/server";
// import { pool } from "@/lib/db.server";

// export const runtime = "nodejs";

// export async function GET(
//   _req: Request,
//   { params }: { params: { slug: string } }
// ) {
//   try {
//     const { slug } = params;

//     // Use LEFT JOIN so ailments with no remedies still return (empty remedies array).
//     const sql = `
//       SELECT ar.ailment_remedy_id,
//              a.ailment_id, a.ailment_title,
//              r.remedy_id, r.remedy_name,
//              ar.symptom_description, ar.sort_order
//       FROM ailments a
//       LEFT JOIN ailment_remedies ar ON ar.ailment_id = a.ailment_id
//       LEFT JOIN remedies r          ON r.remedy_id   = ar.remedy_id
//       WHERE a.ailment_slug = $1
//       ORDER BY COALESCE(ar.sort_order, 999), r.remedy_name
//     `;
//     const { rows } = await pool.query(sql, [slug]);

//     // If no ailment at all:
//     if (rows.length === 0) {
//       return NextResponse.json({ error: "Not found" }, { status: 404 });
//     }

//     const { ailment_title } = rows[0];
//     const remedies = rows
//       .filter(r => r.remedy_id) // empty if no matches
//       .map(r => ({
//         remedy_id: r.remedy_id,
//         remedy_name: r.remedy_name,
//         symptom_description: r.symptom_description,
//         sort_order: r.sort_order,
//       }));

//     return NextResponse.json({ ailment_title, remedies }, { status: 200 });
//   } catch (err) {
//     console.error("GET /api/ailments/[slug] error:", err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
