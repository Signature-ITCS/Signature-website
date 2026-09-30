import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleAlert, CircleCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Faq } from "@/components/ui/Faq";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CaseCard } from "@/components/sections/CaseCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { getIndustry, industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { getService } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${slug}`,
    absoluteTitle: true,
    defaultImage: false,
  });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const recommended = industry.services.map((s) => getService(s)).filter((s) => s !== undefined);
  const relevantCases = caseStudies
    .map((c) => ({ c, score: c.services.filter((s) => industry.services.includes(s)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((x) => x.c);
  const others = industries.filter((i) => i.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`Industries · ${industry.name}`}
        title={
          <>
            Growth Solutions for <span className="text-glow">{industry.name}</span>
          </>
        }
        description={industry.intro}
        crumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${slug}` },
        ]}
      >
        <div className="pt-2">
          <ButtonLink href="#consultation" size="lg">
            Talk to a {industry.name.toLowerCase()} specialist <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
      </PageHero>

      {/* Challenges & solutions */}
      <section className="bg-white section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeader eyebrow="The challenge" title={`What Holds ${industry.name} Businesses Back`} />
            <ul className="flex flex-col gap-4">
              {industry.challenges.map((c) => (
                <li key={c.title} className="flex items-start gap-4 rounded-xl bg-surface p-5 ring-1 ring-line">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    <CircleAlert aria-hidden className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-h4 text-ink">{c.title}</h3>
                    <p className="text-muted">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeader eyebrow="How Signature helps" title={industry.headline.charAt(0).toUpperCase() + industry.headline.slice(1)} />
            <ul className="grid gap-4 sm:grid-cols-2">
              {industry.solutions.map((s) => (
                <li key={s.title} className="card-trace flex flex-col gap-3 rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
                  <CircleCheck aria-hidden className="size-6 text-emerald" />
                  <h3 className="text-h4 text-ink">{s.title}</h3>
                  <p className="text-sm text-muted">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended services */}
      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader
            eyebrow="Recommended services"
            title={`Services for ${industry.name}`}
            description="The services that typically deliver the biggest impact in your sector."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {recommended.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {relevantCases.length > 0 ? (
        <section className="bg-white section-y">
          <div className="container-page flex flex-col gap-12">
            <SectionHeader eyebrow="Proof" title="Related Case Studies" />
            <div className="grid gap-6 md:grid-cols-2">
              {relevantCases.map((c) => (
                <CaseCard key={c.slug} study={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-surface section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="FAQs" title={`${industry.name} Questions`} />
          </div>
          <div className="lg:col-span-8">
            <Faq items={industry.faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-12">
        <div className="container-page flex flex-col gap-5">
          <p className="font-label text-label text-muted uppercase">Other industries we serve</p>
          <ul className="flex flex-wrap gap-2.5">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/industries/${o.slug}`}
                  className="inline-flex rounded-full bg-surface px-4 py-2 font-label text-label text-ink ring-1 ring-line transition-colors hover:bg-brand-50 hover:text-brand-600"
                >
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
      <ContactSection defaultService={industry.services[0]} />
    </>
  );
}
