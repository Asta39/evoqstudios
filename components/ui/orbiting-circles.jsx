"use client";

import { cn } from "../../lib/utils";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}) {
  const calculatedDuration = duration / speed;
  const childArray = React.Children.toArray(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-black/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}
      {childArray.map((child, index) => {
        const angle = (360 / childArray.length) * index;
        return (
          <div
            key={index}
            style={{
              "--duration": `${calculatedDuration}s`,
              "--delay": `${-(calculatedDuration / childArray.length) * index}s`,
              "--radius": `${radius}px`,
              "--icon-size": `${iconSize}px`,
            }}
            className={cn(
              "absolute flex h-[var(--icon-size)] w-[var(--icon-size)] transform-gpu items-center justify-center rounded-full",
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              reverse
                ? "animate-orbit-reverse"
                : "animate-orbit",
              className
            )}
          >
            <div
              className={cn(
                reverse
                  ? "animate-orbit"
                  : "animate-orbit-reverse"
              )}
              style={{
                "--duration": `${calculatedDuration}s`,
                "--delay": `${-(calculatedDuration / childArray.length) * index}s`,
                "--radius": "0px",
              }}
            >
              {child}
            </div>
          </div>
        );
      })}
    </>
  );
}
