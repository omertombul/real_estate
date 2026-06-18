"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BedDouble, Bath, Maximize2, Car,
  CalendarDays, ArrowLeft, Building2, Receipt,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ShowingScheduler } from "@/components/ShowingScheduler";
import { SaveButton } from "@/components/SaveButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { AGENT, type Listing } from "@/lib/data";

export function ListingDetailContent({ listing }: { listing: Listing }) {
  const { t } = useLanguage();
  const td = t.detail;

  const stats = [
    { icon: BedDouble, label: td.stats.bedrooms, value: listing.beds },
    { icon: Bath, label: td.stats.bathrooms, value: listing.baths },
    { icon: Maximize2, label: td.stats.livingArea, value: `${listing.sqft.toLocaleString()} sq.ft` },
    { icon: Car, label: td.stats.parking, value: listing.parking === 0 ? td.noneParking : listing.parking },
    { icon: Building2, label: td.stats.yearBuilt, value: listing.yearBuilt },
    { icon: Receipt, label: td.stats.taxes, value: `$${listing.taxes.toLocaleString()}` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/listings"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {td.back}
        </Link>
        <span className="text-xs text-muted-foreground">MLS# {listing.mlsNumber}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-2xl overflow-hidden mb-8 aspect-[16/7]">
        <div className="md:col-span-2 relative">
          <Image
            src={listing.images[0]}
            alt={listing.address}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>
        <div className="hidden md:flex flex-col gap-2">
          {listing.images.slice(1, 3).map((img, i) => (
            <div key={i} className="relative flex-1">
              <Image
                src={img}
                alt={`${listing.address} photo ${i + 2}`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="outline">{listing.type}</Badge>
              {listing.isNew && (
                <Badge className="bg-emerald-500 hover:bg-emerald-500 text-white">
                  {t.card.new}
                </Badge>
              )}
              {listing.priceReduced && (
                <Badge className="bg-amber-500 hover:bg-amber-500 text-white">
                  {t.card.priceReduced}
                </Badge>
              )}
              {listing.status === "Pending" && (
                <Badge className="bg-orange-500 hover:bg-orange-500 text-white">
                  {t.card.pending}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-0.5">
              ${listing.price.toLocaleString()}
            </h1>
            {listing.priceReduced && listing.previousPrice && (
              <p className="text-sm text-muted-foreground line-through mb-1">
                Was ${listing.previousPrice.toLocaleString()}
              </p>
            )}
            <p className="text-lg font-medium">{listing.address}</p>
            <p className="text-muted-foreground">
              {listing.neighborhood}, {listing.city}, QC
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center bg-muted/50 rounded-xl py-3 px-2 text-center"
              >
                <Icon className="h-4 w-4 text-primary mb-1" />
                <p className="text-sm font-semibold">{value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {listing.condoFees && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg px-4 py-2.5">
              <Building2 className="h-4 w-4 shrink-0" />
              {td.condoFees}:{" "}
              <strong className="text-foreground">
                ${listing.condoFees}/{td.month}
              </strong>
            </div>
          )}

          <Separator />

          <div>
            <h2 className="text-lg font-semibold mb-3">{td.about}</h2>
            <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
          </div>

          <Separator />

          <div>
            <h2 className="text-lg font-semibold mb-3">{td.features}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {listing.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            {td.listedOn}{" "}
            {new Date(listing.listedDate + "T00:00:00").toLocaleDateString(
              td.locale,
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SaveButton listingId={listing.id} />
          <ShowingScheduler listingAddress={listing.address} />
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 bg-muted">
                  <Image
                    src={AGENT.photo}
                    alt={AGENT.fullName}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <CardTitle className="text-base">{AGENT.fullName}</CardTitle>
                  <p className="text-xs text-muted-foreground">{AGENT.title}</p>
                  <a
                    href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
                    className="text-xs text-primary font-medium hover:underline"
                  >
                    {AGENT.phone}
                  </a>
                </div>
              </div>
            </CardHeader>
            <Separator className="mb-4 mx-6" />
            <CardContent>
              <ContactForm listingAddress={listing.address} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
