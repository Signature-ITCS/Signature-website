import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Free Website Audit from Signature Marketing & Tech";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Free Website Audit",
    title: "Find Out What's Holding Your Website Back.",
    subtitle: "Free expert review of your SEO, speed, mobile experience and conversions, delivered within two working days.",
  });
}
