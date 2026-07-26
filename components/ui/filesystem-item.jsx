"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FolderOpen,
  ChevronRight,
  ChevronDown,
  FileCode,
  FileText,
  FileJson,
  Image as ImageIcon,
  Video,
  Database,
  Braces,
  File,
} from "lucide-react";

function getFileIcon(name) {
  if (name.endsWith(".jsx") || name.endsWith(".js") || name.endsWith(".ts") || name.endsWith(".tsx")) {
    return <FileCode className="w-4 h-4 text-blue-500 shrink-0" />;
  }
  if (name.endsWith(".json")) {
    return <FileJson className="w-4 h-4 text-amber-500 shrink-0" />;
  }
  if (name.endsWith(".css")) {
    return <Braces className="w-4 h-4 text-sky-400 shrink-0" />;
  }
  if (name.endsWith(".png") || name.endsWith(".jpg") || name.endsWith(".svg")) {
    return <ImageIcon className="w-4 h-4 text-emerald-500 shrink-0" />;
  }
  if (name.endsWith(".mp4")) {
    return <Video className="w-4 h-4 text-purple-500 shrink-0" />;
  }
  if (name.endsWith(".sh") || name.endsWith(".env")) {
    return <Database className="w-4 h-4 text-rose-500 shrink-0" />;
  }
  return <File className="w-4 h-4 text-gray-400 shrink-0" />;
}

export function FilesystemItem({ node, animated = true }) {
  // Already opened by default to all subdirectories as requested!
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.nodes && node.nodes.length > 0;

  return (
    <li className="select-none my-0.5">
      <div
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        className={`flex items-center gap-2 py-1 px-2.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
          hasChildren
            ? "hover:bg-black/5 text-apple-ink font-semibold"
            : "hover:bg-black/[0.03] text-neutral-600 font-normal"
        }`}
      >
        {hasChildren ? (
          <>
            <span className="text-gray-400 hover:text-black transition-colors">
              {isOpen ? (
                <ChevronDown className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
            </span>
            {isOpen ? (
              <FolderOpen className="w-4 h-4 text-amber-500 shrink-0" />
            ) : (
              <Folder className="w-4 h-4 text-amber-500 shrink-0" />
            )}
          </>
        ) : (
          <>
            <span className="w-3.5 h-3.5" />
            {getFileIcon(node.name)}
          </>
        )}
        <span className="truncate">{node.name}</span>
      </div>

      {hasChildren && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              initial={animated ? { height: 0, opacity: 0 } : false}
              animate={animated ? { height: "auto", opacity: 1 } : {}}
              exit={animated ? { height: 0, opacity: 0 } : {}}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="pl-3.5 ml-2 border-l border-black/10 overflow-hidden"
            >
              {node.nodes.map((childNode) => (
                <FilesystemItem
                  node={childNode}
                  key={childNode.name}
                  animated={animated}
                />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}

export const evoqStudioNodes = [
  {
    name: "evoq-studio",
    nodes: [
      {
        name: "app",
        nodes: [
          { name: "layout.jsx" },
          { name: "page.jsx" },
          { name: "globals.css" },
          {
            name: "services",
            nodes: [
              { name: "system-development/page.jsx" },
              { name: "website-development/page.jsx" },
              { name: "ai-agents-workflows/page.jsx" },
              { name: "brand-ui-rebranding/page.jsx" },
            ],
          },
          {
            name: "company",
            nodes: [
              { name: "about/page.jsx" },
              { name: "capabilities/page.jsx" },
              { name: "architecture/page.jsx" },
              { name: "contact/page.jsx" },
            ],
          },
          {
            name: "stack",
            nodes: [
              { name: "nextjs-react/page.jsx" },
              { name: "nodejs-python/page.jsx" },
              { name: "postgresql-redis/page.jsx" },
              { name: "tailwind-framer-motion/page.jsx" },
            ],
          },
          {
            name: "legal",
            nodes: [
              { name: "privacy-policy/page.jsx" },
              { name: "terms-of-service/page.jsx" },
            ],
          },
        ],
      },
      {
        name: "components",
        nodes: [
          { name: "Header.jsx" },
          { name: "VideoHero.jsx" },
          { name: "VideoShowcase.jsx" },
          { name: "FileTreeSection.jsx" },
          { name: "Features.jsx" },
          { name: "TechOrbit.jsx" },
          { name: "ZenoShowcaseSection.jsx" },
          { name: "LunaGraphicsSearchConsoleSection.jsx" },
          { name: "AiKpiCardsSection.jsx" },
          {
            name: "ui",
            nodes: [
              { name: "interactive-terminal.jsx" },
              { name: "filesystem-item.jsx" },
              { name: "motion-footer.jsx" },
              { name: "testimonials.jsx" },
              { name: "liquid-glass.jsx" },
            ],
          },
          {
            name: "magicui",
            nodes: [
              { name: "animated-grid-pattern.jsx" },
              { name: "interactive-grid-pattern.jsx" },
              { name: "kinetic-text.jsx" },
            ],
          },
        ],
      },
      {
        name: "lib",
        nodes: [{ name: "utils.js" }],
      },
      {
        name: "public",
        nodes: [
          { name: "evoq-logo.png" },
          { name: "herovideo.mp4" },
        ],
      },
      { name: "next.config.mjs" },
      { name: "package.json" },
      { name: "tailwind.config.js" },
    ],
  },
];
