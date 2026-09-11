"use client";

import dynamic from "next/dynamic";
import { FileText } from "lucide-react";

const Header = dynamic(() => import("../../components/Header"));
const CinematicFooter = dynamic(
  () => import("../../components/ui/motion-footer").then((mod) => mod.CinematicFooter)
);

const termsSections = [
  {
    title: "Agreement & Acceptance of Terms",
    content: `By accessing the Evoq Studio website, engaging our design and engineering services, or executing a Statement of Work (SOW), you ("Client", "User") agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company, you represent that you have legal authority to bind that entity.`,
  },
  {
    title: "Scope of Services & SOW Execution",
    content: `• Custom Engineering: Evoq Studio delivers custom software systems, web applications, brand identities, and AI workflows as specified in mutually executed Statements of Work (SOWs).
    • Project Sprints: All project timelines, milestone deliverables, and client approval phases are defined in writing prior to project kickoff.
    • Scope Changes: Any modifications, additions, or enhancements requested outside the initial SOW scope will be documented via formal Change Orders subject to adjusted pricing and timeline estimates.`,
  },
  {
    title: "Intellectual Property & Code Ownership",
    content: `• Full Client IP Ownership: Upon receipt of final milestone payment, Evoq Studio assigns to the Client all right, title, and interest in and to all custom deliverables, source code repositories, Figma design systems, logomarks, and assets created specifically for the Client.
    • Pre-Existing Frameworks & Open Source: Evoq Studio retains ownership of its proprietary pre-existing utility libraries, boilerplate tools, and design tokens, granting the Client a perpetual, worldwide, non-exclusive, royalty-free license to use them within the delivered application. Open-source dependencies remain governed by their respective licenses (e.g., MIT, Apache 2.0).`,
  },
  {
    title: "Payment Terms, Invoicing & Deposit",
    content: `• Milestone Payments: Project fees are billed according to the milestone schedule outlined in the SOW (typically 50% deposit upon signing, 25% mid-point review, and 25% upon production deployment).
    • Payment Terms: Invoices are due within 14 calendar days of issuance. Late payments exceeding 30 days may result in a temporary pause on active development or deployment handoff until accounts are settled.`,
  },
  {
    title: "Code Quality Guarantee & 30-Day Warranty",
    content: `• 30-Day Post-Launch Warranty: Evoq Studio provides a 30-day bug-fix warranty starting from official production deployment. We will repair any software bugs or departures from the agreed SOW specifications at no additional cost.
    • SLA Retainers: Ongoing infrastructure maintenance, feature enhancements, and continuous 24/7 SLA monitoring beyond the 30-day warranty require an active monthly retainer agreement.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, in no event shall Evoq Studio be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits or revenue arising out of or related to your use of our services. Evoq Studio's total cumulative liability under any SOW shall not exceed the total fees paid by the Client under that specific SOW.`,
  },
  {
    title: "Governing Law & Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be settled through good-faith negotiation, followed by binding arbitration if unresolved within 30 days.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pb-20 px-4 sm:px-6 lg:px-12">

        {/* Hero Section */}
        <section className="max-w-[900px] mx-auto pt-8 pb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6 block">
            Legal Agreement
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-apple-ink tracking-tight mb-4">
            Terms of Service
          </h1>

          <p className="text-xs font-mono text-neutral-400">
            Last Updated: July 26, 2026 • Version 2.1
          </p>
        </section>

        {/* Content Body */}
        <section className="max-w-[900px] mx-auto py-8">
          <div>
            {termsSections.map((sec, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-10 border-t border-black/[0.06]">
                <div className="lg:col-span-3 flex items-start gap-2.5 h-fit">
                  <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-base font-bold text-apple-ink">
                    {sec.title}
                  </h2>
                </div>
                <div className="lg:col-span-9 text-sm text-neutral-600 leading-relaxed whitespace-pre-line font-normal">
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
              href="mailto:evoqcreativetech@gmail.com"
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shrink-0"
            >
              evoqcreativetech@gmail.com
            </a>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
    </>
  );
}
