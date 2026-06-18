"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useSavedListings } from "@/hooks/useSavedListings";
import { useLanguage } from "@/contexts/LanguageContext";
import { AGENT } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { savedIds, mounted } = useSavedListings();
  const { lang, setLang, t } = useLanguage();

  const NAV_LINKS = [
    { href: "/listings", label: t.nav.listings },
    { href: "/buy", label: t.nav.buy },
    { href: "/sell", label: t.nav.sell },
    { href: "/blog", label: t.nav.blog },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const LangToggle = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center border border-border/60", className)}>
      <button
        onClick={() => setLang("fr")}
        className={cn(
          "px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors",
          lang === "fr"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        FR
      </button>
      <div className="w-px h-3.5 bg-border/60" />
      <button
        onClick={() => setLang("en")}
        className={cn(
          "px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors",
          lang === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden shrink-0 ring-1 ring-border/60">
              <Image
                src="/teresa.jpg"
                alt="Teresa Cianciullo"
                fill
                className="object-cover object-top"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Teresa
              </span>
              <span className="text-[10px] text-primary tracking-[0.2em] uppercase">
                {t.nav.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-medium tracking-[0.15em] uppercase transition-colors",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/saved"
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium tracking-[0.15em] uppercase transition-colors",
                isActive("/saved")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Heart
                className={cn(
                  "h-3.5 w-3.5",
                  mounted && savedIds.length > 0 && "fill-current text-foreground"
                )}
              />
              {t.nav.saved}
              {mounted && savedIds.length > 0 && (
                <Badge className="h-4 text-[9px] px-1 py-0 rounded-full bg-foreground text-background min-w-4 flex items-center justify-center">
                  {savedIds.length}
                </Badge>
              )}
            </Link>

            <LangToggle />

            <a
              href="/#evaluation"
              className="text-xs font-medium tracking-[0.15em] uppercase border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <LangToggle />
            <Sheet>
              <SheetTrigger render={<button className="p-2 -mr-2 text-foreground" aria-label="Menu" />}>
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-background">
                <div className="mt-10 flex flex-col gap-6 px-2">
                  <Link href="/" className="font-display text-base font-semibold">
                    {t.nav.home}
                  </Link>
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm uppercase tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/saved"
                    className="flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-muted-foreground"
                  >
                    <Heart className="h-4 w-4" />
                    {t.nav.saved}
                    {mounted && savedIds.length > 0 && (
                      <Badge className="bg-foreground text-background text-[9px] px-1.5">
                        {savedIds.length}
                      </Badge>
                    )}
                  </Link>
                  <div className="pt-4 border-t">
                    <a
                      href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {AGENT.phone}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
