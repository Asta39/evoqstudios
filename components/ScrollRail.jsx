"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { PreviewRail } from "./motion/preview-rail";

const SECTION_SELECTOR = "main section, footer, [data-rail-label]";
const MAX_LABEL = 56;
const MAX_DESCRIPTION = 110;

function tidy(text) {
  return text.replace(/\s+/g, " ").trim();
}

function shorten(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 0 ? cut.lastIndexOf(" ") : max)}…`;
}

function calm(text) {
  if (text.length < 4 || text !== text.toUpperCase()) return text;
  return text.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());
}

function readLabel(el, index) {
  const explicit = el.getAttribute("data-rail-label");
  if (explicit) return explicit;
  const heading = el.querySelector("h1, h2, h3");
  const text = heading ? tidy(heading.innerText || heading.textContent || "") : "";
  if (text) return shorten(calm(text.replace(/[.:]$/, "")), MAX_LABEL);
  return `Section ${index + 1}`;
}

function readDescription(el) {
  const explicit = el.getAttribute("data-rail-description");
  if (explicit) return explicit;
  for (const p of el.querySelectorAll("p")) {
    const text = tidy(p.innerText || p.textContent || "");
    if (text.length >= 30) return shorten(text, MAX_DESCRIPTION);
  }
  return "";
}

function collectSections() {
  const nodes = Array.from(document.querySelectorAll(SECTION_SELECTOR));
  return nodes.filter(
    (el) =>
      el.offsetHeight > 48 &&
      !el.closest('[aria-hidden="true"]') &&
      !nodes.some((other) => other !== el && other.contains(el)),
  );
}

// The footer is pinned to the bottom of the viewport underneath the page, so
// its own top never moves — the bottom edge of <main> is where it is revealed.
function sectionTop(el) {
  if (el.tagName === "FOOTER") {
    const main = document.querySelector("main");
    if (main) return main.getBoundingClientRect().bottom;
  }
  return el.getBoundingClientRect().top;
}

function isDarkBehind(x, y) {
  let node = document.elementFromPoint(x, y);
  while (node && node !== document.documentElement) {
    if (node.tagName === "VIDEO") return true;
    const tone = node.getAttribute?.("data-rail-tone");
    if (tone) return tone === "dark";
    const bg = getComputedStyle(node).backgroundColor;
    const match = bg.match(/rgba?\(([^)]+)\)/);
    if (match) {
      const [r, g, b, a = 1] = match[1].split(",").map((v) => parseFloat(v));
      if (a > 0.6) return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.45;
    }
    node = node.parentElement;
  }
  return false;
}

export default function ScrollRail() {
  const pathname = usePathname();
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [tone, setTone] = useState("light");
  const elementsRef = useRef([]);
  const itemsRef = useRef([]);

  const discover = useCallback(() => {
    const found = collectSections();
    const previous = elementsRef.current;
    if (
      found.length === previous.length &&
      found.every((el, i) => el === previous[i])
    ) {
      return;
    }
    elementsRef.current = found;
    const next = found.map((el, index) => ({
      id: `rail-${index}`,
      label: readLabel(el, index),
      description: readDescription(el),
    }));
    itemsRef.current = next;
    setItems(next);
  }, []);

  useEffect(() => {
    let timer;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(discover, 180);
    };
    schedule();
    const observer = new MutationObserver((records) => {
      if (records.every((record) => record.target.closest?.(".scroll-rail"))) return;
      schedule();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", schedule);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, [discover, pathname]);

  useEffect(() => {
    if (items.length < 2) return;
    let frame = 0;
    let lastToneCheck = 0;

    const update = () => {
      frame = 0;
      const els = elementsRef.current;
      const probe = window.innerHeight * 0.4;
      let current = 0;
      els.forEach((el, i) => {
        if (sectionTop(el) <= probe) current = i;
      });
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = els.length - 1;
      const id = itemsRef.current[current]?.id ?? "";
      setActiveId((prev) => (prev === id ? prev : id));

      const now = performance.now();
      if (now - lastToneCheck > 120) {
        lastToneCheck = now;
        const dark = isDarkBehind(64, window.innerHeight / 2);
        setTone((prev) => {
          const next = dark ? "dark" : "light";
          return prev === next ? prev : next;
        });
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  const handleItemSelect = useCallback((item) => {
    const index = itemsRef.current.findIndex((entry) => entry.id === item.id);
    const el = elementsRef.current[index];
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let top;
    if (el.tagName === "FOOTER") {
      top = document.documentElement.scrollHeight;
    } else {
      const header = document.querySelector("header");
      const offset = header ? header.getBoundingClientRect().height : 0;
      top = el.getBoundingClientRect().top + window.scrollY - offset;
    }
    window.scrollTo({ top: Math.max(0, top), behavior: reduced ? "auto" : "smooth" });
  }, []);

  if (items.length < 2) return null;

  return (
    <div
      data-tone={tone}
      className="scroll-rail pointer-events-none fixed left-0 top-0 z-[55] h-dvh w-[min(30rem,100vw)]"
    >
      <PreviewRail
        items={items}
        label="Page sections"
        activeId={activeId}
        onItemSelect={handleItemSelect}
        highlightActive
        previewSide="after"
        className="h-full min-h-0"
        railClassName="pointer-events-auto mr-auto"
        previewClassName="scroll-rail-card"
      />
    </div>
  );
}
