import { MessageSquareReply } from "lucide-react";

function Metric({ label, value, note, tone = "ink" }: { label: string; value: string; note: string; tone?: "ink" | "brand" | "emerald" }) {
  const toneClass = tone === "brand" ? "text-brand-600" : tone === "emerald" ? "text-emerald-deep" : "text-ink";
  return (
    <div className="flex flex-col gap-1 rounded-lg bg-white p-4 shadow-card ring-1 ring-line">
      <span className="font-label text-label-sm text-muted uppercase">{label}</span>
      <span className={`tabular font-label text-metric-sm lg:text-metric ${toneClass}`}>{value}</span>
      <span className="font-label text-label-sm text-muted">{note}</span>
    </div>
  );
}

export function MarketingDashboard() {
  return (
    <div
      className="flex flex-col gap-5 rounded-2xl bg-surface p-5 shadow-2xl shadow-ink/10 ring-1 ring-line sm:p-7"
      role="img"
      aria-label="Example campaign performance dashboard showing organic traffic growth, return on ad spend, cost per lead and conversion rate"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-h4 text-ink">Campaign Performance</span>
          <span className="font-label text-label-sm text-muted">Example client dashboard · Quarter view</span>
        </div>
        <span className="flex items-center gap-1.5 rounded bg-brand-100 px-2.5 py-1 font-label text-label-sm text-brand-600">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-brand-600" /> Live
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <Metric label="Organic traffic" value="+34.8%" note="↑ Month-on-month" />
        <Metric label="Ad spend ROAS" value="4.2x" note="Target exceeded" tone="brand" />
        <Metric label="Cost per lead" value="£18.40" note="↓ 22% year-on-year" />
        <Metric label="Lead to call" value="18.6%" note="Form to qualified call" tone="emerald" />
      </div>
      <div className="flex flex-col gap-3 rounded-lg bg-white p-5 shadow-card ring-1 ring-line">
        <div className="flex items-center justify-between">
          <span className="font-label text-label-lg text-ink">Search visibility</span>
          <span className="font-label text-label-sm text-brand-600">Index 94.2</span>
        </div>
        <svg aria-hidden className="h-20 w-full overflow-visible" viewBox="0 0 400 80" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="vis-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 65 Q 60 60, 100 48 T 200 40 T 300 22 T 400 10 L 400 80 L 0 80 Z" fill="url(#vis-fill)" />
          <path d="M0 65 Q 60 60, 100 48 T 200 40 T 300 22 T 400 10" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <circle cx="400" cy="10" r="5" fill="#2563EB" />
        </svg>
      </div>
    </div>
  );
}

export function OpsConsole() {
  return (
    <div
      className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-2xl shadow-ink/10 ring-1 ring-line sm:p-7"
      role="img"
      aria-label="Example contact centre console showing calls handled, agents online, queue time and first-call resolution"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex items-center gap-3 text-h4 text-ink">
          <span className="size-2.5 animate-pulse-dot rounded-full bg-emerald" />
          Live Operations
        </span>
        <span className="font-label text-label-sm text-muted">SLA 99.8%</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="flex flex-col gap-1 rounded-lg bg-surface p-4">
          <span className="font-label text-label-sm text-muted">Calls handled today</span>
          <span className="tabular font-label text-metric-sm lg:text-metric text-ink">2,842</span>
          <span className="font-label text-label-sm text-emerald-deep">100% SLA adherence</span>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-surface p-4">
          <span className="font-label text-label-sm text-muted">Agents online</span>
          <span className="tabular font-label text-metric-sm lg:text-metric text-brand-600">64</span>
          <span className="font-label text-label-sm text-muted">Across all shifts</span>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-surface p-4">
          <span className="font-label text-label-sm text-muted">Avg. queue time</span>
          <span className="tabular font-label text-metric-sm lg:text-metric text-ink">0:12</span>
          <span className="font-label text-label-sm text-emerald-deep">Rapid response</span>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-surface p-4">
          <span className="font-label text-label-sm text-muted">First-call resolution</span>
          <span className="tabular font-label text-metric-sm lg:text-metric text-emerald-deep">96.4%</span>
          <span className="font-label text-label-sm text-muted">QA verified</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-lg bg-surface p-4">
        <span className="flex items-center gap-3">
          <MessageSquareReply aria-hidden className="size-5 text-brand-600" />
          <span className="flex flex-col">
            <span className="font-label text-label-lg text-ink">Lead dispatch automation</span>
            <span className="font-label text-label-sm text-muted">Qualification to warm transfer</span>
          </span>
        </span>
        <span className="font-label text-label-sm text-emerald-deep">Synced</span>
      </div>
    </div>
  );
}
