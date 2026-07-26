"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Globe,
  Send,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  MapPin,
} from "lucide-react";

import WorldMap from "../../../components/ui/world-map";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const faqs = [
  {
    q: "What happens after I submit the form?",
    a: "Our founders review your project brief directly and respond with technical recommendations and availability within 1 business day.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work asynchronously with clients across North America, Europe, Asia, and Africa using Slack, Notion, and Loom.",
  },
  {
    q: "Can we start with a small discovery project?",
    a: "Absolutely. We offer a 2-week Discovery Sprint to map architecture, wireframes, and fixed-price proposals before full buildout.",
  },
  {
    q: "Do you sign NDAs before initial discussions?",
    a: "Yes. We treat all client concepts and IP with strict confidentiality and are happy to execute an NDA prior to discovery calls.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website",
    budget: "$10k–$25k",
    timeline: "1–2 months",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText =
      `*New Evoq Studio Project Inquiry*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `🏢 *Company:* ${formData.company || "N/A"}\n` +
      `🚀 *Project Type:* ${formData.projectType}\n` +
      `💰 *Budget Range:* ${formData.budget}\n` +
      `⏱️ *Timeline:* ${formData.timeline}\n\n` +
      `📝 *Project Details:*\n${formData.message || "No additional details provided."}`;

    const whatsappUrl = `https://wa.me/254115706542?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-apple-blue" />
            <span>Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[920px] mb-6">
            Let's Talk. <br />
            <span className="text-neutral-400">Tell Us What You're Building.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[640px] mb-8 leading-relaxed font-normal">
            We respond within one business day with technical insights and initial project estimates.
          </p>
        </section>

        {/* Form & Direct Contact Info */}
        <section className="max-w-[1240px] mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Interactive Contact Form */}
            <div className="lg:col-span-7 bg-neutral-50 p-6 sm:p-10 rounded-3xl border border-black/[0.08] shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-apple-ink uppercase tracking-wider block mb-2">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-apple-ink focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-apple-ink uppercase tracking-wider block mb-2">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-apple-ink focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-apple-ink uppercase tracking-wider block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-apple-ink focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-apple-ink uppercase tracking-wider block mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-apple-ink focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="Website">Website Development</option>
                        <option value="System">System Architecture</option>
                        <option value="AI/Automation">AI & Workflow Automation</option>
                        <option value="Branding">Brand & UI Rebranding</option>
                        <option value="Other">Other Custom Software</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-apple-ink uppercase tracking-wider block mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-apple-ink focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="<$10k">&lt; $10k</option>
                        <option value="$10k–$25k">$10k – $25k</option>
                        <option value="$25k–$50k">$25k – $50k</option>
                        <option value="$50k–$100k">$50k – $100k</option>
                        <option value="$100k+">$100k+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-apple-ink uppercase tracking-wider block mb-2">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-apple-ink focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="ASAP">ASAP (Immediate)</option>
                        <option value="1–2 months">1 – 2 Months</option>
                        <option value="3–6 months">3 – 6 Months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-apple-ink uppercase tracking-wider block mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your goals, target audience, and key features..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-apple-ink focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="py-16 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-apple-ink">
                    Message Received!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-[400px]">
                    Thank you for reaching out. A founder will review your brief and get back to you within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-neutral-100 text-apple-ink font-semibold text-xs hover:bg-neutral-200"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Direct Contact Info Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col gap-6">
                <h3 className="text-2xl font-bold">Direct Contact</h3>

                <div className="flex flex-col gap-4 text-xs">
                  <a
                    href="mailto:evoqcreativetecg@gmail.com"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span className="font-mono text-neutral-200 hover:underline">evoqcreativetecg@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/254115706542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-neutral-200 hover:underline font-mono">WhatsApp: +254 115 706 542</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span className="text-neutral-200">Remote-First Studio • Global Delivery</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                    Response Commitment
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    We read every message and respond with human, technical feedback — no automated sales templates.
                  </p>
                </div>
              </div>

              {/* Friendly Sign-off */}
              <div className="p-6 rounded-2xl bg-neutral-50 border border-black/5 text-center">
                <p className="text-sm font-medium text-apple-ink">
                  "We read every message. Talk soon."
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Global Standards & Local Market Connectivity */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-3">
              <Globe className="w-3.5 h-3.5 text-apple-blue" />
              <span>Global Delivery • Local Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-apple-ink tracking-tight mb-4">
              Bringing Global Standards to the Local Market.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
              We bridge Silicon Valley engineering standards with boutique local craft, delivering high-performance platforms across global hubs to Nairobi.
            </p>
          </div>

          <WorldMap
            dots={[
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
              {
                start: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
              {
                start: { lat: 40.7128, lng: -74.006 }, // New York
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </section>

        {/* FAQ Section */}
        <section className="max-w-[880px] mx-auto py-16 border-t border-black/[0.06]">
          <h3 className="text-2xl sm:text-3xl font-semibold text-apple-ink tracking-tight text-center mb-10">
            Frequently Asked Questions
          </h3>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-50 border border-black/[0.06] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-sm text-apple-ink"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-neutral-600 leading-relaxed border-t border-black/[0.04] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
