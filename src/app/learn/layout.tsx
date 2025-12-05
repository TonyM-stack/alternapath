import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import LoginLogoutButton from "@/components/Server/LoginLogoutButton";
import ProfileButton from "@/components/client/ProfileButton";


const exo2 = Exo_2({ subsets: ["latin"], weight: ["600", "700"] });

export default function LearnLayout({ children,}: {
  children: React.ReactNode;
}) {


  return (
    <div className="min-h-screen bg-slate-50">

      {/* Shared header for all /learn routes */}
         <header className="sticky top-0 z-20 w-full border-b border-slate-300 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center justify-between py-6 lg:py-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`${exo2.className} flex items-center gap-3 text-4xl md:text-5xl tracking-wide text-green-700 font-bold hover:text-green-500`}
            >
              Alternapath
              <Image
                src="/logo-bowl.webp"
                alt="Alternapath logo"
                width={90}
                height={90}
                className="object-contain w-10 h-auto md:w-14"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-8 text-lg font-medium md:flex">
            <Link className="hover:text-green-700" href="/ailments">
              Ailments
            </Link>
            <Link className="hover:text-green-700" href="/remedies">
              Remedies
            </Link>
            <Link className="text-green-700 font-semibold" href="/learn">
              Learn
            </Link>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
             <LoginLogoutButton />
                {/* <a href="/login" className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200">Log in</a> */}
                <a href="/signup" className="rounded-lg bg-green-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-green-700">Sign up</a>
            <ProfileButton />
            {/* <Link
              href="/login"
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-green-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-green-700"
            >
              Sign up
            </Link> */}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
    
        {children}

        <section className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-600">
            This content is for general education and is not a substitute for
            medical care. If symptoms are severe, sudden, or worrying, please
            seek appropriate medical attention.
          </p>
        </section>
      </main>
    </div>
  );
}
