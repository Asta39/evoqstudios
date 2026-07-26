"use client";

import { OrbitingCircles } from "./ui/orbiting-circles";
import Image from "next/image";

// SVG icon components for the full Evoq tech stack
function NextjsIcon() {
  return (
    <svg viewBox="0 0 180 180" width="24" height="24" fill="none">
      <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z" fill="url(#paint0_next)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_next)" />
      </g>
      <defs>
        <linearGradient id="paint0_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#61DAFB">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.846.206-1.028.588-1.16 2.604-.378 5.306a14.82 14.82 0 0 0-.685 2.154 14.84 14.84 0 0 0-2.154.685c-2.702-.782-4.718-.65-5.306.378-.588 1.028.197 2.91 2.067 4.907-1.86 1.993-2.64 3.87-2.053 4.9.254.442.717.706 1.294.706 1.346 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.577 0 1.04-.263 1.294-.706.588-1.028-.197-2.91-2.067-4.907 1.861-1.993 2.64-3.87 2.053-4.9-.254-.442-.717-.706-1.294-.706z" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#06B6D4">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#3178C6">
      <path d="M1.125 0C.507 0 0 .507 0 1.125v21.75C0 23.493.507 24 1.125 24h21.75c.618 0 1.125-.507 1.125-1.125V1.125C24 .507 23.493 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.745-.246 5.81 5.81 0 0 0-.826-.145 6.07 6.07 0 0 0-.901-.064c-.401 0-.742.062-1.023.187a1.42 1.42 0 0 0-.64.507c-.156.213-.234.457-.234.732 0 .235.056.435.168.6.113.165.265.305.456.42.19.115.413.214.667.296.255.083.528.163.818.242l.532.145c.42.113.82.247 1.2.403.38.156.712.35.996.58.284.23.506.507.666.83.16.324.24.71.24 1.16 0 .58-.135 1.094-.405 1.54a3.917 3.917 0 0 1-1.137 1.169c-.488.33-1.077.575-1.766.734-.69.159-1.46.239-2.311.239-.77 0-1.472-.056-2.105-.17-.633-.113-1.222-.295-1.767-.544v-2.587c.606.353 1.25.626 1.93.819.68.192 1.344.288 1.993.288.423 0 .793-.058 1.11-.174a1.44 1.44 0 0 0 .741-.482c.18-.206.27-.457.27-.753 0-.25-.062-.464-.187-.643a1.76 1.76 0 0 0-.488-.456c-.2-.125-.436-.232-.708-.321-.272-.089-.558-.175-.858-.258l-.516-.145a7.84 7.84 0 0 1-1.226-.412 3.65 3.65 0 0 1-1.015-.596 3.1 3.1 0 0 1-.685-.855c-.168-.344-.252-.756-.252-1.234 0-.58.137-1.085.41-1.516.275-.43.653-.78 1.137-1.048.484-.268 1.056-.464 1.717-.588.66-.125 1.378-.187 2.153-.187zm-7.676.225v2.363H8.384V24H5.328V12.338H2.9v-2.363h7.912z" />
    </svg>
  );
}

function FramerMotionIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#F08">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#339933">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0 l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072 c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.136,0.235 l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253 v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#3776AB">
      <path d="M11.898 0c-5.26 0-4.943 2.28-4.943 2.28v2.36h4.996v.707H4.978S0 4.8 0 10.064c0 5.265 4.343 5.068 4.343 5.068h2.596v-3.64s-.14-4.343 4.275-4.343h4.343S20 7.29 20 2.28C20-.27 15.655 0 11.898 0zm-2.64 1.397a.972.972 0 1 1 0 1.944.972.972 0 0 1 0-1.944zM12.1 24c5.26 0 4.943-2.28 4.943-2.28v-2.36h-4.996v-.707h6.974S24 19.2 24 13.936c0-5.265-4.343-5.068-4.343-5.068h-2.596v3.64s.14 4.343-4.275 4.343H8.443S4 16.71 4 21.72C4 24.27 8.345 24 12.1 24zm2.64-1.397a.972.972 0 1 1 0-1.944.972.972 0 0 1 0 1.944z" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#336791">
      <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.826 2.865.363 4.471.462 6.681c.03.66.18 1.42.39 2.274.21.852.476 1.79.81 2.755.335.966.728 1.917 1.2 2.732.472.815 1.003 1.548 1.71 1.96.376.22.8.322 1.188.268.39-.054.735-.247 1.003-.549.513-.577.585-1.187.692-1.732.107-.545.173-.947.173-.947l.038-.16c.255.453.558.88.898 1.265-.34.382-.532.845-.532 1.34 0 .377.098.739.267 1.063-.468.478-.786 1.105-.786 1.803 0 1.15.81 2.107 1.9 2.418a4.69 4.69 0 0 0-.044.644c0 .464.068.876.197 1.237-.818.275-1.305.712-1.505 1.016a.645.645 0 0 0 .07.812.637.637 0 0 0 .813.065c.41-.29 1.12-.617 2.48-.588.946.02 1.712.26 2.305.606 1.098-.22 2.1-.617 2.867-1.05.766-.433 1.312-.89 1.562-1.268a.646.646 0 0 0-.116-.82.637.637 0 0 0-.82.054c-.233.248-.696.61-1.373.975a8.39 8.39 0 0 1-1.048.462c.102-.264.166-.556.166-.876 0-.636-.207-1.186-.566-1.645.816-.63 1.28-1.437 1.28-2.32 0-.392-.097-.756-.273-1.088a3.17 3.17 0 0 0 .656-.862c.21-.39.37-.822.478-1.292a8.37 8.37 0 0 0 .193-1.685c.006-.464-.01-.9-.05-1.285.472-.203.877-.443 1.2-.725.575-.503.893-1.128.893-1.834 0-.372-.098-.72-.27-1.035.27-.34.467-.73.573-1.154a3.19 3.19 0 0 0-.065-1.848 2.91 2.91 0 0 0-.482-.89A6.062 6.062 0 0 0 17.128 0z" />
    </svg>
  );
}

function RedisIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#DC382D">
      <path d="M12 0L2 5.5v13L12 24l10-5.5v-13L12 0zm7.5 16.9l-7.5 4.1-7.5-4.1V7.1l7.5-4.1 7.5 4.1v9.8z" />
    </svg>
  );
}

function SupabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#3ECF8E">
      <path d="M13.35 24v-8.87h8.4c.95 0 1.48-1.1 0-1.76L5.64 0v8.87H.7c-.95 0-1.48 1.1 0 1.76L13.35 24z" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  );
}

function OpenAIIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7941.7941 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.535-3.0137l.142.0852 4.783 2.7582a.7705.7705 0 0 0 .7855 0l5.833-3.3697v2.3325a.0805.0805 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.4a.7657.7657 0 0 0 .3927.6766l5.814 3.3555-2.02 1.1686a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.4992 4.4992 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.607 8.3817l2.02-1.1639a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6773a.7941.7941 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7582a.7705.7705 0 0 0-.7855 0L8.9068 9.2547V6.9222a.0805.0805 0 0 1 .0332-.0615l4.8303-2.7913a4.4992 4.4992 0 0 1 6.6758 4.6601zM11.9033 13.535l-2.7866-1.6111 2.7866-1.6111 2.7866 1.6111z" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.956 0h2.12a.185.185 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.143a.186.186 0 00-.185.185v1.887c0 .102.083.186.185.186m0 2.714h2.12a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.143a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185m2.956 0h2.12a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185" />
    </svg>
  );
}

function AWSIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#FF9900">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7.5 3.75v7.5L12 19.8 4.5 16.05v-7.5L12 4.8z" />
    </svg>
  );
}

export default function TechOrbit() {
  return (
    <section className="bg-white py-24 px-4 font-sans">
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

        {/* Multi-ring Orbiting Circles */}
        <div className="relative h-[560px] w-full overflow-hidden flex items-center justify-center">
          {/* Center logo */}
          <div className="absolute z-20 flex items-center justify-center p-3 rounded-full bg-white shadow-md border border-black/10">
            <Image
              src="/evoq-logo.png"
              alt="Evoq Studio"
              width={42}
              height={42}
              className="object-contain"
            />
          </div>

          {/* Ring 1: Core Frontend Stack (Radius 90) */}
          <OrbitingCircles radius={90} duration={25} iconSize={42}>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <NextjsIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <ReactIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <TailwindIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <TypeScriptIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <FramerMotionIcon />
            </div>
          </OrbitingCircles>

          {/* Ring 2: Backend & Database Stack (Radius 170) */}
          <OrbitingCircles radius={170} duration={35} reverse iconSize={42}>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <NodeIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <PythonIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <PostgresIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <RedisIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <SupabaseIcon />
            </div>
          </OrbitingCircles>

          {/* Ring 3: Infrastructure & AI Stack (Radius 240) */}
          <OrbitingCircles radius={240} duration={45} iconSize={42}>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <VercelIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <OpenAIIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <DockerIcon />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
              <AWSIcon />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
