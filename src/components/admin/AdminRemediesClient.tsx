"use client";

import { useState } from "react";
import type { AdminRemedy} from "@/lib/data";
import type { Remedy } from "@/lib/data"; 
import { set } from "zod";
import Link from "next/link";

// type Remedy = {
//   remedy_id: number;
//   remedy_name: string;
//   description: string | null;
//   is_active: boolean;
// };

export default function AdminRemediesClient({
  initialRemedies,
}: {
  initialRemedies: AdminRemedy[];
}) {
  const [remedies, setRemedies] = useState<AdminRemedy[]>(initialRemedies);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;

    setSaving(true);
    setSuccessMessage(null); // Clear previous success message
    try {
      const res = await fetch("/api/remedies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName.trim(),
          description: newDescription.trim() || null,
        }),
      });
      let data: any = null;
      try {
        data = await res.json();
      } catch (err) {
        console.error("Failed to parse JSON from /api/remedies:", err);
      }

      if (!res.ok) {
        console.error(
          "Failed to create remedy",
          res.status,
          data?.error ?? data ?? "No JSON body"
        );
        return;
      }
     
      if (data?.remedy) {
        setRemedies((prev) => [...prev, data.remedy].sort((a, b) => a.remedy_name.localeCompare(b.remedy_name)));
        setNewName("");
        setNewDescription("");
        setSuccessMessage(`“${data.remedy.remedy_name}” was added.`);
        setTimeout(() => setSuccessMessage(null), 5000); // Clear message after 5 seconds
      } else {
        console.error(data.error || "Failed to create remedy");
      }
    } finally {
      setSaving(false);
    }
  }

  async function saveRemedy(r: AdminRemedy) {
    const res = await fetch(`/api/remedies/${r.remedy_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: r.remedy_name,
        description: r.description,
        isActive: r.is_active,
      }),
    });
    if (!res.ok) {
      console.error("Failed to update remedy");
    }
  }

  async function toggleActive(r: AdminRemedy) {
    const updated = { ...r, is_active: !r.is_active };
    setRemedies((prev) =>
      prev.map((x) => (x.remedy_id === r.remedy_id ? updated : x))
    );
    await saveRemedy(updated);
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this remedy? This cannot be undone.")) return;
    const res = await fetch(`/api/remedies/${id}`, { method: "DELETE" });
    if (res.ok) {
      setRemedies((prev) => prev.filter((r) => r.remedy_id !== id));
    }
  }

  return (
    <div className="space-y-8">
      {/* Create form */}
      <section className="rounded-xl border bg-white p-4 sm:p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-emerald-800 mb-3">
          Add new remedy
        </h3>
        <form onSubmit={handleCreate} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Arnica"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description/Symptom 
            </label>
            <textarea
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              rows={3}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Main themes or notes."
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Add remedy"}
          </button>
        </form>
          {successMessage && (
          <p className="mt-3 text-sm text-green-600">{successMessage}</p>
        )}
      </section>

      {/* List */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-emerald-800">
          Existing remedies
        </h3>

        <div className="space-y-3">
          {remedies.map((r) => (
            <div
              key={r.remedy_id}
              className="rounded-lg border bg-white p-4 shadow-sm flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3" 
            >
              <div className="flex-1 min-w-0">
                <input
                  className="w-full rounded-md border px-2 py-1 text-sm font-semibold text-emerald-800 mb-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={r.remedy_name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setRemedies((prev) =>
                      prev.map((x) =>
                        x.remedy_id === r.remedy_id
                          ? { ...x, remedy_name: value }
                          : x
                      )
                    );
                  }}
                  onBlur={() =>
                    saveRemedy(
                      remedies.find((x) => x.remedy_id === r.remedy_id)!,
                    )
                  }
                />
              
                <textarea
                  className="w-full rounded-md border px-2 py-1 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  rows={2}
                  value={r.description ?? ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    setRemedies((prev) =>
                      prev.map((x) =>
                        x.remedy_id === r.remedy_id
                          ? { ...x, description: value }
                          : x
                      )
                    );
                  }}
                  onBlur={() =>
                    saveRemedy(
                      remedies.find((x) => x.remedy_id === r.remedy_id)!,
                    )
                  }
                  placeholder="Description..."
                />
                {r.from_symptom_data && (
                  <p className="text-xs text-slate-500">
                     (Loaded from symptom data – editing will save this into the remedy description.)
                 </p>
                )}
               <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                 <span>
                   ID: {r.remedy_id} · {r.is_active ? "Active" : "Inactive"}
                 </span>
                   <Link
                      href={`/remedies/${r.remedy_id}`}
                      className="inline-flex items-center gap-1 text-green-700 text-md hover:underline"
                      title="View remedy"
              >
                 <svg
                   width="14"
                    height="14"
                   fill="currentColor"
                   className="inline-block"
                   viewBox="0 0 16 16" 
                   aria-hidden="true"
                   >    
                 <path d="M4 4h8v8H4z" />
                </svg>
                <span>View Remedy</span>
               </Link>
           </div>
          </div>
              <div className="flex flex-row sm:flex-col gap-2 sm:items-end">
                <button
                  onClick={() => toggleActive(r)}
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    r.is_active
                      ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  }`}
                >
                  {r.is_active ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleDelete(r.remedy_id)}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </button>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
