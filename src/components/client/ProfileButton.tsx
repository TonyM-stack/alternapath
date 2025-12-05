"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfileButton() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/session"); // <-- You already have this pattern
        const data = await res.json();
        setLoggedIn(!!data?.user); // true if logged in
      } catch {
        setLoggedIn(false);
      }
    }
    check();
  }, []);

  // while loading, render nothing (prevents flicker)
  if (loggedIn === null) return null;

  if (!loggedIn) return null;

  return (
    <Link
      href="/profile"
      title="Profile / settings"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 
      text-sm font-medium text-slate-700 hover:bg-green-50 hover:border-green-300 hover:text-green-700"
    >
      <span className="sr-only">Profile / settings</span>
      <span aria-hidden>👤</span>
    </Link>
  );
}
