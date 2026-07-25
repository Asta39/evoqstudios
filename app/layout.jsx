import "./globals.css";

export const metadata = {
  title: "Evoq Studio — System Development, Websites & AI Systems",
  description:
    "Evoq Studio crafts high-performance systems, custom websites, brand rebrandings, and intelligent AI architectures.",
  icons: {
    icon: "/evoq-logo.png",
    shortcut: "/evoq-logo.png",
    apple: "/evoq-logo.png",
  },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-apple-ink antialiased selection:bg-apple-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
