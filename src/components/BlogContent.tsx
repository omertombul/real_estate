"use client";
import { BlogPost } from "@/lib/blog-data";
import { BlogCard } from "@/components/BlogCard";
import { useLanguage } from "@/contexts/LanguageContext";

export function BlogContent({ posts }: { posts: BlogPost[] }) {
  const { t } = useLanguage();
  const tb = t.blog;

  const [featured, ...rest] = posts;

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-5">
            <span className="h-px w-8 bg-primary inline-block" />
            Teresa
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            {tb.heading}
          </h1>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            {tb.sub}
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <BlogCard post={featured} featured />
          </div>
        </section>
      )}

      {/* All posts grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase">
              {tb.allPosts}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
