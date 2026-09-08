import { buildMetadata, breadcrumbJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

export const metadata = buildMetadata({
  title: "Capabilities — Full-Stack Digital Execution",
  description:
    "A full-stack digital studio for ambitious teams — from strategy to cloud deployment, Evoq Studio covers the entire digital lifecycle.",
  path: "/company/capabilities",
});

export default function CapabilitiesLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Capabilities", path: "/company/capabilities" }])} />
      {children}
    </>
  );
}
