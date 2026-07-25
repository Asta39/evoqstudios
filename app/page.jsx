import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-apple-blue selection:text-white pt-10">
      <Header />
      <Hero />
    </main>
  );
}
