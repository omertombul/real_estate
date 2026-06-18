import { prisma } from "@/lib/prisma";
import { dbListingToListing } from "@/lib/data";
import { SavedContent } from "@/components/SavedContent";

export const metadata = {
  title: "Saved Listings | Teresa Real Estate · Montréal",
};

export default async function SavedPage() {
  const rows = await prisma.listing.findMany({ orderBy: { listedDate: "desc" } });
  return <SavedContent allListings={rows.map(dbListingToListing)} />;
}
