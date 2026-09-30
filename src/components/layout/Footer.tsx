import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { serviceCategories, servicesByCategory } from "@/lib/services";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/technology", label: "Technology" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog & Insights" },
  { href: "/free-website-audit", label: "Free Website Audit" },
  { href: "/contact", label: "Contact HQ" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-navy-800 bg-navy-950 text-muted-light">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/4 size-[48rem] glow-blue opacity-50" />
      <div className="container-page relative pt-16 lg:pt-20">
        <div className="grid gap-12 border-b border-navy-800 pb-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Logo variant="white" className="h-10 w-auto" />
            <p className="max-w-sm text-sm leading-relaxed">
              Technology, marketing and business-process solutions for ambitious businesses across the United Kingdom.
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={site.phone.href} className="flex items-center gap-3 text-white transition-colors hover:text-glow">
                  <span className="flex size-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                    <Phone aria-hidden className="size-4 text-glow" />
                  </span>
                  <span className="tabular font-semibold">{site.phone.display}</span>
                </a>
              </li>
              <li>
                <a href={site.email.href} className="flex items-center gap-3 transition-colors hover:text-white">
                  <span className="flex size-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                    <Mail aria-hidden className="size-4 text-glow" />
                  </span>
                  {site.email.display}
                </a>
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition-colors hover:text-white">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                    <MapPin aria-hidden className="size-4 text-glow" />
                  </span>
                  <span>
                    {site.address.line1}
                    <br />
                    {site.address.locality}, {site.address.city} {site.address.postcode}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {serviceCategories.map((cat) => (
              <div key={cat.id} className="flex flex-col gap-4">
                <p className="font-label text-label text-white uppercase">{cat.name}</p>
                <ul className="flex flex-col gap-2.5 text-sm">
                  {servicesByCategory(cat.id).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <p className="font-label text-label text-white uppercase">Company</p>
              <ul className="flex flex-col gap-2.5 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-label text-label text-white uppercase">Legal</p>
              <ul className="flex flex-col gap-2.5 text-sm">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-start gap-2 md:items-center">
            <ShieldCheck aria-hidden className="size-4 shrink-0 text-emerald" />
            <span>
              Registered in {site.jurisdiction}, Company No.{" "}
              <a href={site.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="tabular text-white hover:underline">
                {site.companyNumber}
              </a>
              . Registered office: {site.address.line1}, {site.address.locality}, {site.address.city}, {site.address.postcode}.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
