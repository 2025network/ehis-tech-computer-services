import type { Metadata } from "next";
import { ApplyForm } from "../components/ApplyForm";
import { PageShell } from "../components/PageShell";
import { WhatsAppCta } from "../components/WhatsAppCta";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    "Submit an Ehi's Tech Computer Services laptop, accessory, repair, upgrade, installation, or supply request with optional uploads and tracking code generation.",
  alternates: { canonical: "/apply-now" },
  openGraph: {
    url: "/apply-now",
    title: "Request Laptop or IT Support",
    description:
      "Submit a laptop, accessory, repair, upgrade, installation, or supply request with tracking code.",
  },
};

export default function ApplyNowPage() {
  return (
    <PageShell>
      <section className="bg-[#f4f8ff] py-12 sm:py-16">
        <div className="section-shell grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">Request service</p>
            <h1 className="mt-3 text-4xl font-bold text-[#073b7a] sm:text-5xl">
              Submit your laptop or IT support request.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Complete the form, upload optional supporting files, and receive a tracking code
              after successful submission.
            </p>
            <div className="mt-8 rounded bg-white p-5 shadow-sm ring-1 ring-blue-100">
              <h2 className="text-lg font-bold text-[#111827]">Before you submit</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Include your preferred laptop, accessory, repair issue, upgrade request, quantity,
                budget, or installation support need.
              </p>
              <WhatsAppCta className="mt-5" />
            </div>
          </div>
          <ApplyForm />
        </div>
      </section>
    </PageShell>
  );
}
