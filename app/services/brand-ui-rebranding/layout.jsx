import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

const PATH = "/services/brand-ui-rebranding";

export const metadata = buildMetadata({
  title: "Brand & UI Rebranding",
  description:
    "Strategic rebranding and UI overhauls that align your visual identity with where your business is going.",
  path: PATH,
});

export default function BrandUiRebrandingLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Brand & UI Rebranding", path: PATH }]),
          serviceJsonLd({
            name: "Brand & UI Rebranding",
            description: metadata.description,
            path: PATH,
          }),
        ]}
      />
      {children}
    </>
  );
}
