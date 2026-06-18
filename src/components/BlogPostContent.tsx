"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { BlogCard } from "@/components/BlogCard";
import { AGENT } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BlogPostContent({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const { lang, t } = useLanguage();
  const tb = t.blog;

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === "fr" ? "fr-CA" : "en-CA",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div>
      {/* Hero image */}
      <div className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title[lang]}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 border border-white/30 px-2.5 py-1 mb-4">
              {post.category[lang]}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title[lang]}
            </h1>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border/50">
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {tb.back}
          </Link>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40 ml-auto" />
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {tb.readTime(post.readTime)}
          </span>
        </div>

        {/* Paragraphs */}
        <div className="flex flex-col gap-6">
          {post.body[lang].map((paragraph, i) => (
            <p
              key={i}
              className={cn(
                "leading-relaxed text-foreground/80",
                i === 0 ? "text-lg font-light" : "text-base"
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author */}
        <div className="mt-14 pt-10 border-t border-border/50 flex flex-wrap items-center gap-5">
          <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0 bg-muted">
            <Image
              src={AGENT.photo}
              alt={AGENT.fullName}
              fill
              className="object-cover object-top"
              sizes="64px"
            />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-0.5">
              {tb.by}
            </p>
            <p className="font-semibold">{AGENT.fullName}</p>
            <p className="text-xs text-muted-foreground">{AGENT.title}</p>
          </div>
          <Link
            href="/#evaluation"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "ml-auto shrink-0"
            )}
          >
            {t.nav.contact}
          </Link>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-10">
            {tb.related}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
