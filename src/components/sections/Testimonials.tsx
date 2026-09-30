import { Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials, type Testimonial } from "@/content/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-6 rounded-xl bg-white p-7 shadow-card ring-1 ring-line lg:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Quote aria-hidden className="size-8 fill-brand-600/10 text-brand-600" />
          <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} aria-hidden className="size-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <blockquote className="text-body-lg text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
      </div>
      <figcaption className="flex items-center gap-3 border-t border-line pt-5">
        <span aria-hidden className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan font-label text-sm font-bold text-white">
          {t.role
            .split(" ")
            .filter((w) => /^[A-Z]/.test(w))
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </span>
        <span className="flex flex-col">
          <span className="font-semibold text-ink">{t.role}</span>
          <span className="text-sm text-muted">{t.company}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ limit = 3 }: { limit?: number }) {
  return (
    <section className="bg-brand-50 section-y">
      <div className="container-page flex flex-col gap-12">
        <SectionHeader
          eyebrow="Client Feedback"
          title="Trusted by Businesses Across the UK"
          description="What our clients say about working with one team for their technology, marketing and operations."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, limit).map((t) => (
            <TestimonialCard key={t.quote} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
