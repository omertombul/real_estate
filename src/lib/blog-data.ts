export type BlogPost = {
  slug: string;
  title: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  body: { en: string[]; fr: string[] };
  category: { en: string; fr: string };
  image: string;
  date: string;
  readTime: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dbPostToBlogPost(row: any): BlogPost {
  return {
    slug: row.slug,
    title: { en: row.titleEn, fr: row.titleFr },
    excerpt: { en: row.excerptEn, fr: row.excerptFr },
    body: { en: JSON.parse(row.bodyEn), fr: JSON.parse(row.bodyFr) },
    category: { en: row.categoryEn, fr: row.categoryFr },
    image: row.image,
    date: row.date,
    readTime: row.readTime,
  };
}
