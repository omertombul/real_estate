export interface Listing {
  id: string;
  mlsNumber: string;
  address: string;
  neighborhood: string;
  city: string;
  price: number;
  priceReduced: boolean;
  previousPrice?: number;
  type: "Condo" | "House" | "Duplex" | "Townhouse" | "Loft";
  status: "Active" | "Pending";
  isNew: boolean;
  beds: number;
  baths: number;
  sqft: number;
  parking: number;
  yearBuilt: number;
  condoFees?: number;
  taxes: number;
  description: string;
  features: string[];
  images: string[];
  listedDate: string;
}

export const AGENT = {
  fullName: "Teresa Cianciullo",
  title: "Courtière Immobilière · Vendirect.ca",
  phone: "(514) 677-8884",
  email: "teresaimmobilier@gmail.com",
  photo: "/teresa.jpg",
  bio: "With over 12 years of experience in the Montréal real estate market, Teresa brings unmatched local expertise to every transaction. Fluent in English and French.",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dbListingToListing(row: any): Listing {
  return {
    ...row,
    features: JSON.parse(row.features),
    images: JSON.parse(row.images),
    type: row.type as Listing["type"],
    status: row.status as Listing["status"],
  };
}
