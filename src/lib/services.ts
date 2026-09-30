import type { LucideIcon } from "lucide-react";
import {
  Search,
  MapPin,
  MousePointerClick,
  Share2,
  Funnel,
  PenLine,
  Laptop,
  ShoppingCart,
  SquareTerminal,
  Contact,
  Smartphone,
  Puzzle,
  Palette,
  Headset,
  Network,
  LifeBuoy,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneCall,
} from "lucide-react";

export type ServiceCategory = "marketing" | "technology" | "business";

export const serviceCategories: {
  id: ServiceCategory;
  name: string;
  blurb: string;
}[] = [
  {
    id: "marketing",
    name: "Digital Marketing",
    blurb: "Visibility, demand and qualified leads from search, paid media and social.",
  },
  {
    id: "technology",
    name: "Technology",
    blurb: "Websites, platforms, software and integrations engineered to scale.",
  },
  {
    id: "business",
    name: "Business Solutions",
    blurb: "Call centre, BPO and customer operations that extend your team.",
  },
];

export type ServiceSummary = {
  slug: string;
  name: string;
  navName: string;
  category: ServiceCategory;
  icon: LucideIcon;
  excerpt: string;
  cta: string;
};

export const services: ServiceSummary[] = [
  // Digital marketing
  {
    slug: "seo",
    name: "Search Engine Optimisation",
    navName: "Search Engine Optimisation (SEO)",
    category: "marketing",
    icon: Search,
    excerpt:
      "Increase organic visibility, rankings and qualified traffic with technical, content-led SEO built around commercial keywords.",
    cta: "Explore SEO",
  },
  {
    slug: "local-seo",
    name: "Local SEO & Google Maps",
    navName: "Local SEO & Maps",
    category: "marketing",
    icon: MapPin,
    excerpt:
      "Own the map pack in the towns you serve with Google Business Profile optimisation, citations, reviews and location pages.",
    cta: "Explore Local SEO",
  },
  {
    slug: "google-ads-ppc",
    name: "Google Ads & PPC",
    navName: "Google Ads / PPC Campaigns",
    category: "marketing",
    icon: MousePointerClick,
    excerpt:
      "Performance-focused paid search campaigns managed around cost per lead, return on ad spend and real conversions.",
    cta: "Explore Paid Media",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    navName: "Social Media Marketing",
    category: "marketing",
    icon: Share2,
    excerpt:
      "Organic and paid social campaigns across Meta, LinkedIn and TikTok that build authority and generate demand.",
    cta: "Explore Social",
  },
  {
    slug: "lead-generation",
    name: "B2B & B2C Lead Generation",
    navName: "Lead Generation",
    category: "marketing",
    icon: Funnel,
    excerpt:
      "Full-funnel systems that generate, qualify and route high-intent enquiries straight into your sales pipeline.",
    cta: "Explore Lead Generation",
  },
  {
    slug: "content-marketing",
    name: "Content Strategy & Copywriting",
    navName: "Content Strategy & Copy",
    category: "marketing",
    icon: PenLine,
    excerpt:
      "SEO-driven articles, landing pages and conversion copy that rank, persuade and turn readers into customers.",
    cta: "Explore Content",
  },
  // Technology
  {
    slug: "website-development",
    name: "Website Design & Development",
    navName: "Website Development",
    category: "technology",
    icon: Laptop,
    excerpt:
      "Fast, modern, conversion-focused websites built for Core Web Vitals, search visibility and easy management.",
    cta: "Explore Web Development",
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    navName: "E-commerce Platforms",
    category: "technology",
    icon: ShoppingCart,
    excerpt:
      "Scalable Shopify, WooCommerce and headless stores engineered for speed, stock accuracy and higher checkout conversion.",
    cta: "Explore E-commerce",
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    navName: "Custom Software Solutions",
    category: "technology",
    icon: SquareTerminal,
    excerpt:
      "Bespoke web applications, portals and internal tools designed around the way your business actually works.",
    cta: "Explore Custom Software",
  },
  {
    slug: "crm-development",
    name: "CRM Development & Automation",
    navName: "CRM Architecture",
    category: "technology",
    icon: Contact,
    excerpt:
      "Custom CRM systems and automated pipelines to manage leads, customers, dispatch and day-to-day operations.",
    cta: "Explore CRM",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    navName: "Mobile Applications",
    category: "technology",
    icon: Smartphone,
    excerpt:
      "iOS and Android apps built natively or cross-platform for customers, field teams and internal operations.",
    cta: "Explore Mobile Apps",
  },
  {
    slug: "api-integrations",
    name: "Plugin & API Integrations",
    navName: "Plugin & API Integrations",
    category: "technology",
    icon: Puzzle,
    excerpt:
      "Custom plugins, connectors and automations that make your CRM, website, payments and tools talk to each other.",
    cta: "Explore Integrations",
  },
  {
    slug: "graphic-design",
    name: "Graphic & Brand Design",
    navName: "Graphic & Brand Design",
    category: "technology",
    icon: Palette,
    excerpt:
      "Logos, brand identities, marketing assets and presentation systems that make your business look established.",
    cta: "Explore Brand Design",
  },
  // Business solutions
  {
    slug: "call-centre-services",
    name: "Dedicated Call Centre",
    navName: "Dedicated Call Centre",
    category: "business",
    icon: Headset,
    excerpt:
      "Trained, dedicated agents handling your calls under your brand, backed by clear SLAs and live reporting.",
    cta: "Explore Call Centre",
  },
  {
    slug: "bpo-services",
    name: "Business Process Outsourcing",
    navName: "BPO Operations",
    category: "business",
    icon: Network,
    excerpt:
      "Back-office, data, admin and operational processes delivered by a scalable team, so you can focus on growth.",
    cta: "Explore BPO",
  },
  {
    slug: "customer-support",
    name: "24/7 Customer Support",
    navName: "24/7 Customer Support",
    category: "business",
    icon: LifeBuoy,
    excerpt:
      "Omnichannel support across phone, email, live chat and social, available around the clock under your brand.",
    cta: "Explore Customer Support",
  },
  {
    slug: "inbound-call-handling",
    name: "Inbound Call Handling",
    navName: "Inbound Dispatch & Support",
    category: "business",
    icon: PhoneIncoming,
    excerpt:
      "Never miss a call again. Answering, booking, triage and dispatch handled professionally, day and night.",
    cta: "Explore Inbound",
  },
  {
    slug: "outbound-calling",
    name: "Outbound Calling & Prospecting",
    navName: "Outbound Prospecting",
    category: "business",
    icon: PhoneOutgoing,
    excerpt:
      "Appointment setting, lead follow-up, surveys and re-engagement campaigns run by experienced outbound agents.",
    cta: "Explore Outbound",
  },
  {
    slug: "sales-telemarketing",
    name: "Sales & Telemarketing",
    navName: "Sales & Telemarketing",
    category: "business",
    icon: PhoneCall,
    excerpt:
      "Structured outbound sales teams that qualify prospects, handle objections and close or book warm opportunities.",
    cta: "Explore Telemarketing",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}

export function categoryName(category: ServiceCategory) {
  return serviceCategories.find((c) => c.id === category)!.name;
}
