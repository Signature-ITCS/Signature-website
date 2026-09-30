import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck, Rocket, ShoppingCart, Headset, TrendingUp, Workflow, Gauge } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, SectionHeader } from "@/components/ui/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { ecosystem } from "@/content/company";
import { getService } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Business Growth Solutions",
  description:
    "Integrated solutions that combine marketing, technology and operations: growth engines, digital launches, e-commerce scaling, customer operations, sales acceleration and automation.",
  path: "/solutions",
});

const solutions = [
  {
    id: "growth-engine",
    icon: Gauge,
    name: "Growth Engine",
    tagline: "A predictable flow of qualified leads, tracked from click to closed deal.",
    problem: "Marketing spend is going out, but you can’t see which channels create revenue, and leads aren’t followed up fast enough.",
    outcomes: ["More qualified enquiries every month", "Lower cost per lead and per sale", "Full-funnel attribution and reporting", "Instant lead routing to your team"],
    services: ["seo", "google-ads-ppc", "lead-generation", "crm-development"],
  },
  {
    id: "digital-launch",
    icon: Rocket,
    name: "Digital Launch",
    tagline: "Everything a new or rebranding business needs to look established online.",
    problem: "You’re launching, rebranding or expanding, and need a brand, website and search presence that make you look as credible as the market leaders.",
    outcomes: ["A professional brand identity", "A fast, conversion-focused website", "Google Business Profile and local visibility", "Launch content and social presence"],
    services: ["graphic-design", "website-development", "content-marketing", "local-seo"],
  },
  {
    id: "commerce-scale",
    icon: ShoppingCart,
    name: "Commerce Scale",
    tagline: "Grow online revenue profitably without your operations buckling.",
    problem: "Your store is growing, but the site is slow, ad costs are climbing and the support inbox is overflowing.",
    outcomes: ["Faster store with higher conversion", "Profitable Shopping and Performance Max", "Stock, orders and accounting in sync", "24/7 customer support at peak times"],
    services: ["ecommerce-development", "google-ads-ppc", "api-integrations", "customer-support"],
  },
  {
    id: "customer-operations",
    icon: Headset,
    name: "Customer Operations",
    tagline: "Every call answered and every customer looked after, around the clock.",
    problem: "Calls go unanswered, response times are slipping and your team is stretched between customers and core work.",
    outcomes: ["24/7 call and message handling", "Consistent, on-brand service", "SLA-backed response times", "Insights that reduce contact volume"],
    services: ["inbound-call-handling", "customer-support", "call-centre-services", "bpo-services"],
  },
  {
    id: "sales-acceleration",
    icon: TrendingUp,
    name: "Sales Acceleration",
    tagline: "More conversations with the right prospects, booked straight into your calendar.",
    problem: "Your pipeline depends on referrals, your sales team spends time prospecting instead of closing and old leads are never revisited.",
    outcomes: ["Booked meetings with qualified prospects", "Revived dormant leads and quotes", "A structured, measurable sales process", "CRM pipeline visibility for leadership"],
    services: ["outbound-calling", "sales-telemarketing", "lead-generation", "crm-development"],
  },
  {
    id: "automation-integration",
    icon: Workflow,
    name: "Automation & Integration",
    tagline: "Replace spreadsheets and manual admin with connected, automated systems.",
    problem: "Your team re-types data between tools, processes live in spreadsheets and nobody has a single view of the business.",
    outcomes: ["Hours of admin saved every week", "One source of truth for your data", "Fewer errors and faster turnaround", "Systems that scale as you grow"],
    services: ["custom-software-development", "api-integrations", "crm-development", "bpo-services"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Integrated Solutions for <span className="text-glow">Real Business Problems.</span>
          </>
        }
        description="Instead of buying services one by one, choose an outcome. Each solution combines the marketing, technology and operations needed to deliver it, managed by one team."
        crumbs={[{ name: "Solutions", path: "/solutions" }]}
      >
        <nav aria-label="Solutions" className="flex flex-wrap gap-3 pt-2">
          {solutions.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-white/[0.06] px-4 py-2 font-label text-label-lg text-white ring-1 ring-white/15 transition-colors hover:bg-white/[0.12] hover:ring-cyan"
            >
              {s.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Ecosystem */}
      <section className="border-b border-line bg-white py-14">
        <div className="container-page flex flex-col items-center gap-8 text-center">
          <Eyebrow>The Signature ecosystem</Eyebrow>
          <ol className="flex flex-wrap items-center justify-center gap-2">
            {ecosystem.map((e, i) => (
              <li key={e.label} className="flex items-center gap-2">
                <span className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5 font-label text-label text-ink ring-1 ring-line">
                  <e.icon aria-hidden className="size-4 text-brand-600" />
                  {e.label}
                </span>
                {i < ecosystem.length - 1 ? <ArrowRight aria-hidden className="size-4 text-muted-light" /> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {solutions.map((sol, i) => {
        const included = sol.services.map((s) => getService(s)).filter((s) => s !== undefined);
        return (
          <section key={sol.id} id={sol.id} className={`section-y ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}>
            <div className="container-page grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className={`flex flex-col gap-6 lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="flex size-14 items-center justify-center rounded-xl bg-brand-600 text-white shadow-cta">
                  <sol.icon aria-hidden className="size-7" />
                </span>
                <SectionHeader eyebrow={`Solution ${String(i + 1).padStart(2, "0")}`} title={sol.name} description={sol.tagline} />
                <div className="rounded-xl border-l-4 border-brand-600 bg-brand-50 p-5">
                  <p className="font-label text-label text-brand-600 uppercase">The problem</p>
                  <p className="mt-1 text-ink">{sol.problem}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {sol.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 font-medium text-ink">
                      <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-emerald" />
                      {o}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/contact" className="w-fit">
                  Discuss {sol.name} <ArrowRight aria-hidden className="size-4" />
                </ButtonLink>
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl bg-navy-950 p-7 shadow-2xl lg:p-8">
                  <div aria-hidden className="grid-bg absolute inset-0 opacity-70" />
                  <div className="relative flex flex-col gap-4">
                    <p className="font-label text-label text-glow uppercase">What&apos;s included</p>
                    <ul className="flex flex-col gap-3">
                      {included.map((s, idx) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="group flex items-center gap-4 rounded-lg bg-navy-900 p-4 ring-1 ring-white/10 transition-all hover:shadow-glow hover:ring-cyan/40"
                          >
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-glow">
                              <s.icon aria-hidden className="size-5" />
                            </span>
                            <span className="flex flex-1 flex-col">
                              <span className="font-label text-label-sm text-muted-light tabular">Layer {idx + 1}</span>
                              <span className="font-semibold text-white">{s.name}</span>
                            </span>
                            <ArrowRight aria-hidden className="size-4 text-muted-light transition-transform group-hover:translate-x-1 group-hover:text-glow" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBanner title="Not Sure Which Solution Fits?" description="Book a free consultation. We’ll review your goals and current setup, then recommend the right combination of services, with a clear plan and transparent pricing." />
      <ContactSection />
    </>
  );
}
