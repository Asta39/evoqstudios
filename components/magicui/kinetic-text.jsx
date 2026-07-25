"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function KineticText({
  text,
  className,
}) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em]", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <KineticChar key={charIndex} char={char} />
          ))}
        </span>
      ))}
    </span>
  );
}

function KineticChar({ char }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        fontWeight: isHovered ? 800 : 600,
        scale: isHovered ? 1.15 : 1,
        y: isHovered ? -2 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className="inline-block cursor-default select-none transition-colors hover:text-apple-blue"
    >
      {char}
    </motion.span>
  );
}
