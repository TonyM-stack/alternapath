"use client";

import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import { getUserFromCookie } from "@/lib/auth.server";
import { usePathname } from "next/navigation";

const exo2 = Exo_2({ subsets: ["latin"], weight: ["600", "700"] });

export default async function Header() {
  const session = await getUserFromCookie(); // null if not logged in

  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-300 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center justify-between py-6 lg:py-8">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className={`${exo2.className} flex items-center gap-3 text-6xl tracking-wide text-green-700 font-bold hover:text-green-500`}
          >
            Alternapath
            <Image
              src="/logo-bowl.webp"
              alt="Alternapath logo"
              width={90}
              height={90}
              className="object-contain w-12 h-auto md:w-16"
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-10 text-lg font-medium md:flex">
          <Link className="hover:text-green-700" href="/ailments">
            Ailments
          </Link>
          <Link className="hover:text-green-700" href="/remedies">
            Remedies
          </Link>
          <Link className="hover:text-green-700" href="/learn">
            Learn
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {session ? (
            // Small circular profile/settings button
            <Link
              href="/profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-sm font-medium text-slate-700 hover:bg-green-50 hover:border-green-300"
            >
              <span className="sr-only">Profile / settings</span>
              {/* 👤 icon looks nice and tiny */}
              <span aria-hidden>👤</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
