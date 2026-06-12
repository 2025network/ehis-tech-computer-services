import type { Metadata } from "next";
import { CheckCircle2, Headset, ShieldCheck } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { sampleWarrantyRecords, warrantySupport } from "../data";

export const metadata: Metadata = {
  title: "Warranty and Support Tracking",
  description:
    "Track sample warranty and support records for Ehi's Tech Computer Services laptop customers.",
  alternates: { canonical: "/warranty" },
};

export default function WarrantyPage() {
  return (
    <PageShell>
      <section className="bg-[#f4f8ff] py-14 sm:py-16">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">Warranty support</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-[#073b7a] sm:text-5xl">
            Warranty tracking and after-sales support.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Keep support transparent with clear warranty terms, support status, and follow-up notes.
            This page uses sample records and is ready for a Prisma-backed warranty workflow.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded bg-white p-6 shadow-sm ring-1 ring-blue-100">
          <ShieldCheck className="text-[#0b4ea2]" size={32} aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold text-[#073b7a]">Support promise</h2>
          <div className="mt-5 grid gap-3">
            {warrantySupport.map((item) => (
              <p key={item} className="flex gap-2 text-sm font-semibold leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#0b4ea2]" size={18} aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
        </aside>
        <div className="rounded bg-white p-6 shadow-sm ring-1 ring-blue-100">
          <div className="flex items-center gap-3">
            <Headset className="text-[#0b4ea2]" size={28} aria-hidden="true" />
            <h2 className="text-2xl font-bold text-[#073b7a]">Sample warranty records</h2>
          </div>
          <div className="mt-6 grid gap-4">
            {sampleWarrantyRecords.map((record) => (
              <article key={record.code} className="rounded border border-blue-100 bg-[#f4f8ff] p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#073b7a]">{record.code}</p>
                    <h3 className="mt-1 text-lg font-bold text-[#102033]">{record.product}</h3>
                    <p className="mt-1 text-sm text-slate-600">{record.customer} · {record.issue}</p>
                  </div>
                  <span className="rounded bg-white px-3 py-1.5 text-xs font-bold text-[#073b7a] ring-1 ring-blue-100">
                    {record.status}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-600">Expires: {record.expires}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
