import type { ReactNode } from "react";
import type { CaseVisualKind } from "@/content/case-studies";

const gradients: Record<CaseVisualKind, string> = {
  triage: "from-brand-700 via-brand-600 to-cyan",
  commerce: "from-navy-900 via-brand-800 to-brand-600",
  crm: "from-navy-950 via-navy-900 to-brand-700",
  dispatch: "from-brand-800 via-navy-900 to-navy-950",
  support: "from-brand-600 via-brand-700 to-navy-900",
  leads: "from-navy-900 via-brand-700 to-cyan",
};

function Panel({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-[19rem] rounded-lg bg-white/95 p-3.5 shadow-2xl ring-1 ring-white/40">{children}</div>;
}

function Content({ kind }: { kind: CaseVisualKind }) {
  switch (kind) {
    case "triage":
      return (
        <Panel>
          <p className="mb-2 font-label text-[10px] font-bold tracking-wider text-muted uppercase">Today · Bookings</p>
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className={`h-6 rounded ${[1, 2, 4, 5, 6, 9, 10].includes(i) ? "bg-brand-600" : "bg-brand-100"}`} />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between font-label text-[11px]">
            <span className="text-muted">Calls answered</span>
            <span className="font-bold text-emerald-deep">98.2%</span>
          </div>
        </Panel>
      );
    case "commerce":
      return (
        <Panel>
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="aspect-square rounded bg-gradient-to-br from-brand-100 to-brand-200" />
                <span className="h-1.5 w-3/4 rounded bg-line" />
              </div>
            ))}
          </div>
          <svg aria-hidden viewBox="0 0 200 40" className="mt-3 h-10 w-full" fill="none">
            <path d="M0 34 C 40 30, 60 26, 90 20 S 150 10, 200 4" stroke="#2563EB" strokeWidth="2.5" />
          </svg>
          <div className="flex justify-between font-label text-[11px]">
            <span className="text-muted">Conversion</span>
            <span className="font-bold text-brand-600">2.1x</span>
          </div>
        </Panel>
      );
    case "crm":
      return (
        <Panel>
          <div className="grid grid-cols-3 gap-2">
            {["New", "Qualified", "Won"].map((col, c) => (
              <div key={col} className="flex flex-col gap-1.5">
                <span className="font-label text-[10px] font-bold text-muted uppercase">{col}</span>
                {Array.from({ length: 3 - c + (c === 2 ? 1 : 0) }).map((_, i) => (
                  <span key={i} className={`h-5 rounded ${c === 2 ? "bg-emerald/20 ring-1 ring-emerald/40" : "bg-brand-50 ring-1 ring-brand-200"}`} />
                ))}
              </div>
            ))}
          </div>
        </Panel>
      );
    case "dispatch":
      return (
        <Panel>
          <div className="relative h-20 overflow-hidden rounded bg-brand-50">
            <svg aria-hidden viewBox="0 0 200 80" className="absolute inset-0 h-full w-full" fill="none">
              <path d="M10 70 C 50 20, 90 60, 130 30 S 180 20, 195 10" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            {[
              [18, 60],
              [58, 40],
              [110, 45],
              [160, 22],
            ].map(([x, y], i) => (
              <span key={i} className="absolute size-3 rounded-full bg-brand-600 ring-4 ring-brand-600/20" style={{ left: `${x / 2}%`, top: `${(y / 80) * 100}%` }} />
            ))}
          </div>
          <div className="mt-2.5 flex justify-between font-label text-[11px]">
            <span className="text-muted">Jobs dispatched</span>
            <span className="font-bold text-emerald-deep">+71%</span>
          </div>
        </Panel>
      );
    case "support":
      return (
        <Panel>
          <div className="flex flex-col gap-1.5">
            <span className="h-5 w-3/4 rounded-md rounded-bl-none bg-line" />
            <span className="ml-auto h-5 w-2/3 rounded-md rounded-br-none bg-brand-600" />
            <span className="h-5 w-1/2 rounded-md rounded-bl-none bg-line" />
            <span className="ml-auto h-5 w-3/5 rounded-md rounded-br-none bg-brand-600" />
          </div>
          <div className="mt-3 flex justify-between font-label text-[11px]">
            <span className="text-muted">CSAT</span>
            <span className="font-bold text-emerald-deep">94%</span>
          </div>
        </Panel>
      );
    case "leads":
      return (
        <Panel>
          <div className="flex flex-col items-center gap-1.5">
            {[100, 78, 56, 36].map((w, i) => (
              <span key={w} className="h-5 rounded" style={{ width: `${w}%`, background: `rgb(37 99 235 / ${0.25 + i * 0.25})` }} />
            ))}
          </div>
          <div className="mt-3 flex justify-between font-label text-[11px]">
            <span className="text-muted">Cost per survey</span>
            <span className="font-bold text-emerald-deep">-42%</span>
          </div>
        </Panel>
      );
  }
}

export function CaseVisual({ kind, className = "h-56" }: { kind: CaseVisualKind; className?: string }) {
  return (
    <div aria-hidden className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br p-6 ${gradients[kind]} ${className}`}>
      <div className="grid-bg absolute inset-0 opacity-80" />
      <div className="absolute -top-16 -right-16 size-48 glow-white" />
      <div className="relative w-full transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02] flex justify-center">
        <Content kind={kind} />
      </div>
    </div>
  );
}
