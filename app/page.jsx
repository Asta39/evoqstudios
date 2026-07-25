import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-apple-blue selection:text-white pt-10">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
