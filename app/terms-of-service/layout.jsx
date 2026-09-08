import { buildMetadata, breadcrumbJsonLd } from "../../lib/seo";
import { JsonLd } from "../../components/JsonLd";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Evoq Studio's terms of service governing engagements, deliverables, and use of our website.",
  path: "/terms-of-service",
});

export default function TermsOfServiceLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms-of-service" }])} />
      {children}
    </>
  );
}
