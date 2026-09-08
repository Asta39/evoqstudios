import { projects } from "../lib/projects";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://evoqcreative.co.ke";

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
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : route.startsWith("/projects") ? 0.85 : 0.8,
  }));
}
