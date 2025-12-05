import Link from "next/link";
import { getUserFromCookie } from "@/lib/auth.server";

export default async function LoginLogoutButton() {
  const user = await getUserFromCookie();

  // Not logged in → show Log in
  if (!user) {
    return (
      <Link
        href="/login"
        className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200"
      >
        Log in
      </Link>
    );
  }

  // Logged in → show Log out
  return (
    <form action="/logout" method="post">
      <button
        type="submit"
        className="rounded-lg bg-red-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-red-700"
      >
        Log out
      </button>
    </form>
  );
}
