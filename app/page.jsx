import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const VideoHero = dynamic(() => import("../components/VideoHero"), { ssr: false });
const VideoShowcase = dynamic(() => import("../components/VideoShowcase"), { ssr: false });
const Features = dynamic(() => import("../components/Features"), { ssr: false });
const TechOrbit = dynamic(() => import("../components/TechOrbit"), { ssr: false });
const FileTreeSection = dynamic(() => import("../components/FileTreeSection"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-apple-blue selection:text-white pt-2 sm:pt-4">
      <Header />
      <VideoHero />
      <VideoShowcase />
      <Features />
      <TechOrbit />
      <FileTreeSection />
    </main>
  );
}


