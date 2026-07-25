import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const Features = dynamic(() => import("../components/Features"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-apple-blue selection:text-white pt-10">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
