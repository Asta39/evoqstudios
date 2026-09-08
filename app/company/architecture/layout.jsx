import { buildMetadata, breadcrumbJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

export const metadata = buildMetadata({
  title: "Our Engineering Architecture Philosophy",
  description:
    "How Evoq Studio builds: a systematic approach to engineering software systems that are scalable, maintainable, secure, and aligned with business growth.",
  path: "/company/architecture",
});

export default function ArchitectureLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Architecture", path: "/company/architecture" }])} />
      {children}
    </>
  );
}
