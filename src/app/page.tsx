import { prisma } from "@/lib/prisma";
import { dbListingToListing } from "@/lib/data";
import { dbPostToBlogPost } from "@/lib/blog-data";
import { HomeContent } from "@/components/HomeContent";

export const metadata = {
  title: "Teresa Cianciullo | Courtière Immobilière · Vendirect.ca · Montréal",
  description:
    "Montréal real estate with Teresa Cianciullo — buying, selling, and investing with a trusted local expert. Commission 1%.",
};

export default async function HomePage() {
  const [listingRows, postRows] = await Promise.all([
    prisma.listing.findMany({
      where: { OR: [{ status: "Active" }, { isNew: true }] },
      orderBy: { listedDate: "desc" },
      take: 6,
    }),
    prisma.blogPost.findMany({ orderBy: { date: "desc" }, take: 3 }),
  ]);

  return (
    <HomeContent
      featuredListings={listingRows.map(dbListingToListing)}
      previewPosts={postRows.map(dbPostToBlogPost)}
    />
  );
}
