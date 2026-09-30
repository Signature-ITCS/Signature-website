import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { CaseVisual } from "@/components/visuals/CaseVisual";

export function CaseCard({ study }: { study: CaseStudy }) {
  const headline = study.results[0];
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <CaseVisual kind={study.visual} />
      <div className="flex flex-1 flex-col justify-between gap-6 p-6 lg:p-7">
        <div className="flex flex-col gap-3">
          <span className="font-label text-label-sm text-brand-600 uppercase">{study.sector}</span>
          <h3 className="text-h3 text-ink">{study.title}</h3>
          <p className="text-sm text-muted">{study.excerpt}</p>
        </div>
        <div className="flex items-end justify-between gap-4 border-t border-line pt-5">
          <div className="flex flex-col">
            <span className="tabular font-label text-h3 font-bold text-ink">{headline.value}</span>
            <span className="text-xs text-muted">{headline.label}</span>
          </div>
          <span className="flex items-center gap-1 font-label text-label-lg whitespace-nowrap text-brand-600 transition-transform group-hover:translate-x-1">
            Read case study <ArrowRight aria-hidden className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
