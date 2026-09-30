import type { ServiceContent } from "./types";

export const businessContent: Record<string, ServiceContent> = {
  "call-centre-services": {
    metaTitle: "Outsourced Call Centre Services UK | Dedicated Call Centre Agents",
    metaDescription:
      "Outsourced call centre services with dedicated, trained agents. Inbound and outbound calls handled under your brand with clear SLAs, call recording and live reporting.",
    heroTitle: "Your Own Call Centre, Without the",
    heroHighlight: "Overhead.",
    heroSubtitle:
      "Dedicated, trained agents handling your calls under your brand, backed by clear SLAs, call recording and live reporting.",
    overviewTitle: "Scale your phone operations in weeks, not months",
    overview: [
      "Recruiting, training and managing an in-house call team is expensive and slow, and it is hard to flex for busy seasons. Missed and poorly handled calls mean lost revenue and frustrated customers.",
      "Signature provides dedicated and shared agent teams trained on your products, scripts and systems. Agents answer as your business, log every interaction in your CRM and follow your processes precisely, while you get full visibility through call recordings and live dashboards.",
    ],
    features: [
      { title: "Dedicated agent teams", desc: "Agents who work exclusively on your account and learn your business inside out." },
      { title: "Inbound & outbound", desc: "Customer service, bookings, sales, follow-ups and surveys from a single team." },
      { title: "Your systems, your scripts", desc: "Agents work in your CRM and helpdesk, following processes you approve." },
      { title: "Quality assurance", desc: "Call recording, scoring, coaching and regular calibration sessions." },
      { title: "Flexible scaling", desc: "Add seats for peak periods and campaigns without long-term commitments." },
      { title: "Live reporting", desc: "Call volumes, answer rates, handling times and outcomes visible in real time." },
    ],
    deliverables: [
      "Operations discovery and call flow design",
      "Agent recruitment and product training",
      "Script and knowledge base development",
      "Telephony setup and number porting",
      "CRM and helpdesk integration",
      "Call recording and QA framework",
      "Daily, weekly and monthly reporting",
      "Dedicated account manager",
    ],
    stats: [
      { value: "2–3", label: "weeks to go live with a trained team" },
      { value: "100%", label: "of calls recorded for quality and compliance" },
      { value: "SLA", label: "backed answer rates and response times" },
    ],
    process: [
      { title: "Discover", desc: "We map your call types, volumes, peak times and service standards." },
      { title: "Design & train", desc: "Call flows, scripts and knowledge base built; agents trained and assessed." },
      { title: "Go live", desc: "Phased launch with close supervision, daily check-ins and quick adjustments." },
      { title: "Optimise", desc: "QA insights and reporting drive continuous improvement in quality and efficiency." },
    ],
    idealFor: [
      "Growing businesses whose phones ring more than the team can answer",
      "Companies with seasonal or campaign-driven call spikes",
      "Brands wanting extended hours without night shifts",
      "Businesses replacing an underperforming call centre supplier",
    ],
    faqs: [
      { q: "Will callers know they are speaking to an outsourced team?", a: "No. Agents answer in your business name, follow your tone of voice and use your systems, so the experience is seamless." },
      { q: "How is pricing structured?", a: "We offer per-agent monthly pricing for dedicated teams and per-minute or per-call pricing for shared services. We will recommend the most cost-effective model for your volumes." },
      { q: "Can we listen to calls?", a: "Yes. All calls are recorded and you have access to recordings and QA scores through your reporting dashboard." },
      { q: "Are your operations GDPR compliant?", a: "Yes. We follow UK GDPR, use secure systems with role-based access and sign data processing agreements with every client." },
    ],
    related: ["inbound-call-handling", "customer-support", "outbound-calling"],
  },

  "bpo-services": {
    metaTitle: "Business Process Outsourcing (BPO) Services UK",
    metaDescription:
      "Business process outsourcing for UK companies. Back-office admin, data entry, order processing, finance support and operations delivered by a trained, scalable team.",
    heroTitle: "Outsource the Process.",
    heroHighlight: "Keep the Control.",
    heroSubtitle:
      "Back-office, data, admin and operational processes delivered by a trained, scalable team, so your people can focus on growth.",
    overviewTitle: "More capacity, lower cost, zero chaos",
    overview: [
      "Every hour your skilled team spends on repetitive admin is an hour not spent on customers, sales or strategy. But hiring more staff for routine work is costly and slow.",
      "Our BPO service takes over clearly defined processes such as data entry, order processing, invoicing support, CRM updates and document handling. We document each process, agree SLAs and accuracy targets, and report transparently, so you gain capacity without losing control.",
    ],
    features: [
      { title: "Back-office administration", desc: "Email management, scheduling, document processing and general admin support." },
      { title: "Data entry & management", desc: "Accurate data capture, cleansing, CRM updates and database maintenance." },
      { title: "Order & fulfilment support", desc: "Order processing, tracking updates, returns and supplier communication." },
      { title: "Finance support", desc: "Invoice processing, payment chasing, reconciliations and expense handling." },
      { title: "Process documentation", desc: "Every outsourced process documented, measured and continuously improved." },
      { title: "Automation-first", desc: "We automate repetitive steps where possible, reducing cost and error rates further." },
    ],
    deliverables: [
      "Process discovery and documentation",
      "SLA and accuracy target agreement",
      "Team selection and training",
      "Secure system access setup",
      "Pilot period with daily feedback",
      "Ongoing delivery and QA checks",
      "Automation recommendations",
      "Monthly performance reviews",
    ],
    stats: [
      { value: "99%+", label: "accuracy target on data processes" },
      { value: "Up to 60%", label: "lower cost than equivalent in-house roles" },
      { value: "Documented", label: "SOPs for every outsourced process" },
    ],
    process: [
      { title: "Identify", desc: "We find the processes that are repetitive, rule-based and time-consuming." },
      { title: "Document", desc: "Each process is mapped step by step with clear inputs, outputs and quality checks." },
      { title: "Transition", desc: "A supervised pilot ensures quality before full handover." },
      { title: "Improve", desc: "We measure, automate and refine processes to keep lowering cost and errors." },
    ],
    idealFor: [
      "Growing companies drowning in administrative work",
      "E-commerce businesses with high order and returns volumes",
      "Professional services firms with document-heavy workflows",
      "Operations teams needing flexible extra capacity",
    ],
    faqs: [
      { q: "Which processes can be outsourced?", a: "Any process that is repeatable and can be documented, such as data entry, order processing, CRM updates, invoice handling, scheduling and document management." },
      { q: "How do you keep our data secure?", a: "We use secure, access-controlled systems, sign confidentiality and data processing agreements, and operate under UK GDPR." },
      { q: "How quickly can you start?", a: "Most BPO engagements begin with a two-week discovery and pilot, followed by full handover." },
      { q: "Can we start with one process and expand?", a: "Yes. Many clients start with a single process to build confidence, then move more work over time." },
    ],
    related: ["customer-support", "call-centre-services", "crm-development"],
  },

  "customer-support": {
    metaTitle: "Outsourced 24/7 Customer Support Services | Omnichannel Helpdesk",
    metaDescription:
      "24/7 outsourced customer support across phone, email, live chat and social media. Trained agents, fast response times and helpdesk integration under your brand.",
    heroTitle: "Customer Support That Never",
    heroHighlight: "Sleeps.",
    heroSubtitle:
      "Omnichannel support across phone, email, live chat and social media, available 24 hours a day under your brand.",
    overviewTitle: "Fast, friendly answers on every channel",
    overview: [
      "Customers expect quick, helpful answers whenever they reach out, whether that is at 2pm on a Tuesday or 11pm on a Sunday. Slow or inconsistent support leads to bad reviews, refunds and churn.",
      "Our support agents are trained on your products and policies and work inside your helpdesk. We handle queries across every channel with agreed response times, escalate complex issues to your team with full context, and report on satisfaction and trends so you can fix root causes.",
    ],
    features: [
      { title: "24/7/365 coverage", desc: "Round-the-clock support including evenings, weekends and bank holidays." },
      { title: "Omnichannel", desc: "Phone, email, live chat, WhatsApp and social media handled by one team." },
      { title: "Helpdesk integration", desc: "We work in Zendesk, Freshdesk, Gorgias, Intercom, HubSpot or your own system." },
      { title: "Tiered support", desc: "First-line resolution with clear escalation paths to your specialists." },
      { title: "Knowledge base creation", desc: "Help articles and macros that speed up answers and enable self-service." },
      { title: "CSAT & insight reporting", desc: "Satisfaction scores, common issues and improvement recommendations every month." },
    ],
    deliverables: [
      "Support audit and channel strategy",
      "Agent training on products and policies",
      "Response templates and macros",
      "Escalation matrix",
      "Helpdesk configuration",
      "Knowledge base articles",
      "SLA monitoring",
      "Monthly CSAT and insights report",
    ],
    stats: [
      { value: "24/7", label: "coverage including weekends and holidays" },
      { value: "< 1 hr", label: "target first response on email and chat" },
      { value: "CSAT", label: "tracked on every resolved conversation" },
    ],
    process: [
      { title: "Learn", desc: "We study your products, policies, common questions and service standards." },
      { title: "Prepare", desc: "Macros, knowledge base and escalation rules created; agents trained and tested." },
      { title: "Support", desc: "Agents handle live queries with supervision and QA from day one." },
      { title: "Improve", desc: "Monthly insights highlight trends so you can reduce ticket volume at the source." },
    ],
    idealFor: [
      "E-commerce and subscription brands with high query volumes",
      "SaaS companies needing out-of-hours support",
      "Businesses serving customers across time zones",
      "Teams where founders are still answering support tickets",
    ],
    faqs: [
      { q: "Do you really provide 24/7 support?", a: "Yes. We offer full 24/7/365 coverage, or extended-hours and weekend-only options if you don’t need round-the-clock support." },
      { q: "Which helpdesk tools do you support?", a: "Zendesk, Freshdesk, Gorgias, Intercom, HubSpot Service Hub, Help Scout and most others. We can also recommend and set one up." },
      { q: "Can agents process refunds or changes?", a: "Yes, within the permissions and policies you define. Anything outside those limits is escalated to your team." },
      { q: "How do you measure quality?", a: "Through CSAT surveys, QA reviews of conversations, response and resolution times, and regular calibration with your team." },
    ],
    related: ["inbound-call-handling", "call-centre-services", "bpo-services"],
  },

  "inbound-call-handling": {
    metaTitle: "Inbound Call Handling & Telephone Answering Service UK",
    metaDescription:
      "Professional inbound call handling and telephone answering. Appointment booking, order taking, triage and emergency dispatch handled 24/7 in your company name.",
    heroTitle: "Never Miss Another",
    heroHighlight: "Call.",
    heroSubtitle:
      "Professional answering, booking, triage and dispatch handled in your company name, day and night.",
    overviewTitle: "Every missed call is a missed customer",
    overview: [
      "Most callers who reach voicemail will not leave a message. They simply call the next business on the list. For service businesses, that can mean thousands of pounds in lost work every month.",
      "Our inbound team answers every call promptly in your business name. We book appointments into your calendar, take orders, qualify enquiries, triage urgent issues and dispatch engineers, then pass full details to your team instantly by email, SMS or CRM.",
    ],
    features: [
      { title: "Telephone answering", desc: "Calls answered promptly and professionally in your company name." },
      { title: "Appointment booking", desc: "Bookings made directly into your calendar or scheduling system." },
      { title: "Emergency triage & dispatch", desc: "Urgent jobs identified and on-call staff alerted immediately, 24/7." },
      { title: "Order taking", desc: "Phone orders captured accurately and passed to your fulfilment team." },
      { title: "Overflow & out-of-hours", desc: "We pick up when your team is busy, at lunch or after closing time." },
      { title: "Instant message delivery", desc: "Call summaries delivered by email, SMS, Slack, Teams or directly into your CRM." },
    ],
    deliverables: [
      "Call flow and script design",
      "Number forwarding or porting",
      "Calendar and CRM integration",
      "Emergency escalation rules",
      "Agent training on your services",
      "Call recording",
      "Real-time call summaries",
      "Monthly call analytics",
    ],
    stats: [
      { value: "24/7", label: "answering including nights and weekends" },
      { value: "Instant", label: "call summaries by email, SMS or CRM" },
      { value: "Days", label: "not weeks, to get set up" },
    ],
    process: [
      { title: "Brief", desc: "Tell us how you want calls answered, what to ask and when to escalate." },
      { title: "Set up", desc: "Scripts written, calendars connected and call forwarding configured." },
      { title: "Answer", desc: "Our agents handle calls in your name and deliver messages instantly." },
      { title: "Review", desc: "Call analytics show volumes, peak times and outcomes to guide your staffing." },
    ],
    idealFor: [
      "Trades and emergency service providers",
      "Clinics, dental practices and healthcare providers",
      "Property management and lettings agencies",
      "Small businesses where the owner is always on the tools",
    ],
    faqs: [
      { q: "How does call forwarding work?", a: "You simply divert your existing number to us all the time, when busy, or out of hours. No new phone system is needed." },
      { q: "Can you book directly into our calendar?", a: "Yes. We integrate with Google Calendar, Outlook, Calendly, Acuity and most industry scheduling tools." },
      { q: "What happens with emergency calls at night?", a: "We follow your escalation rules, for example calling your on-call engineer and sending SMS details, until someone confirms." },
      { q: "Is there a minimum contract?", a: "Our inbound plans are flexible monthly packages based on call volume, with no long lock-in." },
    ],
    related: ["call-centre-services", "customer-support", "local-seo"],
  },

  "outbound-calling": {
    metaTitle: "Outbound Call Centre Services | Appointment Setting & Prospecting",
    metaDescription:
      "Outbound calling services for appointment setting, lead follow-up, customer re-engagement and market research. Experienced UK-focused agents with compliant calling.",
    heroTitle: "Conversations That Fill",
    heroHighlight: "Your Calendar.",
    heroSubtitle:
      "Appointment setting, lead follow-up, re-engagement and research campaigns run by experienced outbound agents.",
    overviewTitle: "Proactive outreach that creates opportunities",
    overview: [
      "Your pipeline is full of leads that were never followed up, quotes that were never chased and past customers who were never asked to come back. There is revenue sitting in your database.",
      "Our outbound team runs structured, compliant calling campaigns that turn that database into booked appointments and qualified opportunities. We work to agreed scripts, log every outcome in your CRM and report on connect rates, conversations and conversions.",
    ],
    features: [
      { title: "Appointment setting", desc: "Qualified meetings booked directly into your sales team’s calendars." },
      { title: "Lead follow-up", desc: "Fast, persistent follow-up on web leads, quotes and enquiries." },
      { title: "Customer re-engagement", desc: "Win back lapsed customers with renewal, upsell and loyalty calls." },
      { title: "Market research & surveys", desc: "Customer feedback, NPS and market research campaigns." },
      { title: "Data cleansing", desc: "Verify and update contact data to improve future campaigns." },
      { title: "Compliant calling", desc: "TPS/CTPS screening and practices aligned with Ofcom and ICO guidance." },
    ],
    deliverables: [
      "Campaign strategy and targets",
      "Script and objection-handling guide",
      "Data screening and preparation",
      "Agent training and role-play",
      "CRM integration and outcome logging",
      "Call recording",
      "Daily campaign updates",
      "Campaign performance report",
    ],
    stats: [
      { value: "TPS", label: "screened data on every campaign" },
      { value: "Daily", label: "reporting on dials, connects and outcomes" },
      { value: "100%", label: "outcomes logged in your CRM" },
    ],
    process: [
      { title: "Plan", desc: "We define targets, audience, messaging and what a successful outcome looks like." },
      { title: "Prepare", desc: "Data screened, scripts written, agents trained and CRM connected." },
      { title: "Call", desc: "Agents run the campaign with live monitoring and daily reporting." },
      { title: "Optimise", desc: "Scripts, calling times and lists refined based on results." },
    ],
    idealFor: [
      "B2B sales teams that need more booked meetings",
      "Businesses with unworked leads and old quotes",
      "Subscription companies reducing churn",
      "Organisations running customer feedback programmes",
    ],
    faqs: [
      { q: "Is outbound calling still effective?", a: "Yes, particularly for B2B, high-value services and warm data. A well-trained agent with a good list and a relevant offer creates conversations no email can." },
      { q: "Do you provide the data?", a: "We can work with your data, or source compliant B2B data for your target market as part of the campaign." },
      { q: "How do you stay compliant?", a: "We screen against TPS and CTPS, display valid caller ID, honour opt-outs immediately and follow ICO and Ofcom guidance." },
      { q: "How are campaigns priced?", a: "Typically per agent hour or per day, with optional performance-based elements for appointment setting." },
    ],
    related: ["sales-telemarketing", "lead-generation", "crm-development"],
  },

  "sales-telemarketing": {
    metaTitle: "Sales & Telemarketing Services UK | Outsourced Sales Teams",
    metaDescription:
      "Outsourced telemarketing and sales teams that qualify prospects, handle objections and close deals. B2B and B2C telesales campaigns with transparent reporting.",
    heroTitle: "An Outsourced Sales Team That",
    heroHighlight: "Closes.",
    heroSubtitle:
      "Structured telesales teams that qualify prospects, handle objections and close or book warm opportunities for your business.",
    overviewTitle: "Sales capacity on demand",
    overview: [
      "Hiring, training and managing salespeople is one of the hardest and most expensive things a growing business does. Bad hires are costly, and good ones take months to ramp up.",
      "Our telemarketing and sales teams are experienced, coached and managed for you. We learn your offer, build a proven sales script and run campaigns that generate revenue or hand qualified opportunities to your closers, with full transparency on every call.",
    ],
    features: [
      { title: "B2B telemarketing", desc: "Reach decision-makers, qualify needs and create sales-ready opportunities." },
      { title: "B2C telesales", desc: "Compliant consumer sales and renewal campaigns with clear, honest selling." },
      { title: "Full-cycle closing", desc: "For suitable offers, agents take prospects from first call to signed deal." },
      { title: "Sales scripting & coaching", desc: "Scripts, objection handling and continuous coaching from experienced sales leaders." },
      { title: "Product launches", desc: "Rapid outreach campaigns to generate early traction for new products." },
      { title: "Performance transparency", desc: "Call recordings, conversion rates and revenue attribution reported weekly." },
    ],
    deliverables: [
      "Offer and ideal customer profile workshop",
      "Sales script and objection bank",
      "Data sourcing and screening",
      "Dedicated or shared sales agents",
      "Team leader supervision",
      "CRM pipeline management",
      "Weekly performance reviews",
      "Revenue and conversion reporting",
    ],
    stats: [
      { value: "Weeks", label: "not months, to a productive sales team" },
      { value: "Weekly", label: "coaching and performance reviews" },
      { value: "Full", label: "call recording for quality and training" },
    ],
    process: [
      { title: "Understand", desc: "We learn your product, market, pricing and what makes customers buy." },
      { title: "Build the playbook", desc: "Scripts, qualification criteria and objection handling written and tested." },
      { title: "Sell", desc: "Trained agents run the campaign under experienced team leaders." },
      { title: "Scale", desc: "Winning approaches are scaled with more agents, markets or products." },
    ],
    idealFor: [
      "Businesses without an in-house sales team",
      "Companies launching a new product or entering a new market",
      "Sales teams that need more top-of-funnel activity",
      "Firms testing whether telesales works before hiring",
    ],
    faqs: [
      { q: "Do you work on commission only?", a: "We don’t offer pure commission-only arrangements, as quality campaigns need investment in training and management. We do offer performance bonuses tied to agreed results." },
      { q: "Can your agents close deals on the phone?", a: "Yes, for offers suited to phone sales. For complex or high-value sales, agents qualify and book meetings for your closers." },
      { q: "How quickly can a campaign start?", a: "Most campaigns launch within two to three weeks, including discovery, scripting, data preparation and training." },
      { q: "Can we listen to sales calls?", a: "Absolutely. All calls are recorded and available to you, and we welcome clients joining calibration sessions." },
    ],
    related: ["outbound-calling", "lead-generation", "crm-development"],
  },
};
