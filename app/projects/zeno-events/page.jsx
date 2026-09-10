import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicePageShell } from "../../../components/ServicePageShell";
import { ProjectCard } from "../../../components/ProjectCard";
import { getProject, getAdjacentProjects } from "../../../lib/projects";
import { buildMetadata, breadcrumbJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

const project = getProject("zeno-events");

export function generateMetadata() {
  return buildMetadata({
    title: `${project.name} — Case Study`,
    description: project.tagline,
    path: `/projects/${project.slug}`,
  });
}

const gallery = [
  { src: "/gallery/zeno-events-1.png", alt: "Zeno Events home dashboard" },
  { src: "/gallery/zeno-events-3.png", alt: "Project overview — lifecycle stepper and financial health" },
  { src: "/gallery/zeno-events-2.png", alt: "Leads board across every capture channel" },
  { src: "/gallery/zeno-events-6.png", alt: "Event Inventory — rentable gear tracked by batch" },
  { src: "/gallery/zeno-events-4.png", alt: "Quotes list" },
  { src: "/gallery/zeno-events-5.png", alt: "Invoices list" },
  { src: "/gallery/zeno-events-7.png", alt: "Contracts with dual-party signing" },
  { src: "/gallery/zeno-events-8.png", alt: "Staff & Roles permission matrix" },
];

const modules = [
  {
    num: "01",
    title: "Roles & Access",
    tags: ["Admin"],
    body: "Nine built-in roles ship with Zeno Events: Admin, Accountant, Sales, HR, Inventory, general Staff, and three operational roles built for event logistics — Loading Staff, Warehouse Staff, and Collection Staff, each scoped to a mobile-friendly checklist and almost nothing else.",
  },
  {
    num: "02",
    title: "Home Dashboard",
    tags: ["Operations", "Daily-use"],
    body: "This week's events, the manifest pipeline (how many jobs are draft/confirmed/packing/loaded/dispatched/returned/inspected), and cash position on login. The calendar's day cells tint darker the busier they get — an early warning for double-booking risk.",
  },
  {
    num: "03",
    title: "Leads",
    tags: ["Sales", "CRM"],
    body: "Pre-contact inquiries captured from a public web form, QR code, Instagram/Facebook, WhatsApp click-to-chat, manual entry, or a referral code — all into one shared pipeline. A stale lead still \"New\" after two hours flags itself with an SLA warning.",
  },
  {
    num: "04",
    title: "Deals Pipeline",
    tags: ["Sales", "CRM"],
    body: "A general-purpose CRM pipeline for contacts, kept separate from the events-specific Leads and Projects system on purpose — for sales conversations that don't map cleanly onto an event booking.",
  },
  {
    num: "05",
    title: "Customers & Vendors",
    tags: ["Sales", "Spending", "Core Data"],
    body: "One shared address book for clients you invoice, vendors you buy from, or both. Every quote, invoice, bill, and project links back to a Contact here, with customer groups and saved vendor payout destinations.",
  },
  {
    num: "06",
    title: "Projects",
    tags: ["Operations", "Core Data"],
    body: "The hub everything else connects to. A Project is one event — a wedding, a corporate function, a graduation — tying together the client, the money, the gear, the paperwork, and the timeline. Lifecycle: Lead → Quoted → Confirmed → In Progress → Completed, most of it automatic.",
  },
  {
    num: "07",
    title: "Quotes & Quote Templates",
    tags: ["Sales", "Money"],
    body: "A priced proposal for a client, issued as draft, sent for review, accepted, declined, or converted straight into an invoice. Sending a quote is what first moves its project from Lead to Quoted.",
  },
  {
    num: "08",
    title: "Invoices, Payments & Credit Notes",
    tags: ["Sales", "Money"],
    body: "Issuing an invoice signs it (where eTIMS is enabled) and posts it to the ledger — a real accounting event from that point, not just a draft. A fully paid invoice is one half of what auto-completes a project.",
  },
  {
    num: "09",
    title: "Event Inventory & Reservations",
    tags: ["Inventory", "Operations"],
    body: "Rentable gear — chairs, tents, décor — tracked by physical batch and warehouse, not just quantity. Reservations auto-create from invoice content the moment a project is confirmed; anything ambiguous is flagged for a human to reserve manually, never silently guessed.",
  },
  {
    num: "10",
    title: "Items, Stock & Warehouses",
    tags: ["Inventory", "Spending"],
    body: "The general catalog and stock ledger for everything sold or bought — tracked stock, services, and rental gear, which also carries an Event Inventory presence. Tracked stock uses FIFO costing and reorder-level alerts.",
  },
  {
    num: "11",
    title: "Manifests & Damage Reports",
    tags: ["Operations", "Logistics"],
    body: "The real-world dispatch checklist built from a confirmed project's reservations: pick → load → dispatch → collect → return → inspect. Operational staff see only this screen. Flagging an item damaged during inspection opens a Damage Report with its own liability status and photo evidence.",
  },
  {
    num: "12",
    title: "Contracts",
    tags: ["Sales", "Legal"],
    body: "Client service agreements tied to a project, with admin-managed types and reusable templates carrying merge fields like {{client_name}} and {{event_date}}. A contract is only fully executed once both a real drawn client signature and a staff countersignature are on file.",
  },
  {
    num: "13",
    title: "Expenses, Bills & Purchase Orders",
    tags: ["Spending"],
    body: "An Expense or Bill tagged \"billable\" to a project's client folds automatically into that project's next milestone invoice as a real line item, not just a note. Expense Claims lets any employee submit an out-of-pocket reimbursement regardless of role.",
  },
  {
    num: "14",
    title: "Bank & M-Pesa, Accountant, Fixed Assets",
    tags: ["Money"],
    body: "The accounting backbone: bank reconciliation against real statements, the double-entry general ledger underneath every document in the system, and fixed-asset tracking with depreciation for equipment the business owns outright.",
  },
  {
    num: "15",
    title: "Analytics & Reports",
    tags: ["Money", "Insights"],
    body: "Reports cover the standard accounting set — trial balance, P&L, VAT prep. Analytics adds an events-specific layer: margin by event type, seasonal booking curves, budget-vs-actual, and a full booking-to-billing funnel.",
  },
  {
    num: "16",
    title: "Payroll",
    tags: ["HR", "Money"],
    body: "Staff payroll runs, statutory rules and tax, and staff loans and advances — a self-contained module for organizations that pay employees through Zeno directly, with amortized loan repayment schedules.",
  },
  {
    num: "17",
    title: "Staff & Roles",
    tags: ["Admin"],
    body: "Where an admin creates staff accounts, assigns roles, and controls exactly which modules each role can see — including the three operational roles built specifically for event logistics.",
  },
  {
    num: "18",
    title: "Settings",
    tags: ["Admin"],
    body: "Org-wide configuration: company profile and branding, payment gateways (M-Pesa Daraja, Kopo Kopo), SMS receipts, the customer OTP portal, lead capture channels, and contract types & templates.",
  },
  {
    num: "19",
    title: "The Client Portal",
    tags: ["Client-facing"],
    body: "A completely separate, client-facing application with its own login and a hard boundary around internal data — clients see only their own projects, documents, and contracts, never cost breakdowns, margins, or other clients' data. They can review and pay invoices, accept quotes, and sign contracts with a real drawn signature.",
  },
];

const workflows = [
  {
    title: "Booking a wedding, start to finish",
    steps: "A lead comes in from the website → Sales converts it to a Project → drafts and sends a Quote → client accepts it in the portal, Project auto-confirms → Event Inventory items on the invoice auto-reserve → a manifest builds from those reservations → warehouse staff pick, load, and dispatch on event day → collection staff bring everything back and it's inspected → the final milestone invoice is paid in full → manifest reconciles → Project auto-completes.",
  },
  {
    title: "Handling a damaged item",
    steps: "An item comes back from an event and gets inspected as damaged → a Damage Report opens automatically with photo evidence → an admin sets its liability status (absorbed, or billed to the client) → if billed, it flows onto the client's next invoice as a real charge, not a side conversation.",
  },
  {
    title: "Getting a contract signed by both parties",
    steps: "Admin drafts a contract from a template, content and payment terms pre-filled → marks it sent → client reviews it in the portal, agrees, and draws their signature → it's client-signed and staff countersigns on behalf of the company from the project's Contracts tab, drawing their own signature → contract flips to fully executed, both signatures visible on the PDF, both parties can download it.",
  },
];

export default function ZenoEventsPage() {
  const nextProjects = getAdjacentProjects(project.slug, 2);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Projects", path: "/projects" },
        { name: project.name, path: `/projects/${project.slug}` },
      ])} />
      <ServicePageShell>
        {/* Big Title */}
        <section className="max-w-[1240px] mx-auto pt-12 pb-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-apple-ink tracking-tight">
            {project.name}.
          </h1>
        </section>

        {/* Introduction */}
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-16 border-t border-black/[0.06]">
            <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                01
              </span>
              <span className="text-sm font-normal text-apple-ink">Introduction</span>
            </div>
            <div className="lg:col-span-9">
              <p className="text-xl sm:text-2xl text-apple-ink leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Meta Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-6 border-t border-black/[0.06] items-center">
            <div className="lg:col-span-3 text-sm text-neutral-400">Year</div>
            <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">{project.year}</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-6 border-t border-black/[0.06] items-center">
            <div className="lg:col-span-3 text-sm text-neutral-400">Industry</div>
            <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">{project.industry}</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-6 border-t border-black/[0.06] items-center">
            <div className="lg:col-span-3 text-sm text-neutral-400">Scope of work</div>
            <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">
              {project.scope.join(" / ")}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-6 border-t border-b border-black/[0.06] items-center">
            <div className="lg:col-span-3 text-sm text-neutral-400">Modules</div>
            <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">19 core modules + client portal</div>
          </div>
        </div>

        {/* Image Gallery */}
        <section className="max-w-[1240px] mx-auto py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <div
                key={g.src}
                className={`relative aspect-video rounded-2xl overflow-hidden border border-black/[0.06] ${
                  i === 0 ? "col-span-2 sm:col-span-3" : ""
                }`}
              >
                <Image src={g.src} alt={g.alt} fill className="object-cover object-top" />
              </div>
            ))}
          </div>
        </section>

        {/* The Big Picture */}
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-16 border-t border-black/[0.06]">
            <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                02
              </span>
              <span className="text-sm font-normal text-apple-ink">The architecture</span>
            </div>
            <div className="lg:col-span-9">
              <p className="text-2xl sm:text-3xl text-apple-ink leading-snug font-normal mb-6">
                A Project is the hub. Everything else — quotes, invoices, inventory, contracts, payments — hangs off it.
              </p>
              <p className="text-base text-neutral-500 leading-relaxed">
                A booking moves through Zeno Events in a predictable line: a lead converts into a Contact and a Project; a quote drafted against that Project, sent, and accepted, moves it to Confirmed automatically — no manual click required. The moment a Project is confirmed, any Event Inventory items on its invoice that map to exactly one unambiguous rental batch are auto-reserved for the event date. Those reservations become a dispatch manifest — the pick/load/dispatch/return/inspect checklist warehouse and loading staff work off. A Project only auto-completes once both conditions are true: every real invoice is fully paid, and the manifest is fully reconciled. A signed contract runs alongside this chain, not inside it — client-facing paperwork tied to the same Project, signed independently of where the booking sits in its financial lifecycle. The Client Portal is a second, parallel application: staff use the main system, clients use their own login that shows only their own projects, documents, and contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Core Workflows */}
        <div className="max-w-[1240px] mx-auto">
          <div className="pt-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Core Workflows
            </h2>
          </div>
          {workflows.map((w) => (
            <div key={w.title} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-t border-black/[0.06]">
              <div className="lg:col-span-3 h-fit">
                <span className="text-sm font-semibold text-apple-ink">{w.title}</span>
              </div>
              <div className="lg:col-span-9">
                <p className="text-sm text-neutral-500 leading-relaxed">{w.steps}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Module Grid */}
        <div className="max-w-[1240px] mx-auto">
          <div className="pt-16 pb-8 border-t border-black/[0.06]">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              System Reference
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              19 modules, from a lead's first message to a fully reconciled event.
            </h3>
          </div>

          {modules.map((m) => (
            <div key={m.num} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-t border-black/[0.06]">
              <div className="lg:col-span-3 flex items-start gap-2.5 h-fit">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                  {m.num}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-apple-ink">{m.title}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((t) => (
                      <span key={t} className="text-[10px] font-semibold uppercase tracking-wide text-neutral-400 bg-neutral-100 rounded-full px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-9">
                <p className="text-sm text-neutral-500 leading-relaxed">{m.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Banner */}
        <section className="max-w-[1240px] mx-auto pb-16">
          <div className="relative h-40 sm:h-56 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600">
            <Image src="/gallery/zeno-events-6.png" alt="Zeno Events inventory" fill className="object-cover object-top" />
          </div>
        </section>

        {/* Final Thoughts */}
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-16 border-t border-black/[0.06]">
            <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                03
              </span>
              <span className="text-sm font-normal text-apple-ink">Final thoughts</span>
            </div>
            <div className="lg:col-span-9">
              <p className="text-2xl sm:text-3xl text-apple-ink leading-snug font-normal mb-6">{project.outcome}</p>
              {project.quote && (
                <p className="text-base text-neutral-500 leading-relaxed">
                  &ldquo;{project.quote}&rdquo; — {project.quoteAuthor}, {project.quoteRole}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Next Projects */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-apple-ink tracking-tight">Next projects.</h2>
              <span className="text-lg font-mono text-neutral-400 mt-1 block">
                (2024&ndash;{new Date().getFullYear()}&copy;)
              </span>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 bg-black text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-md group w-fit"
            >
              <span>All Projects</span>
              <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nextProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </ServicePageShell>
    </>
  );
}
