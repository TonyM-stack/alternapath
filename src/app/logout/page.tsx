
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import BackLink from "@/components/client/BackLink";

const exo2 = Exo_2({ subsets: ["latin"], weight: ["600", "700"] });

export default function LogoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // tell server to clear the cookie
      await fetch("/api/auth/logout", { method: "POST" });
      // send user somewhere after logout
      router.replace("/");
    })();
  }, [router]);

  return (
    <>
     
      <header className="sticky top-0 z-20 w-full border-b border-slate-300 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center justify-between py-6 lg:py-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`${exo2.className} flex items-center gap-3 text-6xl tracking-wide text-green-800 font-bold hover:text-green-500`}
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
        </div>
      </header>

      <main className="mt-16 mx-auto max-w-md p-6">
        <h1 className="text-3xl font-semibold mb-4">Logging you out…</h1>
        <p className="text-slate-600 text-sm">
          You’ll be redirected shortly.{" "}
          <button
            type="button"
            className="text-green-700 underline ml-1"
            onClick={() => router.push("/")}
          >
            Go to homepage now
          </button>
        </p>
      </main>
    </>
  );
}
