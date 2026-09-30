import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck, Phone, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProcessSteps } from "@/components/sections/ProcessSection";
import { CaseCard } from "@/components/sections/CaseCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AuditBanner } from "@/components/sections/AuditBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { categoryName, getService, services } from "@/lib/services";
import { getServiceContent } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { serviceImages } from "@/content/service-images";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

// Services where a free website audit is the natural next step.
const AUDIT_SERVICES = new Set(["seo", "local-seo", "google-ads-ppc", "content-marketing", "website-development", "ecommerce-development", "lead-generation"]);

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const content = getServiceContent(slug);
  if (!content) return {};
  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/services/${slug}`,
    absoluteTitle: true,
    defaultImage: false,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  const content = getServiceContent(slug);
  if (!service || !content) notFound();

  const Icon = service.icon;
  const related = content.related.map((r) => getService(r)).filter((s) => s !== undefined);
  // Matching case studies first, topped up with others so the section never looks half empty.
  const relatedCases = [
    ...caseStudies.filter((c) => c.services.includes(slug)),
    ...caseStudies.filter((c) => !c.services.includes(slug)),
  ].slice(0, 2);
  const relatedIndustries = industries.filter((i) => i.services.includes(slug)).slice(0, 6);
  const category = categoryName(service.category);
  const image = serviceImages[slug];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: content.metaDescription,
          path: `/services/${slug}`,
          category,
        })}
      />

      <PageHero
        eyebrow={category}
        title={
          <>
            {content.heroTitle} <span className="text-glow">{content.heroHighlight}</span>
          </>
        }
        description={content.heroSubtitle}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${slug}` },
        ]}
        aside={
          image ? (
            <figure className="relative">
              <div aria-hidden className="glow-blue absolute -inset-10 opacity-70" />
              {/* A thin white frame around the image; the image itself fills the frame with no empty space. */}
              <div className="relative rounded-2xl bg-white p-1.5 shadow-[0_25px_60px_-15px_rgb(0_0_0/0.55)]">
                <div className="overflow-hidden rounded-xl bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    placeholder="blur"
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
              <figcaption className="sr-only">{image.caption}</figcaption>
            </figure>
          ) : undefined
        }
      >
        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <ButtonLink href="#consultation" size="lg">
            Get a Free Consultation <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
          <a href={site.phone.href} className={buttonClasses("dark", "lg")}>
            <Phone aria-hidden className="size-4 text-glow" /> {site.phone.display}
          </a>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="bg-white section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SectionHeader eyebrow="Overview" title={content.overviewTitle} />
            {content.overview.map((p) => (
              <p key={p.slice(0, 24)} className="text-body-lg text-muted">
                {p}
              </p>
            ))}
            {/* At a glance (moved here from the hero, which now shows the service image) */}
            <div className="flex flex-col gap-4 rounded-xl bg-navy-950 p-6 text-white shadow-card-hover sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-600 shadow-cta">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="font-label text-label text-glow uppercase">At a glance</span>
              </div>
              <dl className="grid gap-3 sm:grid-cols-3">
                {content.stats.map((st) => (
                  <div key={st.label} className="flex flex-col-reverse justify-end gap-1 rounded-lg bg-white/[0.04] p-4 ring-1 ring-white/10">
                    <dt className="text-sm text-muted-light">{st.label}</dt>
                    <dd className="font-label text-h3 font-bold text-white tabular">{st.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-2 flex flex-col gap-4 rounded-xl bg-brand-50 p-6 ring-1 ring-brand-200">
              <p className="flex items-center gap-2 font-label text-label text-brand-600 uppercase">
                <Target aria-hidden className="size-4" /> Ideal for
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {content.idealFor.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                    <CircleCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-28 flex flex-col gap-6 rounded-xl bg-navy-950 p-7 text-white shadow-2xl lg:p-8">
              <p className="font-label text-label text-glow uppercase">What&apos;s included</p>
              <ul className="flex flex-col gap-3.5">
                {content.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-white/90">
                    <CircleCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-emerald" />
                    {d}
                  </li>
                ))}
              </ul>
              <ButtonLink href="#consultation" className="w-full">
                Get a tailored proposal
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader
            eyebrow="Capabilities"
            title={`What Our ${service.name} Service Covers`}
            description="Specialist expertise delivered by one accountable team, with clear reporting at every stage."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.features.map((f, i) => (
              <div key={f.title} className="card-trace flex flex-col gap-3 rounded-xl bg-white p-7 shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="font-label text-label-sm text-brand-600 tabular">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-h4 text-ink">{f.title}</h3>
                <p className="text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-navy-950 section-y">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="container-page relative flex flex-col gap-12">
          <SectionHeader dark eyebrow="Our Process" title="How We Deliver" description="A clear, collaborative process with no surprises, from kick-off to measurable results." />
          <ProcessSteps steps={content.process} dark />
        </div>
      </section>

      {/* Case studies */}
      {relatedCases.length > 0 ? (
        <section className="bg-white section-y">
          <div className="container-page flex flex-col gap-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader eyebrow="Results" title="See It in Action" />
              <ButtonLink href="/case-studies" variant="light" className="w-fit shrink-0">
                All case studies <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedCases.map((c) => (
                <CaseCard key={c.slug} study={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {AUDIT_SERVICES.has(slug) ? <AuditBanner /> : null}

      {/* FAQ */}
      <section className="bg-surface section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <SectionHeader eyebrow="FAQs" title="Common Questions" description={`Everything you need to know about our ${service.name.toLowerCase()} service.`} />
            <p className="text-sm text-muted">
              Still have questions? Call{" "}
              <a href={site.phone.href} className="font-semibold text-brand-600 hover:underline">
                {site.phone.display}
              </a>{" "}
              or email{" "}
              <a href={site.email.href} className="font-semibold text-brand-600 hover:underline">
                {site.email.display}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <Faq items={content.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="Works well with" title="Related Services" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          {relatedIndustries.length > 0 ? (
            <div className="flex flex-wrap items-center gap-3 border-t border-line pt-8">
              <span className="font-label text-label text-muted uppercase">Popular with:</span>
              {relatedIndustries.map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="rounded-full bg-surface px-4 py-1.5 font-label text-label text-ink ring-1 ring-line transition-colors hover:bg-brand-50 hover:text-brand-600"
                >
                  {i.name}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <CtaBanner
        title="Ready to Get Started?"
        description={`Tell us about your goals and we’ll put together a clear, no-obligation ${service.name.toLowerCase()} plan with transparent pricing.`}
      />
      <ContactSection defaultService={slug} title="Get Your Free Consultation" />
    </>
  );
}
