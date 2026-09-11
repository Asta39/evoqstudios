export const faqs = [
  {
    q: "How much does an AI automation cost in KES?",
    a: "Pricing depends on scope. A single-use-case automation (e.g. M-Pesa statement reconciliation) starts at KES 150,000 build + KES 15,000–40,000/month run cost. Multi-agent enterprise platforms run KES 500,000–2,000,000. Every project begins with a 2-week Discovery Sprint (KES 80,000), fully credited against your build if you proceed.",
  },
  {
    q: "Do you natively support M-Pesa, Paystack, and KRA iTax?",
    a: "Yes. We build directly against M-Pesa Daraja API (Lipa na M-Pesa, Pay Bill, B2C/B2B), Paystack (cards, mobile money, bank transfer), KRA iTax PIN validation, eTIMS fiscal receipts, and BRS company registries. We don't pretend to be integrated with rails we haven't shipped against.",
  },
  {
    q: "Where is our customer data hosted and is it compliant?",
    a: "Production deployments default to AWS Cape Town (af-south-1) or Vercel Frankfurt (fra1) edge runtimes — never US data centers by default. All tenant data is row-level isolated via Supabase RLS and encrypted with AES-256 at rest and TLS 1.3 in transit.",
  },
  {
    q: "Will KRA flag our business for automated tax filings?",
    a: "No. We don't file blindly on your behalf — the agent pre-fills the iTax return or eTIMS signature payload, and your accountant or finance team reviews and submits. Every action produces a complete audit trail that matches standard fiscal compliance expectations.",
  },
  {
    q: "Do your conversational agents support Sheng, Swahili, and Kenyan English?",
    a: "Yes. Our agents are prompt-tuned for Kenyan English by default. Swahili and Sheng conversational modes are supported on request to ensure natural interaction with local retail customers.",
  },
];
