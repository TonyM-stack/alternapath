import BackLink from "@/components/client/BackLink";

export default function LearnTrackingPage() {
  return (
      <>
         <div className="mb-6 text-lg text-slate-600">
            <BackLink label="← Back" />
          </div>

    <article className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-800 tracking-tight">
        Tracking your own patterns
      </h1>

      <p className="text-slate-700">
        Paying attention to when symptoms appear, what triggers them, and what
        seems to help can make it much easier to choose remedies over time.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Simple symptom journaling
        </h2>
        <p className="text-slate-700">
          You don&apos;t need a complicated system. A small notebook, a note
          in your phone, or write notes here in your List. Write down the date, main symptoms, anything that
          made them better or worse, and any remedies you tried.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          Link with your favorites
        </h2>
        <p className="text-slate-700">
          In Alternapath, you can save ailments and remedies in your List and
          add personal notes. Over time, this becomes your own reference for
          what tends to help you.
        </p>
      </section>
    </article>
    </>
  );
}
