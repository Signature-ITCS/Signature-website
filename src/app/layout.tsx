import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Digital Marketing, Technology & BPO in London`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "digital marketing agency London",
    "SEO agency London",
    "Google Ads management",
    "website development London",
    "custom software development UK",
    "CRM development",
    "mobile app development",
    "outsourced call centre UK",
    "BPO services UK",
    "24/7 customer support outsourcing",
    "lead generation agency",
  ],
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: `${site.name} | Technology That Drives Growth`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Technology That Drives Growth`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${manrope.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
