import { NextResponse } from "next/server";
import { getRemediesPaged, createRemedyAdmin } from "@/lib/data";
import { requireAdmin } from "@/lib/auth.server";

export async function GET(req: Request) {
try {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? undefined;
  const limit = Number(searchParams.get("limit") ?? 60);
  const offset = Number(searchParams.get("offset") ?? 0);

  const remedies = await getRemediesPaged({ q, limit, offset });
  return NextResponse.json({ remedies, limit, offset });
}
catch (error) {
    console.error("Error in GET /api/remedies:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 }
    );
  }
}


// Create a new remedy (admin only)
export async function POST(req: Request) {
  await requireAdmin();

  const { name, description } = await req.json();
  if (!name || typeof name !== "string") {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const remedy = await createRemedyAdmin({
    name,
    description: description ?? null,
  });

  return NextResponse.json({ remedy });
 }


