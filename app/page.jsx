"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const VideoHero = dynamic(() => import("../components/VideoHero"), { ssr: false });
const VideoShowcase = dynamic(() => import("../components/VideoShowcase"), { ssr: false });
const ProjectsSection = dynamic(
  () => import("../components/ProjectsSection").then((mod) => mod.ProjectsSection),
  { ssr: false }
);
const Features = dynamic(() => import("../components/Features"), { ssr: false });
const TechOrbit = dynamic(() => import("../components/TechOrbit"), { ssr: false });
const FileTreeSection = dynamic(() => import("../components/FileTreeSection"), { ssr: false });
const MacbookScroll = dynamic(() => import("../components/ui/macbook-scroll").then((mod) => mod.MacbookScroll), { ssr: false });
const Testimonials = dynamic(() => import("../components/ui/testimonials"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      {/* Main Content Container with high z-index & rounded bottom edge */}
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5">
        <VideoHero />
        <VideoShowcase />
        <ProjectsSection />
        <Features />
        <TechOrbit />
        <FileTreeSection />
        <MacbookScroll
          src="/macbook-zeno-invoices.png"
          title={
            <span className="text-apple-ink font-bold">
              Production Systems Showcase. <br />
              <span className="text-neutral-400">Architected for Speed & Reliability.</span>
            </span>
          }
          showGradient={false}
        />
        <Testimonials />
      </main>

      {/* Cinematic Reveal Footer */}
      <CinematicFooter />
    </div>
    </>
  );
}
