
import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth.server";
import FavoritesClient from "./FavoritesClient";
import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import BackLink from "@/components/client/BackLink";
import LoginLogoutButton from "@/components/Server/LoginLogoutButton";

const exo2 = Exo_2({ subsets: ["latin"], weight: ["600", "700"] });

export default async function FavoritesPage() {
  const user = await getUserFromCookie();

  if (!user) {
    redirect("/login");
  }




  // You could pass user.uid here if you ever need it on the client
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
                    <LoginLogoutButton />
                     {/* <a href="/login" className="rounded-lg border border-slate-300 px-4 py-2 text-lg transition-colors hover:bg-green-100 hover:border-green-200">Log in</a> */}
                     {/* <a href="/signup" className="rounded-lg bg-green-600 px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-green-700">Sign up</a> */}
                     <a href="/profile" className="rounded-lg bg-green-600 px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-green-700">Profile</a>
                   </div>
                 </div>
               </header>
    <div className="mx-auto max-w-3xl px-4 py-12">
         <BackLink label="← Back" />
      <h1 className="text-3xl mt-8 font-bold text-emerald-700 mb-4">
        Your Saved List
      </h1>
      <p className="text-gray-600 mb-8">
        View and add personal notes for your saved ailments and remedies.
      </p>
      <FavoritesClient />
    </div>
    </>
  );
}
