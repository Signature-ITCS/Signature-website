import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/content/industries";

export function IndustriesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className={`grid gap-4 ${detailed ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}`}>
      {industries.map((ind) => (
        <li key={ind.slug}>
          <Link
            href={`/industries/${ind.slug}`}
            className={`group flex h-full rounded-xl bg-white shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover hover:ring-brand-600/30 ${
              detailed ? "flex-col gap-4 p-7" : "items-center gap-3 p-4 sm:p-5"
            }`}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <ind.icon aria-hidden className="size-5" />
            </span>
            {detailed ? (
              <>
                <span className="flex items-center justify-between text-h3 text-ink">
                  {ind.name}
                  <ArrowUpRight aria-hidden className="size-5 text-muted-light transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
                </span>
                <span className="text-muted">{ind.excerpt}</span>
              </>
            ) : (
              <span className="text-sm font-semibold text-ink sm:text-h4">{ind.name}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
