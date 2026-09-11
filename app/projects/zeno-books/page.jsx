import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicePageShell } from "../../../components/ServicePageShell";
import { ProjectCard } from "../../../components/ProjectCard";
import { getProject, getAdjacentProjects } from "../../../lib/projects";
import { buildMetadata, breadcrumbJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";

const project = getProject("zeno-books");

const gallery = [
  { src: "/gallery/zeno-books-1.png", alt: "Home dashboard — KPI cards, invoice/quote overview" },
  { src: "/gallery/zeno-books-2.png", alt: "Customers & Vendors list" },
  { src: "/gallery/zeno-books-3.png", alt: "Quotes — status totals and list" },
  { src: "/gallery/zeno-books-4.png", alt: "Invoices — Draft/Pending/Partial/Overdue/Paid totals" },
  { src: "/gallery/zeno-books-5.png", alt: "Payments Received and Credit Notes" },
  { src: "/gallery/zeno-books-6.png", alt: "Expenses and Expense Claims" },
  { src: "/gallery/zeno-books-7.png", alt: "Bills and Purchase Orders" },
  { src: "/gallery/zeno-books-8.png", alt: "Items, Stock & Warehouses" },
  { src: "/gallery/zeno-books-9.png", alt: "Bank & M-Pesa — accounts, reconcile, transfer" },
  { src: "/gallery/zeno-books-10.png", alt: "Accountant — Chart of Accounts and journal tools" },
  { src: "/gallery/zeno-books-11.png", alt: "Reports & Analytics" },
  { src: "/gallery/zeno-books-12.png", alt: "Payroll runs and employees" },
  { src: "/gallery/zeno-books-13.png", alt: "Recurring Templates" },
  { src: "/gallery/zeno-books-14.png", alt: "Staff & Roles — the full permission matrix, live" },
  { src: "/gallery/zeno-books-15.png", alt: "Settings & Billing" },
  { src: "/gallery/zeno-books-16.png", alt: "Campaigns — compose and send" },
];

export function generateMetadata() {
  return buildMetadata({
    title: `${project.name} — Case Study`,
    description:
      "Zeno Books is the invoicing and double-entry accounting core of the Zeno platform — quotes, invoices, KRA-compliant VAT, and M-Pesa reconciliation, built in.",
    path: `/projects/${project.slug}`,
  });
}

const modules = [
  {
    num: "01",
    title: "Roles & Access",
    tags: ["Admin"],
    body: "Six built-in roles ship out of the box — Admin, Accountant, Sales, HR, Inventory, and Staff — plus any custom role an admin creates. Staff is deliberately narrow: self-service only. Admins toggle exactly which modules any role can see, per organization, from Staff & Roles.",
  },
  {
    num: "02",
    title: "Home Dashboard",
    tags: ["Operations", "Daily-use"],
    body: "The first screen on login, tuned to the signed-in role. Admins and accountants see money owed, cash across every bank/M-Pesa account, VAT due to KRA, an invoice/quote status breakdown, and a 6-month income vs. expense chart. Everyone else gets a narrower, personal view.",
  },
  {
    num: "03",
    title: "Customers & Vendors",
    tags: ["Sales", "Spending", "Core Data"],
    body: "One shared address book — a contact can be a customer, a vendor, or both. Every quote, invoice, bill, and credit note links back to a Contact. Vendors can save a default payout destination (M-Pesa, till, paybill) so bills never need re-entering payment details.",
  },
  {
    num: "04",
    title: "Deals",
    tags: ["Sales", "CRM"],
    body: "A lightweight pipeline for tracking sales opportunities before they become a real quote or invoice: Lead → Qualified → Proposal → Negotiation → Won/Lost. Entirely optional — a customer can be quoted or invoiced directly without ever creating a deal.",
  },
  {
    num: "05",
    title: "Quotes & Quote Templates",
    tags: ["Sales", "Money"],
    body: "A formal, priced proposal that can be drafted, sent, accepted, declined, or converted straight into an invoice. Line items can be catalog items, one-off lines, or bold category headings for grouping. Templates save a reusable layout so a common package isn't rebuilt from scratch.",
  },
  {
    num: "06",
    title: "Invoices, Payments & Credit Notes",
    tags: ["Sales", "Money"],
    body: "Every invoice line carries KRA-compliant VAT and is eTIMS-ready. Status moves Draft → Awaiting payment → Partly paid → Paid, or Overdue past the due date. Record Payment logs money already received; Request via Gateway sends a real M-Pesa STK prompt to the customer's phone.",
  },
  {
    num: "07",
    title: "Expenses & Expense Claims",
    tags: ["Spending"],
    body: "An Expense is paid immediately from a bank, M-Pesa, or cash account and tagged with a category. Expense Claims is the staff-facing side — any employee can file a claim with a receipt regardless of role, reimbursed via M-Pesa once approved.",
  },
  {
    num: "08",
    title: "Bills & Purchase Orders",
    tags: ["Spending"],
    body: "A Bill is a vendor invoice paid later; a Purchase Order commits to buying before a bill even exists, and converts into one once goods arrive — partial receipt supported, so one PO can convert across more than one bill. Payment Runs batch-pay several bills at once.",
  },
  {
    num: "09",
    title: "Items, Stock & Warehouses",
    tags: ["Inventory", "Spending"],
    body: "The catalog and stock ledger for everything the business sells or buys. Tracked items use FIFO costing — each purchase creates its own cost lot, and a sale consumes the oldest lot first. Multiple warehouses hold separate stock counts, moved between with Stock Transfers.",
  },
  {
    num: "10",
    title: "Bank & M-Pesa",
    tags: ["Money"],
    body: "Every bank account, M-Pesa till, and cash account, reconciled line by line against a real statement's date and closing balance. A reconciliation left unfinished resumes exactly where it stopped. Transfers move money between the business's own accounts without looking like income.",
  },
  {
    num: "11",
    title: "Accountant",
    tags: ["Money"],
    body: "The double-entry engine every other module posts to automatically — Chart of Accounts, journal entries, Trial Balance, period locks, cost centers, and uncategorized transactions. Every account is one of five types, fixed at creation, which decides its debit- or credit-normal behavior for good.",
  },
  {
    num: "12",
    title: "Fixed Assets",
    tags: ["Money"],
    body: "Equipment, furniture, and vehicles the business owns outright, plus intangible assets that amortize instead of depreciating. Run Depreciation posts one period's straight-line entry at a time; disposal asks which account received the proceeds for a sale or trade.",
  },
  {
    num: "13",
    title: "Reports & Analytics",
    tags: ["Money", "Insights"],
    body: "Reports cover the compliance set — Trial Balance, P&L, VAT prep that mirrors what gets filed with iTax. Analytics adds the decision layer: revenue trend, top customers, top items and services, and quote conversion rate, reading real transaction data with nothing paywalled.",
  },
  {
    num: "14",
    title: "Payroll",
    tags: ["HR", "Money"],
    body: "PAYE, NSSF, SHIF, and the Affordable Housing Levy calculate automatically from Rules & Tax, which carries an effective-from date so a mid-year statutory change never retroactively rewrites an already-run month. Posting is two steps — Post to Ledger, then Record Salary Payment.",
  },
  {
    num: "15",
    title: "Recurring Templates",
    tags: ["Money", "Automation"],
    body: "Set an invoice or bill to regenerate on a schedule instead of re-entering it every cycle. Due date can be a flat number of days or a genuine \"due at end of next month\" calendar rule, and a template can issue automatically or wait as a draft for review.",
  },
  {
    num: "16",
    title: "Staff & Roles",
    tags: ["Admin"],
    body: "Where an admin creates staff accounts, assigns roles, and controls exactly which modules each role sees. Toggling a module for a role applies to everyone with that role immediately — the permission matrix here is the literal source of truth for every sidebar item in the org.",
  },
  {
    num: "17",
    title: "Settings & Billing",
    tags: ["Admin"],
    body: "Org-wide configuration: business identity (name, logo, brand color, KRA PIN, document numbering), the org's own subscription status, and Payment Gateways connecting M-Pesa Daraja or Kopo Kopo for automated, matched inbound payments — no manual reconciliation needed.",
  },
];

const workflows = [
  {
    title: "A sale, start to finish",
    steps: "Customer asks for pricing → Sales drafts a Quote → sent and accepted → Convert to invoice → customer pays via M-Pesa STK → payment posts to the ledger automatically → a Credit Note can still be raised later if a refund is needed.",
  },
  {
    title: "A purchase, start to finish",
    steps: "Inventory raises a Purchase Order → vendor delivers, partially or fully → Convert to bill → Accountant records payment or batches it into a Payment Run → the line posts to Inventory Asset if the item is tracked, or to the expense category if not.",
  },
  {
    title: "A payroll cycle, start to finish",
    steps: "HR runs payroll for the month → PAYE/NSSF/SHIF/AHL calculate from Rules & Tax → Post to Ledger accrues the liability → Record Salary Payment clears it against the real bank/M-Pesa account used → the run flips from NOT PAID to PAID.",
  },
];

export default function ZenoBooksPage() {
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
            <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">17 core modules, 60+ screens</div>
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
                One ledger every module posts to. Nothing in Reports or Analytics is calculated separately from it.
              </p>
              <p className="text-base text-neutral-500 leading-relaxed">
                Money moves through Zeno Books in a predictable line: a quote is drafted against a customer contact, sent, and — once accepted — converted into an invoice with one click. Recording a payment updates the invoice balance in real time and posts the receipt to Accounts Receivable and the paying account. A Purchase Order mirrors this on the spending side — it becomes a bill on receipt, then a payment via manual record, gateway, or batched Payment Run. A payroll run posts the liability only; a separate Record Salary Payment step clears it against a real account, so cash never moves until that second step. Every one of these documents ends up as a real double-entry journal entry in the Accountant module.
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
              17 modules, built for how Kenyan businesses actually run.
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
          <div className="relative h-40 sm:h-56 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600">
            <Image src="/macbook-zeno-invoices.png" alt="Zeno Books invoices" fill className="object-cover object-top" />
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
