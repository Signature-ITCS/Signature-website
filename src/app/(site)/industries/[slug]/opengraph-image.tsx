import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { getIndustry, industries } from "@/content/industries";

export const alt = "Signature Marketing & Tech industry solutions";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug)!;
  return renderOgImage({
    eyebrow: `Industries · ${industry.name}`,
    title: `Growth Solutions for ${industry.name}`,
    subtitle: industry.headline,
  });
}
