import { NextResponse } from "next/server";
import { pool } from "@/lib/db.server";
import bcrypt from "bcryptjs";
import { createJWT, setSessionCookie } from "@/lib/auth.server";

export async function POST(req: Request) {
try {
  const { email, username, password } = await req.json();
  if (!email || !username || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const hash = await bcrypt.hash(password, 12);
  const { rows } = await pool.query(
    `INSERT INTO users (email, username, password_hash)
     VALUES ($1,$2,$3)
     RETURNING user_id, email`,
    [email, username, hash]
  );
  const user = rows[0];
  const token = await createJWT({ uid: user.user_id, email: user.email });
  await setSessionCookie(token);

  return NextResponse.json({ user}, { status: 201 });
} catch (err: any) {

  if (err?.code === "23505") {
    return NextResponse.json({ error: "Email or username already in use" }, { status: 409 });
  }
  console.error("POST /api/auth/signup error:", err);
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
 }
}
