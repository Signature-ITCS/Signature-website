import { Plus } from "lucide-react";
import { faqJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      <JsonLd data={faqJsonLd(items)} />
      <div className="divide-y divide-line overflow-hidden rounded-xl bg-white ring-1 ring-line">
        {items.map((f, i) => (
          <details key={f.q} className="group" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-surface [&::-webkit-details-marker]:hidden">
              <h3 className="text-h4 text-ink">{f.q}</h3>
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-transform duration-300 group-open:rotate-45">
                <Plus className="size-4" aria-hidden />
              </span>
            </summary>
            <p className="px-6 pb-6 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
