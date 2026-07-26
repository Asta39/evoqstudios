export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://evoq.studio";

  const routes = [
    "",
    "/services/system-development",
    "/services/website-development",
    "/services/ai-agents-workflows",
    "/services/brand-ui-rebranding",
    "/company/about",
    "/company/capabilities",
    "/company/architecture",
    "/company/contact",
    "/stack/nextjs-react",
    "/stack/nodejs-python",
    "/stack/postgresql-redis",
    "/stack/tailwind-framer-motion",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
