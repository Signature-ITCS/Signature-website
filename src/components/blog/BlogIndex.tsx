import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import type { BlogCategory as Category, BlogPostSummary as PostCardData } from "@/lib/blog/types";
import { FeaturedPost, PostCard } from "./PostCard";

export function CategoryNav({ categories, active }: { categories: Category[]; active?: string }) {
  if (categories.length === 0) return null;
  const chip = (isActive: boolean) =>
    `inline-flex rounded-full px-4 py-2 font-label text-label-lg transition-colors ring-1 ${
      isActive ? "bg-white text-ink ring-white" : "bg-white/[0.06] text-white ring-white/15 hover:bg-white/[0.12] hover:ring-cyan"
    }`;
  return (
    <nav aria-label="Blog categories" className="flex flex-wrap gap-2.5 pt-2">
      <Link href="/blog" className={chip(!active)} aria-current={!active ? "page" : undefined}>
        All articles
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/blog/category/${c.slug}`}
          className={chip(active === c.slug)}
          aria-current={active === c.slug ? "page" : undefined}
        >
          {c.title}
        </Link>
      ))}
    </nav>
  );
}

export function PostGrid({ posts, featureFirst = false }: { posts: PostCardData[]; featureFirst?: boolean }) {
  if (posts.length === 0) return <EmptyBlog />;
  const featured = featureFirst ? (posts.find((p) => p.featured) ?? posts[0]) : undefined;
  const rest = featured ? posts.filter((p) => p.id !== featured.id) : posts;
  return (
    <div className="flex flex-col gap-10">
      {featured ? <FeaturedPost post={featured} /> : null}
      {rest.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function EmptyBlog() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl bg-white p-10 text-center shadow-card ring-1 ring-line lg:p-14">
      <span className="flex size-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <PenLine aria-hidden className="size-7" />
      </span>
      <h2 className="text-h2-sm text-ink">Fresh insights are on the way</h2>
      <p className="text-muted">
        Our team is preparing practical guides on SEO, paid media, web development, automation and customer operations. In the meantime, explore our services or get in touch.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <ButtonLink href="/services">
          Explore services <ArrowRight aria-hidden className="size-4" />
        </ButtonLink>
        <ButtonLink href="/contact" variant="light">
          Contact us
        </ButtonLink>
      </div>
    </div>
  );
}
