import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";


const COOKIE_NAME = "ap_session";
const alg = "HS256";
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

type JWTPayload = { uid: number; email: string };

export async function createJWT(payload: JWTPayload) { //Aided by ChatGPT with .setProtectedHeader
  const exp = process.env.JWT_EXPIRES || "7d";
  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(secret);
}

export async function verifyJWT(token: string) {
  const { payload } = await jwtVerify(token, secret, { algorithms: [alg] });
  return payload as JWTPayload;
}

export async function setSessionCookie(token: string) {
  const c = await cookies();
 
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

export async function clearSessionCookie() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
}

export async function getUserFromCookie() {
  const c = await cookies();
  const token = c.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    return await verifyJWT(token); // { uid, email }
  } catch {
    return null; // expired / tampered
  }
}

const ADMIN_EMAILS = [process.env.ADMIN_EMAIL ?? "you@example.com"];

export async function requireAdmin() {
  const user = await getUserFromCookie();
  if (!user || !ADMIN_EMAILS.includes(user.email)) {
    throw new Error("Unauthorized: admin only");
  }
  return user;
}
