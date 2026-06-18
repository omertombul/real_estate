"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Search, Key, BadgeCheck, Handshake,
  FileText, Calculator, MapPin, ArrowRight, CheckCircle,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { AGENT } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const BENEFIT_ICONS = [MapPin, Search, Handshake, BadgeCheck];
const STEP_ICONS = [Calculator, FileText, Search, MapPin, Handshake, Key];

export function BuyContent() {
  const { t } = useLanguage();
  const tb = t.buy;

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600&auto=format&fit=crop"
            alt="Luxury Montréal home"
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
              {tb.hero.serviceLabel}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              {tb.hero.line1}<br />
              <span className="text-primary-foreground/80">{tb.hero.lineEm}</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4 max-w-lg">
              <strong className="text-primary-foreground">
                {tb.hero.sub1.split(".")[0]}.
              </strong>{" "}
              {tb.hero.sub1.split(".").slice(1).join(".").trim()}
            </p>
            <p className="text-primary-foreground/70 text-base leading-relaxed mb-10 max-w-lg">
              {tb.hero.sub2}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/listings"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "gap-2 px-6")}
              >
                {tb.hero.cta1} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#contact-buyer"
                className="inline-flex items-center gap-2 h-9 px-6 border border-primary-foreground/30 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                {tb.hero.cta2}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop"
                alt="Happy buyers receiving keys"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background text-foreground shadow-xl px-5 py-4">
              <p className="text-2xl font-bold text-primary leading-none">98%</p>
              <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wide">
                {tb.hero.satisfaction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BUY WITH TERESA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 justify-center text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="h-px w-8 bg-primary inline-block" />
              {tb.why.label}
              <span className="h-px w-8 bg-primary inline-block" />
            </span>
            <h2 className="text-4xl font-bold tracking-tight">{tb.why.heading}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tb.why.benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <div
                  key={b.title}
                  className="bg-background rounded-2xl p-6 border border-border/50 shadow-sm flex flex-col gap-4"
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

      {/* ── THE BUYING PROCESS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 justify-center text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="h-px w-8 bg-primary inline-block" />
              {tb.process.label}
              <span className="h-px w-8 bg-primary inline-block" />
            </span>
            <h2 className="text-4xl font-bold tracking-tight">{tb.process.heading}</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">{tb.process.sub}</p>
          </div>

          <div className="flex flex-col gap-0">
            {tb.process.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={step.title} className="flex gap-6 sm:gap-10 group">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < tb.process.steps.length - 1 && (
                      <div className="w-px flex-1 bg-border my-2" />
                    )}
                  </div>
                  <div className={cn("pb-10", i === tb.process.steps.length - 1 && "pb-0")}>
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

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tb.included.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-primary-foreground/80" />
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact-buyer" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="h-px w-8 bg-primary inline-block" />
              {tb.contact.label}
            </span>
            <h2 className="text-4xl font-bold tracking-tight mb-5">
              {tb.contact.heading1}<br />{tb.contact.heading2}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{tb.contact.sub}</p>
            <div className="flex flex-col gap-3">
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
          </div>

          <div className="bg-background rounded-3xl p-8 shadow-md border border-border/50">
            <p className="font-semibold text-lg mb-1">{tb.contact.formHeading}</p>
            <p className="text-muted-foreground text-sm mb-6">{tb.contact.formSub}</p>
            <ContactForm defaultMessage={tb.contact.defaultMessage} />
          </div>
        </div>
      </section>
    </div>
  );
}
