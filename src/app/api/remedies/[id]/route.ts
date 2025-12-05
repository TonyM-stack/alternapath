import { NextResponse } from "next/server";
import { getAdminRemedies, updateRemedyAdmin, deleteRemedyAdmin } from "@/lib/data";
import { requireAdmin } from "@/lib/auth.server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const remedy = await getAdminRemedies();

  if (!remedy) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ remedy });
}

// Update remedy (admin only)
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await requireAdmin();
  const { id } = await params;
  const body = await req.json();

  const remedy = await updateRemedyAdmin({
    id: Number(id),
    name: body.name,
    description: body.description,
    isActive: body.isActive,
  });

  return NextResponse.json({ remedy });
}

// Delete / deactivate (admin only)
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await requireAdmin();
  const { id } = await params;

  await deleteRemedyAdmin(Number(id)); // or soft-delete via is_active=false
  return NextResponse.json({ ok: true });
}
