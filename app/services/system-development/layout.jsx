import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

const PATH = "/services/system-development";

export const metadata = buildMetadata({
  title: "System Development",
  description:
    "Custom software systems designed for reliability, high-concurrency performance, and long-term enterprise growth.",
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
        ]}
      />
      {children}
    </>
  );
}
