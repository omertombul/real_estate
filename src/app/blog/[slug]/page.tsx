import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { dbPostToBlogPost } from "@/lib/blog-data";
import { BlogPostContent } from "@/components/BlogPostContent";

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({ select: { slug: true } });
  return posts.map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = await prisma.blogPost.findUnique({ where: { slug } });
  if (!row) return {};
  return {
    title: `${row.titleEn} | Teresa Real Estate`,
    description: row.excerptEn,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = await prisma.blogPost.findUnique({ where: { slug } });
  if (!row) notFound();

  const relatedRows = await prisma.blogPost.findMany({
    where: { slug: { not: slug } },
    take: 3,
    orderBy: { date: "desc" },
  });

  return (
    <BlogPostContent
      post={dbPostToBlogPost(row)}
      related={relatedRows.map(dbPostToBlogPost)}
    />
  );
}
