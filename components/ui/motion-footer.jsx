"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Mail, Github, Twitter, Linkedin } from "lucide-react";

export function CinematicFooter() {
  return (
    <footer className="sticky bottom-0 left-0 right-0 z-0 w-full bg-[#0a0a0c] text-white pt-20 pb-12 px-6 sm:px-12 overflow-hidden flex flex-col justify-between min-h-[85vh]">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-gradient-to-b from-apple-blue/15 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto w-full flex flex-col gap-16">
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/evoq-logo.png"
                alt="Evoq Studio"
                width={40}
                height={40}
                className="object-contain invert brightness-200"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Evoq Studio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
              Let’s build something your competitors will try to copy next year.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/254115706542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-lg group"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>Talk to Founders</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/company/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/10"
            >
              <Mail className="w-4 h-4 text-neutral-300" />
              <span>Send Inquiry</span>
            </Link>
          </div>
        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/services/system-development" className="hover:text-white transition-colors">
                  System Development
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-agents-workflows" className="hover:text-white transition-colors">
                  AI Agents & Workflows
                </Link>
              </li>
              <li>
                <Link href="/services/brand-ui-rebranding" className="hover:text-white transition-colors">
                  Brand & UI Rebranding
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/company/about" className="hover:text-white transition-colors">
                  About Evoq
                </Link>
              </li>
              <li>
                <Link href="/company/capabilities" className="hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/company/architecture" className="hover:text-white transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Stack */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Stack
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/stack/nextjs-react" className="hover:text-white transition-colors">
                  Next.js / React
                </Link>
              </li>
              <li>
                <Link href="/stack/nodejs-python" className="hover:text-white transition-colors">
                  Node.js / Python
                </Link>
              </li>
              <li>
                <Link href="/stack/postgresql-redis" className="hover:text-white transition-colors">
                  PostgreSQL / Redis
                </Link>
              </li>
              <li>
                <Link href="/stack/tailwind-framer-motion" className="hover:text-white transition-colors">
                  Tailwind / Framer Motion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Huge Branding Text */}
        <div className="pt-8">
          <div className="text-[18vw] font-bold text-center leading-none tracking-tighter text-white/10 select-none pointer-events-none" aria-hidden="true">
            EVOQ
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="relative z-10 max-w-[1240px] mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
        <span>© {new Date().getFullYear()} Evoq Studio. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-neutral-300 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
