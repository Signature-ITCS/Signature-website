import { ArrowRight } from "lucide-react";

const tiers = [
  { tier: "Tier 01", title: "Web & Mobile", note: "Websites, portals and apps" },
  { tier: "Tier 02", title: "API Gateway", note: "Secure, monitored endpoints" },
  { tier: "Tier 03", title: "CRM & Data", note: "One source of truth" },
];

const capabilities = ["Websites", "E-commerce", "Custom CRM", "Mobile Apps", "Custom Software", "APIs & Connectors", "Automation", "Analytics"];

export function ArchitectureDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-6 ring-1 ring-white/10 sm:p-8 lg:p-12">
      <div aria-hidden className="grid-bg absolute inset-0 opacity-70" />
      <div className="relative flex flex-col gap-8">
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {tiers.map((t, i) => (
            <div key={t.title} className="contents">
              <div className="flex flex-col gap-1 rounded-xl bg-navy-950 p-5 text-center ring-1 ring-white/5 transition-all duration-300 hover:shadow-glow hover:ring-cyan/40">
                <span className="font-label text-label-sm text-glow uppercase">{t.tier}</span>
                <span className="text-h4 text-white">{t.title}</span>
                <span className="text-sm text-muted-light">{t.note}</span>
              </div>
              {i < tiers.length - 1 ? (
                <span aria-hidden className="hidden items-center text-glow md:flex">
                  <svg className="h-2 w-10" viewBox="0 0 40 2">
                    <line x1="0" y1="1" x2="40" y2="1" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                  </svg>
                  <ArrowRight className="-ml-1 size-4" />
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4 lg:grid-cols-8">
          {capabilities.map((c) => (
            <li key={c} className="rounded-lg bg-navy-950 px-3 py-3 text-center font-label text-label-sm text-muted-light ring-1 ring-white/5">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
