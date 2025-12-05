
import { getRemedyWithAilments } from "@/lib/data";
import Link from "next/link";
import BackLink from "@/components/client/BackLink";
import Image from "next/image";
import { Exo_2 } from "next/font/google";  
import { pool } from "@/lib/db.server";
import { getUserFromCookie } from "@/lib/auth.server";
import FavoriteToggle from "@/components/FavoriteToggle";
import LoginLogoutButton from "@/components/Server/LoginLogoutButton";
import ProfileButton from "@/components/client/ProfileButton";

export const metadata = { title: "Remedy Details • Alternapath" };

const exo2 = Exo_2 ({subsets: ["latin"], weight: ["600", "700"], });



export default async function RemedyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getRemedyWithAilments(id);
  if (!data) return <div className="p-8">Not found.</div>;

    //  get logged-in user
    const user = await getUserFromCookie();


    //  is this ailment already a favorite for this user?
    let isFavorite = false;
    if (user) {
      const favRes = await pool.query(
        `
        SELECT 1
        FROM user_favorites
        WHERE user_id = $1
          AND remedy_id = $2;
        `,
        [user.uid, data.remedy_id] // make sure data includes ailment_id
      );
      const count = favRes.rowCount ?? 0;
         isFavorite = count > 0;
  
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
                 {/* <a href="/login" className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200">Log in</a>*/}
                 <a href="/signup" className="rounded-lg bg-green-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-green-700">Sign up</a>
                  <ProfileButton />
               </div>
             </div>
           </header>
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-4 text-lg">
        {/* <Link href="/remedies" className="text-green-700 hover:underline">← All Remedies</Link> */}
        <BackLink label="← Back"/>
      </div>
      <h1 className="text-3xl text-blue-400 font-semibold tracking-tight">Remedy:</h1>

       {/* Title + Favorite button row */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <h1 className="text-3xl text-green-600 font-semibold tracking-tight">
                  {data.remedy_name}
                </h1>
      
                {user && (
                  <FavoriteToggle
                    itemId={data.remedy_id}
                    kind="remedy"
                    initialFavorite={isFavorite}
                  />
                )}
              </div>
      {/* <h1 className="text-2xl mt-4 text-green-600 font-semibold tracking-tight">{data.remedy_name}</h1> */}

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Related ailments/symptoms</h2>
        {data.ailments.length ? (
          <ul className="space-y-2">
            {data.ailments.map(a => (
              <li key={a.ailment_id} className="rounded-lg border border-slate-200 p-3">
                <div className="font-medium">
                  <Link href={`/ailments/${a.ailment_slug}`} className="text-green-700 hover:underline">
                    {a.ailment_title}
                  </Link>
                </div>
                {a.symptom_description && (
                  <p className="mt-1 text-sm text-slate-600">{a.symptom_description}</p>
                )}
              </li>
            ))}
          </ul>
        ) : <p className="text-slate-500">No linked ailments yet.</p>}
      </section>
    </main>
    </>
  );
}
