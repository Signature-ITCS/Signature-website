import { ArrowRightLeft, Network, Zap } from "lucide-react";

const bars = [38, 55, 47, 70, 62, 84, 78, 100];

export function HeroConsole() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-3xl glow-blue opacity-80" />
      <div
        className="relative overflow-hidden rounded-2xl bg-navy-900/90 p-5 shadow-2xl ring-1 ring-white/10 sm:p-6"
        role="img"
        aria-label="Illustration of a live operations console showing an API gateway, CRM pipeline sync and lead automation"
      >
        <div aria-hidden className="grid-bg absolute inset-0 opacity-60" />
        <div className="relative flex flex-col gap-4">
          {/* Window chrome */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>
            <span className="font-label text-label-sm text-muted-light uppercase">signature.ops / live</span>
          </div>

          {/* Node 1 */}
          <div className="flex items-center justify-between gap-3 rounded-xl bg-navy-950/80 p-4 ring-1 ring-white/5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-600/20 text-glow">
                <Network aria-hidden className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white sm:text-base">API Gateway</span>
                <span className="font-label text-label-sm text-muted-light">Websites · CRM · Telephony</span>
              </div>
            </div>
            <span className="flex items-center gap-1.5 rounded bg-emerald/15 px-2.5 py-1 font-label text-label-sm text-emerald ring-1 ring-emerald/25">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald" />
              99.9% Uptime
            </span>
          </div>

          {/* Connector */}
          <svg aria-hidden className="mx-auto h-6 w-2" viewBox="0 0 2 24">
            <line x1="1" y1="0" x2="1" y2="24" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
          </svg>

          {/* Node 2 */}
          <div className="flex flex-col gap-3 rounded-xl bg-navy-950/80 p-4 ring-1 ring-white/5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-label text-label-lg text-white">
                <ArrowRightLeft aria-hidden className="size-4 text-glow" />
                CRM Pipeline Sync
              </span>
              <span className="font-label text-label-sm text-glow">Live</span>
            </div>
            <div className="flex h-20 items-end gap-2 pt-2">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-t ${i === bars.length - 1 ? "bg-glow shadow-[0_0_14px_rgb(123_208_255/0.6)]" : "bg-brand-600"}`}
                  style={{ height: `${h}%`, opacity: i === bars.length - 1 ? 1 : 0.35 + i * 0.08 }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between font-label text-label-sm text-muted-light">
              <span>Qualified leads this week</span>
              <span className="tabular text-white">+128</span>
            </div>
          </div>

          {/* Node 3 */}
          <div className="flex items-center justify-between gap-3 rounded-xl bg-navy-950/80 p-4 ring-1 ring-white/5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-cyan/15 text-glow">
                <Zap aria-hidden className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="font-label text-label-lg text-white">Lead Automation</span>
                <span className="font-label text-label-sm text-muted-light">Instant call-back dispatched</span>
              </div>
            </div>
            <span className="font-label text-label-sm text-emerald">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
