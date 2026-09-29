import Link from "next/link";
import { PixelRunGame } from "../components/PixelRunGame";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-[#0a0a0c] py-20 text-center text-white">
      <div className="flex flex-col items-center gap-3 px-4">
        <span className="font-mono text-sm text-white/40">404</span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="max-w-md text-sm text-white/50">
          While we rebuild the route, dodge a few obstacles.
        </p>
      </div>

      <div className="w-full px-2 sm:px-4">
        <PixelRunGame />
      </div>

      <Link
        href="/"
        className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-80"
      >
        Back to homepage
      </Link>
    </div>
  );
}
