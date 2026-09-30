import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

export const alt = "Signature Marketing & Tech case study";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug)!;
  const top = study.results[0];
  return renderOgImage({
    eyebrow: `Case Study · ${study.sector}`,
    title: study.title,
    subtitle: `${top.value} ${top.label}`,
  });
}
