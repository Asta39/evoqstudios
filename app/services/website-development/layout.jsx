import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

const PATH = "/services/website-development";

export const metadata = buildMetadata({
  title: "Website Development",
  description:
    "Performance-first websites with pixel-perfect design, dynamic motion, and seamless headless integration.",
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
        ]}
      />
      {children}
    </>
  );
}
