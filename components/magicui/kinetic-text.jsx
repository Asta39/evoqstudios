"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function KineticText({
  text,
  className,
  duration = 0.5,
  stagger = 0.03,
}) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: 0.04 * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -45,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      aria-label={text}
      className={cn("inline-flex flex-wrap justify-center gap-x-[0.28em] gap-y-[0.1em]", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block transform-gpu"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
