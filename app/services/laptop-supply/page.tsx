import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileCheck2 } from "lucide-react";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Laptop Supply and IT Support",
  description:
    "Laptop supply, accessories, upgrades, setup, diagnostics, and IT support from Ehi's Tech Computer Services.",
  alternates: { canonical: "/services/laptop-supply" },
  openGraph: {
    url: "/services/laptop-supply",
    title: "Laptop Supply and IT Support",
    description:
      "Request laptop supply, accessories, upgrades, software installation, diagnostics, and IT support.",
  },
};

const serviceItems = [
  "Laptop sourcing guidance",
  "Business laptop recommendations",
  "Student laptop recommendations",
  "Accessory bundles",
  "RAM and SSD upgrade advice",
  "Software installation support",
  "Office computer setup",
  "Corporate supply quote support",
];

const requiredDetails = [
  "Preferred laptop brand",
  "Budget range",
  "Required quantity",
  "RAM and storage preference",
  "Software or setup needs",
  "Accessory requirements",
  "Delivery or pickup timeline",
];

const requestCategories = [
  "Student Laptop",
  "Business Laptop",
  "Gaming Laptop",
  "UK-used Laptop",
  "Brand-new Laptop",
];

export default function LaptopSupplySupportPage() {
  return (
    <PageShell>
      <section className="bg-[#073b7a] py-14 text-white sm:py-16">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">
            Laptop and IT support
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            Laptop Supply and IT Support
          </h1>
          <p className="mt-5 text-lg leading-8 text-blue-100">
            We assist individuals, students, schools, offices, and organizations with laptop
            sourcing, accessories, upgrades, installations, and practical IT support.
          </p>
          <Link
            href="/apply-now"
            className="mt-7 inline-flex items-center gap-2 rounded bg-[#d9a441] px-6 py-3 text-sm font-bold text-[#102033] transition hover:bg-[#c9942f]"
          >
            Request Support <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">
            Services we provide
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {serviceItems.map((item) => (
              <div key={item} className="flex gap-3 rounded border border-blue-100 bg-white p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#0b4ea2]" size={20} aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded bg-[#f4f8ff] p-6 ring-1 ring-blue-100">
          <FileCheck2 className="text-[#0b4ea2]" size={32} aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold text-[#073b7a]">Request categories</h2>
          <div className="mt-4 grid gap-2">
            {requestCategories.map((category) => (
              <p key={category} className="rounded bg-white px-4 py-3 text-sm font-bold text-slate-700 ring-1 ring-blue-100">
                {category}
              </p>
            ))}
          </div>
        </aside>
      </section>

      <section className="bg-[#f4f8ff] py-14">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">
            Details to share
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#073b7a]">
            Get a clearer recommendation by sharing the right information.
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {requiredDetails.map((detail) => (
              <article key={detail} className="rounded bg-white p-5 shadow-sm ring-1 ring-blue-100">
                <h3 className="text-base font-bold text-[#102033]">{detail}</h3>
              </article>
            ))}
          </div>
          <Link
            href="/apply-now"
            className="mt-8 inline-flex items-center gap-2 rounded bg-[#0b4ea2] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#073b7a]"
          >
            Request Support <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
