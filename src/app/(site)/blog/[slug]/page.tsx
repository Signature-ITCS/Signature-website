import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArticleBody, extractHeadings } from "@/components/blog/ArticleBody";
import { MdxBody, extractMdxHeadings } from "@/components/blog/MdxBody";
import { PostCard, PostMeta } from "@/components/blog/PostCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getAllPosts, getPost, getRelatedPosts } from "@/lib/blog";
import { blogPostingJsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;
  const base = pageMetadata({ title, description, path: `/blog/${slug}`, type: "article", absoluteTitle: Boolean(post.seoTitle) });
  const image = post.cover ? { url: post.cover.og, width: 1200, height: 630, alt: post.cover.alt || post.title } : undefined;
  return {
    ...base,
    ...(post.noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.author ? [post.author.name] : undefined,
      section: post.categories[0]?.title,
      ...(image ? { images: [image] } : {}),
    },
    twitter: { ...base.twitter, ...(image ? { images: [image.url] } : {}) },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post);
  const headings = post.body.type === "mdx" ? extractMdxHeadings(post.body.source) : extractHeadings(post.body.value);
  const url = absoluteUrl(`/blog/${slug}`);
  const share = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}` },
  ];
  const cover = post.cover?.large;

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          description: post.seoDescription ?? post.excerpt,
          path: `/blog/${slug}`,
          image: post.cover?.og,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          authorName: post.author?.name,
          section: post.categories[0]?.title,
        })}
      />

      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 size-[40rem] glow-blue" />
        <div className="container-page relative flex max-w-6xl flex-col gap-6">
          <Breadcrumbs
            items={[
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${slug}` },
            ]}
          />
          {post.categories.length > 0 ? (
            <ul className="flex flex-wrap gap-2 pt-2">
              {post.categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/blog/category/${c.slug}`}
                    className="inline-flex rounded-full bg-white/[0.06] px-3 py-1 font-label text-label-sm text-glow uppercase ring-1 ring-white/15 hover:ring-cyan"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <h1 className="text-display-sm text-balance text-white lg:text-[3.5rem] lg:leading-[1.12]">{post.title}</h1>
          <p className="max-w-3xl text-body-lg text-muted-light lg:text-body-xl">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {post.author ? (
              <div className="flex items-center gap-3">
                {post.author.image ? (
                  <Image
                    src={post.author.image}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover ring-2 ring-white/20"
                  />
                ) : (
                  <span aria-hidden className="flex size-11 items-center justify-center rounded-full bg-brand-600 font-label text-sm font-bold text-white">
                    {post.author.name.charAt(0)}
                  </span>
                )}
                <span className="flex flex-col">
                  <span className="font-semibold text-white">{post.author.name}</span>
                  {post.author.role ? <span className="text-xs text-muted-light">{post.author.role}</span> : null}
                </span>
              </div>
            ) : null}
            <PostMeta post={post} dark />
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 lg:pb-24">
        <div className="container-page max-w-6xl">
          {cover ? (
            <div className="relative -mt-2 mb-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-card-hover ring-1 ring-line lg:mb-16">
              <Image src={cover} alt={post.cover?.alt ?? ""} fill sizes="(min-width: 1152px) 1100px, 100vw" className="object-cover" loading="eager" fetchPriority="high" />
            </div>
          ) : (
            <div className="h-12 lg:h-16" />
          )}

          <div className="grid gap-12 lg:grid-cols-12">
            <article className="lg:col-span-8">
              {post.body.type === "mdx" ? <MdxBody source={post.body.source} /> : <ArticleBody value={post.body.value} />}

              {post.author?.bio ? (
                <div className="mt-14 flex gap-5 rounded-xl bg-surface p-6 ring-1 ring-line">
                  {post.author.image ? (
                    <Image
                      src={post.author.image}
                      alt=""
                      width={64}
                      height={64}
                      className="size-16 shrink-0 rounded-full object-cover"
                    />
                  ) : null}
                  <div className="flex flex-col gap-1">
                    <p className="font-label text-label-sm text-muted uppercase">Written by</p>
                    <p className="text-h4 text-ink">
                      {post.author.name}
                      {post.author.role ? <span className="text-base font-medium text-muted"> · {post.author.role}</span> : null}
                    </p>
                    <p className="text-sm text-muted">{post.author.bio}</p>
                  </div>
                </div>
              ) : null}
            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 flex flex-col gap-6">
                {headings.length > 2 ? (
                  <nav aria-label="Table of contents" className="flex flex-col gap-3 rounded-xl bg-surface p-5 ring-1 ring-line">
                    <p className="font-label text-label text-muted uppercase">In this article</p>
                    <ol className="flex flex-col gap-2 text-sm">
                      {headings.map((h) => (
                        <li key={h.id} className={h.level === "h3" ? "pl-4" : ""}>
                          <a href={`#${h.id}`} className="text-muted transition-colors hover:text-brand-600">
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                ) : null}

                <div className="flex flex-col gap-3 rounded-xl bg-surface p-5 ring-1 ring-line">
                  <p className="font-label text-label text-muted uppercase">Share this article</p>
                  <ul className="flex flex-wrap gap-2">
                    {share.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-md bg-white px-3 py-1.5 font-label text-label text-ink ring-1 ring-line transition-colors hover:bg-brand-50 hover:text-brand-600"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative flex flex-col gap-4 overflow-hidden rounded-xl bg-navy-950 p-6 text-white">
                  <div aria-hidden className="grid-bg absolute inset-0 opacity-70" />
                  <div className="relative flex flex-col gap-4">
                    <p className="font-label text-label-sm text-glow uppercase">Need a hand?</p>
                    <p className="text-h4">Talk to our team about your growth plans.</p>
                    <ButtonLink href="/contact" className="w-full">
                      Free consultation <ArrowRight aria-hidden className="size-4" />
                    </ButtonLink>
                    <a href={site.phone.href} className="flex items-center gap-2 text-sm text-muted-light hover:text-white">
                      <Phone aria-hidden className="size-4 text-glow" /> {site.phone.display}
                    </a>
                    <a href={site.email.href} className="flex items-center gap-2 text-sm text-muted-light hover:text-white">
                      <Mail aria-hidden className="size-4 text-glow" /> {site.email.display}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-surface section-y">
          <div className="container-page flex flex-col gap-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader eyebrow="Keep reading" title="Related Articles" />
              <ButtonLink href="/blog" variant="light" className="w-fit shrink-0">
                All articles <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner />
    </>
  );
}
