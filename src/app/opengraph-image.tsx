import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – Technology That Drives Growth`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "UK Technology & Digital Solutions",
    title: "Technology That Drives Growth.",
    subtitle: "Digital marketing, software engineering and 24/7 business operations, all under one roof in London.",
  });
}
