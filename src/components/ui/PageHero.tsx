import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Eyebrow } from "./SectionHeader";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, crumbs, children, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 size-[40rem] glow-blue" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-40 size-[44rem] glow-cyan" />

      <div className="container-page relative">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-8 grid items-center gap-12 ${aside ? "lg:grid-cols-12 lg:gap-10" : ""}`}>
          <div className={`flex flex-col gap-6 ${aside ? "lg:col-span-7" : "max-w-4xl"}`}>
            <Eyebrow dark>{eyebrow}</Eyebrow>
            <h1 className="animate-fade-up text-display-sm text-balance text-white lg:text-display">{title}</h1>
            <p className="max-w-2xl text-body-lg text-pretty text-muted-light lg:text-body-xl">{description}</p>
            {children}
          </div>
          {aside ? <div className="lg:col-span-5">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
