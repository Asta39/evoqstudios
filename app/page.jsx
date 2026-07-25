import GlobalNav from "../components/GlobalNav";
import SubNav from "../components/SubNav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-apple-blue selection:text-white">
      <GlobalNav />
      <SubNav />
      <Hero />
    </main>
  );
}
