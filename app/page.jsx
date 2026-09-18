"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"));
const VideoHero = dynamic(() => import("../components/VideoHero"));
const VideoShowcase = dynamic(() => import("../components/VideoShowcase"));
const ProjectsSection = dynamic(
  () => import("../components/ProjectsSection").then((mod) => mod.ProjectsSection)
);
const Features = dynamic(() => import("../components/Features"));
const TechOrbit = dynamic(() => import("../components/TechOrbit"));
const FileTreeSection = dynamic(() => import("../components/FileTreeSection"));
const RecedingTextPlane = dynamic(
  () => import("../components/ui/receding-text-plane").then((mod) => mod.RecedingTextPlane)
);
const Testimonials = dynamic(() => import("../components/ui/testimonials"));
const CinematicFooter = dynamic(
  () => import("../components/ui/motion-footer").then((mod) => mod.CinematicFooter)
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
        <RecedingTextPlane
          data-rail-label="How we build"
          data-rail-description="Good systems are like good plumbing — you only notice when it's missing."
          className="h-[70vh] sm:h-screen bg-white"
        >
          Good systems are like good plumbing — you only notice when it's missing.
          We plan for Murphy's Law, mostly out of personal experience.
        </RecedingTextPlane>
        <Testimonials />
      </main>

      {/* Cinematic Reveal Footer */}
      <CinematicFooter />
    </div>
    </>
  );
}
