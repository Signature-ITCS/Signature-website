import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { categoryName, getService, services } from "@/lib/services";
import { getServiceContent } from "@/content/services";

export const alt = "Signature Marketing & Tech service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug)!;
  const content = getServiceContent(slug)!;
  return renderOgImage({
    eyebrow: categoryName(service.category),
    title: service.name,
    subtitle: content.heroSubtitle,
  });
}
