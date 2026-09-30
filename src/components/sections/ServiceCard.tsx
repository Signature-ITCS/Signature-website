import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ServiceSummary } from "@/lib/services";

export function ServiceCard({ service, headingLevel = "h3" }: { service: ServiceSummary; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-trace group flex flex-col justify-between gap-6 overflow-hidden rounded-xl bg-white p-7 shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:p-8"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <span className="flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
            <Icon aria-hidden className="size-6" />
          </span>
          <span aria-hidden className="mt-1 size-1.5 rounded-full bg-cyan opacity-60 shadow-[0_0_10px_2px_rgb(56_189_248/0.5)] transition-opacity group-hover:opacity-100" />
        </div>
        <Heading className="text-h3 text-ink">{service.name}</Heading>
        <p className="text-muted">{service.excerpt}</p>
      </div>
      <span className="flex items-center gap-1 font-label text-label-lg text-brand-600 transition-transform duration-300 group-hover:translate-x-1">
        {service.cta}
        <ChevronRight aria-hidden className="size-4" />
      </span>
    </Link>
  );
}
