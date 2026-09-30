import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { serviceCategories, servicesByCategory, services } from "@/lib/services";
import { processSteps } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services: Digital Marketing, Technology & BPO",
  description:
    "Explore 19 services across digital marketing, technology and business solutions: SEO, Google Ads, web and app development, CRM, custom software, call centre, BPO and 24/7 support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Every Capability You Need, <span className="text-glow">Under One Roof.</span>
          </>
        }
        description={`${services.length} specialist services across digital marketing, technology and business operations, delivered by one integrated team and one point of contact.`}
        crumbs={[{ name: "Services", path: "/services" }]}
      >
        <nav aria-label="Service categories" className="flex flex-wrap gap-3 pt-2">
          {serviceCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full bg-white/[0.06] px-4 py-2 font-label text-label-lg text-white ring-1 ring-white/15 transition-colors hover:bg-white/[0.12] hover:ring-cyan"
            >
              {c.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {serviceCategories.map((cat, i) => (
        <section key={cat.id} id={cat.id} className={`section-y ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}>
          <div className="container-page flex flex-col gap-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="flex max-w-3xl flex-col gap-4">
                <Eyebrow>{`0${i + 1} / ${cat.name}`}</Eyebrow>
                <h2 className="text-h1-sm lg:text-h1 text-ink">{cat.name}</h2>
                <p className="text-body-lg text-muted">{cat.blurb}</p>
              </div>
              <ButtonLink href="/contact" variant="light" className="w-fit shrink-0">
                Discuss a project <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicesByCategory(cat.id).map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <ProcessSection steps={processSteps} />
      <CtaBanner />
    </>
  );
}
