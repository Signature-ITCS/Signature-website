import { SectionHeader } from "@/components/ui/SectionHeader";

type Step = { title: string; desc: string };

export function ProcessSteps({ steps, dark = false }: { steps: Step[]; dark?: boolean }) {
  return (
    <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div
        aria-hidden
        className={`pointer-events-none absolute top-12 right-[12%] left-[12%] hidden h-px lg:block ${
          dark ? "bg-gradient-to-r from-transparent via-glow/40 to-transparent" : "bg-gradient-to-r from-transparent via-brand-600/30 to-transparent"
        }`}
      />
      {steps.map((s, i) => (
        <li
          key={s.title}
          className={`card-trace relative flex flex-col gap-4 rounded-xl p-7 lg:p-8 ${
            dark ? "bg-navy-900 ring-1 ring-white/10" : "bg-white shadow-card ring-1 ring-line"
          }`}
        >
          <span
            className={`font-label text-metric-sm tabular ${dark ? "text-white/5" : "text-brand-50"}`}
            style={{ WebkitTextStroke: dark ? "1px rgb(123 208 255 / 0.5)" : "1px rgb(37 99 235 / 0.35)" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={`text-h3 ${dark ? "text-white" : "text-ink"}`}>{s.title}</h3>
          <p className={dark ? "text-muted-light" : "text-muted"}>{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function ProcessSection({
  steps,
  eyebrow = "Methodology",
  title = "How We Work",
  description = "A disciplined, outcome-focused process that removes guesswork and delivers predictable commercial impact.",
}: {
  steps: Step[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-canvas section-y">
      <div className="container-page flex flex-col gap-12">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
