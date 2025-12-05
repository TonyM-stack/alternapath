
import { pool } from "@/lib/db.server";
import Link from "next/link";
import { searchAll } from "@/lib/data";
import BackLink from "@/components/client/BackLink";
import Image from "next/image";
import { Exo_2 } from "next/font/google"; 

const exo2 = Exo_2 ({subsets: ["latin"], weight: ["600", "700"], });

export const metadata = { title: "Search • Alternapath" };

export default async function SearchPage({searchParams,}: {searchParams: Promise<{ q?: string }>;}) 
   {
  // Unwrap Next's promised searchParams
  const { q = "" } = await searchParams;
  const query = q.trim();

  // Default empty results
  let results: Awaited<ReturnType<typeof searchAll>> = {
    ailments: [],
    remedies: [],
  };

  if (query) {
    results = await searchAll(query);
  }

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
                   <Link href="/" className={`${exo2.className} flex items-center gap-3 text-6xl tracking-wide text-green-800 font-bold hover:text-green-500`}>
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
                 <a href="/login" className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200">Log in</a>
                 <a href="/signup" className="rounded-lg bg-green-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-green-700">Sign up</a>
               </div>
             </div>
           </header>
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <BackLink label="← Back"/>
      <h1 className="mt-8 text-3xl font-semibold tracking-tight">Search</h1>
      

      {/* Search bar (GET -> /search?q=...) */}
      <form action="/search" method="get" className="mt-6">
        <label htmlFor="q" className="sr-only">
          Search remedies or ailments
        </label>
        <div className="flex w-full max-w-xl items-stretch overflow-hidden rounded-2xl border border-slate-300 shadow-sm">
          <input
            id="q"
            name="q"
            type="search"
            placeholder="Search ailments, remedies, or keynotes…"
            defaultValue={query}
            className="w-full bg-white px-4 py-3 outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="shrink-0 bg-green-600 px-5 py-3 font-medium text-white transition-colors hover:bg-green-700"
          >
            Search
          </button>
        </div>
      </form>

      {/* Empty-state tip */}
      {!query && (
        <p className="mt-6 text-slate-600">
          Try something like <em>“headache”</em> or <em>“arsenicum”</em>.
        </p>
      )}

      {/* Results */}
      {query && (
        <section className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Ailments bucket */}
          <div>
            <h2 className="text-xl font-semibold">
              Ailments{" "}
              <span className="text-slate-500">({results.ailments.length})</span>
            </h2>
            {results.ailments.length ? (
              <ul className="mt-4 space-y-2">
                {results.ailments.map((a) => (
                  <li
                    key={a.ailment_id}
                    className="rounded-lg border border-slate-200 bg-white p-3 hover:border-green-200 hover:bg-green-50"
                  >
                    <Link
                      href={`/ailments/${a.ailment_slug}`}
                      className="text-green-700 hover:underline"
                    >
                      {a.ailment_title}
                    </Link>
                    <div className="mt-1 text-sm text-slate-600">
                      Click here to view suggested remedies for  this ailment.
                    </div>
                    {/* <div className="mt-1 text-xs text-slate-500">
                      /ailments/{a.ailment_slug}
                    </div> */}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-slate-500">No ailments matched.</p>
            )}
          </div>

          {/* Remedies bucket */}
          <div>
            <h2 className="text-xl font-semibold">
              Remedies{" "}
              <span className="text-slate-500">({results.remedies.length})</span>
            </h2>
            {results.remedies.length ? (
              <ul className="mt-4 space-y-2">
                {results.remedies.map((r) => (
                  <li
                    key={r.remedy_id}
                    className="rounded-lg border border-slate-300 bg-white p-3 hover:border-green-200 hover:bg-green-50"
                  >
                    <Link
                      href={`/remedies/${r.remedy_id}`}
                      className="text-green-700 hover:underline"
                    >
                      {r.remedy_name}
                    </Link>
                    {/* <div className="mt-1 text-xs text-slate-500">
                      /remedies/{r.remedy_id}
                    </div> */}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-slate-500">No remedies matched.</p>
            )}
          </div>
        </section>
      )}
    </main>
    </>
  );
}

//   { searchParams }: { searchParams: Promise<{ q?: string }> }
// ) {
//   const { q: rawQ } = await searchParams;       // ⬅️ unwrap the Promise
//   const q = (rawQ ?? "").trim();

//   if (!q) {
//     return (
//       <main className="mx-auto max-w-3xl px-6 py-12">
//         <h1 className="text-3xl font-semibold tracking-tight">Search</h1>
//         <p className="mt-4 text-slate-600">Type a term above to search ailments or remedies.</p>
//       </main>
//     );
//   }

//   const like = `%${q}%`;

//   const [ailments, remedies] = await Promise.all([
//     pool.query(
//       `SELECT ailment_id, ailment_title, ailment_slug
//          FROM ailments
//         WHERE ailment_title ILIKE $1 OR ailment_slug ILIKE $1
//         ORDER BY ailment_title`,
//       [like]
//     ),
//     pool.query(
//       `SELECT remedy_id, remedy_name
//          FROM remedies
//         WHERE remedy_name ILIKE $1 OR COALESCE(description,'') ILIKE $1
//         ORDER BY remedy_name`,
//       [like]
//     ),
//   ]);

//   return (
//     <main className="mx-auto max-w-4xl px-6 py-12">
//       <h1 className="text-3xl font-semibold tracking-tight">Search results for “{q}”</h1>

//       {/* Ailments */}
//       <section className="mt-10">
//         <h2 className="text-xl font-semibold mb-4">Ailments</h2>
//         {ailments.rows.length > 0 ? (
//           <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {ailments.rows.map((a) => (
//               <li key={a.ailment_id}>
//                 <Link
//                   href={`/ailments/${a.ailment_slug}`}
//                   className="block rounded-lg border border-slate-200 bg-white p-3 text-center text-sm hover:border-green-200 hover:bg-green-50"
//                 >
//                   {a.ailment_title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-slate-500">No ailments found.</p>
//         )}
//       </section>

//       {/* Remedies */}
//       <section className="mt-10">
//         <h2 className="text-xl font-semibold mb-4">Remedies</h2>
//         {remedies.rows.length > 0 ? (
//           <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {remedies.rows.map((r) => (
//               <li key={r.remedy_id}>
//                 <Link
//                   href={`/remedies/${r.remedy_id}`}
//                   className="block rounded-lg border border-slate-200 bg-white p-3 text-center text-sm hover:border-green-200 hover:bg-green-50"
//                 >
//                   {r.remedy_name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-slate-500">No remedies found.</p>
//         )}
//       </section>
//     </main>
//   );
// }
