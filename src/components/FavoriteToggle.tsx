
"use client";

import { useState } from "react";
import Link from "next/link";

type FavoriteToggleProps = {
  itemId: number;
  kind: "ailment" | "remedy";
  initialFavorite: boolean;
};

export default function FavoriteToggle({  //Aided by ChatGPT
  itemId,
  kind,
  initialFavorite,
}: FavoriteToggleProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [loading, setLoading] = useState(false);

  async function toggleFavorite() {
    setLoading(true);
    try {
      if (!isFavorite) {
        // add favorite
        await fetch("/api/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kind, id: itemId }),
        });
      } else {
        // remove favorite
        await fetch("/api/favorites", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kind, id: itemId }),
        });
      }
      setIsFavorite(!isFavorite);
    } finally {
      setLoading(false);
    }
  }

    if (isFavorite) { //Aided by ChatGPT
  return (
    <Link
      href="/profile/favorites"
      className="inline-flex items-center rounded-full border border-emerald-600 bg-emerald-50 text-emerald-700 px-3 py-1 text-sm font-medium hover:bg-emerald-100"
    >
      <span className="mr-1">❤️</span> 
      Saved (view list)
    </Link>
  );
}

  return (
  <button
    type="button"
    onClick={toggleFavorite}
    disabled={loading}
    className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-gray-300 bg-white text-gray-600 hover:border-emerald-400 disabled:opacity-60"
  >
    <span className="mr-1">🤍</span>
    Add to list
  </button>

    // <button
    //   type="button"
    //   onClick={toggleFavorite}
    //   disabled={loading}
    //   className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
    //     isFavorite
    //       ? "border-emerald-600 bg-emerald-50 text-emerald-700"
    //       : "border-gray-300 bg-white text-gray-600 hover:border-emerald-400"
    //   } disabled:opacity-60`}
    // >
    //   <span className="mr-1">{isFavorite ? "❤️" : "🤍"}</span>
    //   {isFavorite ? "Saved to List" : "Add to list"}
    // </button>
  );
}
