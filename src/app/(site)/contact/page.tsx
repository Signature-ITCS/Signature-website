import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Faq } from "@/components/ui/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProcessSteps } from "@/components/sections/ProcessSection";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Free Consultation",
  description: `Contact Signature Marketing & Tech in London. Call ${site.phone.display}, email ${site.email.display} or request a free consultation for marketing, technology or BPO services.`,
  path: "/contact",
});

const quick = [
  { icon: Phone, label: "Call us", value: site.phone.display, href: site.phone.href, note: site.hours.display },
  { icon: Mail, label: "Email us", value: site.email.display, href: site.email.href, note: "Reply within one working day" },
  { icon: MapPin, label: "Visit us", value: `${site.address.city} ${site.address.postcode}`, href: site.mapsUrl, note: site.address.line1 },
];

const next = [
  { title: "We review", desc: "A specialist reviews your enquiry and any existing website, campaigns or systems." },
  { title: "We call you", desc: "A friendly, no-pressure call within one working day to understand your goals." },
  { title: "We recommend", desc: "You receive a clear recommendation, scope and transparent pricing." },
  { title: "We get started", desc: "Once you’re happy, we agree a plan and kick off, usually within a week." },
];

const faqs = [
  { q: "Is the consultation really free?", a: "Yes. The initial consultation and recommendation are completely free, with no obligation to proceed." },
  { q: "Do you work with businesses outside London?", a: "Absolutely. We work with clients across the whole of the United Kingdom and internationally, mostly via video calls and online collaboration." },
  { q: "How quickly can you start?", a: "Most projects and campaigns start within one to two weeks of agreeing scope. Call centre and support services can often go live in two to three weeks." },
  { q: "Do you require long contracts?", a: "No. Most of our services run on flexible monthly terms after an initial onboarding period. Projects are quoted at a fixed price." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Start a <span className="text-glow">Conversation.</span>
          </>
        }
        description="Whether you need more leads, a new website, a custom platform or a team to answer your phones, we’d love to hear about it."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      >
        <ul className="grid gap-3 pt-2 sm:grid-cols-3">
          {quick.map((q) => (
            <li key={q.label}>
              <a
                href={q.href}
                {...(q.icon === MapPin ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-full flex-col gap-2 rounded-xl bg-white/[0.05] p-5 ring-1 ring-white/10 transition-all hover:bg-white/[0.08] hover:ring-cyan/40"
              >
                <q.icon aria-hidden className="size-5 text-glow" />
                <span className="font-label text-label-sm text-muted-light uppercase">{q.label}</span>
                <span className="font-semibold break-all text-white">{q.value}</span>
                <span className="text-xs text-muted-light">{q.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <ContactSection title="Tell Us About Your Project" />

      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="What happens next" title="A Simple, No-Pressure Process" />
          <ProcessSteps steps={next} />
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="FAQs" title="Before You Get in Touch" />
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
