import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUp, CircleCheck, Gauge, MapPin, MousePointerClick, SearchCheck, ShieldCheck, Smartphone, FileText } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { buttonClasses } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProcessSteps } from "@/components/sections/ProcessSection";
import { AuditForm } from "@/components/forms/AuditForm";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import auditReport from "../../../../public/images/audit-report.png";

export const metadata: Metadata = pageMetadata({
  title: "Free Website Audit | SEO, Speed & Conversion Check",
  description:
    "Get a free website audit from Signature Marketing & Tech. We check your SEO, page speed, mobile experience, local search and conversions, then send a clear action plan within two working days.",
  path: "/free-website-audit",
  defaultImage: false,
});

const checks = [
  { icon: SearchCheck, title: "Technical SEO", desc: "Indexing, crawl errors, sitemaps, duplicate titles, broken links and structured data." },
  { icon: Gauge, title: "Speed & Core Web Vitals", desc: "Load times on mobile and desktop, with the specific files and scripts slowing you down." },
  { icon: Smartphone, title: "Mobile experience", desc: "How your site looks and works on phones, where most of your visitors arrive." },
  { icon: FileText, title: "Content & keywords", desc: "Whether your pages target the searches your customers actually make." },
  { icon: MapPin, title: "Local SEO", desc: "Google Business Profile, reviews and local rankings in the areas you serve." },
  { icon: MousePointerClick, title: "Conversion & UX", desc: "Calls to action, forms, trust signals and anything stopping visitors from enquiring." },
  { icon: ShieldCheck, title: "Security & tracking", desc: "SSL, outdated software, and whether Analytics and conversion tracking are set up correctly." },
];

const receive = [
  "An overall score plus scores for SEO, speed, mobile, conversion and local search",
  "A prioritised list of fixes, from quick wins to bigger improvements",
  "How your site compares with two local or national competitors",
  "Plain-English explanations, with no jargon and no hard sell",
  "An optional 20-minute call to walk you through the findings",
];

const steps = [
  { title: "Submit your website", desc: "Enter your website address and contact details in the form. It takes about 30 seconds." },
  { title: "We review it", desc: "A specialist reviews your site by hand, backed by professional SEO and performance tools." },
  { title: "Get your report", desc: "Within two working days you receive a clear report with prioritised fixes." },
  { title: "Talk it through", desc: "Book an optional call to go through the findings. Fix it yourself or let us help." },
];

const faqs = [
  { q: "Is the website audit really free?", a: "Yes. The audit and report are completely free, with no obligation to buy anything. It's a practical way for you to see how we work." },
  { q: "How long does it take?", a: "Most audits are delivered within two working days of your request. Larger websites or e-commerce stores may take a little longer, and we'll let you know." },
  { q: "What do you need from me?", a: "Just your website address and contact details. We don't need logins or access to your systems for the free audit." },
  { q: "Is this just an automated report?", a: "No. We use professional tools to collect data, but a specialist reviews your site by hand and explains what matters most for your business." },
  { q: "Will you try to sell me something?", a: "We'll explain the findings and, if you'd like, how we could help. Many clients use the report to fix things themselves or with their existing developer." },
  { q: "Do you audit websites built on any platform?", a: "Yes. WordPress, Shopify, WooCommerce, Wix, Squarespace, Webflow, custom-built sites and more." },
];

const perks = ["Delivered within 2 working days", "Reviewed by a real specialist", "No obligation, no hard sell"];

export default function FreeWebsiteAuditPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Website Audit",
          serviceType: "Website audit",
          description: "A free review of your website's SEO, speed, mobile experience, local search and conversion setup, with a prioritised action plan.",
          url: absoluteUrl("/free-website-audit"),
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "Country", name: "United Kingdom" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
        }}
      />

      <PageHero
        eyebrow="Free Website Audit"
        title={
          <>
            Find Out What&apos;s Holding Your <span className="text-glow">Website Back.</span>
          </>
        }
        description="Get a free, expert review of your website's SEO, speed, mobile experience and conversions, with a clear action plan to win more customers."
        crumbs={[{ name: "Free Website Audit", path: "/free-website-audit" }]}
        aside={<AuditForm />}
      >
        <ul className="flex flex-col gap-3 pt-2">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-3 font-medium text-white">
              <CircleCheck aria-hidden className="size-5 shrink-0 text-emerald" />
              {p}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* What we check */}
      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader
            eyebrow="What we check"
            title="A Complete Health Check for Your Website"
            description="We look at everything that affects how many people find your website, and how many of them get in touch."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {checks.map((c) => (
              <div key={c.title} className="card-trace flex flex-col gap-3 rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <c.icon aria-hidden className="size-5" />
                </span>
                <h3 className="text-h4 text-ink">{c.title}</h3>
                <p className="text-sm text-muted">{c.desc}</p>
              </div>
            ))}
            <a
              href="#audit-form"
              className="flex flex-col justify-between gap-4 rounded-xl bg-navy-950 p-6 text-white shadow-card transition-transform hover:-translate-y-1"
            >
              <p className="text-h4">Ready to see your score?</p>
              <span className="inline-flex items-center gap-2 font-label text-label-lg text-glow">
                Request your free audit <ArrowUp aria-hidden className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="bg-white section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <SectionHeader eyebrow="What you receive" title="A Clear Report, Not a Wall of Data" />
            <ul className="flex flex-col gap-4">
              {receive.map((r) => (
                <li key={r} className="flex items-start gap-3 text-ink">
                  <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  {r}
                </li>
              ))}
            </ul>
            <a href="#audit-form" className={buttonClasses("primary", "lg", "w-fit")}>
              Get My Free Website Audit
            </a>
          </div>
          <figure className="flex flex-col gap-3 lg:col-span-7">
            <div className="overflow-hidden rounded-xl bg-brand-50 shadow-card-hover ring-1 ring-line">
              <Image
                src={auditReport}
                alt="Example website audit report with an overall score, category scores and a list of priority fixes"
                placeholder="blur"
                sizes="(min-width: 1024px) 760px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="text-sm text-muted">Example audit report: overall score, category scores and prioritised fixes.</figcaption>
          </figure>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="How it works" title="Four Simple Steps" />
          <ProcessSteps steps={steps} />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <SectionHeader eyebrow="FAQs" title="Questions About the Audit" />
            <p className="text-sm text-muted">
              Prefer to talk? Call{" "}
              <a href={site.phone.href} className="font-semibold text-brand-600 hover:underline">
                {site.phone.display}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy-950 section-y">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[70rem] -translate-x-1/2 glow-blue" />
        <div className="container-page relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-3xl text-h1-sm text-balance text-white lg:text-h1">Your Website Should Be Your Best Salesperson.</h2>
          <p className="max-w-2xl text-body-lg text-muted-light">Find out exactly what to fix first. Free, fast and with no obligation.</p>
          <a href="#audit-form" className={buttonClasses("primary", "lg")}>
            Get My Free Website Audit <ArrowUp aria-hidden className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
