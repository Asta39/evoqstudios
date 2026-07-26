"use client";

import dynamic from "next/dynamic";
import { FileText, Scale, CheckCircle2, ShieldAlert } from "lucide-react";

const Header = dynamic(() => import("../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const termsSections = [
  {
    title: "1. Agreement & Acceptance of Terms",
    content: `By accessing the Evoq Studio website, engaging our design and engineering services, or executing a Statement of Work (SOW), you ("Client", "User") agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company, you represent that you have legal authority to bind that entity.`,
  },
  {
    title: "2. Scope of Services & SOW Execution",
    content: `• Custom Engineering: Evoq Studio delivers custom software systems, web applications, brand identities, and AI workflows as specified in mutually executed Statements of Work (SOWs).
    • Project Sprints: All project timelines, milestone deliverables, and client approval phases are defined in writing prior to project kickoff.
    • Scope Changes: Any modifications, additions, or enhancements requested outside the initial SOW scope will be documented via formal Change Orders subject to adjusted pricing and timeline estimates.`,
  },
  {
    title: "3. Intellectual Property & Code Ownership",
    content: `• Full Client IP Ownership: Upon receipt of final milestone payment, Evoq Studio assigns to the Client all right, title, and interest in and to all custom deliverables, source code repositories, Figma design systems, logomarks, and assets created specifically for the Client.
    • Pre-Existing Frameworks & Open Source: Evoq Studio retains ownership of its proprietary pre-existing utility libraries, boilerplate tools, and design tokens, granting the Client a perpetual, worldwide, non-exclusive, royalty-free license to use them within the delivered application. Open-source dependencies remain governed by their respective licenses (e.g., MIT, Apache 2.0).`,
  },
  {
    title: "4. Payment Terms, Invoicing & Deposit",
    content: `• Milestone Payments: Project fees are billed according to the milestone schedule outlined in the SOW (typically 50% deposit upon signing, 25% mid-point review, and 25% upon production deployment).
    • Payment Terms: Invoices are due within 14 calendar days of issuance. Late payments exceeding 30 days may result in a temporary pause on active development or deployment handoff until accounts are settled.`,
  },
  {
    title: "5. Code Quality Guarantee & 30-Day Warranty",
    content: `• 30-Day Post-Launch Warranty: Evoq Studio provides a 30-day bug-fix warranty starting from official production deployment. We will repair any software bugs or departures from the agreed SOW specifications at no additional cost.
    • SLA Retainers: Ongoing infrastructure maintenance, feature enhancements, and continuous 24/7 SLA monitoring beyond the 30-day warranty require an active monthly retainer agreement.`,
  },
  {
    title: "6. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, in no event shall Evoq Studio be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits or revenue arising out of or related to your use of our services. Evoq Studio's total cumulative liability under any SOW shall not exceed the total fees paid by the Client under that specific SOW.`,
  },
  {
    title: "7. Governing Law & Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be settled through good-faith negotiation, followed by binding arbitration if unresolved within 30 days.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[900px] mx-auto pt-8 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <Scale className="w-3.5 h-3.5 text-apple-blue" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-apple-ink tracking-tight mb-4">
            Terms of Service
          </h1>

          <p className="text-xs font-mono text-neutral-400">
            Last Updated: July 26, 2026 • Version 2.1
          </p>
        </section>

        {/* Content Body */}
        <section className="max-w-[800px] mx-auto py-8">
          <div className="flex flex-col gap-10">
            {termsSections.map((sec, idx) => (
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

          {/* Contact Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-apple-blue shrink-0" />
              <div>
                <h3 className="text-sm font-semibold">Legal Counsel & Contracts</h3>
                <p className="text-xs text-neutral-400">Questions regarding SOWs and service agreements</p>
              </div>
            </div>
            <a
              href="mailto:hello@evoq.studio"
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shrink-0"
            >
              hello@evoq.studio
            </a>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
