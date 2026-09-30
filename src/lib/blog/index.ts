import "server-only";
import { getMdxPosts, getMdxSummaries } from "./mdx-source";
import { getSitemapPosts as getSanitySitemap } from "@/sanity/queries";
import { getSanityCategories, getSanityPost, getSanitySummaries } from "./sanity-source";
import type { BlogCategory, BlogPost, BlogPostSummary } from "./types";

export type { BlogCategory, BlogPost, BlogPostSummary } from "./types";

const newestFirst = (a: BlogPostSummary, b: BlogPostSummary) => b.publishedAt.localeCompare(a.publishedAt);

/** All published posts from Sanity and MDX files, newest first. An MDX file wins if both use the same slug. */
export async function getAllPosts(): Promise<BlogPostSummary[]> {
  const [mdx, sanity] = await Promise.all([getMdxSummaries(), getSanitySummaries()]);
  const mdxSlugs = new Set(mdx.map((p) => p.slug));
  for (const p of sanity) {
    if (mdxSlugs.has(p.slug)) console.warn(`[blog] Slug "${p.slug}" exists in both Sanity and MDX; showing the MDX file.`);
  }
  return [...mdx, ...sanity.filter((p) => !mdxSlugs.has(p.slug))].sort(newestFirst);
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const mdx = (await getMdxPosts()).find((p) => p.slug === slug);
  return mdx ?? (await getSanityPost(slug));
}

/** Categories that have at least one post, merged by slug (Sanity descriptions win). */
export async function getCategories(): Promise<BlogCategory[]> {
  const [posts, sanityCats] = await Promise.all([getAllPosts(), getSanityCategories()]);
  const bySlug = new Map<string, BlogCategory>();
  for (const c of posts.flatMap((p) => p.categories)) if (!bySlug.has(c.slug)) bySlug.set(c.slug, c);
  for (const c of sanityCats) if (bySlug.has(c.slug)) bySlug.set(c.slug, { ...bySlug.get(c.slug)!, ...c });
  return [...bySlug.values()].sort((a, b) => a.title.localeCompare(b.title));
}

export async function getCategoryPosts(slug: string) {
  return (await getAllPosts()).filter((p) => p.categories.some((c) => c.slug === slug));
}

/** Up to three posts sharing a category, topped up with the latest posts. */
export async function getRelatedPosts(post: BlogPostSummary) {
  const others = (await getAllPosts()).filter((p) => p.slug !== post.slug);
  const cats = new Set(post.categories.map((c) => c.slug));
  const related = others.filter((p) => p.categories.some((c) => cats.has(c.slug)));
  const rest = others.filter((p) => !related.includes(p));
  return [...related, ...rest].slice(0, 3);
}

export async function getSitemapPosts() {
  const [mdx, sanity] = await Promise.all([getMdxPosts(), getSanitySitemap()]);
  const mdxSlugs = new Set(mdx.map((p) => p.slug));
  return [
    ...mdx.filter((p) => !p.noIndex).map((p) => ({ slug: p.slug, updatedAt: p.updatedAt })),
    ...sanity.filter((p) => !mdxSlugs.has(p.slug)).map((p) => ({ slug: p.slug, updatedAt: p._updatedAt })),
  ];
}
