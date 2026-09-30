import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";

export const LEGAL_UPDATED = "28 September 2026";

export function LegalPage({
  title,
  description,
  path,
  toc,
  children,
}: {
  title: string;
  description: string;
  path: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} crumbs={[{ name: title, path }]}>
        <p className="font-label text-label text-muted-light">Last updated: {LEGAL_UPDATED}</p>
      </PageHero>
      <section className="bg-white section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="On this page" className="sticky top-28 flex flex-col gap-3 rounded-xl bg-surface p-5 ring-1 ring-line">
              <p className="font-label text-label text-muted uppercase">On this page</p>
              <ol className="flex flex-col gap-2 text-sm">
                {toc.map((t, i) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-muted transition-colors hover:text-brand-600">
                      {i + 1}. {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="prose-signature max-w-3xl lg:col-span-9">{children}</div>
        </div>
      </section>
    </>
  );
}
