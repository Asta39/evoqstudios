import { buildMetadata, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";
import { faqs } from "./faqs";

const PATH = "/services/system-development";

export const metadata = buildMetadata({
  title: "Custom System Development in Nairobi, Kenya",
  description:
    "Custom software systems for reliability, high-concurrency performance, and long-term enterprise growth — built remotely for teams in Nairobi and beyond.",
  path: PATH,
});

export default function SystemDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "System Development", path: PATH }]),
          serviceJsonLd({
            name: "Custom System Development",
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
