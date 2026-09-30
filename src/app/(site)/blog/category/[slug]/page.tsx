import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CategoryNav, PostGrid } from "@/components/blog/BlogIndex";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getCategories, getCategoryPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

async function findCategory(slug: string) {
  const categories = await getCategories();
  return { categories, category: categories.find((c) => c.slug === slug) };
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { category } = await findCategory(slug);
  if (!category) return {};
  return pageMetadata({
    title: `${category.title} Articles`,
    description: category.description ?? `Guides and insights about ${category.title.toLowerCase()} from the Signature Marketing & Tech team.`,
    path: `/blog/category/${slug}`,
  });
}

export default async function BlogCategoryPage({ params }: PageProps<"/blog/category/[slug]">) {
  const { slug } = await params;
  const { categories, category } = await findCategory(slug);
  if (!category) notFound();
  const posts = await getCategoryPosts(slug);

  return (
    <>
      <PageHero
        eyebrow="Blog category"
        title={category.title}
        description={category.description ?? `Guides and insights about ${category.title.toLowerCase()}.`}
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: category.title, path: `/blog/category/${slug}` },
        ]}
      >
        <CategoryNav categories={categories} active={slug} />
      </PageHero>
      <section className="bg-surface section-y">
        <div className="container-page">
          <PostGrid posts={posts} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
