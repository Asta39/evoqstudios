"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Menu01Icon,
  Cancel01Icon,
  Globe02Icon,
  SparklesIcon,
  SecurityCheckIcon,
  DatabaseIcon,
  Building01Icon,
  StructureIcon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";
import { ChevronDown } from "lucide-react";

const menuItems = [
  {
    title: "Services",
    href: "/company/capabilities",
    submenu: [
      {
        title: "System Development",
        desc: "High-performance backends & databases.",
        href: "/services/system-development",
        icon: DatabaseIcon,
      },
      {
        title: "Website Development",
        desc: "Sleek, lightning-fast static & dynamic apps.",
        href: "/services/website-development",
        icon: Globe02Icon,
      },
      {
        title: "AI Agents & Workflows",
        desc: "Intelligent agent workflows & integrations.",
        href: "/services/ai-agents-workflows",
        icon: SparklesIcon,
      },
      {
        title: "Brand & UI Rebranding",
        desc: "Modern visual identities for scale.",
        href: "/services/brand-ui-rebranding",
        icon: SecurityCheckIcon,
      },
    ],
  },
  {
    title: "Company",
    href: "/company/about",
    submenu: [
      {
        title: "About Evoq",
        desc: "Our story, team, and studio values.",
        href: "/company/about",
        icon: InformationCircleIcon,
      },
      {
        title: "Capabilities",
        desc: "Master index of services & engagement models.",
        href: "/company/capabilities",
        icon: Building01Icon,
      },
      {
        title: "Architecture",
        desc: "Our engineering principles & stack layers.",
        href: "/company/architecture",
        icon: StructureIcon,
      },
    ],
  },
];

export default function Header() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);

  const toggleMobileCategory = (title) => {
    setExpandedMobileCategory(expandedMobileCategory === title ? null : title);
  };

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        {/* Sleek Floating Glass Nav Pill Container */}
        <div className="pointer-events-auto relative bg-white/85 backdrop-blur-xl border border-white/70 shadow-[0_10px_35px_rgba(0,0,0,0.08)] rounded-full px-4 py-1.5 flex items-center justify-between gap-6 sm:gap-8 w-auto transition-all duration-300">
          
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
            <Image
              src="/evoq-logo.png"
              alt="Evoq Studio Logo"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden sm:flex items-center gap-1 text-[14px] font-medium text-apple-ink">
            {menuItems.map((item, idx) => (
              <div
                key={item.title}
                className="relative py-1"
                onMouseEnter={() => setActiveSubmenu(idx)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className="px-3.5 py-1.5 rounded-full hover:bg-black/5 transition-colors inline-flex items-center gap-1 text-apple-ink font-semibold whitespace-nowrap"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeSubmenu === idx ? "rotate-180 text-black" : "text-neutral-400"
                      }`}
                    />
                  </Link>
                </div>

                {/* Submenu Glass Dropdown Card */}
                <AnimatePresence>
                  {activeSubmenu === idx && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[310px] z-50"
                    >
                      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col gap-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setActiveSubmenu(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-black/5 transition-all group/item text-left w-full"
                          >
                            <div className="w-8 h-8 rounded-lg bg-black/5 text-apple-ink flex items-center justify-center border border-black/5 group-hover/item:bg-white transition-colors shrink-0 mt-0.5">
                              <HugeiconsIcon icon={sub.icon} size={16} strokeWidth={1.75} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-semibold text-apple-ink">
                                {sub.title}
                              </div>
                              <div className="text-[11px] text-[#6e6e73] font-normal leading-tight mt-0.5">
                                {sub.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Contact Us CTA Button */}
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-black text-white pl-4 pr-1.5 py-1.5 rounded-full text-[13px] font-medium hover:bg-neutral-800 active:scale-95 transition-all shadow-md group whitespace-nowrap"
            >
              <span>Contact us</span>
              <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={2.5} />
              </div>
            </Link>

            {/* Mobile Menu Toggle Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 text-apple-ink transition-colors"
              aria-label="Toggle mobile menu"
            >
              <HugeiconsIcon icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon} size={18} strokeWidth={1.75} />
            </button>
          </div>

        </div>
      </header>

      {/* iOS Floating Drop Sheet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Soft Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 z-40 cursor-pointer pointer-events-auto backdrop-blur-xs"
            />

            {/* iOS Floating Drop Sheet Card */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-20 left-4 right-4 max-w-[440px] mx-auto bg-white/95 backdrop-blur-2xl z-50 p-4 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-white/80 pointer-events-auto flex flex-col gap-3"
            >
              <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <Image src="/evoq-logo.png" alt="Evoq Studio" width={26} height={26} className="object-contain" />
                  <span className="text-xs font-semibold text-apple-ink">Evoq Menu</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-7 h-7 rounded-full bg-black/5 text-neutral-500 hover:text-black flex items-center justify-center text-xs"
                >
                  <HugeiconsIcon icon={Cancel01Icon} size={14} strokeWidth={2} />
                </button>
              </div>

              {/* Accordion Categories */}
              <div className="flex flex-col gap-1.5">
                {menuItems.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-neutral-50/80 border border-black/5 overflow-hidden">
                    <button
                      onClick={() => toggleMobileCategory(item.title)}
                      className="w-full p-3.5 flex items-center justify-between text-left font-semibold text-sm text-apple-ink"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 text-neutral-400 ${
                          expandedMobileCategory === item.title ? "rotate-180 text-black" : ""
                        }`}
                      />
                    </button>

                    {expandedMobileCategory === item.title && item.submenu && (
                      <div className="px-3 pb-3 pt-1 flex flex-col gap-2 border-t border-black/5">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-neutral-100 transition-colors border border-black/5"
                          >
                            <div className="w-7 h-7 rounded-lg bg-black/5 text-apple-ink flex items-center justify-center shrink-0">
                              <HugeiconsIcon icon={sub.icon} size={14} strokeWidth={1.75} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold text-apple-ink">{sub.title}</div>
                              <div className="text-[10px] text-neutral-500 truncate">{sub.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Us Primary CTA Pill inside Drop Sheet */}
              <Link
                href="/company/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-black text-white text-center rounded-2xl font-semibold text-xs hover:bg-neutral-800 transition-all shadow-md mt-1 flex items-center justify-center gap-2"
              >
                <span>Contact us</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
