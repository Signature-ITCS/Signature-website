import { ScanSearch } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

/** Promotes the free website audit on relevant service pages. */
export function AuditBanner() {
  return (
    <section className="bg-white pb-4">
      <div className="container-page">
        <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-700 to-brand-600 p-8 text-white shadow-cta md:flex-row md:items-center md:justify-between lg:p-10">
          <div aria-hidden className="grid-bg absolute inset-0 opacity-40" />
          <div className="relative flex items-start gap-5">
            <span className="hidden size-14 shrink-0 items-center justify-center rounded-xl bg-white/15 sm:flex">
              <ScanSearch aria-hidden className="size-7" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-h3">Not sure what&apos;s holding your website back?</p>
              <p className="text-white/85">Get a free audit of your SEO, speed, mobile experience and conversions, delivered within two working days.</p>
            </div>
          </div>
          <ButtonLink href="/free-website-audit" variant="light" size="lg" className="relative shrink-0">
            Get a Free Website Audit
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
