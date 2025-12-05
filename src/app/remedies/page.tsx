
import { getRemediesPaged, getRemediesCount } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google"; // ✅ import the font
import BackLink from "@/components/client/BackLink";
import LoginLogoutButton from "@/components/Server/LoginLogoutButton";
import ProfileButton from "@/components/client/ProfileButton";

const exo2 = Exo_2 ({subsets: ["latin"], weight: ["600", "700"], });

const PAGE_SIZE = 60;

export const metadata = { title: "Remedies • Alternapath" };

export default async function RemediesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string }>;
}) {
  const sp = await searchParams;

  const pageParam = sp.page ?? "1";  //Aided by ChatGPT for correct syntax
  const q = sp.q ?? "";

  const currentPage = Math.max(1, parseInt(pageParam, 10) || 1);
  const offset = (currentPage - 1) * PAGE_SIZE;

  const [remedies, totalCount] = await Promise.all([
    getRemediesPaged({ q, limit: PAGE_SIZE, offset }),
    getRemediesCount(q),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <>
    <header className="sticky top-0 z-20 w-full border-b border-slate-300 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
             <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center justify-between py-6 lg:py-8">
               <div className="flex items-center gap-3">
                 {/* <span className="text-5xl font-semibold tracking-wide text-green-800">
                   Alternapath 🌿
                 </span> */}
                 {/* <span className={`${exo2.className} text-6xl tracking-wide text-green-800 font-bold`}>
                     Alternapath 🌿
                 </span> */}
                   <Link href="/" className={`${exo2.className} flex items-center gap-3 text-6xl tracking-wide text-green-700 font-bold hover:text-green-500`}>
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
                 <Link className="hover:text-green-700" href="/ailments">Ailments</Link>
                 <Link className="hover:text-green-700" href="/remedies">Remedies</Link>
                 <Link className="hover:text-green-700" href="/learn">Learn</Link>
               </nav>
     
               <div className="flex items-center gap-4">
                <LoginLogoutButton />
                 {/* <a href="/login" className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200">Log in</a> */}
                 <a href="/signup" className="rounded-lg bg-green-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-green-700">Sign up</a>
                  <ProfileButton />
               </div>
             </div>
           </header>
    <main className="mx-auto w-full max-w-7xl px-8 sm:px-16 lg:px-28 xl:px-40 py-10">
          <BackLink label="← Back" />
    <div className="mt-8 flex items-center justify-center relative w-full">
      <h1 className="text-3xl font-semibold text-blue-400 tracking-tight absolute left-0">Remedies</h1>
       <span className="text-slate-700 text-md"> 
          Page {currentPage} of {totalPages}
        </span>
    </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
        {remedies.map((r) => (
          <Link
            key={r.remedy_id}
            href={`/remedies/${r.remedy_id}`}
            className="inline-flex items-center justify-center px-3 py-2 rounded-xl border border-slate-200 bg-green-50 shadow p-3 text-center 
            text-sm transition hover:shadow hover:border-green-200 hover:bg-green-100 min-h-[100px]"
          >
            {r.remedy_name}
          </Link>
        ))}
      </div>
            {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-4 text-sm">
        <Link
          href={`/remedies?page=${currentPage - 1}${q ? `&q=${q}` : ""}`}
          className={`px-3 py-1 rounded-md border ${
            currentPage <= 1 ? "pointer-events-none opacity-40" : ""
          }`}
        >
          ← Previous
        </Link>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <Link
          href={`/remedies?page=${currentPage + 1}${q ? `&q=${q}` : ""}`}
          className={`px-3 py-1 rounded-md border ${
            currentPage >= totalPages ? "pointer-events-none opacity-40" : ""
          }`}
        >
          Next →
        </Link>
      </div>

    </main>
    </>
  );
}
