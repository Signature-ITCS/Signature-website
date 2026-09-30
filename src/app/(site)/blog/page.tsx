import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CategoryNav, PostGrid } from "@/components/blog/BlogIndex";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getAllPosts, getCategories } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog & Insights: Digital Marketing, Tech & Growth",
  description:
    "Practical guides and insights on SEO, Google Ads, web development, CRM, automation, call centres and customer operations from the Signature team in London.",
  path: "/blog",
});

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getCategories()]);

  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title={
          <>
            Ideas That Help <span className="text-glow">Businesses Grow.</span>
          </>
        }
        description="Practical, jargon-free guides on marketing, technology and operations, written by the people who deliver them every day."
        crumbs={[{ name: "Blog", path: "/blog" }]}
      >
        <CategoryNav categories={categories} />
      </PageHero>

      <section className="bg-surface section-y">
        <div className="container-page">
          <PostGrid posts={posts} featureFirst />
        </div>
      </section>

      <CtaBanner title="Want These Results for Your Business?" />
    </>
  );
}
