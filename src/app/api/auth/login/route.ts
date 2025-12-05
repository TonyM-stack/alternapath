
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { pool } from "@/lib/db.server";
import { createJWT, setSessionCookie } from "@/lib/auth.server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { emailOrUsername, password } = await req.json();
    if (!emailOrUsername || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    //  match case-insensitively
    const { rows } = await pool.query(
      `SELECT user_id, email, username, password_hash
         FROM users
        WHERE email = $1 OR username = $1
        LIMIT 1`,
      [emailOrUsername]
    );

    const user = rows[0];
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await createJWT({ uid: user.user_id, email: user.email });
    await setSessionCookie(token);

    return NextResponse.json({ user: { user_id: user.user_id, email: user.email, username: user.username } });
  } catch (err) {
    console.error("POST /api/login error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

