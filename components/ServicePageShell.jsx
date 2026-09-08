"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("./ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

export function ServicePageShell({ children }) {
  return (
    <>
      <Header />
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pb-20 px-4 sm:px-6 lg:px-12">
        {children}
      </main>

      <CinematicFooter />
    </div>
    </>
  );
}
