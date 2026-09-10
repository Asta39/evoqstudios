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

      <div>
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-t border-black/[0.06] last:border-b">
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-apple-ink"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform ${
                  openFaq === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openFaq === idx && (
              <div className="pb-5 text-xs text-neutral-600 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
