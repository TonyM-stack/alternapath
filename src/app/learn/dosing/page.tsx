import BackLink from "@/components/client/BackLink";

export default function LearnDosingPage() {
  return (
      <>
         <div className="mb-6 text-lg text-slate-600">
            <BackLink label="← Back" />
          </div>
    <article className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-800 tracking-tight">
        Dosing & safety
      </h1>

      <p className="text-slate-700">
        Dosing in homeopathy is generally simple, but it helps to follow a few
        basic guidelines and to watch how the person responds.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          General approach
        </h2>
        <p className="text-slate-700">
          A common pattern for short-term issues is to take a dose, then wait
          and observe. If there is clear improvement, you usually let that
          improvement continue without repeating too often.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          When to pause or stop
        </h2>
        <p className="text-slate-700">
          If symptoms improve and then stay better, you can stop. If symptoms
          worsen significantly, feel strange, or new symptoms appear, it&apos;s
          a sign to stop and reassess.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800">
          When self-care is not enough
        </h2>
        <p className="text-slate-700">
          Homeopathy is not a replacement for emergency care. Severe pain,
          difficulty breathing, chest pain, sudden weakness, or any alarming
          symptom should be evaluated promptly by a qualified professional.
        </p>
      </section>
    </article>
    </>
  );
}
