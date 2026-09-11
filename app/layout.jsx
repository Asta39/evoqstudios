import "./globals.css";
import { JsonLd } from "../components/JsonLd";
import { BottomScrollBlur } from "../components/BottomScrollBlur";

export const metadata = {
  metadataBase: new URL("https://www.evoqstudioke.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Evoq Studio — Software Engineering, Digital Platforms & AI Systems",
    template: "%s | Evoq Studio",
  },
  description:
    "Evoq Studio is an independent digital engineering studio in Nairobi, Kenya, building high-performance web apps, enterprise systems, and AI agent workflows.",
  keywords: [
    "Evoq Studio",
    "System Development",
    "Custom Website Engineering",
    "AI Agent Workflows",
    "Next.js Development Agency",
    "Software Architecture",
    "Nairobi Kenya Tech Studio",
    "Enterprise Software Solutions",
  ],
  authors: [{ name: "Evoq Studio", url: "https://www.evoqstudioke.com" }],
  creator: "Evoq Studio",
  publisher: "Evoq Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/evoq-logo.png",
    shortcut: "/evoq-logo.png",
    apple: "/evoq-logo.png",
  },
  openGraph: {
    title: "Evoq Studio — Software Engineering, Digital Platforms & AI Systems",
    description:
      "Boutique digital studio engineering performance-first web applications, enterprise ERP systems, and autonomous AI workflows.",
    url: "https://www.evoqstudioke.com",
    siteName: "Evoq Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evoq Studio Digital Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evoq Studio — Software Engineering & AI Systems",
    description:
      "High-performance systems, custom web products, and intelligent AI architectures built for ambitious teams.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Evoq Studio",
  image: "https://www.evoqstudioke.com/evoq-logo.png",
  "@id": "https://www.evoqstudioke.com/#organization",
  url: "https://www.evoqstudioke.com",
  telephone: "+254115706542",
  email: "evoqcreativetech@gmail.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi CBD",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.2921,
    longitude: 36.8219,
  },
  sameAs: [
    "https://github.com/Asta39/evoqstudios",
    "https://wa.me/254115706542",
  ],
  knowsAbout: [
    "Software Architecture",
    "Next.js Web Engineering",
    "AI Agent Workflows",
    "PostgreSQL & Database Design",
    "System Integration",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Evoq Studio",
  url: "https://www.evoqstudioke.com",
  publisher: { "@id": "https://www.evoqstudioke.com/#organization" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/evoq-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/evoq-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={[jsonLdSchema, websiteSchema]} />
      </head>
      <body className="bg-white text-apple-ink antialiased selection:bg-apple-blue selection:text-white">
        {children}
        <BottomScrollBlur />
      </body>
    </html>
  );
}
