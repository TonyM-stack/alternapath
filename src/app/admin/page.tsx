
import { requireAdmin } from "@/lib/auth.server";
import { pool } from "@/lib/db.server";
import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import LoginLogoutButton from "@/components/Server/LoginLogoutButton";
import ProfileButton from "@/components/client/ProfileButton";
import AdminQuicklinkCard from "@/components/admin/AdminQuicklinkCard";
import BackLink from "@/components/client/BackLink";

const exo2 = Exo_2 ({subsets: ["latin"], weight: ["600", "700"], });

export default async function AdminHomePage() {
  await requireAdmin();

    const { rows: ailments } = await pool.query( //load ailments for AdminQuicklinkCard to map over
    `SELECT ailment_id, ailment_title
       FROM ailments
      ORDER BY ailment_title`
  );

  const { rows: remedies } = await pool.query(
    `SELECT remedy_id, remedy_name
       FROM remedies
      ORDER BY remedy_name`
  );

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

    <main className="mx-auto max-w-5xl px-4 py-8">
      <section className="space-y-4">
         <BackLink label="← Back"/>
        <h2 className="text-xl md:text-3xl font-semibold mt-8 text-blue-400">Admin Dashboard</h2>
        <p className="text-sm text-slate-600">Choose what you want to manage</p>
              <AdminQuicklinkCard ailments={ailments} remedies={remedies} />
                 {/* Quick nav cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/admin/ailments"
            className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-emerald-300 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-emerald-800">Ailments</h3>
            <p className="mt-1 text-sm text-slate-600">
              View and edit all ailments.
            </p>
          </Link>

          <Link
            href="/admin/remedies"
            className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-emerald-300 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-emerald-800">Remedies</h3>
            <p className="mt-1 text-sm text-slate-600">
              Manage remedies and details.
            </p>
          </Link>
        </div>


        </section>  
    </main>
    </>

  );
}
