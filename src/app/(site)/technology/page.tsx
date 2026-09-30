import type { Metadata } from "next";
import { ArrowRight, Gauge, GitBranch, Layers, Lock, Accessibility, FileCheck, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Faq } from "@/components/ui/Faq";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProcessSteps } from "@/components/sections/ProcessSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ArchitectureDiagram } from "@/components/visuals/ArchitectureDiagram";
import { techStack } from "@/content/company";
import { servicesByCategory } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Technology & Engineering Approach",
  description:
    "How Signature engineers websites, software, mobile apps and integrations: modern stack, security by design, performance, accessibility and full code ownership.",
  path: "/technology",
});

const principles = [
  { icon: Gauge, title: "Performance first", desc: "Fast load times and Core Web Vitals treated as requirements, not nice-to-haves." },
  { icon: Lock, title: "Secure by design", desc: "Encryption, least-privilege access, secure authentication and regular dependency updates." },
  { icon: Layers, title: "Scalable architecture", desc: "Modular, cloud-native systems that grow with your users and data." },
  { icon: Accessibility, title: "Accessible to everyone", desc: "Interfaces designed and tested against WCAG 2.2 AA guidelines." },
  { icon: GitBranch, title: "Automated quality", desc: "Version control, code review, automated testing and CI/CD pipelines on every project." },
  { icon: FileCheck, title: "You own everything", desc: "Source code, designs, data and documentation belong to you. No lock-in." },
];

const delivery = [
  { title: "Discovery", desc: "Workshops to understand users, workflows, integrations and success measures." },
  { title: "Prototype", desc: "Clickable prototypes validate the experience before development starts." },
  { title: "Build in sprints", desc: "Two-week sprints with working demos, feedback and full visibility." },
  { title: "Launch & support", desc: "Monitored launch, training, documentation and ongoing improvement." },
];

const security = [
  "UK GDPR and privacy-by-design approach",
  "Data hosted in the UK or EU on request",
  "SSL/TLS everywhere and encrypted data at rest",
  "Role-based access and multi-factor authentication",
  "Automated backups and disaster recovery plans",
  "Controls aligned with Cyber Essentials guidance",
  "Signed NDAs and data processing agreements",
  "Uptime monitoring and security alerting",
];

const faqs = [
  { q: "Which technologies do you use?", a: "We choose proven, well-supported technologies: TypeScript, React, Next.js and Node.js for the web, React Native and Flutter for mobile, PostgreSQL for data, and AWS, Google Cloud, Azure or Vercel for hosting. WordPress and Shopify are used where they are the best fit." },
  { q: "Will I own the source code?", a: "Yes. On final payment, all source code, designs and intellectual property transfer to your business. We can host it for you or hand it over to your own team." },
  { q: "Can you take over an existing project?", a: "Yes. We start with a technical audit covering code quality, security, performance and documentation, then recommend whether to improve, refactor or rebuild." },
  { q: "Do you offer ongoing support?", a: "Yes. Our support plans include monitoring, security updates, bug fixes and a monthly allowance for improvements and new features." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={
          <>
            Engineering That <span className="text-glow">Scales With You.</span>
          </>
        }
        description="Websites, software, mobile apps and integrations built on a modern, secure stack, with performance, accessibility and full code ownership as standard."
        crumbs={[{ name: "Technology", path: "/technology" }]}
      >
        <div className="flex flex-wrap gap-4 pt-2">
          <ButtonLink href="/contact?service=custom-software-development" size="lg">
            Discuss your project <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
          <ButtonLink href="/services#technology" variant="dark" size="lg">
            Technology services
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="Engineering principles" title="How We Build" description="Six principles applied to every website, platform and app we deliver." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="card-trace flex flex-col gap-4 rounded-xl bg-surface p-7 ring-1 ring-line">
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <p.icon aria-hidden className="size-5" />
                </span>
                <h3 className="text-h3 text-ink">{p.title}</h3>
                <p className="text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader dark eyebrow="Architecture" title="Connected by Design" description="Front ends, APIs and data layers designed together, so your website, CRM, apps and operations share one source of truth." />
          <ArchitectureDiagram />
        </div>
      </section>

      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="Our stack" title="Proven Tools, Chosen for Fit" description="We are technology-agnostic and recommend what’s right for your goals, team and budget." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((g) => (
              <div key={g.group} className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
                <h3 className="font-label text-label text-brand-600 uppercase">{g.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-md bg-surface px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="Delivery" title="From Idea to Launch, Transparently" />
          <ProcessSteps steps={delivery} />
        </div>
      </section>

      <section className="bg-brand-50 section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow="Security & compliance"
            title="Your Data, Protected"
            description="Security and privacy are built into our process from the first workshop, not bolted on at the end."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {security.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-lg bg-white p-4 text-sm font-medium text-ink shadow-card ring-1 ring-line">
                <ShieldCheck aria-hidden className="size-5 shrink-0 text-emerald" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="Services" title="Technology Services" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesByCategory("technology").map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="FAQs" title="Technology Questions" />
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner title="Have a Project in Mind?" />
    </>
  );
}
