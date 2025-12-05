import { NextResponse } from "next/server";
import { getUserFromCookie } from "@/lib/auth.server";

export async function GET() {
  const user = await getUserFromCookie();
  return NextResponse.json({ user: user ?? null });
}
