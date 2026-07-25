"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Building2, ShieldCheck, Sparkles } from "lucide-react";

export const testimonials = [
  {
    id: 1,
    name: "Naitore Mugambi",
    role: "Founder & Director",
    company: "Luxe & Allure Events",
    category: "Luxury Events",
    image: "NM",
    bgGradient: "from-amber-500/10 to-rose-500/10",
    rating: 5,
    quote:
      "Evoq Studio transformed how we manage high-end event bookings. Their custom system handles client proposals and scheduling effortlessly. Our inquiry conversion rate jumped by 40% within two months.",
  },
  {
    id: 2,
    name: "Kevin Bond",
    role: "Operations Manager",
    company: "Luna Graphics",
    category: "Print & Visual Media",
    image: "KB",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    rating: 5,
    quote:
      "Before Evoq, our print shop managed custom orders manually across spreadsheets. They built an order pipeline that automated inventory tracking and client proofing. It saved us hundreds of hours every month.",
  },
  {
    id: 3,
    name: "Ian",
    role: "Executive Director",
    company: "Nova Luxury Events",
    category: "Event Experience",
    image: "I",
    bgGradient: "from-purple-500/10 to-indigo-500/10",
    rating: 5,
    quote:
      "The platform Evoq built for Nova set a brand new benchmark in the luxury events space. Fast, stunning, and bulletproof under high traffic during major launch announcements.",
  },
  {
    id: 4,
    name: "Peter",
    role: "Managing Director",
    company: "Luxe Roam",
    category: "Travel & Safari Agency",
    image: "P",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    rating: 5,
    quote:
      "Our clients expect white-glove service. Evoq designed an itinerary engine and direct WhatsApp booking workflow that made reserving bespoke travel packages fast and effortless.",
  },
  {
    id: 5,
    name: "Charles",
    role: "Co-Founder & CTO",
    company: "Lexreg",
    category: "Compliance Software",
    image: "C",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    rating: 5,
    quote:
      "Building regulatory compliance software in Kenya requires strict reliability and fast data processing. Evoq's engineering team delivered a rock-solid system that processes filings in real time.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative bg-neutral-50/60 py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-black/[0.04]">
      <div className="relative z-10 max-w-[1240px] mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-apple-ink tracking-tight leading-[1.12]">
              Trusted by ambitious leaders across industries.
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center text-apple-ink hover:bg-neutral-100 active:scale-95 transition-all shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all shadow-md"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Showcase Card */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden min-h-[340px] flex flex-col justify-between">
          <Quote className="absolute top-6 right-8 w-24 h-24 text-black/[0.03] pointer-events-none stroke-1" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between h-full gap-8 relative z-10"
            >
              {/* Rating & Company Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <span className="px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold tracking-wide">
                  {current.company} • {current.category}
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-apple-ink tracking-tight leading-snug max-w-[960px]">
                “{current.quote}”
              </blockquote>

              {/* Author Metadata */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/[0.06]">
                <div className="w-12 h-12 rounded-full bg-black text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                  {current.image}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-apple-ink">
                    {current.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-normal">
                    {current.role}, <span className="font-medium text-neutral-700">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Grid Preview Thumbnails of All 5 Clients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-white border-black/20 shadow-md ring-2 ring-black/5"
                  : "bg-white/60 border-black/5 hover:bg-white hover:border-black/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white font-semibold flex items-center justify-center text-xs shrink-0">
                  {item.image}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-apple-ink truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-neutral-500 truncate">
                    {item.company}
                  </div>
                </div>
              </div>
              <p className="text-[12px] text-neutral-600 line-clamp-2 leading-normal">
                "{item.quote}"
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
