"use client";

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function Header() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-full px-6 py-2.5 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/[0.04] w-full max-w-[680px]">
        {/* Company Logo */}
        <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Image
            src="/evoq-logo.png"
            alt="Evoq Studio"
            width={28}
            height={28}
            className="object-contain"
            priority
          />
          <span className="font-semibold tracking-tight text-[17px] text-apple-ink">Evoq</span>
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden sm:flex items-center space-x-8 text-[15px] font-medium text-apple-ink">
          <a href="#services" className="hover:text-apple-blue transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-apple-blue transition-colors">
            About
          </a>
        </nav>

        {/* Floating Pill Contact CTA */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center space-x-2 bg-black text-white pl-5 pr-2 py-2 rounded-full text-[14px] font-medium hover:bg-neutral-800 active:scale-95 transition-all shadow-md group"
        >
          <span>Contact us</span>
          <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={2} />
          </div>
        </a>
      </div>
    </header>
  );
}
