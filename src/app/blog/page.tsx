import { prisma } from "@/lib/prisma";
import { dbPostToBlogPost } from "@/lib/blog-data";
import { BlogContent } from "@/components/BlogContent";

export const metadata = {
  title: "Blog | Teresa Real Estate · Montréal",
  description:
    "Real estate insights, market updates, and expert advice from Teresa — Montréal's trusted real estate broker.",
};

export default async function BlogPage() {
  const rows = await prisma.blogPost.findMany({ orderBy: { date: "desc" } });
  const posts = rows.map(dbPostToBlogPost);
  return <BlogContent posts={posts} />;
}
