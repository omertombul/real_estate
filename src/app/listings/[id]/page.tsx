import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { dbListingToListing } from "@/lib/data";
import { ListingDetailContent } from "@/components/ListingDetailContent";

export async function generateStaticParams() {
  const listings = await prisma.listing.findMany({ select: { id: true } });
  return listings.map((l: { id: string }) => ({ id: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = await prisma.listing.findUnique({ where: { id } });
  if (!row) return {};
  return {
    title: `${row.address} | Teresa Real Estate`,
    description: row.description.slice(0, 160),
  };
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = await prisma.listing.findUnique({ where: { id } });
  if (!row) notFound();
  return <ListingDetailContent listing={dbListingToListing(row)} />;
}
