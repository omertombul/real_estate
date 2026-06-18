"use client";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSavedListings } from "@/hooks/useSavedListings";
import { useLanguage } from "@/contexts/LanguageContext";

export function SaveButton({ listingId }: { listingId: string }) {
  const { isSaved, toggleSave } = useSavedListings();
  const { t } = useLanguage();
  const saved = isSaved(listingId);

  return (
    <Button
      variant={saved ? "default" : "outline"}
      className="w-full"
      onClick={() => toggleSave(listingId)}
    >
      <Heart className={`h-4 w-4 mr-2 ${saved ? "fill-current" : ""}`} />
      {saved ? t.saveButton.saved : t.saveButton.save}
    </Button>
  );
}
