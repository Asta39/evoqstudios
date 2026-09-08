"use client";

import {
  Globe,
  Layout,
  ShoppingBag,
  BookOpen,
  Sliders,
  Gauge,
  CheckCircle,
} from "lucide-react";

import { LunaGraphicsSearchConsoleSection } from "../../../components/LunaGraphicsSearchConsoleSection";
import { ServicePageShell } from "../../../components/ServicePageShell";
import { ServiceHero } from "../../../components/ServiceHero";
import { FaqAccordion } from "../../../components/FaqAccordion";

const websiteTypes = [
  {
    title: "Marketing Sites",
    desc: "High-impact landing pages that articulate your positioning and drive high-converting leads.",
    icon: Layout,
  },
  {
    title: "Product Sites",
    desc: "Feature-rich interactive showcases for SaaS products, Developer APIs, and digital platforms.",
    icon: Globe,
  },
  {
    title: "E-Commerce",
    desc: "Custom Shopify & Headless storefronts optimized for blazing checkout velocity and high AOV.",
    icon: ShoppingBag,
  },
  {
    title: "Portfolio & Editorial",
    desc: "Content-heavy digital publications and studio portfolios with bespoke typography.",
    icon: BookOpen,
  },
  {
    title: "Internal Tools",
    desc: "Custom web applications, dashboards, and operational portals your team actually enjoys using.",
    icon: Sliders,
  },
];

const designPrinciples = [
  {
    title: "Typography-First",
    desc: "Every font choice and hierarchy decision enhances readability and establishes brand voice.",
  },
  {
    title: "Motion with Purpose",
    desc: "Intentional micro-animations guide user focus and delight without slowing down rendering.",
  },
  {
    title: "Mobile-Native",
    desc: "Interfaces designed mobile-first so phone experiences feel as deliberate as desktop screens.",
  },
  {
    title: "Accessibility Built-In",
    desc: "WCAG 2.1 AA compliant markup, keyboard navigation, and contrast ratios from day one.",
  },
];

const processSteps = [
  "Strategy & Sitemap",
  "Wireframing & UX",
  "Visual Design System",
  "Next.js Development",
  "QA & Launch Audit",
  "Post-Launch Iteration",
];

const faqs = [
  {
    q: "How much does a custom website cost?",
    a: "Custom website builds start at $5,000 for focused marketing sites and range up to $25,000+ for enterprise headless applications and complex web products.",
  },
  {
    q: "What CMS do you recommend?",
    a: "We work with Headless CMS platforms like Sanity, Payload, and Contentful, as well as Next.js MDX for content teams seeking speed and control.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most website builds take between 4 to 8 weeks from initial strategy sprint to final deployment and DNS launch.",
  },
  {
    q: "Do you provide design and development together?",
    a: "Yes. We offer end-to-end service including UI/UX design, interactive prototyping, full-stack Next.js development, and post-launch maintenance.",
  },
  {
    q: "Will I be able to edit content myself?",
    a: "Yes. Every site includes an intuitive content editing dashboard or headless CMS interface trained specifically for your team.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePageShell>
      <ServiceHero
        badge={{ icon: Globe, label: "Website Engineering", className: "bg-black/5 border border-black/5 text-apple-ink", iconClassName: "text-emerald-500" }}
        title={
          <>
            Websites That Work Harder. <br />
            <span className="text-apple-ink">Digital Experiences Built to Convert.</span>
          </>
        }
        description="Performance-first websites with pixel-perfect design, dynamic motion, and seamless headless integration."
        primaryCta={{ href: "/company/contact", label: "Start Your Project" }}
        secondaryCta={{ href: "#what-we-build", label: "Explore Offerings" }}
        titleMaxWidth="920px"
      />

        {/* What We Build */}
        <section id="what-we-build" className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Capabilities
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              What we build.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-50/80 border border-black/[0.06] flex flex-col gap-4 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-apple-ink">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design Philosophy & Performance Promise */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                Design Philosophy
              </h2>
              <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight mb-8">
                Crafted like products, not templates.
              </h3>

              <div className="flex flex-col gap-6">
                {designPrinciples.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-apple-ink">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Promise Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Gauge className="w-6 h-6 text-emerald-400" />
                <span className="text-sm font-semibold tracking-wide uppercase text-neutral-300">
                  Performance Commitments
                </span>
              </div>

              <h4 className="text-2xl font-bold">
                100/100 Lighthouse Optimization Standard
              </h4>

              <ul className="flex flex-col gap-3 text-xs text-neutral-300 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Core Web Vitals optimized: LCP &lt; 2.5s, CLS &lt; 0.1</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Structured Open Graph metadata & Automated XML Sitemaps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vercel Edge CDN deployment with global caching</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Luna Graphics Search Console Growth Audit Section */}
        <LunaGraphicsSearchConsoleSection />

        {/* Process Overview */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <h3 className="text-2xl sm:text-3xl font-semibold text-apple-ink tracking-tight mb-10 text-center">
            Development Lifecycle
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-50 border border-black/5 text-center flex flex-col items-center gap-2"
              >
                <div className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <span className="text-xs font-semibold text-apple-ink">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </section>

      <FaqAccordion faqs={faqs} />
    </ServicePageShell>
  );
}
