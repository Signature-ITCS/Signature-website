import "server-only";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import { absoluteUrl } from "@/lib/site";
import { slugify } from "@/components/blog/format";
import type { BlogCategory, BlogPost, BlogPostSummary } from "./types";

/**
 * File-based posts: every `content/blog/*.mdx` file is a post.
 * Files starting with "_" (e.g. _template.mdx) are ignored.
 */
export const MDX_DIR = join(process.cwd(), "content", "blog");

type Frontmatter = {
  title?: string;
  slug?: string;
  excerpt?: string;
  date?: string | Date;
  updated?: string | Date;
  category?: string;
  categories?: string[];
  author?: string;
  authorRole?: string;
  authorBio?: string;
  authorImage?: string;
  cover?: string;
  coverAlt?: string;
  featured?: boolean;
  draft?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  noIndex?: boolean;
};

const toIso = (d: string | Date | undefined) => (d ? new Date(d).toISOString() : undefined);

function readingMinutes(source: string) {
  const words = source.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function toPost(file: string, raw: string): BlogPost | null {
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;
  const slug = fm.slug?.trim() || file.replace(/\.mdx$/, "");
  const publishedAt = toIso(fm.date);

  if (!fm.title || !fm.excerpt || !publishedAt) {
    console.warn(`[blog] Skipping content/blog/${file}: "title", "excerpt" and "date" are required.`);
    return null;
  }
  // Drafts and future-dated posts only show up while developing locally.
  const isLive = !fm.draft && new Date(publishedAt) <= new Date();
  if (!isLive && process.env.NODE_ENV === "production") return null;

  const categoryTitles = fm.categories ?? (fm.category ? [fm.category] : []);
  const categories: BlogCategory[] = categoryTitles.map((title) => ({ title, slug: slugify(title) }));

  return {
    id: `mdx:${file}`,
    source: "mdx",
    title: fm.title,
    slug,
    excerpt: fm.excerpt,
    publishedAt,
    updatedAt: toIso(fm.updated) ?? publishedAt,
    featured: Boolean(fm.featured),
    cover: fm.cover
      ? { card: fm.cover, large: fm.cover, og: absoluteUrl(fm.cover), alt: fm.coverAlt ?? "" }
      : undefined,
    categories,
    author: fm.author ? { name: fm.author, role: fm.authorRole, bio: fm.authorBio, image: fm.authorImage } : undefined,
    readingMinutes: readingMinutes(content),
    seoTitle: fm.seoTitle,
    seoDescription: fm.seoDescription,
    noIndex: Boolean(fm.noIndex),
    body: { type: "mdx", source: content },
  };
}

export async function getMdxPosts(): Promise<BlogPost[]> {
  let files: string[];
  try {
    files = (await readdir(MDX_DIR)).filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));
  } catch {
    return [];
  }
  const posts = await Promise.all(files.map(async (f) => toPost(f, await readFile(join(MDX_DIR, f), "utf8"))));
  return posts.filter((p): p is BlogPost => p !== null);
}

export async function getMdxSummaries(): Promise<BlogPostSummary[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (await getMdxPosts()).map(({ body, seoTitle, seoDescription, noIndex, ...summary }) => summary);
}
