
import { NextResponse } from "next/server";
import { getAilmentsPaged, createAilmentAdmin } from "@/lib/data";
import { requireAdmin } from "@/lib/auth.server";

// GET /api/ailments  (list, used by public pages)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") ?? undefined;
    const limit = Number(searchParams.get("limit") ?? 60);
    const offset = Number(searchParams.get("offset") ?? 0);

    const ailments = await getAilmentsPaged({ q, limit, offset });
    return NextResponse.json({ ailments, limit, offset });
  } catch (error) {
    console.error("GET /api/ailments error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/ailments  (create new ailment – admin only)
export async function POST(req: Request) {
  try {
    await requireAdmin();

    const { title, slug } = await req.json();

    if (!title || !slug) {
      return NextResponse.json(
        { error: "Title and slug are required" },
        { status: 400 }
      );
    }

    const ailment = await createAilmentAdmin({
      title: String(title).trim(),
      slug: String(slug).trim(),
    });

    return NextResponse.json({ ailment }, { status: 201 });
  } catch (error) {
    console.error("POST /api/ailments error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// POST /api/ailments  (create new ailment – admin only)
// export async function POST(req: Request) {
//   try {
//     // protect this with admin check
//     await requireAdmin();

//     // read raw body to avoid throwing outside our try/catch
//     const bodyText = await req.text();
//     let body: any;
//     try {
//       body = bodyText ? JSON.parse(bodyText) : {};
//     } catch (e) {
//       console.error("Invalid JSON in POST /api/ailments:", e, bodyText);
//       return NextResponse.json(
//         { error: "Invalid JSON body" },
//         { status: 400 }
//       );
//     }

//     const { title, slug } = body;

//     if (!title || !slug) {
//       return NextResponse.json(
//         { error: "Title and slug are required" },
//         { status: 400 }
//       );
//     }

//     const ailment = await createAilmentAdmin({
//       title: String(title).trim(),
//       slug: String(slug).trim(),
//     });

//     // ✅ ALWAYS return JSON on success
//     return NextResponse.json({ ailment }, { status: 201 });
//   } catch (error: any) {
//     console.error("POST /api/ailments error:", error);

//     // if requireAdmin threw an auth response, we might not get here,
//     // but if we do, make sure it's still JSON:
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
