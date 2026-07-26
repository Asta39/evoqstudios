import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://evoq.studio"),
  title: {
    default: "Evoq Studio — Software Engineering, Digital Platforms & AI Systems",
    template: "%s | Evoq Studio",
  },
  description:
    "Evoq Studio is an independent digital engineering studio crafting high-performance web applications, custom enterprise systems, brand rebrandings, and intelligent AI agent workflows.",
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
  authors: [{ name: "Evoq Studio", url: "https://evoq.studio" }],
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
    url: "https://evoq.studio",
    siteName: "Evoq Studio",
    images: [
      {
        url: "/evoq-logo.png",
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
    images: ["/evoq-logo.png"],
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
  image: "https://evoq.studio/evoq-logo.png",
  "@id": "https://evoq.studio/#organization",
  url: "https://evoq.studio",
  telephone: "+254115706542",
  email: "evoqcreativetecg@gmail.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/evoq-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/evoq-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-white text-apple-ink antialiased selection:bg-apple-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
