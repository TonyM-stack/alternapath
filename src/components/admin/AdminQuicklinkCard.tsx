"use client";

import { useState } from "react";

type Ailment = { ailment_id: number; ailment_title: string }; //Setting TypeScript shapes for the data
type Remedy = { remedy_id: number; remedy_name: string };

export default function AdminQuicklinkCard({
  ailments,
  remedies,
}: {
  ailments: Ailment[];
  remedies: Remedy[];
}) {
  const [ailmentMode, setAilmentMode] = useState<"existing" | "new">("existing"); //Aided by ChatGPT for correct syntax
  const [remedyMode, setRemedyMode] = useState<"existing" | "new">("existing");

  const [existingAilmentId, setExistingAilmentId] = useState<number | null>(null);
  const [existingRemedyId, setExistingRemedyId] = useState<number | null>(null);

  const [newAilmentTitle, setNewAilmentTitle] = useState("");
  const [newAilmentSlug, setNewAilmentSlug] = useState("");

  const [newRemedyName, setNewRemedyName] = useState("");
  const [newRemedyDescription, setNewRemedyDescription] = useState("");

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [symptomDescription, setSymptomDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const res = await fetch("/api/ailment-remedies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ailmentMode,
        existingAilmentId,
        newAilment: {
          title: newAilmentTitle,
          slug: newAilmentSlug,
        },
        remedyMode,
        existingRemedyId,
        newRemedy: {
          name: newRemedyName,
          description: newRemedyDescription,
        },
        symptomDescription,
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      setMessage(data?.error ?? "Failed to create link");
       } else {
        setMessage("Ailment and remedy linked successfully.");

       // If we just created a new ailment, switch to existing mode and reuse it
      if (ailmentMode === "new" && data?.ailmentId) {
       setAilmentMode("existing");
       setExistingAilmentId(data.ailmentId);
       setNewAilmentTitle("");
       setNewAilmentSlug("");
    }

      // Clear remedy fields so we can add another one
     if (remedyMode === "new") {
       setNewRemedyName("");
       setNewRemedyDescription("");
     } else {
       setExistingRemedyId(null);
     }
   }

     // Keep the ailment so we can add another remedy
    setSymptomDescription("");

//     if (!res.ok) {
//       setMessage(data?.error ?? "Failed to create link");
//     } else {
//       setMessage("Ailment and remedy linked successfully.");
//       // optional: clear fields
//     }

    setSaving(false);
  }

  return (
    <section className="rounded-xl border bg-white p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-emerald-800 mb-3">
        Quick add & link
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        Create a new ailment/remedy or pick existing ones and link them together.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* AILMENT BLOCK */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-800">
              <label htmlFor="admin-ailment-select">Ailment</label>
            </h3>
            <div className="flex gap-3 text-xs">
              <label className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  name="ailmentMode"
                  value="existing"
                  checked={ailmentMode === "existing"}
                  onChange={() => setAilmentMode("existing")}
                />
                Existing
              </label>
              <label className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  name="ailmentMode"
                  value="new"
                  checked={ailmentMode === "new"}
                  onChange={() => setAilmentMode("new")}
                />
                New
              </label>
            </div>
          </div>

          {ailmentMode === "existing" ? (
            <select
              id="admin-ailment-select"
              className="w-full rounded-md border px-3 py-2 text-sm"
              value={existingAilmentId ?? ""}
              onChange={(e) =>
                setExistingAilmentId(
                  e.target.value ? Number(e.target.value) : null
                )
              }
            >
              <option value="">Select an ailment…</option>
              {ailments.map((a) => (
                <option key={a.ailment_id} value={a.ailment_id}>
                  {a.ailment_title}
                </option>
              ))}
            </select>
          ) : (
            <div className="space-y-2">
              <input
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Ailment title (e.g. Headache)"
                value={newAilmentTitle}
                onChange={(e) => setNewAilmentTitle(e.target.value)}
              />
              <input
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Slug (e.g. headache)"
                value={newAilmentSlug}
                onChange={(e) => setNewAilmentSlug(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* REMEDY BLOCK */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-800">
              <label htmlFor="admin-remedy-select">Remedy</label>
            </h3>
            <div className="flex gap-3 text-xs">
              <label className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  name="remedyMode"
                  value="existing"
                  checked={remedyMode === "existing"}
                  onChange={() => setRemedyMode("existing")}
                />
                Existing
              </label>
              <label className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  name="remedyMode"
                  value="new"
                  checked={remedyMode === "new"}
                  onChange={() => setRemedyMode("new")}
                />
                New
              </label>
            </div>
          </div>

          {remedyMode === "existing" ? (
            <select
              id="admin-remedy-select"
              className="w-full rounded-md border px-3 py-2 text-sm"
              value={existingRemedyId ?? ""}
              onChange={(e) =>
                setExistingRemedyId(
                  e.target.value ? Number(e.target.value) : null
                )
              }
            >
              <option value="">Select a remedy…</option>
              {remedies.map((r) => (
                <option key={r.remedy_id} value={r.remedy_id}>
                  {r.remedy_name}
                </option>
              ))}
            </select>
          ) : (
            <div className="space-y-2">
              <input
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Remedy name (e.g. Silica)"
                value={newRemedyName}
                onChange={(e) => setNewRemedyName(e.target.value)}
              />
              <textarea
                className="w-full rounded-md border px-3 py-2 text-sm"
                rows={3}
                placeholder="Remedy description / keynotes (optional)"
                value={newRemedyDescription}
                onChange={(e) => setNewRemedyDescription(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* SYMPTOM DESCRIPTION BLOCK */}
           <div className="space-y-2">
           <h3 className="text-sm font-medium text-slate-800">
            <label htmlFor="symptom-description">Symptom Description</label></h3>
             <textarea
               id="symptom-description"
               className="w-full rounded-md border px-3 py-2 text-sm"
               rows={3}
               placeholder="Describe the symptom this remedy treats for this ailment (optional)"
               value={symptomDescription}
               onChange={(e) => setSymptomDescription(e.target.value)}
             />
           </div>

        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save and link"}
        </button>

        {message && (
          <p className="text-sm mt-2 text-emerald-700">{message}</p>
        )}
      </form>
    </section>
  );
}
