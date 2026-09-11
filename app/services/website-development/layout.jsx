import { buildMetadata, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";
import { faqs } from "./faqs";

const PATH = "/services/website-development";

export const metadata = buildMetadata({
  title: "Website Development in Nairobi, Kenya",
  description:
    "Performance-first websites with pixel-perfect design and headless integration, built remotely for businesses in Nairobi, Kenya and worldwide.",
  path: PATH,
});

export default function WebsiteDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Website Development", path: PATH }]),
          serviceJsonLd({
            name: "Website Development",
            description: metadata.description,
            path: PATH,
          }),
          faqJsonLd(faqs),
        ]}
      />
      {children}
    </>
  );
}
