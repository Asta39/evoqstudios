"use client";

import { OrbitingCircles } from "./ui/orbiting-circles";
import Image from "next/image";

// SVG icon components for the tech stack
function NextjsIcon() {
  return (
    <svg viewBox="0 0 180 180" width="28" height="28" fill="none">
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{maskType:"alpha"}}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z" fill="url(#paint0)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1)" />
      </g>
      <defs>
        <linearGradient id="paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#61DAFB">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.846.206-1.028.588-1.16 2.604-.378 5.306a14.82 14.82 0 0 0-.685 2.154 14.84 14.84 0 0 0-2.154.685c-2.702-.782-4.718-.65-5.306.378-.588 1.028.197 2.91 2.067 4.907-1.86 1.993-2.64 3.87-2.053 4.9.254.442.717.706 1.294.706 1.346 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.577 0 1.04-.263 1.294-.706.588-1.028-.197-2.91-2.067-4.907 1.861-1.993 2.64-3.87 2.053-4.9-.254-.442-.717-.706-1.294-.706z" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#06B6D4">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#336791">
      <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.826 2.865.363 4.471.462 6.681c.03.66.18 1.42.39 2.274.21.852.476 1.79.81 2.755.335.966.728 1.917 1.2 2.732.472.815 1.003 1.548 1.71 1.96.376.22.8.322 1.188.268.39-.054.735-.247 1.003-.549.513-.577.585-1.187.692-1.732.107-.545.173-.947.173-.947l.038-.16c.255.453.558.88.898 1.265-.34.382-.532.845-.532 1.34 0 .377.098.739.267 1.063-.468.478-.786 1.105-.786 1.803 0 1.15.81 2.107 1.9 2.418a4.69 4.69 0 0 0-.044.644c0 .464.068.876.197 1.237-.818.275-1.305.712-1.505 1.016a.645.645 0 0 0 .07.812.637.637 0 0 0 .813.065c.41-.29 1.12-.617 2.48-.588.946.02 1.712.26 2.305.606 1.098-.22 2.1-.617 2.867-1.05.766-.433 1.312-.89 1.562-1.268a.646.646 0 0 0-.116-.82.637.637 0 0 0-.82.054c-.233.248-.696.61-1.373.975a8.39 8.39 0 0 1-1.048.462c.102-.264.166-.556.166-.876 0-.636-.207-1.186-.566-1.645.816-.63 1.28-1.437 1.28-2.32 0-.392-.097-.756-.273-1.088a3.17 3.17 0 0 0 .656-.862c.21-.39.37-.822.478-1.292a8.37 8.37 0 0 0 .193-1.685c.006-.464-.01-.9-.05-1.285.472-.203.877-.443 1.2-.725.575-.503.893-1.128.893-1.834 0-.372-.098-.72-.27-1.035.27-.34.467-.73.573-1.154a3.19 3.19 0 0 0-.065-1.848 2.91 2.91 0 0 0-.482-.89A6.062 6.062 0 0 0 17.128 0z" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#339933">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0 l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072 c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.136,0.235 l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253 v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
    </svg>
  );
}

export default function TechOrbit() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-[1080px] mx-auto">
        {/* Section header */}
        <div className="mb-8 text-center">
          <p className="text-[13px] font-medium text-apple-blue uppercase tracking-widest mb-3">
            Our Stack
          </p>
          <h2 className="text-[36px] sm:text-[44px] font-semibold text-[#1d1d1f] tracking-[-0.025em] leading-[1.1]">
            Built on tools that ship.
          </h2>
          <p className="mt-4 text-[17px] text-[#6e6e73] font-normal max-w-[520px] mx-auto leading-relaxed">
            We pick boring, battle-tested tech — then make it do extraordinary things.
          </p>
        </div>

        {/* Orbiting circles */}
        <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
          {/* Center logo */}
          <div className="absolute z-10 flex items-center justify-center">
            <Image
              src="/evoq-logo.png"
              alt="Evoq Studio"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          {/* Inner orbit */}
          <OrbitingCircles radius={90} duration={25} iconSize={40}>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center">
              <NextjsIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center">
              <ReactIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center">
              <TailwindIcon />
            </div>
          </OrbitingCircles>

          {/* Outer orbit */}
          <OrbitingCircles radius={190} duration={35} reverse iconSize={40}>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center">
              <PostgresIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center">
              <VercelIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center">
              <NodeIcon />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
