"use client";
import { useState, useEffect, useCallback } from "react";

export function useSavedListings() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("teresa-saved-listings");
      if (stored) setSavedIds(JSON.parse(stored));
    } catch {}
  }, []);

  const toggleSave = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id];
      localStorage.setItem("teresa-saved-listings", JSON.stringify(next));
      return next;
    });
  }, []);

  const isSaved = useCallback(
    (id: string) => savedIds.includes(id),
    [savedIds]
  );

  return { savedIds, toggleSave, isSaved, mounted };
}
