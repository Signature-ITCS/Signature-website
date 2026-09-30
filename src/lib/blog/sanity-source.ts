import "server-only";
import { urlForImage } from "@/sanity/image";
import {
  getCategories as sanityCategories,
  getPost as sanityPost,
  getPosts as sanityPosts,
  type Author,
  type Post,
  type PostCard,
} from "@/sanity/queries";
import type { BlogAuthor, BlogCategory, BlogPost, BlogPostSummary } from "./types";

function author(a?: Author): BlogAuthor | undefined {
  if (!a) return undefined;
  return {
    name: a.name,
    role: a.role,
    bio: a.bio,
    image: a.image ? urlForImage(a.image).width(160).height(160).url() : undefined,
  };
}

function summary(p: PostCard): BlogPostSummary {
  return {
    id: `sanity:${p._id}`,
    source: "sanity",
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    publishedAt: p.publishedAt,
    updatedAt: p._updatedAt,
    featured: Boolean(p.featured),
    cover: p.mainImage
      ? {
          card: urlForImage(p.mainImage).width(1200).height(675).url(),
          large: urlForImage(p.mainImage).width(1600).height(900).url(),
          og: urlForImage(p.mainImage).width(1200).height(630).url(),
          alt: p.mainImage.alt ?? "",
        }
      : undefined,
    categories: p.categories,
    author: author(p.author),
    readingMinutes: p.readingMinutes,
  };
}

function full(p: Post): BlogPost {
  return {
    ...summary(p),
    seoTitle: p.seoTitle,
    seoDescription: p.seoDescription,
    noIndex: p.noIndex,
    body: { type: "sanity", value: p.body ?? [] },
  };
}

export async function getSanitySummaries() {
  return (await sanityPosts()).map(summary);
}

export async function getSanityPost(slug: string) {
  const post = await sanityPost(slug);
  return post ? full(post) : null;
}

export async function getSanityCategories(): Promise<BlogCategory[]> {
  return sanityCategories();
}
