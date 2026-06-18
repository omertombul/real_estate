"use client";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListingCard } from "@/components/ListingCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { type Listing } from "@/lib/data";
import { cn } from "@/lib/utils";

type FilterOption = { label: string; value: string };

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={cn(
              "px-3 py-1 rounded-full text-sm border transition-colors",
              value === opt.value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border bg-background hover:border-primary/50"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ListingsClient({ listings }: { listings: Listing[] }) {
  const { t } = useLanguage();
  const tf = t.listings.filters;

  const TYPES: FilterOption[] = [
    { label: tf.allTypes, value: "All" },
    { label: "Condo", value: "Condo" },
    { label: "House", value: "House" },
    { label: "Duplex", value: "Duplex" },
    { label: "Townhouse", value: "Townhouse" },
    { label: "Loft", value: "Loft" },
  ];

  const PRICES: FilterOption[] = [
    { label: tf.anyPrice, value: "Any" },
    { label: tf.under500, value: "under500" },
    { label: tf.range500to800, value: "500to800" },
    { label: tf.range800to1200, value: "800to1200" },
    { label: tf.over1200, value: "over1200" },
  ];

  const BEDS: FilterOption[] = [
    { label: tf.anyBeds, value: "0" },
    { label: "1+", value: "1" },
    { label: "2+", value: "2" },
    { label: "3+", value: "3" },
    { label: "4+", value: "4" },
  ];

  const STATUS: FilterOption[] = [
    { label: tf.allStatus, value: "All" },
    { label: tf.active, value: "Active" },
    { label: tf.new, value: "New" },
    { label: tf.pending, value: "Pending" },
  ];

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("Any");
  const [bedsFilter, setBedsFilter] = useState("0");
  const [statusFilter, setStatusFilter] = useState("All");

  const activeFilterCount = [
    typeFilter !== "All",
    priceFilter !== "Any",
    bedsFilter !== "0",
    statusFilter !== "All",
  ].filter(Boolean).length;

  const resetFilters = () => {
    setTypeFilter("All");
    setPriceFilter("Any");
    setBedsFilter("0");
    setStatusFilter("All");
    setSearch("");
  };

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (typeFilter !== "All" && l.type !== typeFilter) return false;
      if (statusFilter === "New" && !l.isNew) return false;
      if (statusFilter === "Pending" && l.status !== "Pending") return false;
      if (statusFilter === "Active" && l.status !== "Active" && !l.isNew) return false;
      if (parseInt(bedsFilter) > 0 && l.beds < parseInt(bedsFilter)) return false;
      if (priceFilter === "under500" && l.price >= 500000) return false;
      if (priceFilter === "500to800" && (l.price < 500000 || l.price >= 800000)) return false;
      if (priceFilter === "800to1200" && (l.price < 800000 || l.price >= 1200000)) return false;
      if (priceFilter === "over1200" && l.price < 1200000) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          l.address.toLowerCase().includes(q) ||
          l.neighborhood.toLowerCase().includes(q) ||
          l.type.toLowerCase().includes(q) ||
          l.city.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [listings, search, typeFilter, priceFilter, bedsFilter, statusFilter]);

  const FilterPanelContent = (
    <div className="flex flex-col gap-5">
      <FilterGroup label={tf.typeLabel} options={TYPES} value={typeFilter} onChange={setTypeFilter} />
      <FilterGroup label={tf.priceLabel} options={PRICES} value={priceFilter} onChange={setPriceFilter} />
      <FilterGroup label={tf.bedsLabel} options={BEDS} value={bedsFilter} onChange={setBedsFilter} />
      <FilterGroup label={tf.statusLabel} options={STATUS} value={statusFilter} onChange={setStatusFilter} />
      {activeFilterCount > 0 && (
        <Button variant="outline" size="sm" onClick={resetFilters}>
          <X className="h-3.5 w-3.5 mr-1" /> {tf.clearAll}
        </Button>
      )}
    </div>
  );

  return (
    <div>
      <section className="border-b py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-3">
            Teresa · Montréal
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-0 justify-between mb-8">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              {t.listings.heading}
            </h1>
            <div className="relative max-w-xs w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                placeholder={t.listings.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 h-9 text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6 gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground text-base">
              {filtered.length}
            </span>{" "}
            {t.listings.propertyCount(filtered.length).replace(/^\d+ /, "")}
          </p>

          <div className="hidden md:flex items-center gap-3 flex-wrap">
            {[
              { label: tf.typeHeader, options: TYPES, value: typeFilter, onChange: setTypeFilter },
              { label: tf.priceHeader, options: PRICES, value: priceFilter, onChange: setPriceFilter },
              { label: tf.bedsHeader, options: BEDS, value: bedsFilter, onChange: setBedsFilter },
              { label: tf.statusHeader, options: STATUS, value: statusFilter, onChange: setStatusFilter },
            ].map((f) => (
              <select
                key={f.label}
                value={f.value}
                onChange={(e) => f.onChange(e.target.value)}
                className="h-9 px-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
              >
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            ))}
            {activeFilterCount > 0 && (
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                <X className="h-3.5 w-3.5 mr-1" />
                {tf.clear}
              </Button>
            )}
          </div>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="sm" className="md:hidden" />}>
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {tf.filtersBtn}
              {activeFilterCount > 0 && (
                <Badge className="ml-2 h-4 text-[10px] px-1 py-0 bg-primary">
                  {activeFilterCount}
                </Badge>
              )}
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-2xl">
              <SheetHeader className="mb-4">
                <SheetTitle>{tf.filterTitle}</SheetTitle>
              </SheetHeader>
              {FilterPanelContent}
            </SheetContent>
          </Sheet>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">🏠</p>
            <p className="text-lg font-semibold mb-2">{t.listings.noResults}</p>
            <p className="text-muted-foreground text-sm mb-6">{t.listings.noResultsSub}</p>
            <Button variant="outline" onClick={resetFilters}>
              {t.listings.resetFilters}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
