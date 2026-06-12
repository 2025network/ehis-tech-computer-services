import type { Metadata } from "next";
import { Building2, CheckCircle2, Truck } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { ProductQuoteForm } from "../components/ProductQuoteForm";
import { corporateBenefits, customerTypes } from "../data";

export const metadata: Metadata = {
  title: "Corporate Bulk Laptop Supply",
  description:
    "Request bulk laptop and accessory supply quotes for schools, offices, startups, organizations, and IT teams from Ehi's Tech Computer Services.",
  alternates: { canonical: "/corporate" },
};

export default function CorporatePage() {
  return (
    <PageShell>
      <section className="bg-[#073b7a] py-14 text-white sm:py-16">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">Corporate supply</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            Bulk laptop supply for schools, offices, and organizations.
          </h1>
          <p className="mt-5 text-lg leading-8 text-blue-100">
            Share your quantity, budget, required specifications, accessory needs, and timeline so
            we can prepare a practical supply quote.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-5">
          <article className="rounded bg-white p-6 shadow-sm ring-1 ring-blue-100">
            <Truck className="text-[#0b4ea2]" size={32} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-[#073b7a]">What we support</h2>
            <div className="mt-5 grid gap-3">
              {corporateBenefits.map((benefit) => (
                <p key={benefit} className="flex gap-2 text-sm font-semibold leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#0b4ea2]" size={18} aria-hidden="true" />
                  {benefit}
                </p>
              ))}
            </div>
          </article>
          <article className="rounded bg-[#f4f8ff] p-6 ring-1 ring-blue-100">
            <Building2 className="text-[#0b4ea2]" size={32} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-[#073b7a]">Customer types</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {customerTypes.map((type) => (
                <span key={type} className="rounded bg-white px-3 py-2 text-sm font-bold text-slate-700 ring-1 ring-blue-100">
                  {type}
                </span>
              ))}
            </div>
          </article>
        </div>
        <ProductQuoteForm mode="bulk" />
      </section>
    </PageShell>
  );
}
