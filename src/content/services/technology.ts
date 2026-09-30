import type { ServiceContent } from "./types";

export const technologyContent: Record<string, ServiceContent> = {
  "website-development": {
    metaTitle: "Website Design & Development London | Fast, SEO-Ready Websites",
    metaDescription:
      "Custom website design and development in London. Fast, mobile-first, SEO-ready websites built with Next.js and WordPress that convert visitors into enquiries.",
    heroTitle: "Websites Engineered to",
    heroHighlight: "Convert.",
    heroSubtitle:
      "Fast, modern, conversion-focused websites built for search visibility, Core Web Vitals and effortless content management.",
    overviewTitle: "Your website should be your best salesperson",
    overview: [
      "Your website is usually the first real impression a prospect gets of your business. If it is slow, confusing or hard to use on a phone, they leave and call a competitor.",
      "We design and build websites that load in a blink, look sharp on every device and guide visitors towards one clear action. Every build includes technical SEO, analytics and a content management system your team can actually use, so the site keeps working long after launch.",
    ],
    features: [
      { title: "Conversion-led UX design", desc: "Wireframes and designs built around user journeys, clear calls to action and trust signals." },
      { title: "Blazing performance", desc: "Built with Next.js or optimised WordPress for top Core Web Vitals scores on mobile." },
      { title: "SEO built in", desc: "Clean markup, schema, sitemaps, redirects and metadata handled from day one." },
      { title: "Easy content management", desc: "Update pages, blogs and images yourself without touching code." },
      { title: "Accessible by default", desc: "Designed and tested against WCAG 2.2 AA guidelines for every visitor." },
      { title: "Secure hosting & care", desc: "SSL, backups, uptime monitoring and updates handled on managed hosting." },
    ],
    deliverables: [
      "Discovery workshop and sitemap",
      "Wireframes and custom UI design",
      "Responsive front-end development",
      "CMS setup and training",
      "Technical SEO and redirects",
      "GA4, Tag Manager and Search Console",
      "Speed and accessibility testing",
      "Launch support and 30-day aftercare",
    ],
    stats: [
      { value: "90+", label: "target mobile PageSpeed score" },
      { value: "4–8", label: "weeks for a typical business website" },
      { value: "WCAG", label: "2.2 AA accessibility standard" },
    ],
    process: [
      { title: "Discover", desc: "We define goals, audiences, sitemap and the key actions each page should drive." },
      { title: "Design", desc: "Wireframes, then high-fidelity designs in your brand, reviewed and approved by you." },
      { title: "Build", desc: "Developed, content loaded, tested across devices and optimised for speed and SEO." },
      { title: "Launch & grow", desc: "Careful launch with redirects and tracking, then ongoing improvements based on data." },
    ],
    idealFor: [
      "Businesses with an outdated or slow website",
      "Start-ups needing a professional launch site",
      "Companies rebranding or expanding their services",
      "Teams frustrated by a site they can’t easily update",
    ],
    faqs: [
      { q: "How much does a new website cost?", a: "Business websites typically range from £2,500 to £12,000 depending on page count, functionality and integrations. We provide a fixed quote after a short discovery call." },
      { q: "Which platform do you build on?", a: "We recommend the right tool for the job: Next.js for performance-critical and custom sites, WordPress when your team needs a familiar editor, and Shopify for e-commerce." },
      { q: "Will I lose my Google rankings when you redesign my site?", a: "Not if the migration is handled properly. We map every old URL to its new location with 301 redirects and preserve on-page SEO." },
      { q: "Do you offer hosting and maintenance?", a: "Yes. Our care plans include hosting, backups, security updates, uptime monitoring and a monthly allowance of content changes." },
      { q: "Can you write the content too?", a: "Yes. Our copywriting team can write all website content, optimised for both search engines and conversions." },
    ],
    related: ["seo", "ecommerce-development", "graphic-design"],
  },

  "ecommerce-development": {
    metaTitle: "E-commerce Website Development | Shopify & WooCommerce Experts",
    metaDescription:
      "E-commerce development for growing brands. Shopify, WooCommerce and headless stores with fast checkout, inventory integrations and conversion-rate optimisation.",
    heroTitle: "Online Stores Built to",
    heroHighlight: "Scale.",
    heroSubtitle:
      "Shopify, WooCommerce and headless commerce platforms engineered for speed, stock accuracy and higher checkout conversion.",
    overviewTitle: "Commerce that keeps up with your growth",
    overview: [
      "A store that works at 50 orders a week can break at 500. Slow product pages, manual stock updates and clunky checkouts quietly cost you sales every day.",
      "We build and re-platform e-commerce stores with performance and operations in mind. Product data, inventory, payments, shipping and accounting are connected, the checkout is frictionless on mobile, and every page is optimised for search and conversion.",
    ],
    features: [
      { title: "Shopify & Shopify Plus", desc: "Custom themes, apps and checkout extensions for brands that want to move fast." },
      { title: "WooCommerce", desc: "Flexible, fully owned WordPress stores with custom functionality and optimised hosting." },
      { title: "Headless commerce", desc: "Next.js storefronts for brands that need maximum speed and design freedom." },
      { title: "Inventory & ERP sync", desc: "Stock, orders and products synchronised with your warehouse, ERP and marketplaces." },
      { title: "Checkout optimisation", desc: "Express payments, fewer steps and trust signals that reduce cart abandonment." },
      { title: "E-commerce SEO", desc: "Category architecture, product schema and feed optimisation for search and Shopping ads." },
    ],
    deliverables: [
      "Platform recommendation and scoping",
      "Custom store design",
      "Product data migration",
      "Payment gateway and shipping setup",
      "Inventory, ERP or marketplace integrations",
      "Google Shopping and Meta product feeds",
      "Conversion and analytics tracking",
      "Staff training and launch support",
    ],
    stats: [
      { value: "< 2s", label: "target product page load time" },
      { value: "3", label: "platforms: Shopify, WooCommerce, headless" },
      { value: "Zero", label: "downtime migration approach" },
    ],
    process: [
      { title: "Scope", desc: "We review your catalogue, operations, integrations and growth plans to choose the right platform." },
      { title: "Design", desc: "Conversion-focused store design covering home, category, product, cart and checkout." },
      { title: "Build & integrate", desc: "Store developed, products migrated and third-party systems connected and tested." },
      { title: "Launch & optimise", desc: "Soft launch, full launch, then CRO testing to lift conversion rate and order value." },
    ],
    idealFor: [
      "Retailers moving from marketplaces to their own store",
      "Brands outgrowing an existing Shopify or WooCommerce theme",
      "Wholesalers needing B2B ordering portals",
      "Stores with manual stock and order processes",
    ],
    faqs: [
      { q: "Should I choose Shopify or WooCommerce?", a: "Shopify is ideal if you want a managed platform with less maintenance. WooCommerce suits businesses needing maximum flexibility and full ownership. We will recommend based on your catalogue and operations." },
      { q: "Can you migrate my existing store?", a: "Yes. We migrate products, customers, orders and URLs with redirects so you keep your SEO and customer history." },
      { q: "Do you integrate with Amazon and eBay?", a: "Yes. We connect stores with Amazon, eBay, Etsy and other marketplaces for centralised stock and order management." },
      { q: "Can you help with marketing after launch?", a: "Absolutely. Our marketing team runs Google Shopping, Performance Max, SEO and social campaigns for e-commerce clients." },
    ],
    related: ["website-development", "google-ads-ppc", "api-integrations"],
  },

  "custom-software-development": {
    metaTitle: "Custom Software Development UK | Bespoke Web Applications",
    metaDescription:
      "Bespoke software development for UK businesses. Web applications, client portals, internal tools and SaaS platforms designed around your workflows and built to scale.",
    heroTitle: "Software Built Around",
    heroHighlight: "Your Business.",
    heroSubtitle:
      "Bespoke web applications, portals and internal tools designed around the way your team actually works, not the other way round.",
    overviewTitle: "When off-the-shelf software starts holding you back",
    overview: [
      "Spreadsheets, disconnected tools and manual workarounds cost time and create errors. Off-the-shelf software is often 80% right, but that last 20% is where your competitive advantage lives.",
      "We design and build custom software that fits your processes precisely. From customer portals and booking systems to internal dashboards and full SaaS products, our engineers deliver secure, well-documented applications in short, transparent sprints.",
    ],
    features: [
      { title: "Web applications", desc: "Secure, responsive web apps built with modern frameworks such as Next.js, React and Node.js." },
      { title: "Client & partner portals", desc: "Self-service portals for bookings, documents, orders, invoices and support." },
      { title: "Internal tools & dashboards", desc: "Replace spreadsheets with purpose-built tools that save hours every week." },
      { title: "SaaS product development", desc: "From MVP to scalable multi-tenant platform, with billing and user management." },
      { title: "Workflow automation", desc: "Automate approvals, notifications, document generation and repetitive admin." },
      { title: "Legacy modernisation", desc: "Rebuild or refactor ageing systems without disrupting day-to-day operations." },
    ],
    deliverables: [
      "Discovery and requirements workshop",
      "Technical specification and architecture",
      "UX prototypes and UI design",
      "Agile development in two-week sprints",
      "Automated testing and code review",
      "Cloud deployment and CI/CD",
      "Documentation and handover",
      "Ongoing support and feature development",
    ],
    stats: [
      { value: "2-week", label: "sprints with working demos" },
      { value: "100%", label: "code and IP ownership for clients" },
      { value: "UK GDPR", label: "privacy-by-design approach" },
    ],
    process: [
      { title: "Discovery", desc: "We map your workflows, users and pain points, then define the scope and success measures." },
      { title: "Prototype", desc: "Clickable prototypes validate the solution with real users before development starts." },
      { title: "Build in sprints", desc: "Features delivered every two weeks with demos, feedback and full visibility." },
      { title: "Deploy & evolve", desc: "Secure cloud deployment, training and a roadmap for future improvements." },
    ],
    idealFor: [
      "Businesses running critical processes on spreadsheets",
      "Companies paying for several tools that don’t integrate",
      "Founders building a SaaS product or MVP",
      "Organisations with ageing, hard-to-maintain systems",
    ],
    faqs: [
      { q: "How much does custom software cost?", a: "Projects typically start from £8,000 for a focused internal tool and range upwards for larger platforms. We provide phased estimates so you can start with the highest-value features." },
      { q: "Who owns the code?", a: "You do. On final payment, all source code, designs and intellectual property are transferred to your business." },
      { q: "Which technologies do you use?", a: "Primarily TypeScript, React, Next.js, Node.js, Python and PostgreSQL, deployed on AWS, Google Cloud, Azure or Vercel. We choose proven, well-supported technologies." },
      { q: "Can you work with our existing developers?", a: "Yes. We regularly collaborate with in-house teams, either leading the project or adding capacity to yours." },
    ],
    related: ["crm-development", "api-integrations", "mobile-app-development"],
  },

  "crm-development": {
    metaTitle: "CRM Development & Automation | Custom CRM Systems UK",
    metaDescription:
      "Custom CRM development and CRM automation for UK businesses. Build a bespoke CRM or customise HubSpot, Zoho and Salesforce to manage leads, sales and operations.",
    heroTitle: "A CRM Your Team Will",
    heroHighlight: "Actually Use.",
    heroSubtitle:
      "Custom CRM systems and automated pipelines to manage leads, customers, dispatch and daily operations in one place.",
    overviewTitle: "One source of truth for every customer",
    overview: [
      "When customer data lives in inboxes, spreadsheets and people’s heads, leads get forgotten, follow-ups are missed and managers have no real view of the pipeline.",
      "We build and customise CRM systems around your sales and service process. Leads flow in automatically from your website, ads and phone lines; tasks and reminders are created for your team; and dashboards show exactly where every deal and job stands.",
    ],
    features: [
      { title: "Bespoke CRM builds", desc: "A CRM designed around your exact pipeline, data and user roles, with no per-seat licences." },
      { title: "HubSpot, Zoho & Salesforce", desc: "Configuration, custom objects, workflows and clean-up of your existing CRM." },
      { title: "Lead capture & routing", desc: "Website forms, ads, calls and emails flow straight into the CRM and to the right person." },
      { title: "Sales automation", desc: "Automatic follow-ups, reminders, quotes and task assignment keep deals moving." },
      { title: "Job & dispatch management", desc: "Scheduling, engineer allocation and job status tracking for field-service businesses." },
      { title: "Reporting dashboards", desc: "Real-time pipeline, conversion and team performance dashboards for managers." },
    ],
    deliverables: [
      "Process mapping workshop",
      "CRM architecture and data model",
      "Custom build or platform configuration",
      "Data migration and de-duplication",
      "Website, telephony and email integrations",
      "Workflow and automation setup",
      "Dashboards and reports",
      "User training and documentation",
    ],
    stats: [
      { value: "0", label: "per-user licence fees on bespoke builds" },
      { value: "Real-time", label: "lead alerts by SMS and email" },
      { value: "Full", label: "data migration from spreadsheets and old CRMs" },
    ],
    process: [
      { title: "Map", desc: "We document how leads, deals and jobs move through your business today and where they get stuck." },
      { title: "Design", desc: "Data model, pipeline stages, automations and dashboards designed and signed off." },
      { title: "Build & migrate", desc: "CRM built or configured, integrations connected and existing data imported cleanly." },
      { title: "Adopt", desc: "Team training, launch support and refinements based on real-world use." },
    ],
    idealFor: [
      "Sales teams managing leads in spreadsheets or inboxes",
      "Field-service businesses needing job scheduling and dispatch",
      "Companies paying high per-seat CRM licence fees",
      "Businesses with a CRM nobody updates",
    ],
    faqs: [
      { q: "Should I build a custom CRM or use HubSpot or Salesforce?", a: "If your process is fairly standard, a platform CRM is usually faster and cheaper. If you have unique workflows, many users or high licence costs, a bespoke CRM often pays for itself. We will give you an honest recommendation." },
      { q: "Can you migrate data from our current system?", a: "Yes. We clean, de-duplicate and migrate contacts, companies, deals and history from spreadsheets or any existing CRM." },
      { q: "Can the CRM connect to our phone system?", a: "Yes. We integrate with VoIP providers so calls are logged automatically, and can enable click-to-call from the CRM." },
      { q: "Is our data secure?", a: "We build with role-based access, encryption, audit logs and UK or EU data hosting in line with UK GDPR." },
    ],
    related: ["custom-software-development", "lead-generation", "api-integrations"],
  },

  "mobile-app-development": {
    metaTitle: "Mobile App Development London | iOS & Android App Developers",
    metaDescription:
      "iOS and Android app development for businesses. Native and cross-platform mobile apps built with React Native and Flutter for customers, field teams and operations.",
    heroTitle: "Mobile Apps People",
    heroHighlight: "Keep Using.",
    heroSubtitle:
      "iOS and Android applications built natively or cross-platform for customers, field teams and internal operations.",
    overviewTitle: "From idea to App Store, done properly",
    overview: [
      "A great app earns a permanent place on your customer’s home screen. A poor one gets deleted after one use. The difference is clear purpose, intuitive design and rock-solid performance.",
      "We design and develop mobile apps with React Native and Flutter, delivering native-quality experiences on iOS and Android from a single codebase. From customer loyalty apps to field-service tools, we handle UX, development, backend, App Store submission and ongoing updates.",
    ],
    features: [
      { title: "Cross-platform development", desc: "React Native and Flutter apps that feel native on both iOS and Android." },
      { title: "UX & UI design", desc: "Intuitive, on-brand interfaces tested with real users before development." },
      { title: "Backend & APIs", desc: "Secure cloud backends, authentication and APIs that scale with your user base." },
      { title: "Field-service apps", desc: "Job lists, offline mode, photos, signatures and GPS for teams on the move." },
      { title: "Push notifications & payments", desc: "Engagement features, in-app purchases and secure payment integrations." },
      { title: "App Store launch", desc: "Store listings, screenshots, submission and review handled end to end." },
    ],
    deliverables: [
      "Product discovery and feature prioritisation",
      "User flows and interactive prototypes",
      "iOS and Android app development",
      "Backend, database and admin panel",
      "Analytics and crash reporting",
      "QA testing on real devices",
      "App Store and Google Play submission",
      "Maintenance and version updates",
    ],
    stats: [
      { value: "1", label: "codebase for iOS and Android" },
      { value: "12–16", label: "weeks for a typical MVP" },
      { value: "Real", label: "device testing before every release" },
    ],
    process: [
      { title: "Define", desc: "We clarify the problem, users and must-have features for a focused first release." },
      { title: "Prototype", desc: "Interactive prototypes let you and your users test the experience early." },
      { title: "Develop", desc: "App and backend built in sprints with test builds you can install on your phone." },
      { title: "Launch & iterate", desc: "Store submission, launch monitoring and regular updates driven by user data." },
    ],
    idealFor: [
      "Businesses offering bookings, orders or loyalty to customers",
      "Field teams replacing paper job sheets",
      "Start-ups validating a new product idea",
      "Companies with a web platform that needs a mobile companion",
    ],
    faqs: [
      { q: "Native or cross-platform: which is better?", a: "For most business apps, cross-platform (React Native or Flutter) delivers native-quality results at lower cost and faster timelines. We recommend fully native only when an app needs specialised device features." },
      { q: "How much does an app cost?", a: "A focused MVP typically starts from £15,000, with more complex apps priced after discovery. We help you prioritise features to launch sooner and within budget." },
      { q: "Do you handle App Store approval?", a: "Yes. We prepare listings, privacy details and builds, and manage submission and any reviewer feedback." },
      { q: "Can you maintain an app another agency built?", a: "Often, yes. We start with a code audit to assess quality and recommend the best path forward." },
    ],
    related: ["custom-software-development", "api-integrations", "graphic-design"],
  },

  "api-integrations": {
    metaTitle: "API Integration & Plugin Development | Connect Your Systems",
    metaDescription:
      "API integration and custom plugin development. Connect your website, CRM, payments, accounting and marketing tools with reliable, automated data flows.",
    heroTitle: "Make Your Systems",
    heroHighlight: "Talk to Each Other.",
    heroSubtitle:
      "Custom plugins, API connectors and automations that link your website, CRM, payments, accounting and operations.",
    overviewTitle: "Stop copying data between systems",
    overview: [
      "Most businesses run on a dozen tools that don’t share information. Staff re-type orders, export CSVs and chase updates, which wastes hours and introduces mistakes.",
      "We build reliable integrations and plugins that move data automatically and securely. Whether it is syncing orders to Xero, pushing leads into your CRM or extending WordPress and Shopify with custom functionality, we make your stack work as one system.",
    ],
    features: [
      { title: "Custom API integrations", desc: "Two-way data sync between your platforms using REST, GraphQL and webhooks." },
      { title: "WordPress & WooCommerce plugins", desc: "Bespoke plugins that add exactly the functionality your site needs." },
      { title: "Shopify apps & extensions", desc: "Private apps, checkout extensions and back-office automations." },
      { title: "Payments & accounting", desc: "Stripe, PayPal, GoCardless, Xero, QuickBooks and Sage integrations." },
      { title: "Automation platforms", desc: "Make, Zapier and n8n workflows, or custom middleware when you outgrow them." },
      { title: "Monitoring & alerts", desc: "Logging, retries and alerts so integrations fail loudly and recover safely." },
    ],
    deliverables: [
      "Integration audit and data mapping",
      "Technical specification",
      "Plugin, app or middleware development",
      "Secure authentication and key management",
      "Error handling, logging and retries",
      "Testing with sandbox and live data",
      "Documentation",
      "Monitoring and support plan",
    ],
    stats: [
      { value: "Hours", label: "of manual admin saved every week" },
      { value: "2-way", label: "real-time data synchronisation" },
      { value: "24/7", label: "monitoring with automatic alerts" },
    ],
    process: [
      { title: "Map data", desc: "We identify every system, the data that should flow and the rules that govern it." },
      { title: "Specify", desc: "A clear technical specification covering endpoints, triggers, security and edge cases." },
      { title: "Build & test", desc: "Integrations built and tested in sandbox environments before going live." },
      { title: "Monitor", desc: "Live monitoring, alerts and support keep data flowing reliably." },
    ],
    idealFor: [
      "Teams re-typing data between systems",
      "E-commerce stores syncing stock, orders and accounting",
      "Businesses with a website that needs custom functionality",
      "Companies whose Zapier workflows have become fragile or expensive",
    ],
    faqs: [
      { q: "Can you integrate with a system that has no public API?", a: "Often, yes. We can use webhooks, database connections, scheduled file exchanges or, as a last resort, secure automation of the user interface." },
      { q: "What happens if an integration fails?", a: "We build in retries, logging and alerts, so failures are detected immediately and data can be safely re-synced." },
      { q: "Will a custom plugin slow down my website?", a: "Not when it is built properly. We write lean, well-tested code and follow platform best practices for performance." },
      { q: "Do you provide ongoing support?", a: "Yes. APIs change over time, so we offer support plans that keep your integrations updated and monitored." },
    ],
    related: ["crm-development", "custom-software-development", "ecommerce-development"],
  },

  "graphic-design": {
    metaTitle: "Graphic Design & Branding Agency London | Logo & Brand Identity",
    metaDescription:
      "Professional graphic design and brand identity services in London. Logos, brand guidelines, marketing collateral, social media graphics and pitch decks.",
    heroTitle: "Brand Design That Looks",
    heroHighlight: "Established.",
    heroSubtitle:
      "Logos, brand identities, marketing assets and presentation systems that make your business look as good as it is.",
    overviewTitle: "First impressions happen in milliseconds",
    overview: [
      "Before anyone reads your copy, they judge your business by how it looks. Inconsistent logos, off-brand colours and amateur graphics quietly undermine trust and pricing power.",
      "Our designers create cohesive visual identities and everything that flows from them: logos, colour palettes, typography, brand guidelines, stationery, brochures, social templates and pitch decks. The result is a brand that looks credible everywhere it appears.",
    ],
    features: [
      { title: "Logo design", desc: "Distinctive, versatile logos delivered in every format you’ll need." },
      { title: "Brand identity systems", desc: "Colour, typography, imagery style and graphic elements that work together." },
      { title: "Brand guidelines", desc: "A clear guide so your team and suppliers always apply the brand correctly." },
      { title: "Marketing collateral", desc: "Brochures, flyers, signage, business cards and exhibition materials." },
      { title: "Social media templates", desc: "On-brand, editable templates that make consistent posting easy." },
      { title: "Pitch decks & presentations", desc: "Investor and sales decks that tell a clear story and look the part." },
    ],
    deliverables: [
      "Brand discovery questionnaire",
      "Mood boards and creative direction",
      "Logo concepts and refinements",
      "Final logo files (SVG, PNG, PDF)",
      "Colour and typography system",
      "Brand guidelines PDF",
      "Stationery and collateral designs",
      "Social media template pack",
    ],
    stats: [
      { value: "3", label: "initial logo concepts to choose from" },
      { value: "Unlimited", label: "file formats for print and digital" },
      { value: "2–4", label: "weeks for a complete brand identity" },
    ],
    process: [
      { title: "Discover", desc: "We learn your business, audience, competitors and the personality you want to project." },
      { title: "Explore", desc: "Mood boards and initial concepts explore different creative directions." },
      { title: "Refine", desc: "Your chosen direction is refined into a complete, polished identity." },
      { title: "Deliver", desc: "Final files, guidelines and templates delivered and ready to use everywhere." },
    ],
    idealFor: [
      "New businesses launching a brand",
      "Companies with an outdated or inconsistent identity",
      "Firms preparing for investment, expansion or a new website",
      "Marketing teams that need a steady flow of design assets",
    ],
    faqs: [
      { q: "How many logo concepts will I see?", a: "Our standard brand package includes three distinct initial concepts, followed by rounds of refinement on your chosen direction." },
      { q: "Do I own the copyright to my logo?", a: "Yes. Full copyright and ownership transfer to you on final payment." },
      { q: "Can you refresh my existing logo rather than replace it?", a: "Yes. A brand refresh modernises your identity while keeping the recognition you have built." },
      { q: "Do you offer ongoing design support?", a: "Yes. Many clients use a monthly design retainer for social graphics, ads, presentations and print." },
    ],
    related: ["website-development", "social-media-marketing", "content-marketing"],
  },
};
