import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const VideoHero = dynamic(() => import("../components/VideoHero"), { ssr: false });
const VideoShowcase = dynamic(() => import("../components/VideoShowcase"), { ssr: false });
const Features = dynamic(() => import("../components/Features"), { ssr: false });
const TechOrbit = dynamic(() => import("../components/TechOrbit"), { ssr: false });
const FileTreeSection = dynamic(() => import("../components/FileTreeSection"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      {/* Main Content Container with high z-index & rounded bottom edge */}
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-2 sm:pt-4">
        <Header />
        <VideoHero />
        <VideoShowcase />
        <Features />
        <TechOrbit />
        <FileTreeSection />
      </main>

      {/* Cinematic Reveal Footer */}
      <CinematicFooter />
    </div>
  );
}
