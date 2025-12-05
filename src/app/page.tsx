import Image from "next/image";
import Link from "next/link";
import { pool } from "@/lib/db.server";
import { Exo_2 } from "next/font/google"; 
import LoginLogoutButton from "@/components/Server/LoginLogoutButton";
import ProfileButton from "@/components/client/ProfileButton";

const exo2 = Exo_2({ subsets: ["latin"],weight: ["600", "700"],});
export const dynamic = "force-dynamic";

export default async function HomePage() {

    const featuredTitles = [
    "Anxiety/Stress Relief","Sleep/Insomnia","Allergies","Migraine",
    "Indigestion","Muscle Strain","Coughs","Sore Throat",
    "Back Pain","Nausea","Motion Sickness","Skin Rash",
  ];

    const { rows: ailments } = await pool.query<{
    ailment_title: string; ailment_slug: string;
  }>(
    `SELECT ailment_title, ailment_slug
       FROM ailments
      WHERE ailment_title = ANY($1::text[])
      ORDER BY ailment_title`,
    [featuredTitles]
  );

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-slate-300 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center justify-between py-6 lg:py-8">
          <div className="flex items-center gap-3">
            {/* <span className="text-5xl font-semibold tracking-wide text-green-800">
              Alternapath 🌿
            </span> */}
            {/* <span className={`${exo2.className} text-6xl tracking-wide text-green-800 font-bold`}>
                Alternapath 🌿
            </span> */}
              <span className={`${exo2.className} flex items-center gap-3 text-6xl tracking-wide text-green-700 font-bold`}>
                Alternapath 
                    <Image
                         src="/logo-bowl.webp"
                         alt="Alternapath logo"
                         width={80}
                         height={80}
                         className="object-contain w-12 h-auto md:w-16"
                     />
                 </span>
             
          </div>
          <nav className="hidden items-center gap-10 text-lg font-medium md:flex">
            <a className="hover:text-green-700" href="#ailments">Ailments</a>
            <a className="hover:text-green-700" href="#remedies">Remedies</a>
            <a className="hover:text-green-700" href="/learn">Learn</a>
          </nav>

          <div className="flex items-center gap-4">
            <LoginLogoutButton />
            {/* <a href="/login" className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200">Log in</a> */}
            <a href="/signup" className="rounded-lg bg-green-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-green-700">Sign up</a>
            <ProfileButton />
          </div>
        </div>
      </header>

     
      <div className="mx-auto w-full max-w-7xl px-8 sm:px-16 lg:px-28 xl:px-40">
        {/* HERO */}
        <section className="py-14 md:py-20">
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Explore <span className="text-green-700">natural remedies</span> and <span className="text-green-700">homeopathic solutions</span> for common ailments
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
            Alternapath helps you browse ailments, understand traditional indications, and build your personal remedy list.
          </p>

          {/* Search */}
          <form action="/search" className="mt-6">
            <label htmlFor="q" className="sr-only">Search remedies or ailments</label>
            <div className="flex w-full max-w-xl items-stretch overflow-hidden rounded-2xl border border-slate-300 shadow-sm">
              <input
                id="q"
                name="q"
                type="search"
                placeholder="Search ailments, remedies, or keynotes…"
                className="w-full bg-white px-4 py-3 outline-none placeholder:text-slate-400"
              />
              <button type="submit" className="shrink-0 bg-green-600 px-5 py-3 font-medium text-white transition-colors hover:bg-green-700">
                Search
              </button>
            </div>
          </form>

          {/* Quick links */}
          {/* <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <span className="text-slate-400">Common:</span>
            {['Anxiety','Insomnia','Allergies','Migraine'].map((name) => (
              <a key={name} href={`/ailments/${name.toLowerCase()}`} className="rounded-full bg-green-50 px-3 py-1 transition-colors hover:bg-green-100">
                {name}
              </a>
            ))}
          </div> */}
        </section>

        {/* FEATURE TRIO */}
        <section id="learn" className="border-t border-slate-200">
          <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              { title: 'Browse by Ailment', body: 'Begin with your symptoms. See what helps, what does not, and which remedies fit best.', href: '/ailments' },
              { title: 'Explore Remedies', body: 'Organized remedy notes with key points, effects, and common strengths.', href: '/remedies' },
              { title: 'Build Your List', body: 'Star remedies and ailments, add personal notes, and keep everything synced across devices.', href: '/login' },
            ].map((f) => (
              <a key={f.title} href={f.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-green-200 hover:bg-green-50">
                <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.body}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-700">
                  Get started <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* COMMON AILMENTS */}
      <section id="ailments" className="py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Common Ailments</h2>
          <Link href="/ailments" className="text-sm font-medium text-green-700 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {ailments.map(a => (
            <Link
              key={a.ailment_slug}
              href={`/ailments/${a.ailment_slug}`}
              className="rounded-xl border border-slate-200 bg-white p-3 text-center text-sm transition 
              hover:shadow hover:border-green-200 hover:bg-green-50 flex items-center justify-center min-h-[52px]"
            >
              {a.ailment_title}
            </Link>
          ))}
        </div>
      </section>

        {/* CTA */}
        <section className="border-t border-slate-200">
          <div className="py-12 text-center">
            <h3 className="text-xl font-semibold">Ready to explore Alternapath?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600">Create an account to save favorites, notes, and your personal remedy library.</p>
            <div className="mt-6 inline-flex gap-3">
              <a className="rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-green-700" href="/signup">Create account</a>
              <a className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium transition-colors hover:bg-green-100 hover:border-green-200" href="/ailments">Browse first</a>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto w-full max-w-7xl px-8 sm:px-16 lg:px-28 xl:px-40 flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} Alternapath</div>
          {/* <div className="flex items-center gap-4">
            <a href="/about" className="hover:text-slate-700">About</a>
            <a href="/privacy" className="hover:text-slate-700">Privacy</a>
            <a href="/terms" className="hover:text-slate-700">Terms</a>
          </div> */}
        </div>
      </footer>
    </main>
  );
}





