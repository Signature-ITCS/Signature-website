import { CalendarDays, Phone } from "lucide-react";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";

export function CtaBanner({
  eyebrow = "Let’s talk growth",
  title = "Ready to Build What’s Next?",
  description = "Tell us what you’re trying to achieve. We’ll help you identify the right technology, marketing and operational solution, with a clear plan and transparent pricing.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 section-y">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-600/15 via-glow/10 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[70rem] -translate-x-1/2 glow-blue" />
      <div className="container-page relative flex flex-col items-center gap-7 text-center">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h2 className="max-w-4xl text-display-sm text-balance text-white lg:text-display">{title}</h2>
        <p className="max-w-2xl text-body-lg text-pretty text-muted-light lg:text-body-xl">{description}</p>
        <div className="flex w-full flex-col items-center justify-center gap-4 pt-2 sm:w-auto sm:flex-row">
          <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto">
            Book a Free Consultation
            <CalendarDays aria-hidden className="size-4" />
          </ButtonLink>
          <a href={site.phone.href} className={buttonClasses("dark", "lg", "w-full sm:w-auto")}>
            <Phone aria-hidden className="size-4 text-glow" />
            <span>
              Talk to Our Team <span className="tabular">({site.phone.display})</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
