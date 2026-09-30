import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function ContactSection({
  defaultService,
  eyebrow = "Direct Access",
  title = "Let’s Talk About Your Goals",
  description = "Speak directly with our London team. We provide scope reviews, technical assessments and transparent cost estimates, with no obligation.",
}: {
  defaultService?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const options = services.map((s) => ({ value: s.slug, label: s.name }));
  const items = [
    {
      icon: MapPin,
      title: "London Office",
      body: (
        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-600">
          {site.address.line1}
          <br />
          {site.address.locality}, {site.address.city} {site.address.postcode}
        </a>
      ),
    },
    {
      icon: Phone,
      title: "Telephone",
      body: (
        <>
          <a href={site.phone.href} className="tabular font-bold text-brand-600 hover:underline">
            {site.phone.display}
          </a>
          <span className="block text-sm text-muted">{site.hours.display}</span>
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      body: (
        <>
          <a href={site.email.href} className="font-bold break-all text-brand-600 hover:underline">
            {site.email.display}
          </a>
          <span className="block text-sm text-muted">Response within one working day</span>
        </>
      ),
    },
    {
      icon: Clock,
      title: "Support Operations",
      body: <span className="text-muted">Contact centre and support services run 24/7, 365 days a year.</span>,
    },
  ];

  return (
    <section id="consultation" className="bg-white section-y">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-between gap-10 lg:col-span-5">
          <div className="flex flex-col gap-10">
            <SectionHeader eyebrow={eyebrow} title={title} description={description} />
            <ul className="flex flex-col gap-6">
              {items.map((it) => (
                <li key={it.title} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                    <it.icon aria-hidden className="size-5" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-h4 text-ink">{it.title}</p>
                    {it.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="rounded-lg bg-surface p-4 text-sm text-muted ring-1 ring-line">
            <strong className="text-ink">{site.legalName}</strong> is registered in {site.jurisdiction} under Company No.{" "}
            <span className="tabular">{site.companyNumber}</span>.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ContactForm services={options} defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
