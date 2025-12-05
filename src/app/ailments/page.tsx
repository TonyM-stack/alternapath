
import { pool } from "@/lib/db.server";
import {getAilmentsPaged} from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google"; // ✅ import the font
import BackLink from "@/components/client/BackLink";
import LoginLogoutButton from "@/components/Server/LoginLogoutButton";
import ProfileButton from "@/components/client/ProfileButton";


// type AilmentRow = { ailment_slug: string; ailment_title: string };

export const metadata = { title: "Ailments • Alternapath" };
const exo2 = Exo_2 ({subsets: ["latin"], weight: ["600", "700"],});


export default async function AilmentsPage() { 
  const ailments = await getAilmentsPaged({}); 

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

          <h1 className="mt-8 text-4xl text-blue-400 font-semibold tracking-tight">Ailments</h1>
          
         {/* Individual ailment links */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {ailments.map((a) => (
          <Link
            key={a.ailment_slug}
            href={`/ailments/${a.ailment_slug}`}
            className="rounded-xl border border-slate-200 bg-green-50 p-3 text-center text-sm transition 
            hover:shadow hover:border-green-200 hover:bg-green-100 flex items-center justify-center min-h-[52px]"
          >
            {a.ailment_title}
          </Link>
        ))}
      </div>
    </main>
    </>
  );
}
