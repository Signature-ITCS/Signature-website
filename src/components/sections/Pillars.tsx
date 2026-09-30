import { SectionHeader } from "@/components/ui/SectionHeader";
import { pillars } from "@/content/company";

export function Pillars({
  eyebrow = "Why Signature",
  title = "Built Around Outcomes, Not Just Deliverables",
  description = "We combine strategic consulting discipline with fast, hands-on delivery to build lasting commercial value.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-white section-y">
      <div className="container-page flex flex-col gap-12">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="card-trace group flex flex-col gap-4 rounded-xl bg-surface p-7 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card-hover lg:p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <p.icon aria-hidden className="size-5" />
              </span>
              <h3 className="text-h3 text-ink">{p.title}</h3>
              <p className="text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
