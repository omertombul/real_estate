"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Camera, Globe, TrendingUp, Handshake,
  BarChart3, ClipboardList, Star, ArrowRight, CheckCircle, Phone,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { AGENT } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const BENEFIT_ICONS = [BarChart3, Camera, Globe, Handshake];
const STEP_ICONS = [BarChart3, ClipboardList, Camera, Globe, Handshake, TrendingUp];

const SELLER_TESTIMONIALS = [
  {
    text: "Teresa a vendu notre maison en moins de deux semaines, au prix demandé. Sa stratégie de mise en marché et ses photos professionnelles ont fait toute la différence.",
    author: "Marie & Philippe G.",
    location: "Rosemont, Montréal",
  },
  {
    text: "We were nervous about listing in a competitive market, but Teresa's pricing strategy and negotiation skills got us $40,000 over asking. We couldn't be happier.",
    author: "David & Sarah K.",
    location: "Westmount, Montréal",
  },
];

export function SellContent() {
  const { t } = useLanguage();
  const ts = t.sell;

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=1600&auto=format&fit=crop"
            alt="Beautiful sold property"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <span className="inline-flex items-center gap-2 text-primary-foreground/60 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <span className="h-px w-8 bg-primary-foreground/40 inline-block" />
              {ts.hero.serviceLabel}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              {ts.hero.line1}<br />
              {ts.hero.line2}<br />
              <span className="text-primary-foreground/80">{ts.hero.lineEm}</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4 max-w-lg">
              <strong className="text-primary-foreground">
                {ts.hero.sub1.split(".")[0]}.
              </strong>{" "}
              {ts.hero.sub1.split(".").slice(1).join(".").trim()}
            </p>
            <p className="text-primary-foreground/70 text-base leading-relaxed mb-10 max-w-lg">
              {ts.hero.sub2}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#evaluation-vendeur"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "gap-2 px-6")}
              >
                {ts.hero.cta1} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 h-9 px-6 rounded-lg border border-primary-foreground/30 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {AGENT.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ts.hero.stats.map((s) => (
              <div
                key={s.label}
                className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-2xl p-5"
              >
                <p className="text-3xl font-bold leading-none">
                  {s.value}
                  {s.unit && (
                    <span className="text-lg font-semibold ml-1">{s.unit}</span>
                  )}
                </p>
                <p className="text-primary-foreground/70 text-xs mt-2 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SELL WITH TERESA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 justify-center text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="h-px w-8 bg-primary inline-block" />
              {ts.why.label}
              <span className="h-px w-8 bg-primary inline-block" />
            </span>
            <h2 className="text-4xl font-bold tracking-tight">{ts.why.heading}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ts.why.benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <div
                  key={b.title}
                  className="bg-muted/40 rounded-2xl p-6 border border-border/50 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base mb-1">{b.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SELLING PROCESS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 justify-center text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="h-px w-8 bg-primary inline-block" />
              {ts.process.label}
              <span className="h-px w-8 bg-primary inline-block" />
            </span>
            <h2 className="text-4xl font-bold tracking-tight">{ts.process.heading}</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">{ts.process.sub}</p>
          </div>

          <div className="flex flex-col gap-0">
            {ts.process.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={step.title} className="flex gap-6 sm:gap-10">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < ts.process.steps.length - 1 && (
                      <div className="w-px flex-1 bg-border my-2" />
                    )}
                  </div>
                  <div className={cn("pb-10", i === ts.process.steps.length - 1 && "pb-0")}>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-4 w-4 text-primary" />
                      <p className="font-bold text-base">{step.title}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SELLER TESTIMONIALS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 justify-center text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="h-px w-8 bg-primary inline-block" />
              {ts.testimonials.label}
              <span className="h-px w-8 bg-primary inline-block" />
            </span>
            <h2 className="text-4xl font-bold tracking-tight">{ts.testimonials.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SELLER_TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className="bg-muted/40 rounded-2xl p-7 border border-border/50 flex flex-col gap-5"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{item.author}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-primary-foreground/60 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            {ts.included.label}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ts.included.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-primary-foreground/80" />
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE EVALUATION FORM ── */}
      <section id="evaluation-vendeur" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="h-px w-8 bg-primary inline-block" />
              {ts.evaluation.label}
            </span>
            <h2 className="text-4xl font-bold tracking-tight mb-5">
              {ts.evaluation.heading1}<br />{ts.evaluation.heading2}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{ts.evaluation.sub}</p>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 bg-muted">
                <Image
                  src={AGENT.photo}
                  alt={AGENT.fullName}
                  fill
                  className="object-cover object-top"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-semibold text-sm">{AGENT.fullName}</p>
                <p className="text-xs text-muted-foreground">{AGENT.title}</p>
                <a
                  href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
                  className="text-xs text-primary font-medium hover:underline"
                >
                  {AGENT.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-3xl p-8 shadow-md border border-border/50">
            <p className="font-semibold text-lg mb-1">{ts.evaluation.formHeading}</p>
            <p className="text-muted-foreground text-sm mb-6">{ts.evaluation.formSub}</p>
            <ContactForm defaultMessage={ts.evaluation.defaultMessage} />
          </div>
        </div>
      </section>

      {/* ── CROSS-SELL ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-4">{ts.crossSell.sub}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/buy"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              {ts.crossSell.buyerServices} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/listings"
              className={cn(buttonVariants(), "gap-2")}
            >
              {ts.crossSell.browseListings} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
