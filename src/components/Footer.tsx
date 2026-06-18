"use client";
import Image from "next/image";
import Link from "next/link";
import { AGENT } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

const TRUST_LOGOS = [
  { src: "/logo-vendirect.jpg", alt: "Vendirect.ca", width: 140, height: 48 },
  { src: "/logo-oaciq.jpg", alt: "OACIQ", width: 100, height: 48 },
  { src: "/logo-farciq.png", alt: "FARCIQ", width: 100, height: 48 },
  { src: "/logo-realtor.png", alt: "REALTOR.ca", width: 100, height: 48 },
];

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const taglineLines = f.tagline.split("\n");

  return (
    <footer className="bg-card text-foreground/50 mt-0">
      {/* Trust bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
            {TRUST_LOGOS.map((logo) => (
              <div key={logo.alt} className="transition-all duration-300 grayscale opacity-40 hover:grayscale-0 hover:opacity-100">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain h-9 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-display text-foreground text-xl font-semibold mb-1">
              Teresa Cianciullo
            </p>
            <p className="text-sm leading-relaxed">
              {taglineLines[0]}
              <br />
              {taglineLines[1]}
            </p>
          </div>

          <div>
            <p className="text-primary/70 text-xs uppercase tracking-widest mb-3">
              {f.services}
            </p>
            <ul className="text-sm flex flex-col gap-1.5">
              <li>
                <Link href="/buy" className="hover:text-primary transition-colors">
                  {f.buyProperty}
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-primary transition-colors">
                  {f.sellHome}
                </Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-primary transition-colors">
                  {f.browseListings}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-primary/70 text-xs uppercase tracking-widest mb-3">
              {f.contact}
            </p>
            <ul className="text-sm flex flex-col gap-1.5">
              <li>
                <a
                  href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {AGENT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENT.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {AGENT.email}
                </a>
              </li>
              <li>
                <a
                  href="https://teresacianciullo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  teresacianciullo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-xs text-foreground/25">
          {f.rights(new Date().getFullYear())} {f.disclaimer}
        </div>
      </div>
    </footer>
  );
}
