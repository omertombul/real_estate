"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const { lang, t } = useLanguage();
  const tb = t.blog;

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === "fr" ? "fr-CA" : "en-CA",
    { year: "numeric", month: "long", day: "numeric" }
  );

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-2 bg-card border border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title[lang]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-primary border border-primary/30 px-2.5 py-1 mb-5 self-start">
            {post.category[lang]}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">
            {post.title[lang]}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
            {post.excerpt[lang]}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{formattedDate}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                {tb.readTime(post.readTime)}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-primary group-hover:gap-3 transition-all shrink-0 ml-4">
              {tb.readMore} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-card border border-border/50 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title[lang]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3 block">
          {post.category[lang]}
        </span>
        <h3 className="font-display text-lg font-bold leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
          {post.title[lang]}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
          {post.excerpt[lang]}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground border-t border-border/50 pt-4 mt-auto">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            {tb.readTime(post.readTime)}
          </span>
        </div>
      </div>
    </Link>
  );
}
