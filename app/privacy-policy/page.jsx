"use client";

import dynamic from "next/dynamic";
import { ShieldCheck, Lock, CheckCircle2, Mail, FileText } from "lucide-react";

const Header = dynamic(() => import("../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you interact with Evoq Studio through our website, contact forms, or client onboarding portals, we collect information that you voluntarily provide to us. This includes:
    • Contact Information: Your name, business email address, phone number, and company details.
    • Project Specifications: Technical requirements, budget parameters, timeline preferences, and project briefs submitted via our inquiry forms.
    • Automated Technical Data: IP address, browser user-agent string, operating system, and performance metrics collected via Vercel Speed Insights to ensure sub-second page rendering.`,
  },
  {
    title: "2. How We Use Information",
    content: `We use the information we collect strictly to:
    • Evaluate and respond to your software engineering, system architecture, or rebrand inquiries within 1 business day.
    • Execute contractual agreements, deliver custom web products, and provide continuous SLA technical support.
    • Audit and optimize our edge infrastructure security, preventing malicious traffic and DDoS attacks.
    • Comply with legal obligations and enforce our terms of service.`,
  },
  {
    title: "3. Zero AI Data Retention Guarantee",
    content: `For clients engaging Evoq Studio for AI Agents & Workflow Automation services:
    • Client Code & Proprietary Data: We deploy zero-retention enterprise API endpoints (OpenAI Enterprise, Anthropic Commercial, AWS Bedrock).
    • Training Prohibition: Your codebase, proprietary customer logs, and internal documentation will NEVER be used to train, fine-tune, or improve public AI models.
    • Private Vector Indices: All embedding databases (Pinecone, PGVector) operate within isolated, encrypted client virtual private clouds (VPCs).`,
  },
  {
    title: "4. Data Security & Storage Architecture",
    content: `We implement enterprise-grade technical and organizational security measures to safeguard your personal data:
    • Encryption Standards: All data in transit is encrypted using TLS 1.3 protocols. Data at rest is encrypted using AES-256 standards across AWS RDS and Vercel infrastructure.
    • Access Control: Access to client data is strictly restricted to authorized Evoq senior engineering staff based on role-based access control (RBAC) and multi-factor authentication (MFA).`,
  },
  {
    title: "5. Third-Party Service Providers",
    content: `We may share minimal necessary data with trusted third-party cloud infrastructure providers who assist in operating our services:
    • Hosting & Edge Delivery: Vercel Inc. and Amazon Web Services (AWS).
    • Database & Caching: Supabase Inc., Neon Inc., and Upstash Redis.
    • Analytics & Telemetry: Vercel Web Analytics (privacy-focused, cookieless telemetry).`,
  },
  {
    title: "6. Data Subject Rights (GDPR & CCPA)",
    content: `Depending on your location, you hold specific legal rights regarding your personal data:
    • Right of Access & Portability: Request copies of all personal data held by Evoq Studio in a structured JSON format.
    • Right to Erasure: Request the permanent deletion of your project inquiries and contact history ("Right to be Forgotten").
    • Right to Correction: Request immediate rectification of inaccurate contact details.
    To exercise any of these rights, contact our Data Protection Officer at privacy@evoq.studio.`,
  },
  {
    title: "7. Policy Updates & Contact",
    content: `We may update this Privacy Policy periodically to reflect changes in our technical practices or legal requirements. Updated policies will be posted on this page with a revised "Effective Date".
    For any questions regarding this policy, please reach out to us at privacy@evoq.studio.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[900px] mx-auto pt-8 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Legal Compliance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-apple-ink tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-xs font-mono text-neutral-400">
            Last Updated: July 26, 2026 • Version 2.1
          </p>
        </section>

        {/* Content Body */}
        <section className="max-w-[800px] mx-auto py-8">
          <div className="flex flex-col gap-10">
            {sections.map((sec, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-black/[0.06] flex flex-col gap-3">
                <h2 className="text-lg sm:text-xl font-bold text-apple-ink">
                  {sec.title}
                </h2>
                <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed whitespace-pre-line font-normal">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          {/* Direct DPO Contact Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold">Data Protection Officer</h3>
                <p className="text-xs text-neutral-400">Direct inquiries regarding GDPR & CCPA compliance</p>
              </div>
            </div>
            <a
              href="mailto:privacy@evoq.studio"
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shrink-0"
            >
              privacy@evoq.studio
            </a>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
