import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, Clock, MapPin, Quote } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JsonLd } from "@/components/ui/JsonLd";
import { CaseCard } from "@/components/sections/CaseCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CaseVisual } from "@/components/visuals/CaseVisual";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getService } from "@/lib/services";
import { articleJsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: `${study.title} | Case Study`,
    description: study.metaDescription,
    path: `/case-studies/${slug}`,
    type: "article",
    defaultImage: false,
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const usedServices = study.services.map((s) => getService(s)).filter((s) => s !== undefined);
  const more = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  const facts = [
    { icon: Building2, label: "Client", value: study.client },
    { icon: MapPin, label: "Location", value: study.location },
    { icon: Clock, label: "Timeline", value: study.duration },
  ];

  return (
    <>
      <JsonLd data={articleJsonLd({ title: study.title, description: study.metaDescription, path: `/case-studies/${slug}` })} />
      <PageHero
        eyebrow={`Case Study · ${study.sector}`}
        title={study.title}
        description={study.excerpt}
        crumbs={[
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${slug}` },
        ]}
        aside={<CaseVisual kind={study.visual} className="h-72 rounded-2xl ring-1 ring-white/10 lg:h-80" />}
      />

      {/* Results bar */}
      <section className="border-b border-line bg-white">
        <dl className="container-page grid grid-cols-2 divide-line py-10 lg:grid-cols-4 lg:divide-x">
          {study.results.map((r) => (
            <div key={r.label} className="flex flex-col-reverse justify-end gap-1 p-4 lg:px-8">
              <dt className="text-sm text-muted">{r.label}</dt>
              <dd className="font-label text-metric-sm text-brand-600 tabular lg:text-metric">{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-surface section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="flex flex-col gap-12 lg:col-span-8">
            <div className="flex flex-col gap-5">
              <SectionHeader eyebrow="The challenge" title="Where They Started" />
              {study.challenge.map((p) => (
                <p key={p.slice(0, 24)} className="text-body-lg text-muted">
                  {p}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeader eyebrow="Our approach" title="What We Did" />
              <ol className="flex flex-col gap-4">
                {study.approach.map((a, i) => (
                  <li key={a.title} className="flex gap-5 rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 font-label text-sm font-bold text-white tabular">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-h4 text-ink">{a.title}</h3>
                      <p className="text-muted">{a.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="relative overflow-hidden rounded-2xl bg-navy-950 p-8 text-white lg:p-10">
              <div aria-hidden className="grid-bg absolute inset-0 opacity-60" />
              <div className="relative flex flex-col gap-6">
                <Quote aria-hidden className="size-10 text-glow" />
                <blockquote className="text-h3 font-medium text-balance">&ldquo;{study.quote.text}&rdquo;</blockquote>
                <figcaption className="text-sm text-muted-light">
                  <span className="font-semibold text-white">{study.quote.role}</span> · {study.quote.company}
                </figcaption>
              </div>
            </figure>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-6">
              <div className="flex flex-col gap-5 rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
                <p className="font-label text-label text-muted uppercase">Project details</p>
                <dl className="flex flex-col gap-4">
                  {facts.map((f) => (
                    <div key={f.label} className="flex items-start gap-3">
                      <f.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
                      <div>
                        <dt className="font-label text-label-sm text-muted uppercase">{f.label}</dt>
                        <dd className="font-semibold text-ink">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
                <p className="font-label text-label text-muted uppercase">Services used</p>
                <ul className="flex flex-col gap-1">
                  {usedServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="-mx-2 flex items-center justify-between gap-2 rounded-md px-2 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-50 hover:text-brand-600"
                      >
                        <span className="flex items-center gap-2.5">
                          <s.icon aria-hidden className="size-4 text-brand-600" />
                          {s.name}
                        </span>
                        <ArrowRight aria-hidden className="size-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="More work" title="Other Case Studies" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {more.map((c) => (
              <CaseCard key={c.slug} study={c} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Let’s Build Your Success Story" />
    </>
  );
}
