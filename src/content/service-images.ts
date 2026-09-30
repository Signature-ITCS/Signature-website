import type { StaticImageData } from "next/image";
import seo from "../../public/images/services/seo-search-console.jpg";
import localSeo from "../../public/images/services/local-seo-business-profile.jpg";
import googleAds from "../../public/images/services/google-ads-dashboard.jpg";
import socialMedia from "../../public/images/services/social-media-meta-ads.jpg";
import leadGeneration from "../../public/images/services/lead-generation-landing-page.jpg";
import contentMarketing from "../../public/images/services/content-marketing-article.jpg";
import websiteDevelopment from "../../public/images/services/website-development-devices.jpg";
import ecommerce from "../../public/images/services/ecommerce-store.jpg";
import customSoftware from "../../public/images/services/custom-software-portal.jpg";
import crm from "../../public/images/services/crm-dashboard.jpg";
import mobileApps from "../../public/images/services/mobile-app-screens.jpg";
import apiIntegrations from "../../public/images/services/api-integrations-dashboard.jpg";
import graphicDesign from "../../public/images/services/graphic-design-branding.jpg";
import callCentre from "../../public/images/services/call-centre-services.jpg";
import bpo from "../../public/images/services/bpo-services.jpg";
import inbound from "../../public/images/services/inbound-call-handling.jpg";
import outbound from "../../public/images/services/outbound-calling.jpg";

/**
 * One image per service page, shown in the Overview section.
 * - "screenshot": real dashboard screenshots supplied by the client.
 * - "design": project visuals supplied by the client (websites, stores, apps).
 * - "mockup": illustrative screens designed for this site (example data).
 * - "photo": free-licence stock photos from Unsplash (see content/image-credits.md).
 * Replace any of these with real client screenshots or photos by swapping the file
 * in public/images/services/ (keep the same name) or changing the import above.
 */
export type ServiceImage = { src: StaticImageData; alt: string; caption: string; kind: "screenshot" | "design" | "mockup" | "photo" };

export const serviceImages: Record<string, ServiceImage> = {
  seo: {
    src: seo,
    kind: "screenshot",
    alt: "Google Search Console performance report showing total clicks, impressions, average CTR and average position",
    caption: "Google Search Console performance report: clicks, impressions, CTR and average position.",
  },
  "local-seo": {
    src: localSeo,
    kind: "screenshot",
    alt: "Google Business Profile dashboard showing customer interactions, reviews, photos and performance",
    caption: "Google Business Profile management: reviews, photos, services and customer interactions.",
  },
  "google-ads-ppc": {
    src: googleAds,
    kind: "screenshot",
    alt: "Google Ads dashboard showing impressions, conversions, clicks and phone calls",
    caption: "Google Ads dashboard tracking impressions, conversions, clicks and phone calls.",
  },
  "social-media-marketing": {
    src: socialMedia,
    kind: "screenshot",
    alt: "Meta Ads Manager showing Facebook and Instagram lead campaigns with results, reach, impressions and cost per result",
    caption: "Meta Ads Manager: Facebook and Instagram lead campaigns with cost per result.",
  },
  "lead-generation": {
    src: leadGeneration,
    kind: "design",
    alt: "Lead generation landing page on a laptop and phone beside a CRM sheet of new leads",
    caption: "A lead generation landing page with new leads flowing into a CRM sheet.",
  },
  "content-marketing": {
    src: contentMarketing,
    kind: "design",
    alt: "Blog article layout with a table of contents, author details and related posts",
    caption: "A long-form, SEO-friendly article layout with table of contents and related posts.",
  },
  "website-development": {
    src: websiteDevelopment,
    kind: "design",
    alt: "Responsive business website shown on a desktop, laptop, tablet and phone",
    caption: "A responsive business website shown across desktop, laptop, tablet and mobile.",
  },
  "ecommerce-development": {
    src: ecommerce,
    kind: "design",
    alt: "Online store for premium headphones shown on a laptop and a mobile phone",
    caption: "An e-commerce store design shown on desktop and mobile.",
  },
  "custom-software-development": {
    src: customSoftware,
    kind: "design",
    alt: "Custom web platform for a furniture brand with product listings, offers, flash sales and brand pages",
    caption: "A custom-built web platform with product catalogue, offers and flash sales.",
  },
  "crm-development": {
    src: crm,
    kind: "design",
    alt: "CRM dashboard showing total leads, new leads, lead sources, a leads table and upcoming tasks",
    caption: "A custom CRM dashboard: lead pipeline, lead sources, activity and follow-up tasks in one place.",
  },
  "mobile-app-development": {
    src: mobileApps,
    kind: "design",
    alt: "Three mobile app screens: a home dashboard, an article view and a mood tracker",
    caption: "Mobile app screens: home dashboard, content view and mood tracker.",
  },
  "api-integrations": {
    src: apiIntegrations,
    kind: "design",
    alt: "Integrations dashboard connecting Shopify, Stripe, Xero, Slack, Google Drive and Mailchimp through an API",
    caption: "An integrations dashboard connecting e-commerce, payments, accounting and marketing tools.",
  },
  "graphic-design": {
    src: graphicDesign,
    kind: "design",
    alt: "Graphic design service artwork showing a designer's desktop with brand design work, colour swatches and design tools",
    caption: "Logo design, brand identity, social media and print design.",
  },
  "call-centre-services": {
    src: callCentre,
    kind: "photo",
    alt: "Call centre agents wearing headsets working at computers",
    caption: "Dedicated agents handling calls in your business name.",
  },
  "bpo-services": {
    src: bpo,
    kind: "photo",
    alt: "Signature Marketing & Tech office with the team working at desks",
    caption: "Our team at work: scalable back-office and operations support.",
  },
  "inbound-call-handling": {
    src: inbound,
    kind: "photo",
    alt: "Professional call handling agents wearing headsets",
    caption: "Every call answered professionally, day and night.",
  },
  "outbound-calling": {
    src: outbound,
    kind: "photo",
    alt: "Outbound calling agents wearing headsets working at computers",
    caption: "Experienced outbound agents running compliant campaigns.",
  },
  "sales-telemarketing": {
    src: inbound,
    kind: "photo",
    alt: "Sales agents in business attire on calls with headsets",
    caption: "Structured telesales campaigns run by experienced agents.",
  },
};
