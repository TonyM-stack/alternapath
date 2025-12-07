"use client";

import { useState } from "react";
import { set } from "zod";
import Link from "next/link";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import { getUserFromCookie } from "@/lib/auth.server";

const exo2 = Exo_2({ subsets: ["latin"], weight: ["600", "700"] });

type Ailment = {
  ailment_id: number;
  ailment_title: string;
  ailment_slug: string;
  is_active: boolean;
};

export default function AdminAilmentsClient({
  initialAilments,
}: {
  initialAilments: Ailment[];
}) {
  const [ailments, setAilments] = useState<Ailment[]>(initialAilments);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleCreate(e: React.FormEvent) {
  e.preventDefault();
  if (!title.trim() || !slug.trim()) return;

  setSaving(true);
  setSuccessMessage(null); // Clear previous success message
  try {
    const res = await fetch("/api/ailments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title.trim(), slug: slug.trim() }),
    });

    let data: any = null;
    try {
      data = await res.json(); 
    } catch (err) {
      console.error("Failed to parse JSON from /api/ailments:", err);
    }

    if (!res.ok) {
      console.error(
        "Failed to create ailment",
        res.status,
        data?.error ?? data ?? "No JSON body"
      );
      return;
    }

    if (data?.ailment) {
      setAilments((prev) => [...prev, data.ailment].sort((a, b) => a.ailment_title.localeCompare(b.ailment_title)));
      setTitle("");
      setSlug("");
      setSuccessMessage(`“${data.ailment.ailment_title}” was added.`); // Set success message
      setTimeout(() => setSuccessMessage(null), 5000); // Clear message after 5 seconds
    } else {
      console.error("No 'ailment' field in response payload:", data);
    }
  } finally {
    setSaving(false);
  }
}


  async function saveAilment(a: Ailment) {
    const res = await fetch(`/api/ailments/${a.ailment_slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: a.ailment_title,
        slug: a.ailment_slug,
        isActive: a.is_active,
      }),
    });
    if (!res.ok) {
      console.error("Failed to update ailment");
    }
  }

  async function toggleActive(a: Ailment) {
    const updated = { ...a, is_active: !a.is_active };
    setAilments((prev) =>
      prev.map((x) => (x.ailment_id === a.ailment_id ? updated : x))
    );
    await saveAilment(updated);
  }

  async function handleDelete(ailmentId: number) {
    if (!confirm("Delete this ailment? This cannot be undone.")) return;
    const res = await fetch(`/api/ailments/${ailmentId}`, { method: "DELETE" });
    if (res.ok) {
      setAilments((prev) => prev.filter((a) => a.ailment_id !== ailmentId));
    }
  }

  return (
 <main className="mx-auto max-w-5xl px-4 py-8">
    <div className="space-y-8">
      {/* <section className="rounded-xl border bg-white p-4 sm:p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-emerald-800 mb-3">
          Add new ailment
        </h3>
        <form onSubmit={handleCreate} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Title
            </label>
            <input
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Headache"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Slug
            </label>
            <input
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="headache"
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Add ailment"}
          </button>
        </form>
        {successMessage && (
          <p className="mt-3 text-sm text-green-600">{successMessage}</p>
        )}
      </section> */}

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-emerald-800">
          Existing ailments
        </h3>

        <div className="space-y-3">
          {ailments.map((a) => (
            <div
              key={a.ailment_id}
              className="rounded-lg border bg-white p-4 shadow-sm flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3" 
            >
              <div className="flex-1 min-w-0">

                <input
                  className="w-full rounded-md border px-2 py-1 text-sm font-semibold text-emerald-800 mb-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={a.ailment_title}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAilments((prev) =>
                      prev.map((x) =>
                        x.ailment_id === a.ailment_id
                          ? { ...x, ailment_title: value }
                          : x
                      )
                    );
                  }}
                  onBlur={() =>
                    saveAilment(
                      ailments.find((x) => x.ailment_id === a.ailment_id)!,
                    )
                  }
                />
                <input
                  className="w-full rounded-md border px-2 py-1 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={a.ailment_slug}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAilments((prev) =>
                      prev.map((x) =>
                        x.ailment_id === a.ailment_id
                          ? { ...x, ailment_slug: value }
                          : x
                      )
                    );
                  }}
                  onBlur={() =>
                    saveAilment(
                      ailments.find((x) => x.ailment_id === a.ailment_id)!,
                    )
                  }
                />
                <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                 <span> ID: {a.ailment_id} · Slug: {a.ailment_slug} ·{" "}
                  {a.is_active ? "Active" : "Inactive"}
                  </span>
                  <Link
                      href={`/ailments/${a.ailment_slug}`}
                      className="inline-flex items-center gap-1 text-green-700 text-md hover:underline"
                      title="View ailment"
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
                <span>View Ailment</span>
               </Link>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col gap-2 sm:items-end">
                <button
                  onClick={() => toggleActive(a)}
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    a.is_active
                      ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  }`}
                >
                  {a.is_active ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleDelete(a.ailment_id)}
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
    // </main>
  
  );
}
