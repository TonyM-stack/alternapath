"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import BackLink from "@/components/client/BackLink";
import { set } from "zod";
import Link from "next/link";

const exo2 = Exo_2({ subsets: ["latin"], weight: ["600", "700"] });


export default function SignupPage() {
    const [emailOrUsername, setUser ] = useState("");
    const [password, setPass] = useState("");
    const [error, setError ] = useState("");
    const router = useRouter();
    const [showingPassword, setShowingPassword] = useState(false);

async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("null");
    const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailOrUsername, username: emailOrUsername, password }),
    });

    if (res.ok) router.push("/profile");
    else setError((await res.json()).error ?? "Invalid credentials");
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
                   {/* <nav className="hidden items-center gap-10 text-lg font-medium md:flex">
                     <Link className="hover:text-green-700" href="/ailments">Ailments</Link>
                     <Link className="hover:text-green-700" href="/remedies">Remedies</Link>
                     <Link className="hover:text-green-700" href="/learn">Learn</Link>
                   </nav> */}
         
                   <div className="flex items-center gap-4">
                     {/* <a href="/login" className="rounded-lg border border-slate-300 px-3 py-1.5 text-lg transition-colors hover:bg-green-100 hover:border-green-200">Log in</a> */}
                     {/* <a href="/signup" className="rounded-lg bg-green-600 px-3 py-1.5 text-lg font-medium text-white transition-colors hover:bg-green-700">Sign up</a> */}
                   </div>
                 </div>
               </header>

     <main className="mt-16 mx-auto max-w-md p-6">
        <BackLink label="← Back" />
      <h1 className="text-3xl mt-8 text-blue-400 font-semibold">Signup</h1>

      <form onSubmit={onSubmit} className="mt-4 space-y-3">

           {/* Dummy hidden fields to catch browser autofill */}
        <input
          type="text"
          name="username"
          autoComplete="username"
          tabIndex={-1}
          className="hidden"
        />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          tabIndex={-1}
          className="hidden"
        />

        <input className="w-full rounded border border-slate-300 bg-white p-2 focus:border-green-500 focus:ring-1 
            focus:ring-green-500 placeholder:text-slate-400 autofill:bg-white autofill:text-slate-900
             autofill:shadow-[inset_0_0_0_1000px_theme(colors.white)]" placeholder="Email or Username"
          value={emailOrUsername} onChange={e=>setUser(e.target.value)} />

      <div className="relative">
        <input className="w-full rounded border p-2 border-slate-300 bg-white focus:border-green-500
            focus:ring-1 focus:ring-green-500 placeholder:text-slate-400 autofill:bg-white autofill:text-slate-900
             autofill:shadow-[inset_0_0_0_1000px_theme(colors.white)]" 
             type={showingPassword ? "text" : "password"}
             placeholder="Password"
             value={password} 
             onChange={e=>setPass(e.target.value)} 
          />
          <button type="button"
                  onClick={() => setShowingPassword (prev => !prev)}
                  className ="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-green-600 hover:text-green-800 focus:outline-none">
                    {showingPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* <input className="w-full rounded border p-2 border-slate-300 bg-white focus:border-green-500
            focus:ring-1 focus:ring-green-500 placeholder:text-slate-400 autofill:bg-white autofill:text-slate-900
             autofill:shadow-[inset_0_0_0_1000px_theme(colors.white)]" type="password" placeholder="Password"
          value={password} onChange={e=>setPass(e.target.value)} /> */}

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button className="rounded bg-green-600 hover:bg-green-700 px-4 py-2 text-white">Submit</button>
      </form>
    </main>
    </>
 );
}
