import type { Metadata } from "next";
import Image from "next/image";
import teamPhoto from "../../../../public/images/services/bpo-services.jpg";
import { ArrowRight, Compass, Eye, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pillars } from "@/components/sections/Pillars";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatutoryPanel } from "@/components/sections/StatutoryPanel";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { processSteps } from "@/content/company";
import { industries } from "@/content/industries";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us | London Technology, Marketing & BPO Company",
  description:
    "Signature Marketing & Tech Ltd is a London-based company combining digital marketing, software engineering and outsourced operations to help UK businesses grow.",
  path: "/about",
});

const stats = [
  { value: String(services.length), label: "Specialist services" },
  { value: String(industries.length), label: "Industries served" },
  { value: "24/7", label: "Support operations" },
  { value: "1", label: "Accountable team" },
];

const mvv = [
  {
    icon: Compass,
    title: "Our Mission",
    desc: "To give ambitious businesses the marketing, technology and operational firepower of a large enterprise, delivered by one accountable partner.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A world where growing companies never have to choose between moving fast and doing things properly.",
  },
  {
    icon: HeartHandshake,
    title: "Our Promise",
    desc: "Honest advice, transparent pricing, clear reporting and a team that treats your business like its own.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Signature"
        title={
          <>
            One Team for Technology, <span className="text-glow">Marketing & Operations.</span>
          </>
        }
        description={`${site.legalName} is a London-based technology and digital solutions company helping businesses build their digital presence, win customers and run more efficiently.`}
        crumbs={[{ name: "About", path: "/about" }]}
      >
        <dl className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end gap-1 border-l border-white/15 pl-4">
              <dt className="text-xs text-muted-light">{s.label}</dt>
              <dd className="font-label text-h2 font-bold text-white tabular">{s.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Story */}
      <section className="bg-white section-y">
        <div className="container-page grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <SectionHeader eyebrow="Our Story" title="Built to Fix the Gaps Between Suppliers" />
            <p className="text-body-lg text-muted">
              Most growing businesses work with a marketing agency, a web developer, a software house and a call centre, all separately. Each one optimises its own piece, and nobody owns the result. Leads fall between the cracks, systems don&apos;t talk to each other and the business owner ends up managing everyone.
            </p>
            <p className="text-muted">
              Signature was founded to fix that. We bring marketers, engineers and operations specialists together in one team, working from one plan towards one set of commercial goals. The ads, the website, the CRM, the phone lines and the support desk are designed to work together from day one.
            </p>
            <p className="text-muted">
              Based on Tottenham Court Road in the heart of London&apos;s Fitzrovia, we work with start-ups, SMEs and established companies across the United Kingdom and internationally. Whether you need a single service or a fully integrated growth engine, you get one point of contact and complete transparency.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/services">
                Explore our services <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="light">
                Get in touch
              </ButtonLink>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Image
              src={teamPhoto}
              alt="The Signature Marketing & Tech office with the team working at their desks"
              placeholder="blur"
              sizes="(min-width: 1024px) 520px, 100vw"
              className="h-auto w-full rounded-xl shadow-card-hover ring-1 ring-line"
            />
            <StatutoryPanel />
          </div>
        </div>
      </section>

      {/* Mission, vision, promise */}
      <section className="relative overflow-hidden bg-navy-950 section-y">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="container-page relative grid gap-6 md:grid-cols-3">
          {mvv.map((m) => (
            <div key={m.title} className="flex flex-col gap-4 rounded-xl bg-navy-900 p-8 ring-1 ring-white/10 transition-all duration-300 hover:shadow-glow hover:ring-cyan/40">
              <span className="flex size-12 items-center justify-center rounded-lg bg-brand-600/20 text-glow">
                <m.icon aria-hidden className="size-6" />
              </span>
              <h2 className="text-h3 text-white">{m.title}</h2>
              <p className="text-muted-light">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Pillars eyebrow="Our Values" title="What We Stand For" description="The principles that shape how we advise, build and support every client." />
      <ProcessSection steps={processSteps} />
      <Testimonials />
      <CtaBanner title="Let’s Build Something Great Together" />
    </>
  );
}
