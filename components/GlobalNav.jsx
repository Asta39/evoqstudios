"use client";

import { Search01Icon, ShoppingBag01Icon } from "hugeicons-react";

export default function GlobalNav() {
  return (
    <header className="sticky top-0 z-50 h-[44px] bg-apple-black text-white text-[12px] tracking-[-0.01em]">
      <div className="max-w-[980px] mx-auto h-full px-4 flex items-center justify-between font-normal">
        {/* Brand Mark */}
        <a href="#" className="font-semibold tracking-[0.1em] text-white text-[13px] hover:opacity-80 transition-opacity">
          EVOQ
        </a>

        {/* Quiet Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[#cccccc]">
          <a href="#systems" className="hover:text-white transition-colors">
            System Dev
          </a>
          <a href="#websites" className="hover:text-white transition-colors">
            Website Dev
          </a>
          <a href="#rebranding" className="hover:text-white transition-colors">
            Rebranding
          </a>
          <a href="#ai-systems" className="hover:text-white transition-colors">
            AI Systems
          </a>
          <a href="#studio" className="hover:text-white transition-colors">
            Studio
          </a>
        </nav>

        {/* Right Utility Cluster */}
        <div className="flex items-center space-x-5 text-[#cccccc]">
          <button aria-label="Search studio capabilities" className="hover:text-white transition-colors">
            <Search01Icon size={15} strokeWidth={1.75} />
          </button>
          <button aria-label="Client portal & inquiries" className="hover:text-white transition-colors">
            <ShoppingBag01Icon size={15} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
}
