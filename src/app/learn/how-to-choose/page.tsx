import BackLink from "@/components/client/BackLink";

export default function LearnHowToChoosePage() {
  return (
      <>
         <div className="mb-6 text-lg text-slate-600">
            <BackLink label="← Back" />
          </div>

    <article className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-800 tracking-tight">
        How to choose a remedy
      </h1>

      <p className="text-slate-700">
        Instead of picking a remedy just by the name of an ailment, you look at
        the specific way the symptoms show up for you. This is often called the
        remedy &quot;picture&quot;.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Step 1: Observe what is most characteristic
        </h2>
        <p className="text-slate-700">
          Notice what stands out. Is the person restless or very still? Thirsty
          or not thirsty? Better with warmth or cold? These standout features
          often point more clearly to a remedy than the diagnosis alone.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Step 2: Check modalities
        </h2>
        <p className="text-slate-700">
          Modalities are things that make the symptoms better or worse: time of
          day, position, temperature, movement, food, and so on. Matching these
          to a remedy description can narrow the options quickly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Step 3: Compare two or three remedies
        </h2>
        <p className="text-slate-700">
          Once you&apos;ve found a few possible remedies in Alternapath, read
          their profiles side by side. Choose the one that best matches the
          whole picture, not just one symptom.
        </p>
      </section>
    </article>
    </>
  );
}
