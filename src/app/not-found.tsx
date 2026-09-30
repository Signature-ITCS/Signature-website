import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const popular = [
  { href: "/services", label: "All services" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/website-development", label: "Website development" },
  { href: "/services/call-centre-services", label: "Call centre" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy-950 pt-28 pb-20">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="container-page relative flex flex-col items-center gap-7 text-center">
            <Eyebrow dark>Error 404</Eyebrow>
            <p aria-hidden className="bg-gradient-to-b from-white to-white/10 bg-clip-text font-label text-[8rem] leading-none font-extrabold text-transparent sm:text-[11rem]">
              404
            </p>
            <h1 className="text-h1-sm text-white lg:text-h1">This page has moved or doesn&apos;t exist.</h1>
            <p className="max-w-xl text-body-lg text-muted-light">
              Let&apos;s get you back on track. Try one of the popular pages below or head back to the homepage.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/" size="lg">
                Back to homepage <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <a href={site.phone.href} className={buttonClasses("dark", "lg")}>
                <Phone aria-hidden className="size-4 text-glow" /> {site.phone.display}
              </a>
            </div>
            <ul className="flex flex-wrap justify-center gap-2 pt-4">
              {popular.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="inline-flex rounded-full bg-white/[0.06] px-4 py-2 font-label text-label text-muted-light ring-1 ring-white/10 hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
