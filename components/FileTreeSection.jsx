"use client";

import { motion } from "framer-motion";
import { Layers, Terminal, Cpu, ArrowRight } from "lucide-react";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import { FilesystemItem, evoqStudioNodes } from "./ui/filesystem-item";

export default function FileTreeSection() {
  return (
    <section className="relative bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-black/[0.04]">
      {/* MagicUI Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        width={48}
        height={48}
        squares={[36, 24]}
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] inset-0 h-full w-full"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Interactive Opened File Tree Window */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full"
        >
          <div className="relative bg-white/90 backdrop-blur-xl border border-black/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.07)] overflow-hidden">
            {/* Window Mac Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-50/80 border-b border-black/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs font-mono text-neutral-400 font-medium tracking-tight">
                evoq-studio/structure
              </span>
              <div className="w-10" />
            </div>

            {/* Opened File Tree Container */}
            <div className="p-4 sm:p-6 h-[480px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-200">
              <ul>
                {evoqStudioNodes.map((node) => (
                  <FilesystemItem node={node} key={node.name} animated />
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Descriptive Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink w-fit">
            <Terminal className="w-3.5 h-3.5 text-apple-blue" />
            <span>Production-Grade Architecture</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-apple-ink tracking-tight leading-[1.12]">
            Crafted for speed. <br />
            <span className="text-neutral-400">Structured for scale.</span>
          </h2>

          {/* Subheading / Description */}
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            We don't do spaghetti code or bloated templates. Every system is architected with a modular, maintainable folder structure designed to scale seamlessly with your engineering team.
          </p>

          {/* Feature List */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-apple-ink shrink-0 mt-0.5 border border-black/5">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-apple-ink">
                  Component-Driven Modular Design
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-normal">
                  Clean separation of concerns with isolated UI components, dynamic hooks, and utility layers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-apple-ink shrink-0 mt-0.5 border border-black/5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-apple-ink">
                  Fully Interactive Folder Tree
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-normal">
                  Toggle directories on the fly. Built with smooth animations and default open state.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-apple-ink hover:text-apple-blue transition-colors group"
            >
              <span>Explore our stack</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
