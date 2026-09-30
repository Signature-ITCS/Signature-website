import { ExternalLink, Mail, Phone, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export function StatutoryPanel() {
  const rows = [
    { label: "Registered company name", value: site.legalName },
    { label: "Company registration number", value: `${site.companyNumber} (${site.jurisdiction})` },
    {
      label: "Registered office",
      value: `${site.address.line1}, ${site.address.locality}, ${site.address.city}, ${site.address.postcode}`,
    },
  ];
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-7 shadow-card-hover ring-1 ring-line lg:p-8">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-lg bg-emerald/10 text-emerald-deep">
          <ShieldCheck aria-hidden className="size-6" />
        </span>
        <div className="flex flex-col">
          <p className="text-h4 text-ink">UK Statutory Information</p>
          <p className="font-label text-label-sm text-muted uppercase">Registered with Companies House</p>
        </div>
      </div>
      <dl className="flex flex-col gap-4">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-0.5 border-b border-line pb-4 last:border-0 last:pb-0">
            <dt className="font-label text-label-sm text-muted uppercase">{r.label}</dt>
            <dd className="font-semibold text-ink">{r.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-col gap-2.5 border-t border-line pt-5">
        <a href={site.phone.href} className="flex items-center gap-2 font-semibold text-brand-600 hover:underline">
          <Phone aria-hidden className="size-4" /> <span className="tabular">{site.phone.display}</span>
        </a>
        <a href={site.email.href} className="flex items-center gap-2 font-semibold text-brand-600 hover:underline">
          <Mail aria-hidden className="size-4" /> {site.email.display}
        </a>
        <a
          href={site.companiesHouseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted hover:text-brand-600"
        >
          <ExternalLink aria-hidden className="size-4" /> View on Companies House
        </a>
      </div>
    </div>
  );
}
