import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { absoluteUrl } from "@/lib/site";
import { getCategories, getSitemapPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, categories] = await Promise.all([getSitemapPosts(), getCategories()]);
  const lastModified = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    entry("/services", 0.9, "monthly"),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9, "monthly")),
    entry("/solutions", 0.8, "monthly"),
    entry("/industries", 0.8, "monthly"),
    ...industries.map((i) => entry(`/industries/${i.slug}`, 0.7, "monthly")),
    entry("/technology", 0.7, "monthly"),
    entry("/case-studies", 0.7, "monthly"),
    ...caseStudies.map((c) => entry(`/case-studies/${c.slug}`, 0.6, "monthly")),
    entry("/blog", 0.8, "weekly"),
    ...categories.map((c) => entry(`/blog/category/${c.slug}`, 0.5, "weekly")),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    entry("/about", 0.7, "monthly"),
    entry("/free-website-audit", 0.9, "monthly"),
    entry("/contact", 0.8, "yearly"),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms-conditions", 0.2, "yearly"),
    entry("/cookie-policy", 0.2, "yearly"),
  ];
}
