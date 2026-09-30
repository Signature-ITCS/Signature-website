import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPostSummary as PostCardData } from "@/lib/blog/types";
import { formatDate } from "./format";

function Cover({ post, sizes, className }: { post: PostCardData; sizes: string; className: string }) {
  if (post.cover) {
    return (
      <div className={`relative overflow-hidden bg-brand-50 ${className}`}>
        <Image
          src={post.cover.card}
          alt={post.cover.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }
  // Branded placeholder when a post has no cover image.
  return (
    <div aria-hidden className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-brand-700 ${className}`}>
      <div className="grid-bg absolute inset-0" />
      <span className="relative px-8 text-center font-label text-label text-glow uppercase">{post.categories[0]?.title ?? "Insights"}</span>
    </div>
  );
}

export function PostMeta({ post, dark = false }: { post: PostCardData; dark?: boolean }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-label text-label-sm uppercase ${dark ? "text-muted-light" : "text-muted"}`}>
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      <span aria-hidden>•</span>
      <span className="inline-flex items-center gap-1">
        <Clock aria-hidden className="size-3.5" /> {post.readingMinutes} min read
      </span>
    </p>
  );
}

export function PostCard({ post }: { post: PostCardData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <Cover post={post} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        {post.categories[0] ? (
          <span className="font-label text-label-sm text-brand-600 uppercase">{post.categories[0].title}</span>
        ) : null}
        <h3 className="text-h4 text-ink transition-colors group-hover:text-brand-600">{post.title}</h3>
        <p className="line-clamp-3 text-sm text-muted">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4">
          <PostMeta post={post} />
          <ArrowRight aria-hidden className="size-4 shrink-0 text-brand-600 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function FeaturedPost({ post }: { post: PostCardData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line transition-all duration-300 hover:shadow-card-hover lg:grid-cols-2"
    >
      <Cover post={post} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[16/9] lg:aspect-auto lg:min-h-[22rem]" />
      <div className="flex flex-col justify-center gap-4 p-7 lg:p-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1 font-label text-label-sm text-brand-600 uppercase ring-1 ring-brand-200">
          Featured{post.categories[0] ? ` · ${post.categories[0].title}` : ""}
        </span>
        <h2 className="text-h2-sm text-ink transition-colors group-hover:text-brand-600 lg:text-h2">{post.title}</h2>
        <p className="text-body-lg text-muted">{post.excerpt}</p>
        <PostMeta post={post} />
        <span className="mt-2 inline-flex items-center gap-1.5 font-label text-label-lg text-brand-600">
          Read article <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
