"use client";

import dynamic from "next/dynamic";

const ScrollRail = dynamic(() => import("./ScrollRail"), { ssr: false });

export function ScrollRailMount() {
  return <ScrollRail />;
}
