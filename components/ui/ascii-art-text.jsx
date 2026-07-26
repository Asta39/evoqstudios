"use client";

import { useEffect, useState } from "react";

const ASCII_EVOQ_TEXT = `
 ███████╗██╗   ██╗██████╗ ██████╗ 
 ██╔════╝██║   ██║██╔══██╗██╔══██╗
 █████╗  ██║   ██║██║  ██║██║  ██║
 ██╔══╝  ╚██╗ ██╔╝██║  ██║██║  ██║
 ███████╗ ╚████╔╝ ██████╔╝╚██████╔╝
 ╚══════╝  ╚═══╝  ╚═════╝  ╚═════╝ 
`;

const MATRIX_CHARS = "EVOQSTUDIO0123456789</>{}[]#$@%&*";

export function AsciiArtHeroBackground() {
  const [matrixLines, setMatrixLines] = useState([]);

  useEffect(() => {
    // Generate static/ambient background lines of random ASCII characters mixed with EVOQ
    const lines = [];
    const numLines = 14;
    const lineLength = 54;

    for (let i = 0; i < numLines; i++) {
      let line = "";
      for (let j = 0; j < lineLength; j++) {
        const rand = Math.random();
        if (rand > 0.92) {
          line += "EVOQ"[Math.floor(Math.random() * 4)];
        } else if (rand > 0.8) {
          line += "STUDIO"[Math.floor(Math.random() * 6)];
        } else {
          line += MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        }
      }
      lines.push(line);
    }
    setMatrixLines(lines);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-neutral-950 p-8 sm:p-14 text-white border border-white/10 shadow-2xl">
      {/* Background Matrix Ambient Grid */}
      <div className="absolute inset-0 opacity-15 select-none pointer-events-none overflow-hidden flex flex-col justify-between font-mono text-[10px] sm:text-xs text-apple-blue leading-none p-4">
        {matrixLines.map((line, idx) => (
          <div key={idx} className="whitespace-nowrap tracking-[0.3em] font-mono">
            {line}
          </div>
        ))}
      </div>

      {/* Foreground ASCII Art "EVOQ" Banner */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Glowing ASCII Text Art */}
        <pre className="font-mono text-[9px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-white tracking-widest leading-none mb-6 overflow-x-auto max-w-full drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] select-none">
          <code>{ASCII_EVOQ_TEXT}</code>
        </pre>

        {/* Hero Title & Subheadline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-apple-blue mb-4">
          <span>ASCII_STORY_PROTOCOL_V2</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-[800px] mb-4">
          We Build the Future, <br />
          <span className="text-neutral-400">Pixel & Symbol by Symbol.</span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-[620px] leading-relaxed font-normal">
          Evoq is an independent digital engineering studio where deterministic software architecture meets boutique visual craft.
        </p>
      </div>
    </div>
  );
}
