"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Globe02Icon,
  SparklesIcon,
  SecurityCheckIcon,
  DatabaseIcon,
  Building01Icon,
  StructureIcon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";
import { ChevronDown } from "lucide-react";
import { projects } from "../lib/projects";

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

const fullMenuLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/company/capabilities" },
  { title: "Projects", href: "/projects" },
  { title: "Company", href: "/company/about" },
  { title: "Contact", href: "/company/contact" },
];

export default function Header() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="font-bold text-lg tracking-tight text-apple-ink hover:opacity-70 transition-opacity shrink-0">
            Evoq<span className="align-super text-[10px] ml-0.5">&reg;</span>
          </Link>

          {/* Desktop Flat Nav Links */}
          <nav className="hidden md:flex flex-1 items-center justify-evenly px-8 text-[15px] font-normal text-apple-ink">
            {menuItems.map((item, idx) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(idx)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                      activeSubmenu === idx ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {activeSubmenu === idx && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[310px] z-50"
                    >
                      <div className="bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col gap-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setActiveSubmenu(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-black/5 transition-all text-left w-full"
                          >
                            <div className="w-8 h-8 rounded-lg bg-black/5 text-apple-ink flex items-center justify-center border border-black/5 shrink-0 mt-0.5">
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
            <Link href="/projects" className="hover:opacity-60 transition-opacity">
              Projects<sup className="text-[11px] ml-0.5 text-neutral-400">{projects.length}</sup>
            </Link>
            <Link href="/company/contact" className="hover:opacity-60 transition-opacity">
              Contact
            </Link>
          </nav>

          {/* Hamburger — opens full-screen menu on every breakpoint */}
          <button
            onClick={() => setMenuOpen(true)}
            className="w-9 h-9 flex items-center justify-center shrink-0"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-[6px]">
              <span className="block w-6 h-[2px] bg-apple-ink" />
              <span className="block w-6 h-[2px] bg-apple-ink" />
            </span>
          </button>
        </div>
      </header>

      {/* Full-Screen Takeover Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 h-16 border-b border-black/[0.06] shrink-0">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-bold text-lg tracking-tight text-apple-ink"
              >
                Evoq<span className="align-super text-[10px] ml-0.5">&reg;</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center relative"
                aria-label="Close menu"
              >
                <span className="absolute w-6 h-[2px] bg-apple-ink rotate-45" />
                <span className="absolute w-6 h-[2px] bg-apple-ink -rotate-45" />
              </button>
            </div>

            {/* Centered Stacked Links */}
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center gap-1 py-12 px-4">
              {fullMenuLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold text-apple-ink hover:text-neutral-400 transition-colors tracking-tight text-center"
                >
                  {link.title}
                </Link>
              ))}

              <div className="mt-10 flex flex-col items-center gap-3 text-sm">
                <a href="tel:+254115706542" className="text-neutral-500 hover:text-black transition-colors">
                  +254 115 706 542
                </a>
                <a
                  href="mailto:evoqcreativetech@gmail.com"
                  className="text-apple-ink font-medium underline underline-offset-4 hover:text-neutral-600 transition-colors"
                >
                  evoqcreativetech@gmail.com
                </a>
              </div>

              <div className="mt-6 flex items-center gap-6 text-xs text-neutral-400">
                <Link href="/privacy-policy" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-neutral-400">
                &copy; {new Date().getFullYear()} Evoq Studio. All rights reserved.
              </p>
            </div>

            {/* Bottom Dark CTA Teaser */}
            <Link
              href="/company/contact"
              onClick={() => setMenuOpen(false)}
              className="shrink-0 bg-[#0a0a0c] text-white px-4 sm:px-6 lg:px-12 py-8 sm:py-10 flex flex-col gap-1 hover:bg-neutral-900 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-bold tracking-tight">Let&apos;s talk</span>
              <span className="text-sm text-neutral-400">Tell us about your project.</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
