import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const VideoHero = dynamic(() => import("../components/VideoHero"), { ssr: false });
const Features = dynamic(() => import("../components/Features"), { ssr: false });
const TechOrbit = dynamic(() => import("../components/TechOrbit"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-apple-blue selection:text-white pt-10">
      <Header />
      <Hero />
      <VideoHero />
      <Features />
      <TechOrbit />
    </main>
  );
}
