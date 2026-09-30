import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CircleCheck,
  Code,
  Headset,
  PhoneIncoming,
  PhoneOutgoing,
  LifeBuoy,
  ChartLine,
  UserCheck,
  PhoneCall,
  Network,
  Languages,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { Pillars } from "@/components/sections/Pillars";
import { StatutoryPanel } from "@/components/sections/StatutoryPanel";
import { CaseCard } from "@/components/sections/CaseCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroConsole } from "@/components/visuals/HeroConsole";
import { MarketingDashboard, OpsConsole } from "@/components/visuals/Dashboards";
import { ArchitectureDiagram } from "@/components/visuals/ArchitectureDiagram";
import { services } from "@/lib/services";
import { caseStudies } from "@/content/case-studies";
import { ecosystem, processSteps, techStackFlat } from "@/content/company";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Signature Marketing & Tech | Digital Marketing, Technology & BPO Company in London",
  description:
    "London-based digital marketing, technology and BPO company. SEO, Google Ads, websites, custom software, CRM, mobile apps, call centre and 24/7 customer support, all under one roof.",
  path: "/",
  absoluteTitle: true,
});

const featuredSlugs = [
  "seo",
  "google-ads-ppc",
  "website-development",
  "ecommerce-development",
  "crm-development",
  "mobile-app-development",
  "custom-software-development",
  "api-integrations",
  "lead-generation",
  "social-media-marketing",
  "graphic-design",
  "content-marketing",
  "call-centre-services",
  "customer-support",
  "sales-telemarketing",
];

const trustItems = [
  { icon: TrendingUp, label: "Digital Growth" },
  { icon: Code, label: "Technology" },
  { icon: Bot, label: "Automation" },
  { icon: Headset, label: "Customer Experience" },
  { icon: Workflow, label: "Business Operations" },
];

const bpoCapabilities = [
  { icon: PhoneIncoming, label: "Inbound Calls" },
  { icon: PhoneOutgoing, label: "Outbound Calls" },
  { icon: LifeBuoy, label: "Customer Support" },
  { icon: ChartLine, label: "Sales Teams" },
  { icon: UserCheck, label: "Lead Qualification" },
  { icon: PhoneCall, label: "Telemarketing" },
  { icon: Network, label: "BPO Operations" },
  { icon: Languages, label: "Multilingual Support" },
];

export default function HomePage() {
  const featured = featuredSlugs.map((slug) => services.find((s) => s.slug === slug)!);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_15%,transparent_65%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 size-[40rem] glow-blue" />
        <div aria-hidden className="pointer-events-none absolute top-1/2 -right-32 size-[44rem] glow-cyan" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy-900 px-3.5 py-1.5 ring-1 ring-white/10">
              <span className="size-2 animate-pulse-dot rounded-full bg-emerald" />
              <span className="font-label text-label-sm text-glow uppercase">UK Technology &amp; Digital Solutions Company</span>
            </span>
            <h1 className="animate-fade-up text-display-sm text-balance text-white sm:text-[3.25rem] sm:leading-[1.12] lg:text-display">
              Technology That <span className="bg-gradient-to-r from-glow to-cyan bg-clip-text text-transparent">Drives Growth.</span>
            </h1>
            <p className="max-w-2xl text-body-lg text-pretty text-muted-light lg:text-body-xl">
              Digital marketing, technology and business-process solutions built to help ambitious companies attract customers, automate operations and scale.
            </p>
            <div className="flex flex-col gap-4 pt-1 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Get a Free Consultation <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href="/services" variant="dark" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 font-label text-label text-muted-light uppercase">
              {["SEO", "Technology", "Software", "BPO Operations", "Growth Infrastructure"].map((t, i) => (
                <li key={t} className="flex items-center gap-3">
                  {i > 0 ? <span aria-hidden className="text-cyan">•</span> : null}
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <HeroConsole />
          </div>
        </div>
      </section>

      {/* 2. Trust strip */}
      <section className="bg-brand-100 py-8">
        <div className="container-page flex flex-col items-center justify-between gap-6 lg:flex-row">
          <p className="shrink-0 font-label text-label-lg text-ink uppercase">Built for businesses that want measurable growth</p>
          <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:w-auto lg:gap-4">
            {trustItems.map((t) => (
              <li key={t.label} className="flex items-center gap-2.5 rounded-lg bg-white px-3.5 py-2.5 shadow-card last:col-span-2 sm:last:col-span-1">
                <t.icon aria-hidden className="size-5 text-brand-600" />
                <span className="font-label text-label text-ink">{t.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="bg-surface section-y">
        <div className="container-page flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Comprehensive Capability Stack"
              title="Everything You Need to Build, Market & Scale"
              description="From websites and software to customer acquisition and outsourced operations, Signature brings technology and growth services together under one roof."
            />
            <ButtonLink href="/services" variant="light" className="w-fit shrink-0">
              View all {services.length} services <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. One partner ecosystem */}
      <section className="relative overflow-hidden bg-navy-950 section-y">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="container-page relative flex flex-col items-center gap-12 text-center">
          <SectionHeader
            dark
            align="center"
            eyebrow="One Connected Ecosystem"
            title="One Partner. Multiple Capabilities."
            description="Signature connects every stage of your customer journey, from the first ad impression to the renewal call, so nothing falls through the gaps between suppliers."
          />
          <ol className="grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {ecosystem.map((e, i) => (
              <li
                key={e.label}
                className="group relative flex flex-col items-center gap-2.5 rounded-xl bg-navy-900 px-3 py-5 ring-1 ring-white/10 transition-all duration-300 hover:shadow-glow hover:ring-cyan/40 last:col-span-2 sm:last:col-span-1"
              >
                <span className="font-label text-label-sm text-muted tabular">{String(i + 1).padStart(2, "0")}</span>
                <e.icon aria-hidden className="size-6 text-glow" />
                <span className="font-label text-label text-white uppercase">{e.label}</span>
              </li>
            ))}
          </ol>
          <ul className="flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {["SEO", "Google Ads & PPC", "Bespoke Websites", "CRM Customisation", "Process Automation", "Dedicated Call Centre", "BPO Operations", "Real-Time Analytics"].map((t) => (
              <li key={t} className="rounded-full bg-navy-900 px-4 py-2 font-label text-label text-muted-light ring-1 ring-white/10">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Digital marketing */}
      <section className="bg-white section-y">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-7">
            <SectionHeader
              eyebrow="Demand Acceleration"
              title="Turn Digital Visibility Into Real Business Growth"
              description="SEO, local search, Google Ads, social media and lead-generation systems engineered around measurable commercial outcomes, not vanity metrics."
            />
            <ul className="flex flex-col gap-3.5">
              {[
                "High-intent keyword strategy and local map pack visibility",
                "Paid media focused on direct ROI and return on ad spend",
                "Conversion-optimised landing pages with built-in lead capture",
                "Clear attribution from first click to closed deal",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 font-medium text-ink">
                  <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/free-website-audit">
                Get a Free Website Audit <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href="/services#marketing" variant="light">
                Marketing services
              </ButtonLink>
            </div>
          </div>
          <MarketingDashboard />
        </div>
      </section>

      {/* 6. Technology */}
      <section id="technology" className="bg-navy-950 section-y">
        <div className="container-page flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              dark
              eyebrow="Engineering"
              title="Technology Built Around Your Business"
              description="Scalable websites, bespoke software, mobile applications and API automation, engineered precisely around how your business operates."
            />
            <ButtonLink href="/technology" variant="dark" className="w-fit shrink-0">
              Our technology approach <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      {/* 7. BPO */}
      <section className="bg-surface section-y">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-7">
            <SectionHeader
              eyebrow="Operational Scalability"
              title="Extend Your Team Without Extending Your Overhead"
              description="Outsource customer support, inbound calls, telemarketing and back-office processes to a trained, scalable team that works as part of yours."
            />
            <ul className="grid grid-cols-2 gap-3">
              {bpoCapabilities.map((c) => (
                <li key={c.label} className="flex items-center gap-2.5 rounded-lg bg-white p-3 shadow-card ring-1 ring-line">
                  <c.icon aria-hidden className="size-5 shrink-0 text-brand-600" />
                  <span className="font-label text-label text-ink">{c.label}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/services#business" className="w-fit">
              Explore BPO Solutions <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
          <OpsConsole />
        </div>
      </section>

      {/* 8. How we work */}
      <ProcessSection steps={processSteps} />

      {/* 9. Industries */}
      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Sector Specialisms"
              title="Solutions Across Industries"
              description="Proven technology, marketing and support models deployed across key UK business sectors."
            />
            <ButtonLink href="/industries" variant="light" className="w-fit shrink-0">
              All industries <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
          <IndustriesGrid />
        </div>
      </section>

      {/* 10. Why Signature */}
      <Pillars />

      {/* 11. About & statutory */}
      <section className="bg-brand-50 section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SectionHeader eyebrow="Corporate Standing" title="Technology, Marketing & Operations — Connected." />
            <p className="text-body-lg text-muted">
              {site.legalName} is a UK-based technology and digital solutions company helping businesses build their digital presence, acquire customers and improve operational efficiency.
            </p>
            <p className="text-muted">
              Based in Fitzrovia, London, we serve clients across the United Kingdom and internationally, delivering reliable software, performance marketing and round-the-clock business operations.
            </p>
            <Link href="/about" className="inline-flex w-fit items-center gap-1.5 font-label text-label-lg text-brand-600 hover:underline">
              More about Signature <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <StatutoryPanel />
          </div>
        </div>
      </section>

      {/* 12. Capability strip */}
      <section className="border-y border-line bg-white py-12">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-h3 text-ink">Multiple disciplines. One integrated team.</p>
            <p className="text-sm text-muted">One point of contact across every client touchpoint.</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {["Digital Marketing", "Technology", "Software Engineering", "BPO Operations", "Customer Operations"].map((t) => (
              <li key={t} className="rounded-lg bg-surface px-4 py-2 font-label text-label text-ink ring-1 ring-line">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13. Selected work */}
      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Representative Engagements"
              title="Selected Work"
              description="A selection of projects showing how our technology, marketing and operations teams work together."
            />
            <ButtonLink href="/case-studies" variant="light" className="w-fit shrink-0">
              All case studies <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((c) => (
              <CaseCard key={c.slug} study={c} />
            ))}
          </div>
        </div>
      </section>

      {/* 14. Tech stack */}
      <section className="bg-white py-16">
        <div className="container-page flex flex-col items-center gap-8 text-center">
          <Eyebrow>Platforms &amp; Integrations We Work With</Eyebrow>
          <ul className="flex max-w-5xl flex-wrap items-center justify-center gap-3">
            {techStackFlat.map((t) => (
              <li key={t} className="rounded-lg bg-surface px-5 py-2.5 font-label text-label text-ink ring-1 ring-line transition-colors hover:bg-brand-50 hover:ring-brand-600/30">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 15. Testimonials */}
      <Testimonials />

      {/* 16. CTA */}
      <CtaBanner />

      {/* 17. Contact */}
      <ContactSection />
    </>
  );
}
