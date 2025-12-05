
import { NextResponse } from "next/server";
import { getUserFromCookie } from "@/lib/auth.server";

export const runtime = "nodejs";

export async function GET() {
  const session = await getUserFromCookie(); // { uid, email } | null
  if (!session) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  return NextResponse.json({ session });
}
