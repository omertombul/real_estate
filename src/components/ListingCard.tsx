"use client";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useSavedListings } from "@/hooks/useSavedListings";
import { useLanguage } from "@/contexts/LanguageContext";
import { type Listing } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ListingCard({ listing }: { listing: Listing }) {
  const { isSaved, toggleSave } = useSavedListings();
  const { t } = useLanguage();
  const tc = t.card;
  const saved = isSaved(listing.id);

  return (
    <div className="group">
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4">
        {/* Link covers the full image — sits below the button */}
        <Link href={`/listings/${listing.id}`} className="absolute inset-0 z-0">
          <Image
            src={listing.images[0]}
            alt={listing.address}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5 z-10">
          {listing.isNew && (
            <span className="bg-background text-foreground text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
              {tc.new}
            </span>
          )}
          {listing.priceReduced && (
            <span className="bg-foreground text-background text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
              {tc.priceReduced}
            </span>
          )}
          {listing.status === "Pending" && (
            <span className="bg-foreground/80 text-background text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
              {tc.pending}
            </span>
          )}
        </div>

        {/* Heart button — outside the Link, sits above it */}
        <button
          onClick={() => toggleSave(listing.id)}
          aria-label={saved ? "Unsave" : "Save listing"}
          className="absolute top-3 right-3 z-10 h-8 w-8 bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
        >
          <Heart
            className={cn(
              "h-3.5 w-3.5 transition-colors",
              saved ? "fill-foreground text-foreground" : "text-foreground/50"
            )}
          />
        </button>
      </div>

      {/* Text content */}
      <Link href={`/listings/${listing.id}`} className="block space-y-1">
        <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
          {listing.type} · {listing.neighborhood}
        </span>

        <p className="text-sm font-medium text-foreground leading-snug">
          {listing.address}
        </p>

        <p className="text-xl font-bold tracking-tight text-foreground">
          ${listing.price.toLocaleString()}
          {listing.priceReduced && listing.previousPrice && (
            <span className="ml-2 text-sm font-normal text-muted-foreground line-through">
              ${listing.previousPrice.toLocaleString()}
            </span>
          )}
        </p>

        <p className="text-xs text-muted-foreground">
          {tc.beds(listing.beds)} &nbsp;·&nbsp;
          {tc.baths(listing.baths)} &nbsp;·&nbsp;
          {listing.sqft.toLocaleString()} sq.ft
        </p>
      </Link>
    </div>
  );
}
