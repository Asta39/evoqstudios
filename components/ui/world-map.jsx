"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { cn } from "../../lib/utils";

export default function WorldMap({
  dots = [],
  lineColor = "#0071e3",
  className,
}) {
  const svgRef = useRef(null);

  const svgMap = useMemo(() => {
    try {
      const map = new DottedMap({ height: 100, grid: "diagonal" });
      return map.getSVG({
        radius: 0.22,
        color: "#00000035",
        shape: "circle",
        backgroundColor: "#FFFFFF",
      });
    } catch (err) {
      return "";
    }
  }, []);

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className={cn("w-full aspect-[2/1] bg-white rounded-2xl relative font-sans overflow-hidden border border-black/5 shadow-sm p-2", className)}>
      {svgMap && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="World connectivity map"
          height="495"
          width="1056"
          draggable={false}
        />
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="world-map-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="10%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="90%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#world-map-path-gradient)"
                strokeWidth="2"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const startPt = projectPoint(dot.start.lat, dot.start.lng);
          const endPt = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-group-${i}`}>
              {/* Start Point Pulsing Indicator */}
              <g key={`start-${i}`}>
                <circle cx={startPt.x} cy={startPt.y} r="3" fill={lineColor} />
                <circle cx={startPt.x} cy={startPt.y} r="3" fill={lineColor} opacity="0.6">
                  <animate attributeName="r" from="3" to="10" dur="2s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>
              {/* End Point Pulsing Indicator */}
              <g key={`end-${i}`}>
                <circle cx={endPt.x} cy={endPt.y} r="3.5" fill="#10b981" />
                <circle cx={endPt.x} cy={endPt.y} r="3.5" fill="#10b981" opacity="0.7">
                  <animate attributeName="r" from="3.5" to="12" dur="2s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.7" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
