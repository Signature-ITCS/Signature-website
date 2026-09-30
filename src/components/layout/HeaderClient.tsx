"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { serviceCategories, servicesByCategory } from "@/lib/services";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { buttonClasses } from "@/components/ui/Button";

type IndustryLink = { slug: string; name: string; excerpt: string };
type MenuId = "services" | "industries" | null;

const primaryLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/technology", label: "Technology" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function HeaderClient({ industries }: { industries: IndustryLink[] }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const open = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const navItem = (active: boolean) =>
    `relative flex h-full items-center gap-1 whitespace-nowrap font-label text-label-lg transition-colors ${
      active ? "text-white" : "text-muted-light hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen || openMenu
          ? "border-navy-800/80 bg-navy-950/90 backdrop-blur-xl"
          : "border-transparent bg-navy-950/60 backdrop-blur-md"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo variant="white" className="h-8 w-auto sm:h-9" priority />

        <nav aria-label="Main" className="hidden h-full items-center gap-6 xl:flex">
          {/* Services mega menu */}
          <div className="h-full" onMouseEnter={() => open("services")} onMouseLeave={scheduleClose}>
            <button
              type="button"
              className={navItem(isActive("/services"))}
              aria-expanded={openMenu === "services"}
              aria-controls="menu-services"
              onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            >
              Services
              <ChevronDown
                aria-hidden
                className={`size-4 transition-transform duration-200 ${openMenu === "services" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id="menu-services"
              className={`absolute inset-x-0 top-full pt-2 transition-all duration-200 ${
                openMenu === "services" ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="container-page">
              <div className="mx-auto grid max-w-6xl grid-cols-[1fr_1fr_1fr_15rem] gap-8 rounded-xl border border-white/10 bg-navy-900 p-7 shadow-2xl shadow-black/40">
                {serviceCategories.map((cat) => (
                  <div key={cat.id} className="flex flex-col gap-3">
                    <p className="border-b border-white/10 pb-3 font-label text-label text-white uppercase">{cat.name}</p>
                    <ul className="flex flex-col gap-1">
                      {servicesByCategory(cat.id).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className={`-mx-2 flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-white/5 hover:text-white ${
                              pathname === `/services/${s.slug}` ? "text-white" : "text-muted-light"
                            }`}
                          >
                            <s.icon aria-hidden className="size-4 shrink-0 text-glow" />
                            {s.navName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex flex-col justify-between gap-4 rounded-lg bg-gradient-to-br from-brand-600/30 to-glow/10 p-5 ring-1 ring-white/10">
                  <div className="flex flex-col gap-2">
                    <p className="font-label text-label-sm text-glow uppercase">Not sure where to start?</p>
                    <p className="text-h4 text-white">Get a free growth consultation</p>
                    <p className="text-sm text-muted-light">
                      We&apos;ll review your goals and recommend the right mix of services.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href="/free-website-audit" className="inline-flex items-center gap-1.5 font-label text-label-lg text-glow hover:text-white">
                      Free website audit <ArrowRight aria-hidden className="size-4" />
                    </Link>
                    <Link href="/services" className="inline-flex items-center gap-1.5 font-label text-label-lg text-white hover:text-glow">
                      View all services <ArrowRight aria-hidden className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Industries dropdown */}
          <div className="relative h-full" onMouseEnter={() => open("industries")} onMouseLeave={scheduleClose}>
            <button
              type="button"
              className={navItem(isActive("/industries"))}
              aria-expanded={openMenu === "industries"}
              aria-controls="menu-industries"
              onClick={() => setOpenMenu(openMenu === "industries" ? null : "industries")}
            >
              Industries
              <ChevronDown
                aria-hidden
                className={`size-4 transition-transform duration-200 ${openMenu === "industries" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id="menu-industries"
              className={`absolute top-full left-1/2 w-[600px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                openMenu === "industries" ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="rounded-xl border border-white/10 bg-navy-900 p-5 shadow-2xl shadow-black/40">
                <ul className="grid grid-cols-2 gap-1">
                  {industries.map((i) => (
                    <li key={i.slug}>
                      <Link
                        href={`/industries/${i.slug}`}
                        className="flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-white/5"
                      >
                        <span className="text-sm font-semibold text-white">{i.name}</span>
                        <span className="line-clamp-1 text-xs text-muted-light">{i.excerpt}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/industries"
                  className="mt-3 flex items-center justify-between rounded-md border-t border-white/10 px-3 pt-4 font-label text-label-lg text-glow hover:text-white"
                >
                  Explore all industries <ArrowRight aria-hidden className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          {primaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className={navItem(isActive(l.href))} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 font-label text-label-lg text-white transition-colors hover:text-glow md:flex xl:hidden 2xl:flex"
          >
            <Phone aria-hidden className="size-4 text-glow" />
            <span className="tabular">{site.phone.display}</span>
          </a>
          <div className="hidden sm:block">
            <Link href="/contact" className={buttonClasses("primary", "md")}>
              <span>
                <span className="xl:hidden">Get a </span>Free Consultation
              </span>
            </Link>
          </div>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-lg text-white ring-1 ring-white/15 transition-colors hover:bg-white/10 xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-navy-950 transition-all duration-300 xl:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col gap-2 py-6">
          {serviceCategories.map((cat) => (
            <details key={cat.id} className="group rounded-lg border border-white/10 bg-navy-900/60">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 font-semibold text-white [&::-webkit-details-marker]:hidden">
                {cat.name}
                <ChevronDown aria-hidden className="size-4 text-muted-light transition-transform group-open:rotate-180" />
              </summary>
              <ul className="flex flex-col gap-1 px-2 pb-3">
                {servicesByCategory(cat.id).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm text-muted-light hover:bg-white/5 hover:text-white"
                    >
                      <s.icon aria-hidden className="size-4 text-glow" />
                      {s.navName}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <details className="group rounded-lg border border-white/10 bg-navy-900/60">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 font-semibold text-white [&::-webkit-details-marker]:hidden">
              Industries
              <ChevronDown aria-hidden className="size-4 text-muted-light transition-transform group-open:rotate-180" />
            </summary>
            <ul className="grid grid-cols-2 gap-1 px-2 pb-3">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="block rounded-md px-2 py-2.5 text-sm text-muted-light hover:bg-white/5 hover:text-white"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <ul className="mt-2 flex flex-col">
            {[{ href: "/services", label: "All Services" }, ...primaryLinks, { href: "/free-website-audit", label: "Free Website Audit" }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex items-center justify-between border-b border-white/5 px-1 py-4 text-lg font-semibold text-white"
                >
                  {l.label}
                  <ArrowRight aria-hidden className="size-4 text-muted-light" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/contact" className={buttonClasses("primary", "lg", "w-full")}>
              Get a Free Consultation
            </Link>
            <a href={site.phone.href} className={buttonClasses("dark", "lg", "w-full")}>
              <Phone aria-hidden className="size-4 text-glow" /> Call {site.phone.display}
            </a>
            <a href={site.email.href} className="py-2 text-center text-sm text-muted-light hover:text-white">
              {site.email.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
