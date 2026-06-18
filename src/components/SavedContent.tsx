"use client";
import Link from "next/link";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ListingCard } from "@/components/ListingCard";
import { useSavedListings } from "@/hooks/useSavedListings";
import { useLanguage } from "@/contexts/LanguageContext";
import { Listing } from "@/lib/data";

export function SavedContent({ allListings }: { allListings: Listing[] }) {
  const { savedIds, mounted } = useSavedListings();
  const { t } = useLanguage();
  const ts = t.saved;
  const savedListings = allListings.filter((l) => savedIds.includes(l.id));

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-muted-foreground">{ts.loading}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/listings"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        {ts.back}
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <Heart className="h-6 w-6 text-red-500 fill-red-500" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{ts.heading}</h1>
          <p className="text-muted-foreground text-sm">
            {savedListings.length === 0 ? ts.noSaved : ts.count(savedListings.length)}
          </p>
        </div>
      </div>

      {savedListings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border rounded-2xl bg-muted/20">
          <Heart className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">{ts.emptyTitle}</p>
          <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
            {ts.emptySub}
          </p>
          <Link href="/">
            <Button>{ts.browseCta}</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
