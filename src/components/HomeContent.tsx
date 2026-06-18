"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ListingCard } from "@/components/ListingCard";
import { BlogCard } from "@/components/BlogCard";
import { ContactForm } from "@/components/ContactForm";
import { Listing, AGENT } from "@/lib/data";
import { BlogPost } from "@/lib/blog-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    id: "1",
    text: "Teresa found us our dream condo in Griffintown in under 3 weeks. Her knowledge of the Montréal market is second to none — she negotiated brilliantly and made the entire process stress-free.",
    author: "Sophie & Marc L.",
    location: "Griffintown",
  },
  {
    id: "2",
    text: "Teresa a géré la vente de notre maison avec un professionnalisme exemplaire. Vendue en 8 jours au-dessus du prix demandé. Nous la recommandons sans hésitation.",
    author: "Jean-François D.",
    location: "Outremont",
  },
  {
    id: "3",
    text: "Being new to Montréal, we needed someone who truly knew the city. Teresa guided us patiently through every step. Her trilingual expertise was invaluable.",
    author: "Priya & Arun M.",
    location: "Plateau-Mont-Royal",
  },
];

export function HomeContent({
  featuredListings,
  previewPosts,
}: {
  featuredListings: Listing[];
  previewPosts: BlogPost[];
}) {
  const { t } = useLanguage();
  const th = t.home;

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-[92vh] min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&auto=format&fit=crop"
          alt="Luxury Montréal home"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-8">
              {th.hero.label}
            </p>
            <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.0] mb-8">
              {th.hero.line1}<br />
              <em className="font-normal italic">{th.hero.lineEm}</em><br />
              {th.hero.line2}
            </h1>
            <p className="text-white/65 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
              {th.hero.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 h-11 px-7 bg-white text-background text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              >
                {th.hero.cta1} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#evaluation"
                className="inline-flex items-center gap-2 h-11 px-7 border border-white/35 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
              >
                {th.hero.cta2}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 px-4 py-2.5">
          <div className="relative h-8 w-8 overflow-hidden">
            <Image
              src={AGENT.photo}
              alt={AGENT.fullName}
              fill
              className="object-cover object-top"
              sizes="32px"
            />
          </div>
          <div className="text-white leading-tight">
            <p className="text-xs font-semibold">{AGENT.fullName}</p>
            <p className="text-[10px] text-white/50">{th.hero.agentTag}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 lg:left-auto lg:right-auto lg:bottom-6 lg:left-6 hidden lg:flex gap-8 bg-black/80 backdrop-blur px-6 py-3">
          {[
            { v: "12+", l: th.hero.years },
            { v: "150+", l: th.hero.clients },
            { v: "$50M+", l: th.hero.sales },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-white text-lg font-bold leading-none">{s.v}</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED LISTINGS ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-3">
                {th.featured.label}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                {th.featured.heading}
              </h2>
            </div>
            <Link
              href="/listings"
              className="hidden sm:flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {th.featured.viewAll} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="mt-10 sm:hidden text-center">
            <Link
              href="/listings"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              {th.featured.viewAllBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[580px] bg-white">
            <Image
              src="/teresa.jpg"
              alt="Teresa Cianciullo — Courtière Immobilière"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
            <p className="text-background/35 text-[10px] tracking-[0.35em] uppercase mb-6">
              {th.about.label}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6">
              {th.about.line1}<br />
              <em className="font-normal italic text-background/75">
                {th.about.lineEm}
              </em><br />
              {th.about.line2}
            </h2>
            <p className="text-background/60 leading-relaxed mb-8 text-sm sm:text-base">
              {AGENT.bio} {th.about.bioSuffix}
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {th.about.credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-background/70">
                  <CheckCircle className="h-4 w-4 shrink-0 text-background/40" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 h-10 px-6 bg-background text-foreground text-xs font-medium tracking-widest uppercase hover:bg-background/90 transition-colors"
              >
                {th.about.browseBtn}
              </Link>
              <a
                href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 h-10 px-6 border border-background/25 text-background text-xs font-medium tracking-widest uppercase hover:bg-background/10 transition-colors"
              >
                {AGENT.phone}
              </a>
            </div>
            <div className="border-t border-background/10 pt-8">
              <Image
                src="/logo-vendirect.jpg"
                alt="Vendirect.ca — agence immobilière"
                width={160}
                height={54}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-3">
              {th.services.label}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              {th.services.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {[
              {
                href: "/buy",
                label: th.services.buy.label,
                tagline: th.services.buy.tagline,
                description: th.services.buy.description,
                img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&auto=format&fit=crop",
              },
              {
                href: "/sell",
                label: th.services.sell.label,
                tagline: th.services.sell.tagline,
                description: th.services.sell.description,
                img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&auto=format&fit=crop",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative bg-background overflow-hidden block"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase mb-1">
                      {s.tagline}
                    </p>
                    <p className="font-display text-white text-2xl font-bold">
                      {s.label}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium group-hover:gap-3 transition-all">
                    {th.services.learnMore} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="font-display text-[80px] sm:text-[120px] leading-none text-muted/30 select-none">
              &ldquo;
            </p>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase -mt-4">
              {th.testimonials.label}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="flex flex-col gap-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {item.text}
                </p>
                <div className="border-t border-border pt-5">
                  <p className="font-semibold text-sm">{item.author}</p>
                  <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-3">
                {th.blog.label}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                {th.blog.heading}
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {th.blog.viewAll} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/blog"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              {th.blog.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EVALUATION CTA ── */}
      <section id="evaluation" className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop"
          alt="Luxury home evaluation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/78" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="text-background">
              <p className="text-background/35 text-[10px] tracking-[0.35em] uppercase mb-6">
                {th.cta.label}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6">
                {th.cta.line1}<br />
                {th.cta.line2}<br />
                <em className="font-normal italic text-background/70">
                  {th.cta.lineEm}
                </em>
              </h2>
              <p className="text-background/60 leading-relaxed mb-10 max-w-md">
                {th.cta.sub}
              </p>
              <div className="flex flex-col gap-3 text-sm text-background/40">
                {th.cta.points.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-px w-4 bg-background/30" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background p-8 lg:p-10">
              <p className="font-display text-xl font-semibold mb-1">
                {th.cta.formHeading}
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                {th.cta.formSub}
              </p>
              <ContactForm defaultMessage={th.cta.defaultMessage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
