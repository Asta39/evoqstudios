import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

const PATH = "/services/ai-agents-workflows";

export const metadata = buildMetadata({
  title: "AI Agents & Workflows",
  description:
    "Autonomous AI agents and workflows engineered into M-Pesa Daraja, KRA eTIMS, BRS lookup, Paystack, and document OCR systems — not generic AI wrappers.",
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
        ]}
      />
      {children}
    </>
  );
}
