import type { PortableTextBlock } from "next-sanity";

export type BlogSource = "sanity" | "mdx";

export type BlogCategory = { title: string; slug: string; description?: string };

export type BlogAuthor = { name: string; role?: string; bio?: string; image?: string };

export type BlogCover = {
  /** ~1200px wide, used on cards */
  card: string;
  /** ~1600px wide, used at the top of the article */
  large: string;
  /** 1200×630, used for social sharing */
  og: string;
  alt: string;
};

export type BlogPostSummary = {
  id: string;
  source: BlogSource;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  cover?: BlogCover;
  categories: BlogCategory[];
  author?: BlogAuthor;
  readingMinutes: number;
};

export type BlogBody = { type: "sanity"; value: PortableTextBlock[] } | { type: "mdx"; source: string };

export type BlogPost = BlogPostSummary & {
  seoTitle?: string;
  seoDescription?: string;
  noIndex?: boolean;
  body: BlogBody;
};
