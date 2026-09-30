import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { Pillars } from "@/components/sections/Pillars";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "Marketing, technology and customer operations for automotive, healthcare, e-commerce, home services, professional services, logistics, real estate, retail, finance and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Sector Expertise That <span className="text-glow">Speeds Up Results.</span>
          </>
        }
        description="Every industry has its own customers, regulations and pressure points. We bring proven playbooks for each, so you skip the learning curve and get to results faster."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />
      <section className="bg-surface section-y">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader
            eyebrow="Sector Specialisms"
            title="Solutions Across 12 Industries"
            description="Select your industry to see the challenges we solve and the services that deliver the biggest impact."
          />
          <IndustriesGrid detailed />
        </div>
      </section>
      <Pillars />
      <Testimonials />
      <CtaBanner title="Don’t See Your Industry?" description="Our approach adapts to any sector. Tell us about your business and we’ll show you what’s possible." />
    </>
  );
}
