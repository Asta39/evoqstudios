import { buildMetadata, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";
import { faqs } from "./faqs";

const PATH = "/services/ai-agents-workflows";

export const metadata = buildMetadata({
  title: "AI Agent & Workflow Development in Nairobi",
  description:
    "Autonomous AI agents wired into M-Pesa Daraja, KRA eTIMS, BRS lookup, and OCR systems — engineered remotely from Nairobi, Kenya, not generic AI wrappers.",
  path: PATH,
});

export default function AiAgentsWorkflowsLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "AI Agents & Workflows", path: PATH }]),
          serviceJsonLd({
            name: "AI Agents & Workflow Engineering",
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
