import BackLink from "@/components/client/BackLink";

export default function LearnRemedySpotlightsPage() {
  return (
      <>
         <div className="mb-6 text-lg text-slate-600">
            <BackLink label="← Back" />
          </div>

    <article className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-800 tracking-tight">
        Remedy spotlights
      </h1>

      <p className="text-slate-700">
        These brief spotlights describe the general &quot;picture&quot; of a
        few well-known remedies. They are not complete profiles, but they can
        help you get familiar with common themes.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">Arnica</h2>
        <p className="text-slate-700">
          Often associated with bruising, soreness, and the feeling of having
          been &quot;run over.&quot; A person needing Arnica may insist they are
          fine even when they are clearly uncomfortable.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">Belladonna</h2>
        <p className="text-slate-700">
          Frequently linked with sudden, intense states: high heat, redness,
          throbbing sensations, and a tendency to be sensitive to light, noise,
          or touch.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">Nux vomica</h2>
        <p className="text-slate-700">
          Often connected with irritability, overwork, overindulgence, and
          digestive tension. The person may be chilly, impatient, and sensitive
          to noise or interruption.
        </p>
      </section>
    </article>
    </>
  );
}
