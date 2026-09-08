import { buildMetadata, breadcrumbJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Meet the team behind Evoq Studio — an independent digital engineering studio in Nairobi building systems-first software with craft over volume.",
  path: "/company/about",
});

export default function AboutLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/company/about" }])} />
      {children}
    </>
  );
}
