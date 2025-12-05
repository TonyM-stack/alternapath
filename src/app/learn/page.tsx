import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"], weight: ["600", "700"] });

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-slate-50">

   

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        {/* Hero */}
        <section className="mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 tracking-tight">
            Learn how to choose natural remedies with confidence.
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            The Learn section gives you simple, practical guidance on how
            homeopathic and natural remedies work, how to use them safely, and
            how to notice the patterns in your own symptoms.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ailments"
              className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm md:text-base font-medium text-white hover:bg-green-700"
            >
              Browse ailments
            </Link>
            <Link
              href="/remedies"
              className="inline-flex items-center rounded-lg border border-emerald-600 px-4 py-2 text-sm md:text-base font-medium text-emerald-700 hover:bg-emerald-100"
            >
              Explore remedies
            </Link>
          </div>
        </section>

        {/* Grid of learn topics */}
        <section className="space-y-10">
          {/* Row 1 */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card: Homeopathy Basics */}
            <Link href="/learn/basics" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 md:p-6
               transition hover:shadow-md hover:bg-green-100 cursor-pointer">
              <h2 className="text-xl font-semibold text-emerald-800">
                Homeopathy basics
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                What homeopathy is (and isn&apos;t), how it differs from herbal
                medicine, and core ideas like &quot;like cures like&quot; and
                potencies (30C, 200C, etc.).
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>How remedies are prepared</li>
                <li>What potencies mean</li>
                <li>Acute vs. chronic situations</li>
              </ul>
            </Link>

            {/* Card: How to choose a remedy */}
            <Link href="/learn/how-to-choose" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 md:p-6
                transition hover:shadow-md hover:bg-green-100 cursor-pointer">
              <h2 className="text-xl font-semibold text-emerald-800">
                How to choose a remedy
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                A simple step-by-step way to match your unique symptoms with a
                remedy profile instead of just guessing by ailment name.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>What to observe in your symptoms</li>
                <li>Key questions to ask yourself</li>
                <li>Comparing similar remedies</li>
              </ul>
            </Link>
          </div>

          {/* Row 2 */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card: Dosing & safety */}
            <Link href="/learn/dosing" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 md:p-6
                transition hover:shadow-md hover:bg-green-100 cursor-pointer">
              <h2 className="text-xl font-semibold text-emerald-800">
                Dosing & safety
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Simple guidelines on how often to repeat a dose, when to pause,
                and when self-care is not enough and medical attention is
                needed.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>How often to repeat a remedy</li>
                <li>Signs a remedy is helping (or not)</li>
                <li>When to seek urgent care</li>
              </ul>
            </Link>

            {/* Card: Starter home remedy kit */}
            <Link href="/learn/starter-kit" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 md:p-6
                 transition hover:shadow-md hover:bg-green-100 cursor-pointer">
              <h2 className="text-xl font-semibold text-emerald-800">
                Starter home remedy kit
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                A gentle starting set of commonly used remedies many people like
                to keep on hand for bumps, bruises, fevers, and everyday
                upsets.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>Core remedies to consider</li>
                <li>What each one is often used for</li>
                <li>How to store and label them</li>
              </ul>
            </Link>
          </div>

          {/* Row 3 */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card: Tracking your patterns */}
            <Link href="/learn/tracking" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 md:p-6
                 transition hover:shadow-md hover:bg-green-100 cursor-pointer">
              <h2 className="text-xl font-semibold text-emerald-800">
                Tracking your own patterns
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Learn how to notice recurring patterns in your symptoms so you
                can recognize what helps you over time.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>Journaling symptoms and triggers</li>
                <li>What to write down after a remedy</li>
                <li>Using your notes with favorites</li>
              </ul>
            </Link>

            {/* Card: Remedy spotlights */}
            <Link href="/learn/remedy-spotlights" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 md:p-6
                 transition hover:shadow-md hover:bg-green-100 cursor-pointer">
              <h2 className="text-xl font-semibold text-emerald-800">
                Remedy spotlights
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Deeper looks at a few well-loved remedies—what they&apos;re
                often used for, and the &quot;picture&quot; of the person they
                tend to help.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>Arnica (injuries, bruising)</li>
                <li>Belladonna (fevers)</li>
                <li>Nux vomica (digestive upsets)</li>
              </ul>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
