import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is instead of applying the site title template. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  /** Set false when the route segment has its own opengraph-image file. */
  defaultImage?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
  defaultImage = true,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${site.shortName}`;
  // A page-level openGraph object replaces the inherited one, so re-attach the site-wide image.
  const images = defaultImage ? [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }] : undefined;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: site.locale,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}

const orgId = `${site.url}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: site.name,
        legalName: site.legalName,
        alternateName: "Signature",
        url: site.url,
        logo: absoluteUrl("/brand/logo-dark.png"),
        image: absoluteUrl("/opengraph-image"),
        description: site.description,
        telephone: site.phone.e164,
        email: site.email.display,
        priceRange: "££",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "Companies House company number",
          value: site.companyNumber,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: site.address.city,
          addressRegion: "Greater London",
          postalCode: site.address.postcode,
          addressCountry: site.address.countryCode,
        },
        geo: { "@type": "GeoCoordinates", latitude: 51.5192, longitude: -0.1343 },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "City", name: "London" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "18:00",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone.e164,
            email: site.email.display,
            contactType: "sales",
            areaServed: "GB",
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            telephone: site.phone.e164,
            contactType: "customer support",
            areaServed: "GB",
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          },
        ],
        sameAs: [site.companiesHouseUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": orgId },
        inLanguage: "en-GB",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string; category: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.name,
    category: input.category,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "United Kingdom" },
  };
}

export function articleJsonLd(input: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    image: absoluteUrl(`${input.path}/opengraph-image`),
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    inLanguage: "en-GB",
  };
}

export function blogPostingJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedAt: string;
  updatedAt: string;
  authorName?: string;
  section?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    image: input.image ?? absoluteUrl("/opengraph-image"),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    author: input.authorName ? { "@type": "Person", name: input.authorName } : { "@id": orgId },
    publisher: { "@id": orgId },
    articleSection: input.section,
    inLanguage: "en-GB",
  };
}
