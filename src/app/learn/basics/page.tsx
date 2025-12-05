import BackLink from "@/components/client/BackLink";

export default function LearnBasicsPage() {
  return (
    <>
     <div className="mb-6 text-lg text-slate-600">
        <BackLink label="← Back" />
      </div>

    <article className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-800 tracking-tight">
        Homeopathy basics
      </h1>

      <p className="text-slate-700">
        Homeopathy is a system of medicine that uses very small doses of
        substances to encourage the body&apos;s own healing response. Remedies
        are prepared in a specific way so that only a tiny amount of the
        original substance remains.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          &quot;Like cures like&quot;
        </h2>
        <p className="text-slate-700">
          The core idea is that a substance that can cause a set of symptoms in
          a healthy person may help relieve those same symptoms in someone who is sick. 
          This is called "like cures like". Instead of matching a remedy to a diagnosis, you
          match it to the <span className="font-medium">overall symptom
          picture. Homeopaths believe this resemblance helps the body "recognize" the pattern and react to it.</span>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Potencies (6C, 30C, 200C)
        </h2>
        <p className="text-slate-700">
          Remedies are made through repeated steps of dilution and shaking. A
          6C potency has been diluted and shaken six times, a 30C thirty times,
          and so on. Lower potencies are often used for more local, physical
          issues, and higher potencies are sometimes used for more intense or
          emotional pictures.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Acute vs. chronic situations
        </h2>
        <p className="text-slate-700">
          Many people use homeopathy for short-term issues such as minor
          injuries, colds, or stomach upsets. Long-standing or complex
          conditions usually need the guidance of an experienced practitioner.
        </p>
      </section>
    </article>
    </>
  );
}
