import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Blocks,
  TrendingUp,
  ChartColumn,
  BadgeCheck,
  Handshake,
  Megaphone,
  Activity,
  Inbox,
  Database,
  BadgePoundSterling,
  Headset,
  Repeat,
} from "lucide-react";

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "We review your current setup, market position, conversion bottlenecks and commercial growth targets.",
  },
  {
    step: "02",
    title: "Strategise",
    desc: "We build a practical roadmap covering marketing, technology and staffing, with clear milestones and KPIs.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our team designs, engineers and launches the platforms, campaigns and operational workstreams you need.",
  },
  {
    step: "04",
    title: "Grow",
    desc: "We optimise continuously, monitor SLAs, expand high-ROI channels and scale what works.",
  },
];

export const pillars: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Building2,
    title: "Business First",
    desc: "Every technology and marketing investment is tied to clear commercial KPIs, profitability and operational reality.",
  },
  {
    icon: Blocks,
    title: "Integrated Expertise",
    desc: "Marketers, engineers and operations specialists working as one team, so nothing gets lost between suppliers.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "Modular platforms, CRMs and support teams designed to expand smoothly as your volumes grow.",
  },
  {
    icon: ChartColumn,
    title: "Data Driven",
    desc: "Decisions guided by analytics, attribution and testing rather than guesswork or opinion.",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Support",
    desc: "A named account manager, transparent communication and proactive monitoring of everything we run.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We focus on compounding, multi-year growth rather than one-off projects and hand-offs.",
  },
];

export const ecosystem: { icon: LucideIcon; label: string }[] = [
  { icon: Megaphone, label: "Marketing" },
  { icon: Activity, label: "Traffic" },
  { icon: Inbox, label: "Leads" },
  { icon: Database, label: "CRM" },
  { icon: BadgePoundSterling, label: "Sales" },
  { icon: Headset, label: "Support" },
  { icon: Repeat, label: "Retention" },
];

export const techStack: { group: string; items: string[] }[] = [
  { group: "Marketing & Analytics", items: ["Google Ads", "Google Analytics 4", "Search Console", "Tag Manager", "Meta Ads", "LinkedIn Ads", "Semrush", "Looker Studio"] },
  { group: "Web & Commerce", items: ["Next.js", "React", "WordPress", "WooCommerce", "Shopify", "Webflow", "Tailwind CSS", "Vercel"] },
  { group: "Software & Mobile", items: ["TypeScript", "Node.js", "Python", "PostgreSQL", "React Native", "Flutter", "AWS", "Google Cloud"] },
  { group: "CRM & Operations", items: ["HubSpot", "Salesforce", "Zoho", "Pipedrive", "Zendesk", "Freshdesk", "Twilio", "Stripe"] },
];

export const techStackFlat = [
  "Google Ads",
  "Google Analytics 4",
  "Google Search Console",
  "Next.js",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "HubSpot",
  "Salesforce",
  "Zendesk",
  "REST APIs",
  "AWS & Cloud",
  "Marketing Automation",
  "Twilio Voice",
];
