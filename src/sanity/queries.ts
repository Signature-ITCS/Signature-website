import { defineQuery, type PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { sanityFetch } from "./client";

export type SanityImage = SanityImageSource & { alt?: string };

export type Category = { title: string; slug: string; description?: string };

export type Author = { name: string; role?: string; bio?: string; image?: SanityImage };

export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  _updatedAt: string;
  featured?: boolean;
  mainImage?: SanityImage;
  categories: Category[];
  author?: Author;
  readingMinutes: number;
};

export type Post = PostCard & {
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  noIndex?: boolean;
};

// Only documents that are published and have a slug are ever shown.
const visible = `_type == "post" && defined(slug.current) && publishedAt <= now()`;

const cardFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  _updatedAt,
  featured,
  mainImage,
  "categories": coalesce(categories[]->{title, "slug": slug.current, description}, []),
  author->{name, role, bio, image},
  "readingMinutes": round(length(pt::text(body)) / 1100) + 1
`;

const postsQuery = defineQuery(`*[${visible}] | order(publishedAt desc)[0...100]{${cardFields}}`);

const postQuery = defineQuery(
  `*[${visible} && slug.current == $slug][0]{${cardFields}, body, seoTitle, seoDescription, noIndex}`,
);

const relatedQuery = defineQuery(
  `*[${visible} && slug.current != $slug && count((categories[]->slug.current)[@ in $categories]) > 0]
    | order(publishedAt desc)[0...3]{${cardFields}}`,
);

const latestExceptQuery = defineQuery(`*[${visible} && slug.current != $slug] | order(publishedAt desc)[0...3]{${cardFields}}`);

const categoriesQuery = defineQuery(
  `*[_type == "category" && defined(slug.current) && count(*[${visible} && references(^._id)]) > 0]
    | order(title asc){title, "slug": slug.current, description}`,
);

const categoryPostsQuery = defineQuery(
  `*[${visible} && $category in categories[]->slug.current] | order(publishedAt desc)[0...100]{${cardFields}}`,
);

const sitemapQuery = defineQuery(`*[${visible} && noIndex != true]{"slug": slug.current, _updatedAt}`);

export const getPosts = () => sanityFetch<PostCard[]>(postsQuery, {}, []);

export const getPost = (slug: string) => sanityFetch<Post | null>(postQuery, { slug }, null);

export async function getRelatedPosts(slug: string, categories: string[]) {
  const related = categories.length ? await sanityFetch<PostCard[]>(relatedQuery, { slug, categories }, []) : [];
  if (related.length >= 3) return related;
  const latest = await sanityFetch<PostCard[]>(latestExceptQuery, { slug }, []);
  const seen = new Set(related.map((p) => p.slug));
  return [...related, ...latest.filter((p) => !seen.has(p.slug))].slice(0, 3);
}

export const getCategories = () => sanityFetch<Category[]>(categoriesQuery, {}, []);

export const getCategoryPosts = (category: string) => sanityFetch<PostCard[]>(categoryPostsQuery, { category }, []);

export const getSitemapPosts = () => sanityFetch<{ slug: string; _updatedAt: string }[]>(sitemapQuery, {}, []);
