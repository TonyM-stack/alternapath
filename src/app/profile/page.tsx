
import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth.server";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import Link from "next/link";
import BackLink from "@/components/client/BackLink";

const exo2 = Exo_2({ subsets: ["latin"], weight: ["600", "700"] });

export default async function ProfilePage() {
  const session = await getUserFromCookie();
  if (!session) redirect("/login");

    // Admin check
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const isAdmin = session.email === ADMIN_EMAIL;

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
                     {/* <a href="/login" className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200">Log in</a> */}
                     {/* <a href="/signup" className="rounded-lg bg-green-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-green-700">Sign up</a> */}
                   </div>
                 </div>
               </header>

    <main className="mx-auto max-w-2xl p-8">
      <BackLink label="← Back" />
      <h1 className="text-2xl mt-8 text-blue-400 font-semibold">Your profile</h1>
      <p className="mt-2 text-slate-700">User ID: {session.uid}</p>
      <p className="text-slate-700">Email or Username: {session.email}</p>

      <Link href="/profile/favorites" className="inline-block mt-4 text-xl text-green-600 hover:underline">
        View your list of ailments/remedies →
      </Link>
    
      <form action="/logout" method="post" className="mt-6">
        <button className="bg-red-500 text-white rounded border px-4 py-2">Log out</button>
      </form>

         {isAdmin && (
          <a
            href="/admin"
            className="inline-block rounded-lg bg-blue-600 mt-8 px-4 py-2 text-white hover:bg-blue-700"
          >
            Admin Dashboard
          </a>
        )}
      
    </main>
    </>
  );
}

