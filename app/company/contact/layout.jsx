import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";
import { faqs } from "./faqs";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Talk to Evoq Studio's founders about your next system, website, or AI workflow. We respond within one business day with technical insights and estimates.",
  path: "/company/contact",
});

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/company/contact" }]),
          faqJsonLd(faqs),
        ]}
      />
      {children}
    </>
  );
}
