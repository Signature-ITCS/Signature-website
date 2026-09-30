import type { LucideIcon } from "lucide-react";
import {
  Car,
  Scale,
  Stethoscope,
  Store,
  Wrench,
  Hotel,
  Truck,
  House,
  ShoppingBag,
  Cpu,
  Landmark,
  MapPinned,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  services: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    excerpt: "Dealerships, garages and vehicle services that need more bookings and faster lead response.",
    metaTitle: "Digital Marketing & Technology for Automotive Businesses",
    metaDescription:
      "Marketing, websites, CRM and call handling for car dealerships, garages and automotive services. Generate more test drives, MOT bookings and vehicle enquiries.",
    headline: "Drive more test drives, bookings and vehicle enquiries",
    intro:
      "Car buyers research online for weeks before visiting a forecourt, and garage customers book whoever answers first. We help automotive businesses win both moments with high-intent marketing, fast websites and instant lead response.",
    challenges: [
      { title: "Slow lead response", desc: "Online vehicle enquiries go cold when sales teams take hours to reply." },
      { title: "Rising portal costs", desc: "Heavy reliance on third-party listing portals erodes margins." },
      { title: "Missed service calls", desc: "Workshops lose bookings when phones ring out during busy periods." },
    ],
    solutions: [
      { title: "Local SEO for every site", desc: "Map pack visibility for “garage near me”, MOT and servicing searches." },
      { title: "Stock-driven Google Ads", desc: "Vehicle ads linked to live stock with call and form tracking." },
      { title: "CRM & instant follow-up", desc: "Enquiries routed instantly with automated SMS and agent callbacks." },
      { title: "Inbound booking team", desc: "Service and MOT bookings answered and scheduled 7 days a week." },
    ],
    services: ["local-seo", "google-ads-ppc", "crm-development", "inbound-call-handling"],
    faqs: [
      { q: "Can you integrate with our dealer management system?", a: "Yes. We integrate with most DMS and stock feed providers to power websites, ads and CRM workflows." },
      { q: "Do you work with independent garages?", a: "Yes. We work with independent garages, franchised dealers and specialist automotive service providers." },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Scale,
    excerpt: "Law firms, accountants and consultancies building authority and a pipeline of quality clients.",
    metaTitle: "Marketing & Technology for Law Firms, Accountants & Consultants",
    metaDescription:
      "SEO, websites, CRM and client intake solutions for solicitors, accountants and consultancies. Build authority and win higher-value clients.",
    headline: "Win higher-value clients with authority and speed",
    intro:
      "Clients choose professional advisers they trust, and trust starts online. We help firms demonstrate expertise, rank for the matters they want more of and run a smooth, compliant client intake process.",
    challenges: [
      { title: "Commoditised enquiries", desc: "Too many low-value enquiries and not enough of the work you want." },
      { title: "Outdated websites", desc: "Sites that fail to reflect the quality and expertise of the firm." },
      { title: "Manual intake", desc: "Time-consuming conflict checks, onboarding and follow-up." },
    ],
    solutions: [
      { title: "Practice-area SEO", desc: "Content and pages targeting the specific matters and sectors you serve." },
      { title: "Authority content", desc: "Guides, insights and case studies that demonstrate genuine expertise." },
      { title: "Client portals", desc: "Secure document exchange, onboarding forms and status updates." },
      { title: "Intake call handling", desc: "Trained agents screening new enquiries and booking consultations." },
    ],
    services: ["seo", "content-marketing", "custom-software-development", "inbound-call-handling"],
    faqs: [
      { q: "Do you understand SRA and ICAEW marketing rules?", a: "Yes. We write content that is accurate, avoids misleading claims and supports your regulatory obligations. Final sign-off always sits with your compliance team." },
      { q: "Can you build a secure client portal?", a: "Yes. We build portals with role-based access, encryption and audit trails for sensitive documents." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    excerpt: "Private clinics, dental practices and health providers improving patient acquisition and access.",
    metaTitle: "Healthcare Marketing, Patient Booking & Support Solutions",
    metaDescription:
      "Patient acquisition, booking systems and 24/7 patient support for private clinics, dental practices and healthcare providers across the UK.",
    headline: "Fill appointment books and improve patient access",
    intro:
      "Patients expect to find, compare and book care as easily as any other service. We help private clinics and healthcare providers attract the right patients, streamline booking and respond to every enquiry promptly and sensitively.",
    challenges: [
      { title: "Competitive local search", desc: "Patients compare several clinics online before booking." },
      { title: "Busy reception teams", desc: "Calls go unanswered while staff focus on patients in front of them." },
      { title: "Fragmented systems", desc: "Booking, reminders and records live in separate tools." },
    ],
    solutions: [
      { title: "Treatment-focused SEO", desc: "Pages and content for each treatment, optimised for local search." },
      { title: "Online booking & intake", desc: "Booking flows and digital intake forms integrated with your practice system." },
      { title: "Patient contact centre", desc: "Trained agents handling booking, rescheduling and general enquiries." },
      { title: "Reminder automation", desc: "SMS and email reminders that reduce no-shows." },
    ],
    services: ["local-seo", "website-development", "inbound-call-handling", "customer-support"],
    faqs: [
      { q: "How do you handle patient data?", a: "We follow UK GDPR, minimise data collection, use secure systems and sign data processing agreements. We never provide clinical advice." },
      { q: "Do you follow ASA and CAP rules for healthcare advertising?", a: "Yes. Our campaigns avoid misleading claims and follow ASA/CAP guidance and platform healthcare advertising policies." },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: Store,
    excerpt: "Online brands scaling revenue with faster stores, profitable ads and responsive support.",
    metaTitle: "E-commerce Growth: Stores, Ads, SEO & Customer Support",
    metaDescription:
      "End-to-end e-commerce growth for online brands. Shopify and WooCommerce development, Google Shopping, SEO and 24/7 customer support.",
    headline: "Scale revenue without scaling headaches",
    intro:
      "Growing an online brand means juggling store performance, ad efficiency, stock, fulfilment and customer service at once. We bring every piece together so you can grow profitably.",
    challenges: [
      { title: "Rising acquisition costs", desc: "Ad costs climb while conversion rates stay flat." },
      { title: "Slow, clunky stores", desc: "Poor mobile performance and checkout friction lose sales." },
      { title: "Support overload", desc: "“Where is my order?” emails bury the team during peaks." },
    ],
    solutions: [
      { title: "High-performance stores", desc: "Shopify, WooCommerce and headless builds optimised for speed and conversion." },
      { title: "Shopping & Performance Max", desc: "Feed-optimised campaigns managed to target ROAS." },
      { title: "E-commerce SEO", desc: "Category and product optimisation for sustainable organic revenue." },
      { title: "Outsourced support", desc: "24/7 email, chat and social support integrated with your helpdesk." },
    ],
    services: ["ecommerce-development", "google-ads-ppc", "seo", "customer-support"],
    faqs: [
      { q: "Do you handle peak season support?", a: "Yes. We scale agent capacity for Black Friday, Christmas and product launches." },
      { q: "Can you connect our store to our warehouse?", a: "Yes. We integrate stores with 3PLs, ERPs, marketplaces and accounting software." },
    ],
  },
  {
    slug: "home-services",
    name: "Home Services",
    icon: Wrench,
    excerpt: "Trades and home improvement companies that need a steady flow of local jobs.",
    metaTitle: "Marketing & Call Handling for Trades and Home Services",
    metaDescription:
      "Local SEO, Google Ads, websites and 24/7 call answering for plumbers, electricians, builders, roofers and home improvement companies.",
    headline: "A steady flow of local jobs, every week",
    intro:
      "Homeowners search, call and book fast, often in an emergency. We help trades and home improvement businesses appear first, answer every call and turn enquiries into booked jobs.",
    challenges: [
      { title: "Missed calls on the job", desc: "You can’t answer the phone halfway up a ladder." },
      { title: "Unreliable lead sources", desc: "Shared leads from directories are expensive and low quality." },
      { title: "Admin overload", desc: "Quotes, scheduling and invoicing eat into evenings and weekends." },
    ],
    solutions: [
      { title: "Map pack domination", desc: "Local SEO for every town you cover and every service you offer." },
      { title: "Local Google Ads", desc: "Call-focused campaigns and Local Services Ads for urgent jobs." },
      { title: "24/7 call answering", desc: "Every call answered, qualified and booked, even at night." },
      { title: "Job management CRM", desc: "Quotes, scheduling, reminders and invoices in one simple system." },
    ],
    services: ["local-seo", "google-ads-ppc", "inbound-call-handling", "crm-development"],
    faqs: [
      { q: "Can you handle emergency call-outs overnight?", a: "Yes. Our inbound team follows your escalation rules and alerts your on-call engineer immediately." },
      { q: "Will the leads be exclusive?", a: "Yes. Leads from your own website, ads and listings are 100% yours and never shared." },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    excerpt: "Hotels, restaurants and venues driving direct bookings and memorable guest experiences.",
    metaTitle: "Hospitality Marketing, Direct Bookings & Guest Support",
    metaDescription:
      "Digital marketing, websites and reservations support for hotels, restaurants and venues. Increase direct bookings and reduce commission fees.",
    headline: "More direct bookings, fewer commission fees",
    intro:
      "Online travel agents and delivery platforms take a big slice of every booking. We help hospitality businesses build their own demand, drive direct bookings and deliver responsive guest communication.",
    challenges: [
      { title: "OTA dependence", desc: "High commissions on bookings you could take directly." },
      { title: "Seasonal demand", desc: "Busy peaks and quiet periods that are hard to plan for." },
      { title: "Reservation overload", desc: "Phones and inboxes overwhelmed at peak times." },
    ],
    solutions: [
      { title: "Booking-focused websites", desc: "Fast, visual sites with integrated booking engines." },
      { title: "Social & local marketing", desc: "Instagram, TikTok and local SEO that fill tables and rooms." },
      { title: "Reservations team", desc: "Agents handling bookings, amendments and enquiries by phone and chat." },
      { title: "Guest communication", desc: "Automated pre-arrival, review and rebooking messages." },
    ],
    services: ["website-development", "social-media-marketing", "local-seo", "customer-support"],
    faqs: [
      { q: "Can you integrate our booking engine?", a: "Yes. We work with leading hotel booking engines, table reservation systems and channel managers." },
      { q: "Do you create content for social media?", a: "Yes. Our creative team produces photos, reels and graphics that showcase your venue." },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: Truck,
    excerpt: "Couriers, hauliers and fulfilment providers streamlining operations and customer communication.",
    metaTitle: "Technology & Customer Operations for Logistics Companies",
    metaDescription:
      "Custom software, tracking portals, dispatch systems and customer support for courier, haulage and fulfilment companies.",
    headline: "Streamline operations and delight shippers",
    intro:
      "Logistics runs on data and communication. We build the dispatch tools, tracking portals and integrations that keep freight moving, and provide the customer support that keeps shippers informed.",
    challenges: [
      { title: "Manual dispatch", desc: "Jobs allocated through phone calls, whiteboards and spreadsheets." },
      { title: "Tracking enquiries", desc: "Customer service overwhelmed by “where is my delivery?” calls." },
      { title: "Disconnected systems", desc: "Orders, invoicing and telematics that don’t share data." },
    ],
    solutions: [
      { title: "Dispatch & job systems", desc: "Custom software for job allocation, routing and proof of delivery." },
      { title: "Customer tracking portals", desc: "Self-service tracking, booking and document access for shippers." },
      { title: "System integrations", desc: "Connect telematics, accounting, WMS and customer systems." },
      { title: "Customer service desk", desc: "Trained agents handling tracking, booking and exception queries." },
    ],
    services: ["custom-software-development", "api-integrations", "customer-support", "bpo-services"],
    faqs: [
      { q: "Can you build a driver app?", a: "Yes. We build mobile apps with job lists, navigation, photo and signature capture, and offline mode." },
      { q: "Can you integrate with our telematics provider?", a: "In most cases, yes. We integrate with leading telematics and route-planning platforms via their APIs." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: House,
    excerpt: "Estate agents, lettings and property firms generating valuations, vendors and tenants.",
    metaTitle: "Estate Agent & Property Marketing, CRM and Call Handling",
    metaDescription:
      "Marketing, websites, CRM and call handling for estate agents, lettings agencies and property developers. Generate more valuations, vendors and landlords.",
    headline: "More valuations, more instructions, more lets",
    intro:
      "Property is local, competitive and relationship-driven. We help agents and property firms generate valuation leads, nurture landlords and vendors, and respond to every enquiry fast.",
    challenges: [
      { title: "Portal dependency", desc: "Relying on property portals for visibility and leads." },
      { title: "Slow viewing follow-up", desc: "Applicants lost because callbacks take too long." },
      { title: "Maintenance calls", desc: "Out-of-hours tenant issues that need urgent handling." },
    ],
    solutions: [
      { title: "Valuation lead generation", desc: "SEO, ads and instant valuation tools that capture vendor and landlord leads." },
      { title: "Property CRM", desc: "Applicant, vendor and landlord pipelines with automated follow-up." },
      { title: "Viewing & enquiry handling", desc: "Agents booking viewings and qualifying applicants." },
      { title: "24/7 maintenance line", desc: "Tenant issues logged, triaged and dispatched around the clock." },
    ],
    services: ["lead-generation", "crm-development", "inbound-call-handling", "local-seo"],
    faqs: [
      { q: "Can your website pull listings from our CRM?", a: "Yes. We integrate with property CRMs and feeds so listings update automatically." },
      { q: "Do you provide out-of-hours maintenance handling?", a: "Yes. We log, triage and dispatch contractors according to your rules." },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    excerpt: "Retailers connecting stores and online channels to drive footfall and repeat purchases.",
    metaTitle: "Retail Marketing, Omnichannel Commerce & Customer Service",
    metaDescription:
      "Omnichannel solutions for retailers. E-commerce, local SEO, social media, loyalty apps and customer service that connect stores and online sales.",
    headline: "Connect your stores and your screens",
    intro:
      "Shoppers move between online and in-store constantly. We help retailers create joined-up experiences that drive footfall, online sales and repeat purchases.",
    challenges: [
      { title: "Online–offline gap", desc: "Store and web stock, pricing and customers managed separately." },
      { title: "Falling footfall", desc: "Fewer walk-ins and difficulty driving visits to stores." },
      { title: "Customer retention", desc: "Little data on repeat buyers and loyalty." },
    ],
    solutions: [
      { title: "Omnichannel commerce", desc: "E-commerce with click-and-collect and unified stock." },
      { title: "Store-level local SEO", desc: "Optimised profiles and pages that drive store visits." },
      { title: "Loyalty apps", desc: "Mobile apps with rewards, offers and push notifications." },
      { title: "Customer service", desc: "Omnichannel support for online orders and store enquiries." },
    ],
    services: ["ecommerce-development", "local-seo", "mobile-app-development", "social-media-marketing"],
    faqs: [
      { q: "Can you connect our EPOS with our online store?", a: "Yes. We integrate popular EPOS systems with Shopify, WooCommerce and custom platforms." },
      { q: "Do you run campaigns for multi-store retailers?", a: "Yes. We manage local SEO and ads for every location with centralised reporting." },
    ],
  },
  {
    slug: "technology",
    name: "Technology",
    icon: Cpu,
    excerpt: "SaaS and tech companies accelerating pipeline, product development and customer success.",
    metaTitle: "Growth, Engineering & Support for SaaS and Tech Companies",
    metaDescription:
      "Demand generation, product engineering and customer support for SaaS and technology companies. Scale pipeline, product and customer success.",
    headline: "Scale pipeline, product and customer success",
    intro:
      "Tech companies need to grow fast on every front at once. We add senior marketing, engineering and support capacity so your core team can focus on what makes your product unique.",
    challenges: [
      { title: "Pipeline pressure", desc: "Ambitious growth targets with a small marketing team." },
      { title: "Engineering bottlenecks", desc: "Product roadmap delayed by limited developer capacity." },
      { title: "Support scaling", desc: "Ticket volumes growing faster than headcount." },
    ],
    solutions: [
      { title: "B2B demand generation", desc: "SEO, LinkedIn, Google Ads and content aimed at your ICP." },
      { title: "Product engineering", desc: "Extra development capacity for features, integrations and MVPs." },
      { title: "SDR & outbound", desc: "Outbound teams booking demos with qualified prospects." },
      { title: "Tier-1 support", desc: "24/7 first-line support integrated with your helpdesk." },
    ],
    services: ["lead-generation", "custom-software-development", "outbound-calling", "customer-support"],
    faqs: [
      { q: "Can you work with our engineering team?", a: "Yes. We follow your workflows, code standards and tools, and can either lead or augment your team." },
      { q: "Do you understand SaaS metrics?", a: "Yes. We report against pipeline, CAC, trial-to-paid conversion and churn, not just traffic." },
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: Landmark,
    excerpt: "Brokers, lenders and advisers generating compliant leads and secure client journeys.",
    metaTitle: "Marketing & Technology for Financial Services Firms",
    metaDescription:
      "Compliant lead generation, secure client portals and customer operations for brokers, lenders, insurers and financial advisers.",
    headline: "Compliant growth for regulated firms",
    intro:
      "Financial services firms need growth that stands up to regulatory scrutiny. We deliver lead generation, digital journeys and customer operations designed with compliance in mind.",
    challenges: [
      { title: "Regulated promotions", desc: "Marketing must meet FCA financial promotion rules." },
      { title: "Lead quality", desc: "High volumes of unqualified or unsuitable enquiries." },
      { title: "Onboarding friction", desc: "Paper-heavy, slow onboarding that loses clients." },
    ],
    solutions: [
      { title: "Compliant lead generation", desc: "Campaigns and landing pages built for your compliance sign-off." },
      { title: "Qualification teams", desc: "Agents who screen enquiries against your criteria." },
      { title: "Secure onboarding portals", desc: "Digital forms, document upload and e-signature flows." },
      { title: "CRM automation", desc: "Case progression, reminders and audit trails." },
    ],
    services: ["lead-generation", "custom-software-development", "crm-development", "outbound-calling"],
    faqs: [
      { q: "Do you understand FCA financial promotion rules?", a: "Yes. We design campaigns to be clear, fair and not misleading, and always route materials through your compliance team for approval." },
      { q: "How do you secure client data?", a: "Encryption, role-based access, audit logs and UK data hosting as standard." },
    ],
  },
  {
    slug: "local-businesses",
    name: "Local Businesses",
    icon: MapPinned,
    excerpt: "Independent and multi-location businesses competing and winning in their local market.",
    metaTitle: "Digital Marketing & Websites for Local Businesses UK",
    metaDescription:
      "Affordable, effective digital marketing for local businesses. Websites, Google Business Profile, local SEO, social media and call answering.",
    headline: "Be the obvious choice in your area",
    intro:
      "Local businesses thrive on visibility and reputation. We give independent and multi-location businesses the same digital firepower as national brands, without the complexity.",
    challenges: [
      { title: "Limited time", desc: "Owners are busy running the business, not marketing it." },
      { title: "Invisible online", desc: "Competitors appear first on Google and Maps." },
      { title: "Inconsistent brand", desc: "An outdated website and irregular social media." },
    ],
    solutions: [
      { title: "Local SEO & Maps", desc: "Google Business Profile, reviews and citations managed for you." },
      { title: "Professional website", desc: "A fast, modern site that converts visitors into customers." },
      { title: "Social media management", desc: "Consistent, on-brand posting without the effort." },
      { title: "Call answering", desc: "Every call answered, even when you’re busy." },
    ],
    services: ["local-seo", "website-development", "social-media-marketing", "inbound-call-handling"],
    faqs: [
      { q: "Do you offer packages for small businesses?", a: "Yes. We offer bundled monthly packages covering local SEO, website care and social media at predictable prices." },
      { q: "Can you help with a single location?", a: "Absolutely. Many of our clients are single-location independents." },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
