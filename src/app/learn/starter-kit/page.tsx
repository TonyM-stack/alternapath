import BackLink from "@/components/client/BackLink";

export default function LearnStarterKitPage() {
  return (
      <>
         <div className="mb-6 text-lg text-slate-600">
            <BackLink label="← Back" />
          </div>

    <article className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-800 tracking-tight">
        Starter home remedy kit
      </h1>

      <p className="text-slate-700">
        Many people like to keep a small selection of remedies at home for
        everyday minor upsets. This is a general educational list, not a
        personal recommendation.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Examples of commonly used remedies
        </h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>
            <span className="font-medium">Arnica:</span> often used for bumps,
            bruises, and feeling sore after exertion.
          </li>
          <li>
            <span className="font-medium">Aconite:</span> often chosen at the
            very first sign of a sudden illness, especially after a chill or
            shock.
          </li>
          <li>
            <span className="font-medium">Nux vomica:</span> often used for
            digestive upsets, overindulgence, or irritability.
          </li>
          <li>
            <span className="font-medium">Belladonna:</span> sometimes chosen
            for sudden, intense fevers with heat and redness.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Storing your kit
        </h2>
        <p className="text-slate-700">
          Keep remedies in a cool, dry place away from strong odors and direct
          sunlight. Label containers clearly so you can find what you need
          quickly.
        </p>
      </section>
    </article>
    </>
  );
}
