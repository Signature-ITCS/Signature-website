export type CaseVisualKind = "triage" | "commerce" | "crm" | "dispatch" | "support" | "leads";

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  client: string;
  location: string;
  visual: CaseVisualKind;
  excerpt: string;
  metaDescription: string;
  challenge: string[];
  approach: { title: string; desc: string }[];
  results: { value: string; label: string }[];
  services: string[];
  duration: string;
  quote: { text: string; role: string; company: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "patient-intake-triage-engine",
    title: "Patient Intake & Triage Engine",
    sector: "Healthcare & Telehealth",
    client: "Private multi-clinic healthcare group",
    location: "London & South East",
    visual: "triage",
    excerpt:
      "A custom online booking and intake portal paired with a 24/7 patient contact desk handling over 15,000 enquiries every month.",
    metaDescription:
      "How Signature built a patient booking portal and 24/7 contact desk for a private healthcare group, cutting missed calls to under 2% and reducing no-shows.",
    challenge: [
      "A growing private healthcare group with six clinics was taking bookings through a mix of phone calls, emails and an outdated web form. Reception teams were overwhelmed, callers waited in long queues and nearly one in five calls went unanswered at peak times.",
      "Patient information was re-typed from forms into the practice management system, creating delays and errors, and there was no reminder process, leading to a costly no-show rate.",
    ],
    approach: [
      { title: "Online booking & intake portal", desc: "A secure, mobile-first booking portal with treatment-specific intake questionnaires, integrated directly with the group’s practice management system." },
      { title: "24/7 patient contact desk", desc: "A dedicated team trained on every clinic, treatment and policy, handling bookings, rescheduling and general enquiries around the clock, with clear escalation for clinical questions." },
      { title: "Automated reminders", desc: "SMS and email confirmations and reminders with one-tap rescheduling to reduce no-shows." },
      { title: "Local SEO per clinic", desc: "Optimised Google Business Profiles and treatment pages for every location." },
    ],
    results: [
      { value: "15,000+", label: "patient enquiries handled per month" },
      { value: "< 2%", label: "missed call rate, down from 19%" },
      { value: "-38%", label: "reduction in appointment no-shows" },
      { value: "64%", label: "of bookings now made online" },
    ],
    services: ["custom-software-development", "inbound-call-handling", "customer-support", "local-seo"],
    duration: "14 weeks to full launch",
    quote: {
      text: "Our reception teams finally have time for the patients in front of them. Calls are answered, bookings flow straight into our system and no-shows have dropped dramatically.",
      role: "Operations Director",
      company: "Private healthcare group, London",
    },
  },
  {
    slug: "multi-store-headless-commerce",
    title: "Multi-Store Headless Commerce Platform",
    sector: "E-commerce & Logistics",
    client: "Home and lifestyle retailer",
    location: "Manchester",
    visual: "commerce",
    excerpt:
      "A legacy catalogue re-platformed onto a high-speed headless storefront with automated, multi-region Google Ads orchestration.",
    metaDescription:
      "How Signature re-platformed a lifestyle retailer onto headless commerce and rebuilt their Google Ads strategy, cutting CPA by 23% and doubling mobile conversion.",
    challenge: [
      "A fast-growing home and lifestyle brand selling in the UK and Ireland had outgrown its heavily customised store. Pages took over six seconds to load on mobile, stock updates were manual and the checkout regularly failed during promotions.",
      "Paid search campaigns were running with broad targeting and no feed optimisation, pushing cost per acquisition steadily upwards.",
    ],
    approach: [
      { title: "Headless storefront", desc: "A Next.js storefront on Shopify Plus, delivering sub-two-second page loads and a fully custom, on-brand experience." },
      { title: "Inventory & 3PL integration", desc: "Real-time stock and order sync between the store, warehouse and marketplaces." },
      { title: "Feed & Shopping overhaul", desc: "Optimised product feeds, restructured Performance Max campaigns and separate regional budgets." },
      { title: "Conversion rate optimisation", desc: "Simplified checkout, express payments and product page testing." },
    ],
    results: [
      { value: "-23%", label: "cost per acquisition on Google Ads" },
      { value: "2.1x", label: "mobile conversion rate" },
      { value: "1.4s", label: "average product page load time" },
      { value: "4.6x", label: "return on ad spend" },
    ],
    services: ["ecommerce-development", "google-ads-ppc", "api-integrations", "seo"],
    duration: "16 weeks build, ongoing growth retainer",
    quote: {
      text: "Their team built our e-commerce platform and rebuilt our entire Google Ads strategy. Our CPA dropped by over 20% while conversions hit record highs.",
      role: "Head of Growth",
      company: "Direct-to-consumer brand, Manchester",
    },
  },
  {
    slug: "commercial-crm-lead-engine",
    title: "Commercial CRM & Lead Engine",
    sector: "Professional Services",
    client: "Commercial property consultancy",
    location: "London",
    visual: "crm",
    excerpt:
      "A proprietary CRM connecting inbound marketing, outbound telemarketing and real-time lead verification in one pipeline.",
    metaDescription:
      "How Signature built a custom CRM and lead engine for a commercial property consultancy, increasing qualified meetings by 3x and speed-to-lead to under five minutes.",
    challenge: [
      "A commercial property consultancy was generating leads from its website, events and referrals, but everything lived in spreadsheets and inboxes. Follow-up could take days and the partners had no visibility of the pipeline.",
      "An outbound calling agency they had used previously produced meetings that rarely fit their criteria.",
    ],
    approach: [
      { title: "Bespoke CRM", desc: "A custom CRM modelled around their deal stages, property types and partner workflows, with no per-seat licence fees." },
      { title: "Instant lead routing", desc: "Website, LinkedIn and event leads pushed into the CRM with SMS alerts and auto-assignment." },
      { title: "Outbound qualification team", desc: "Dedicated agents calling new and dormant leads within minutes and booking qualified meetings into partner calendars." },
      { title: "Partner dashboards", desc: "Real-time pipeline, source and conversion reporting." },
    ],
    results: [
      { value: "3x", label: "qualified meetings per month" },
      { value: "< 5 min", label: "average speed-to-lead" },
      { value: "£0", label: "ongoing CRM licence fees" },
      { value: "100%", label: "pipeline visibility for partners" },
    ],
    services: ["crm-development", "outbound-calling", "lead-generation", "sales-telemarketing"],
    duration: "10 weeks CRM build, ongoing outbound programme",
    quote: {
      text: "Signature resolved our lead drop-off within weeks. Integrating their custom CRM with their outbound team gave us complete control over our pipeline.",
      role: "Managing Director",
      company: "Commercial property group, London",
    },
  },
  {
    slug: "field-service-dispatch-platform",
    title: "Field-Service Dispatch Platform",
    sector: "Home Services",
    client: "Regional plumbing & heating company",
    location: "Birmingham & West Midlands",
    visual: "dispatch",
    excerpt:
      "Local SEO, 24/7 call answering and a job dispatch app that took a trades business from missed calls to a full diary.",
    metaDescription:
      "How Signature combined local SEO, 24/7 call handling and a custom dispatch app to grow booked jobs by 71% for a plumbing and heating company.",
    challenge: [
      "A regional plumbing and heating company with 14 engineers was missing calls every day while engineers were on jobs, and emergency calls at night went to voicemail.",
      "Jobs were allocated by phone and WhatsApp, and paper job sheets meant invoicing was often delayed by weeks.",
    ],
    approach: [
      { title: "Local SEO across 22 towns", desc: "Location pages, Google Business Profile optimisation and review generation across their service area." },
      { title: "24/7 inbound call handling", desc: "Every call answered in their name, with emergency jobs dispatched to the on-call engineer immediately." },
      { title: "Dispatch & engineer app", desc: "A mobile app with job lists, navigation, photos, signatures and instant invoicing." },
      { title: "CRM integration", desc: "Calls, jobs and invoices linked in one system with automated customer updates." },
    ],
    results: [
      { value: "+71%", label: "booked jobs within six months" },
      { value: "100%", label: "of calls answered, day and night" },
      { value: "Top 3", label: "map pack in 18 of 22 target towns" },
      { value: "-9 days", label: "average time to invoice" },
    ],
    services: ["local-seo", "inbound-call-handling", "mobile-app-development", "crm-development"],
    duration: "12 weeks, ongoing marketing & answering",
    quote: {
      text: "We used to lose jobs every day because nobody could pick up the phone. Now every call is answered, the diary is full and invoices go out the same day.",
      role: "Founder",
      company: "Plumbing & heating company, West Midlands",
    },
  },
  {
    slug: "saas-24-7-support-desk",
    title: "24/7 Support Desk for a SaaS Platform",
    sector: "Technology",
    client: "B2B SaaS platform",
    location: "London & international",
    visual: "support",
    excerpt:
      "Round-the-clock omnichannel support integrated with Zendesk, freeing the in-house team to focus on product and enterprise accounts.",
    metaDescription:
      "How Signature delivered 24/7 omnichannel tier-1 support for a B2B SaaS platform, cutting first response time to 14 minutes and lifting CSAT to 94%.",
    challenge: [
      "A B2B SaaS company with customers across Europe and North America was supporting users with a small in-house team working UK hours. Overnight tickets piled up and enterprise customers were frustrated by slow responses.",
      "Engineers were regularly pulled away from product work to answer routine questions.",
    ],
    approach: [
      { title: "Tier-1 support team", desc: "Agents trained on the platform, working inside Zendesk with clear escalation to the client’s engineers." },
      { title: "Knowledge base rebuild", desc: "60+ help articles and macros that improved self-service and consistency." },
      { title: "24/7 coverage", desc: "Follow-the-sun coverage across email, chat and in-app messaging." },
      { title: "Monthly insight reports", desc: "Ticket trends fed back into the product roadmap to reduce volume at source." },
    ],
    results: [
      { value: "14 min", label: "median first response time" },
      { value: "94%", label: "customer satisfaction score" },
      { value: "78%", label: "of tickets resolved at tier 1" },
      { value: "-31%", label: "ticket volume after knowledge base rebuild" },
    ],
    services: ["customer-support", "bpo-services", "content-marketing"],
    duration: "4 weeks onboarding, ongoing",
    quote: {
      text: "Having customer support, software maintenance and search marketing managed seamlessly by one team has freed our leadership to focus on expansion.",
      role: "Chief Operating Officer",
      company: "B2B SaaS platform, London",
    },
  },
  {
    slug: "solar-lead-generation-programme",
    title: "Solar Installer Lead Generation Programme",
    sector: "Home Improvement",
    client: "Solar and battery installer",
    location: "South West England",
    visual: "leads",
    excerpt:
      "A full-funnel lead generation engine combining paid social, Google Ads, landing pages and agent qualification calls.",
    metaDescription:
      "How Signature built a lead generation programme for a solar installer, delivering qualified surveys at 42% lower cost than purchased leads.",
    challenge: [
      "A solar and battery installer was buying shared leads from comparison sites. Leads were expensive, often sold to several competitors and many homeowners were not eligible.",
      "Their small sales team spent most of its time chasing people who never answered.",
    ],
    approach: [
      { title: "Multi-channel campaigns", desc: "Meta and Google Ads targeting homeowners in their service area with a clear savings offer." },
      { title: "Qualification funnel", desc: "A savings calculator landing page capturing roof type, bill size and ownership." },
      { title: "Agent qualification calls", desc: "Every lead called within minutes to confirm eligibility and book a home survey." },
      { title: "CRM & nurture", desc: "Automated follow-up for homeowners not yet ready to proceed." },
    ],
    results: [
      { value: "-42%", label: "cost per qualified survey vs purchased leads" },
      { value: "100%", label: "exclusive leads" },
      { value: "3 min", label: "median time to first call" },
      { value: "2.4x", label: "survey-to-sale conversion" },
    ],
    services: ["lead-generation", "social-media-marketing", "google-ads-ppc", "outbound-calling"],
    duration: "6 weeks to launch, ongoing",
    quote: {
      text: "We stopped buying shared leads completely. Every enquiry is ours, it’s been called within minutes and our surveyors only visit homes that are genuinely suitable.",
      role: "Sales Director",
      company: "Solar installer, South West England",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
