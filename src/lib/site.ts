export const site = {
  name: "Signature Marketing & Tech",
  legalName: "Signature Marketing & Tech Ltd",
  shortName: "Signature",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://signature24hrs.com").replace(/\/$/, ""),
  tagline: "Technology That Drives Growth.",
  description:
    "Signature Marketing & Tech is a London-based technology, digital marketing and BPO company. SEO, Google Ads, websites, custom software, CRM, mobile apps, call centre and 24/7 customer support under one roof.",
  phone: {
    display: "07878 756103",
    href: "tel:+447878756103",
    e164: "+447878756103",
  },
  email: {
    display: "info@signature24hrs.com",
    href: "mailto:info@signature24hrs.com",
  },
  companyNumber: "17439568",
  jurisdiction: "England & Wales",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/17439568",
  address: {
    line1: "Office 1926, 60 Tottenham Court Road",
    locality: "Fitzrovia",
    city: "London",
    postcode: "W1T 2EW",
    country: "United Kingdom",
    countryCode: "GB",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=60+Tottenham+Court+Road+London+W1T+2EW",
  hours: {
    display: "Mon – Fri, 08:30 – 18:00",
    support: "24/7 support operations",
  },
  locale: "en_GB",
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.locality}, ${site.address.city}, ${site.address.postcode}, ${site.address.country}`;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
