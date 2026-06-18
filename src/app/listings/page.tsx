import { prisma } from "@/lib/prisma";
import { dbListingToListing } from "@/lib/data";
import { ListingsClient } from "@/components/ListingsClient";

export const metadata = {
  title: "All Listings | Teresa Real Estate · Montréal",
  description:
    "Browse all active Montréal real estate listings — condos, houses, duplexes, lofts and townhouses across every neighbourhood.",
};

export default async function ListingsPage() {
  const rows = await prisma.listing.findMany({ orderBy: { listedDate: "desc" } });
  const listings = rows.map(dbListingToListing);
  return <ListingsClient listings={listings} />;
}
