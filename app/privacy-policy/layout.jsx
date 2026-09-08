import { buildMetadata, breadcrumbJsonLd } from "../../lib/seo";
import { JsonLd } from "../../components/JsonLd";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read Evoq Studio's privacy policy covering how we collect, use, and protect client and visitor data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }])} />
      {children}
    </>
  );
}
