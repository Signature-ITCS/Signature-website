import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CaseCard } from "@/components/sections/CaseCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { caseStudies } from "@/content/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies & Client Results",
  description:
    "Real projects combining digital marketing, software, CRM and call centre services. See how Signature helps UK businesses generate leads, automate operations and scale.",
  path: "/case-studies",
});

const headline = [
  { value: "15,000+", label: "patient enquiries handled monthly" },
  { value: "-23%", label: "cost per acquisition on Google Ads" },
  { value: "3x", label: "qualified sales meetings" },
  { value: "+71%", label: "booked jobs in six months" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Results That Speak <span className="text-glow">for Themselves.</span>
          </>
        }
        description="A selection of engagements showing how our marketing, technology and operations teams work together to deliver measurable commercial outcomes."
        crumbs={[{ name: "Case Studies", path: "/case-studies" }]}
      >
        <dl className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
          {headline.map((h) => (
            <div key={h.label} className="flex flex-col-reverse justify-end gap-1 border-l border-white/15 pl-4">
              <dt className="text-xs text-muted-light">{h.label}</dt>
              <dd className="font-label text-h2-sm font-bold text-white tabular">{h.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="bg-surface section-y">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <CaseCard key={c.slug} study={c} />
          ))}
        </div>
      </section>

      <Testimonials limit={6} />
      <CtaBanner title="Want Results Like These?" />
    </>
  );
}
