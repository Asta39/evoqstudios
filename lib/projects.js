export const projects = [
  {
    slug: "lexreg",
    name: "Lexreg",
    year: "2026",
    category: "Compliance Software",
    industry: "Business Registration & Compliance",
    scope: ["System Architecture", "Backend Engineering"],
    timeline: "8 weeks",
    color: "amber",
    image: "/showcase-lexreg.jpg",
    video: "/videos/lexreg-preview.mp4",
    gallery: [
      "/gallery/lexreg-1.png",
      "/gallery/lexreg-2.png",
      "/gallery/lexreg-3.png",
      "/gallery/lexreg-4.png",
    ],
    tagline: "A multi-tenant platform that turns business registration in Kenya into a guided, self-service flow.",
    challenge:
      "Business registration in Kenya is fragmented — paper forms, manual BRS filing, and lawyers re-typing the same director, shareholder, and beneficial-owner details across CR1, CR2, and CR8 forms for every client.",
    approach:
      "We built a guided questionnaire that collects entity information once and reuses it across every generated document: new entities get a full registration document package for manual BRS filing, existing entities are onboarded via OCR document upload with client verification, and informal businesses get a 15-question readiness assessment with a maturity score and formalization gap analysis. Lawyers are invited per-entity through scoped magic links with zero cross-entity visibility, and every action is captured in an audit log for Kenya DPA 2019 compliance.",
    outcome:
      "Clients get a single dashboard per entity — directors, shareholders, beneficial owners, documents, and compliance status in one place — plus a document vault, corporate services, and an optional legal audit, instead of chasing a lawyer by phone.",
    quote:
      "Building regulatory compliance software in Kenya requires strict reliability and fast data processing. Evoq's engineering team delivered a rock-solid system that processes filings in real time.",
    quoteAuthor: "Charles",
    quoteRole: "Co-Founder & CTO, Lexreg",
  },
  {
    slug: "luxe-roam",
    name: "Luxe Roam",
    year: "2026",
    category: "Travel & Safari Agency",
    industry: "Travel & Hospitality",
    scope: ["Product Design", "Web Development"],
    timeline: "6 weeks",
    color: "teal",
    image: "/showcase-luxe-roam.jpg",
    video: "/videos/luxe-roam-preview.mp4",
    tagline: "A bespoke itinerary engine with direct WhatsApp booking.",
    challenge:
      "Luxe Roam's clients expect white-glove service, but reserving bespoke safari and travel packages meant slow back-and-forth over email and phone.",
    approach:
      "We designed an itinerary engine paired with a direct WhatsApp booking workflow, so clients could browse, customize, and reserve packages without leaving the conversation.",
    outcome:
      "Booking bespoke travel packages became fast and effortless — reservations that used to take days now close in a single conversation.",
    quote:
      "Our clients expect white-glove service. Evoq designed an itinerary engine and direct WhatsApp booking workflow that made reserving bespoke travel packages fast and effortless.",
    quoteAuthor: "Peter",
    quoteRole: "Managing Director, Luxe Roam",
  },
  {
    slug: "luna-graphics",
    name: "Luna Graphics",
    year: "2025",
    category: "Print & Visual Media",
    industry: "Print & Visual Media",
    scope: ["Web Development", "SEO"],
    timeline: "10 weeks",
    color: "blue",
    image: "/showcase-luna.jpg",
    video: "/videos/luna-graphics-preview.mp4",
    gallery: [
      "/gallery/luna-graphics-1.png",
      "/gallery/luna-graphics-2.png",
      "/gallery/luna-graphics-3.png",
      "/gallery/luna-graphics-4.png",
      "/gallery/luna-graphics-5.png",
    ],
    tagline: "An order pipeline that automated a print shop's manual workflow.",
    challenge:
      "Luna Graphics managed custom print orders manually across spreadsheets — inventory tracking and client proofing ate hundreds of hours every month.",
    approach:
      "We built an order pipeline that automated inventory tracking and client proofing end to end, and layered in live Search Console telemetry to track the redesign's organic performance.",
    outcome:
      "The manual spreadsheet workflow is gone. Inventory and proofing now run on rails, saving hundreds of hours every month.",
    quote:
      "Before Evoq, our print shop managed custom orders manually across spreadsheets. They built an order pipeline that automated inventory tracking and client proofing. It saved us hundreds of hours every month.",
    quoteAuthor: "Kevin Bond",
    quoteRole: "Operations Manager, Luna Graphics",
  },
  {
    slug: "luna-politics",
    name: "Luna Politics",
    year: "2025",
    category: "Civic & Campaign Platform",
    industry: "Civic & Public Sector",
    scope: ["System Architecture", "Web Development"],
    timeline: "7 weeks",
    color: "indigo",
    image: "/showcase-luna-politics.jpg",
    video: "/videos/luna-politics-preview.mp4",
    tagline: "A civic engagement platform built for high-traffic campaign moments.",
    challenge:
      "Campaign and civic engagement moments create sudden, unpredictable traffic spikes — the platform needed to stay fast and reliable exactly when attention peaks.",
    approach:
      "We engineered a lightweight, high-availability civic platform focused on clear information delivery and engagement tools that hold up under surge traffic.",
    outcome:
      "Luna Politics now has a platform built to stay reliable through the moments that matter most.",
    quote: null,
    quoteAuthor: null,
    quoteRole: null,
  },
  {
    slug: "zeno-books",
    name: "Zeno Books",
    year: "2026",
    category: "Enterprise Accounting",
    industry: "Enterprise Software",
    scope: ["System Architecture", "Backend Engineering"],
    timeline: "12 weeks",
    color: "emerald",
    image: "/showcase-zeno-abstract.jpg",
    video: "/videos/zeno-books-preview.mp4",
    tagline: "The invoicing and accounting core of the Zeno operating system.",
    challenge:
      "Growing businesses need real double-entry accounting and invoicing that scales with them, not a spreadsheet that breaks past a certain size.",
    approach:
      "Zeno Books consolidates invoicing, quotes, and double-entry accounting into a single high-availability microservice within the wider Zeno enterprise platform.",
    outcome:
      "A unified invoicing and accounting core that runs as part of Zeno's always-on microservice stack.",
    quote:
      "Zeno is an example of an all-in-one business architecture built by Evoq Studio — consolidating CRM pipelines, ERP supply chains, HR payroll, and double-entry accounting into a single high-availability microservice stack.",
    quoteAuthor: "Evoq Studio",
    quoteRole: "System Architecture Note",
  },
  {
    slug: "luxe-allure-events",
    name: "Luxe & Allure Events",
    year: "2024",
    category: "Luxury Events",
    industry: "Luxury Events",
    scope: ["Product Design", "Web Development"],
    timeline: "6 weeks",
    color: "rose",
    image: "/showcase-luxe-allure.jpg",
    video: "/videos/luxe-allure-preview.mp4",
    gallery: [
      "/gallery/luxe-allure-1.png",
      "/gallery/luxe-allure-2.png",
      "/gallery/luxe-allure-3.png",
      "/gallery/luxe-allure-4.png",
      "/gallery/luxe-allure-5.png",
    ],
    tagline: "A booking system that lifted inquiry conversion by 40% in two months.",
    challenge:
      "High-end event bookings were falling through the cracks — client proposals and scheduling were managed ad hoc, costing Luxe & Allure real inquiries.",
    approach:
      "We built a custom system to handle client proposals and scheduling end to end, giving the team one place to manage every high-end booking.",
    outcome:
      "Inquiry conversion rate jumped by 40% within two months of launch.",
    quote:
      "Evoq Studio transformed how we manage high-end event bookings. Their custom system handles client proposals and scheduling effortlessly. Our inquiry conversion rate jumped by 40% within two months.",
    quoteAuthor: "Naitore Mugambi",
    quoteRole: "Founder & Director, Luxe & Allure Events",
  },
  {
    slug: "nova-luxury-events",
    name: "Nova Luxury Events",
    year: "2025",
    category: "Event Experience",
    industry: "Luxury Events",
    scope: ["Web Development", "Performance Engineering"],
    timeline: "8 weeks",
    color: "purple",
    image: "/showcase-nova-abstract.jpg",
    video: "/videos/nova-preview.mp4",
    gallery: [
      "/gallery/nova-1.png",
      "/gallery/nova-2.png",
      "/gallery/nova-3.png",
      "/gallery/nova-4.png",
      "/gallery/nova-5.png",
    ],
    tagline: "A platform built to stay bulletproof during major launch traffic.",
    challenge:
      "Nova's major launch announcements bring traffic spikes that a standard events platform couldn't absorb without slowing down or falling over.",
    approach:
      "We built a fast, resilient platform specifically engineered to hold up under high traffic during major launch moments.",
    outcome:
      "The platform set a new benchmark for the luxury events space — fast and stable through every major launch since.",
    quote:
      "The platform Evoq built for Nova set a brand new benchmark in the luxury events space. Fast, stunning, and bulletproof under high traffic during major launch announcements.",
    quoteAuthor: "Ian",
    quoteRole: "Executive Director, Nova Luxury Events",
  },
  {
    slug: "brandmark-print-media",
    name: "Brandmark Print Media",
    year: "2026",
    category: "Print & Branding Commerce",
    industry: "Print & Visual Media",
    scope: ["Web Development", "E-Commerce"],
    timeline: "8 weeks",
    color: "orange",
    image: "/showcase-brandmark-abstract.jpg",
    video: "/videos/brandmark-preview.mp4",
    gallery: [
      "/gallery/brandmark-1.png",
      "/gallery/brandmark-2.png",
      "/gallery/brandmark-3.png",
      "/gallery/brandmark-4.png",
      "/gallery/brandmark-5.png",
    ],
    tagline: "Design, print & branding that makes your business impossible to miss.",
    challenge:
      "Brandmark needed a storefront that could take print and branding orders directly online — signage, vehicle wraps, DTF apparel, and promotional merchandise — without funneling every quote through manual back-and-forth.",
    approach:
      "We built an e-commerce storefront with a shop catalog, quote requests, and a direct WhatsApp ordering path, so clients can browse, request quotes, and order without leaving the flow.",
    outcome:
      "Brandmark now runs its print and branding catalog as a self-serve storefront, with quotes and orders routed straight to the team.",
    quote: null,
    quoteAuthor: null,
    quoteRole: null,
  },
  {
    slug: "zeno-events",
    name: "Zeno Events",
    year: "2026",
    category: "Event Operations Platform",
    industry: "Enterprise Software",
    scope: ["System Architecture", "Backend Engineering"],
    timeline: "8 weeks",
    color: "cyan",
    image: "/showcase-zeno-events-abstract.jpg",
    video: "/videos/zeno-events-preview.mp4",
    tagline: "The event operations module of the Zeno platform.",
    challenge:
      "Zeno's platform needed a dedicated events module with its own authenticated workspace, built on the same reliability standard as the rest of the Zeno suite.",
    approach:
      "We extended Zeno's core architecture with a secure, authenticated events workspace, sharing the platform's account system and infrastructure.",
    outcome:
      "Zeno Events runs as its own authenticated module within the wider Zeno operating system.",
    quote: null,
    quoteAuthor: null,
    quoteRole: null,
  },
  {
    slug: "adede-co",
    name: "Adede & Co",
    year: "2026",
    category: "Legal Services",
    industry: "Legal Services",
    scope: ["Web Development", "Brand Identity"],
    timeline: "6 weeks",
    color: "slate",
    image: "/gallery/adede-1.png",
    video: "/videos/adede-preview.mp4",
    gallery: [
      "/gallery/adede-1.png",
      "/gallery/adede-2.png",
      "/gallery/adede-3.png",
      "/gallery/adede-4.png",
      "/gallery/adede-5.png",
    ],
    tagline: "A law firm site built to make legal counsel feel accessible.",
    challenge:
      "Adede & Co needed a site that matched their founding mandate — bringing accessibility, innovation, and cost-effectiveness to a profession that often feels neither accessible nor approachable online.",
    approach:
      "We built a clean, editorial site covering all 8 of the firm's practice areas, with a clear 4-step engagement process and a direct consultation booking form guaranteeing a 1-business-day response.",
    outcome:
      "Adede & Co now has a site that reflects the firm's own positioning — legal excellence made accessible, from first consultation to resolution.",
    quote: null,
    quoteAuthor: null,
    quoteRole: null,
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug, count = 2) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const rest = [...projects.slice(idx + 1), ...projects.slice(0, idx)];
  return rest.slice(0, count);
}
