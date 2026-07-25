"use client";

import { useState } from "react";
import Image from "next/image";
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
} from "@hugeicons/core-free-icons";

const menuItems = [
  {
    title: "Services",
    href: "#services",
    submenu: [
      {
        title: "System Development",
        desc: "High-performance backends & databases.",
        icon: DatabaseIcon,
      },
      {
        title: "Website Development",
        desc: "Sleek, lightning-fast static & dynamic apps.",
        icon: Globe02Icon,
      },
      {
        title: "AI Systems",
        desc: "Intelligent agent workflows & integrations.",
        icon: SparklesIcon,
      },
      {
        title: "Brand Rebranding",
        desc: "Modern visual identities for scale.",
        icon: SecurityCheckIcon,
      },
    ],
  },
  {
    title: "About",
    href: "#about",
  },
];

export default function Header() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        {/* Sleek Floating Glass Nav Pill Container */}
        <div className="pointer-events-auto relative bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_35px_rgba(0,0,0,0.08)] rounded-full px-4 py-1.5 flex items-center justify-between gap-6 sm:gap-8 w-auto transition-all duration-300">
          
          {/* Logo */}
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
            <Image
              src="/evoq-logo.png"
              alt="Evoq Studio Logo"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden sm:flex items-center gap-1.5 text-[14px] font-medium text-apple-ink">
            {menuItems.map((item, idx) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(idx)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-1.5 rounded-full hover:bg-black/5 transition-colors inline-block text-apple-ink font-semibold whitespace-nowrap"
                >
                  {item.title}
                </a>

                {/* Submenu Glass Dropdown Card */}
                <AnimatePresence>
                  {activeSubmenu === idx && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white/95 backdrop-blur-2xl rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col gap-1 z-50"
                    >
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.title}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-black/5 transition-all group/item text-left w-full"
                        >
                          <div className="w-8 h-8 rounded-lg bg-black/5 text-apple-ink flex items-center justify-center border border-black/5 group-hover/item:bg-white transition-colors shrink-0">
                            <HugeiconsIcon icon={sub.icon} size={16} strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[13px] font-semibold text-apple-ink whitespace-nowrap">
                              {sub.title}
                            </div>
                            <div className="text-[11px] text-[#6e6e73] font-normal leading-tight mt-0.5">
                              {sub.desc}
                            </div>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button matching Reference Image & Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Contact Us CTA Button matching Reference Image */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-black text-white pl-4 pr-1.5 py-1.5 rounded-full text-[13px] font-medium hover:bg-neutral-800 active:scale-95 transition-all shadow-md group whitespace-nowrap"
            >
              <span>Contact us</span>
              <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={2.5} />
              </div>
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(false ? () => {} : () => setMobileMenuOpen(true))}
              className="sm:hidden w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 text-apple-ink transition-colors"
            >
              <HugeiconsIcon icon={Menu01Icon} size={18} strokeWidth={1.75} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 cursor-pointer pointer-events-auto backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-[320px] bg-white/95 backdrop-blur-2xl z-50 p-6 flex flex-col justify-between rounded-l-3xl shadow-2xl border-l border-white/60 pointer-events-auto"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/evoq-logo.png"
                    alt="Evoq Studio"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 text-apple-ink transition-colors"
                  >
                    <HugeiconsIcon icon={Cancel01Icon} size={16} strokeWidth={1.75} />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {menuItems.map((item) => (
                    <div key={item.title} className="space-y-3">
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[17px] font-semibold text-apple-ink tracking-tight hover:text-apple-blue transition-colors"
                      >
                        {item.title}
                      </a>
                      {item.submenu && (
                        <div className="pl-3 border-l border-black/10 flex flex-col gap-3">
                          {item.submenu.map((sub) => (
                            <a
                              key={sub.title}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[14px] text-[#6e6e73] font-medium hover:text-apple-ink transition-colors"
                            >
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-black text-white text-center rounded-xl font-semibold text-[14px] hover:bg-neutral-800 transition-colors shadow-md"
              >
                Contact us
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
