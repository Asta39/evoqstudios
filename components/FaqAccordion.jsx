"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqAccordion({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
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
  );
}
