
"use client";

import { useEffect, useState } from "react";
import { set } from "zod";
import { id } from "zod/locales";




type FavoriteAilment = { //Giving TypeScript shapes for the data
  favorite_id: number;
  note: string | null;
  ailment_id: number;
  ailment_title: string;
  ailment_slug: string;
};

type FavoriteRemedy = {
  favorite_id: number;
  note: string | null;
  remedy_id: number;
  remedy_name: string;
  description?: string | null;
};

export default function FavoritesClient() {
  const [ailments, setAilments] = useState<FavoriteAilment[]>([]);
  const [remedies, setRemedies] = useState<FavoriteRemedy[]>([]);
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetch("/api/favorites");
      const data = await res.json();
      if (res.ok) {
        setAilments(data.ailments ?? []);
        setRemedies(data.remedies ?? []);

        const initialNotes: Record<number, string> = {};
        (data.ailments ?? []).forEach((a: FavoriteAilment) => {
          initialNotes[a.favorite_id] = a.note || "";
        });
        (data.remedies ?? []).forEach((r: FavoriteRemedy) => {
          initialNotes[r.favorite_id] = r.note || "";
        });
        setNotes(initialNotes);
      }
      setLoading(false);
    }
    load();
  }, []);

  async function handleSave(favoriteId: number) {
    const note = notes[favoriteId] ?? "";
    setSavingId(favoriteId);
    try {
      await fetch("/api/favorites", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favoriteId, note }),
      });
    } finally {
      setSavingId(null);
    }
  }

  if (loading) {
    return <p className="text-gray-600">Loading your favorites…</p>;
  }

  const hasAilments = ailments.length > 0;
  const hasRemedies = remedies.length > 0;

  if (!hasAilments && !hasRemedies) {
    return (
      <p className="text-gray-600">
        You have not added any favorites yet. Go to an ailment or remedy page
        and mark it as a favorite to see it here.
      </p>
    );
  }

  async function handleDelete(
    kind: "ailment" | "remedy",
    favoriteId: number,
    id: number
  ) {
    // Update UI
    setAilments((prev) => prev.filter((a) => a.favorite_id !== favoriteId));
    setRemedies((prev) => prev.filter((r) => r.favorite_id !== favoriteId));

    setNotes((prev) => {
        const copy = { ...prev };
        delete copy[favoriteId];
        return copy;
    });

    // Send delete request
    await fetch("/api/favorites", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, id }),
    });
  }

  return (
   
  <div className="space-y-10">
      {/* Favorite Ailments */}
      {hasAilments && (
        <section>
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Saved Ailments
          </h2>
          <ul className="space-y-4">
            {ailments.map((fav) => (
              <li
                key={fav.favorite_id}
                className="rounded-xl border bg-white p-4 shadow-sm"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800">
                      {fav.ailment_title}
                    </h3>
                    {/* <p className="text-xs text-gray-500 mt-1">
                      Slug: <code>{fav.ailment_slug}</code>
                    </p> */}
                  </div>
                   {/* DELETE BUTTON — ADD THIS */}
                  <button
                   onClick={() => handleDelete("ailment", fav.favorite_id, fav.ailment_id)}
                   className="px-3 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                   >
                  Delete
                   </button> 
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your notes
                  </label>
                  <textarea
                    className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={3}
                    value={notes[fav.favorite_id] ?? ""}
                    onChange={(e) =>
                      setNotes((prev) => ({
                        ...prev,
                        [fav.favorite_id]: e.target.value,
                      }))
                    }
                    placeholder="How this ailment presents for you, triggers, patterns, etc."
                  />
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => handleSave(fav.favorite_id)}
                      disabled={savingId === fav.favorite_id}
                      className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
                    >
                      {savingId === fav.favorite_id ? "Saving..." : "Save note"}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
    
      )}

      {/* Favorite Remedies */}
      {hasRemedies && (
        <section>
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Saved Remedies
          </h2>
          <ul className="space-y-4">
            {remedies.map((fav) => (
              <li
                key={fav.favorite_id}
                className="rounded-xl border bg-white p-4 shadow-sm"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800">
                      {fav.remedy_name}
                    </h3>
                  
                    {fav.description && (
                      <p className="mt-1 text-sm text-gray-700 line-clamp-2">
                        {fav.description}
                      </p>
                    )}
                  </div>
                   {/* RIGHT SIDE — DELETE BUTTON */}
                    <button
                   onClick={() => handleDelete("remedy", fav.favorite_id, fav.remedy_id)}
                   className="px-3 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                   >
                  Delete
                   </button> 
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your notes
                  </label>
                  <textarea
                    className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={3}
                    value={notes[fav.favorite_id] ?? ""}
                    onChange={(e) =>
                      setNotes((prev) => ({
                        ...prev,
                        [fav.favorite_id]: e.target.value,
                      }))
                    }
                    placeholder="When you use this, what it helps with, dosing notes, etc."
                  />
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => handleSave(fav.favorite_id)}
                      disabled={savingId === fav.favorite_id}
                      className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
                    >
                      {savingId === fav.favorite_id ? "Saving..." : "Save note"}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
