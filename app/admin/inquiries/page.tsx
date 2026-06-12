import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { isAdminLoggedIn } from "@/lib/auth";
import { logProductionError } from "@/lib/runtime";
import { PageShell } from "../../components/PageShell";
import { sampleQuoteRequests } from "../../data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Customer Inquiries",
  description: "Sample customer quote and corporate inquiry list for Ehi's Tech Computer Services.",
  robots: { index: false, follow: false },
};

export default async function AdminInquiriesPage() {
  let loggedIn = false;

  try {
    loggedIn = await isAdminLoggedIn();
  } catch (error) {
    logProductionError("Admin inquiries auth check failed", error);
  }

  if (!loggedIn) {
    redirect("/admin/login");
  }

  return (
    <PageShell>
      <section className="bg-[#073b7a] py-12 text-white">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">Customer inquiries</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Quote request list</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">
            Review sample product quote and bulk supply inquiries before wiring the forms to Prisma.
          </p>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-12">
        <div className="grid gap-4">
          {sampleQuoteRequests.map((request) => (
            <article key={request.id} className="rounded bg-white p-5 shadow-sm ring-1 ring-blue-100">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#d9a441]">
                    <MessageSquare size={17} aria-hidden="true" />
                    {request.id}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-[#073b7a]">{request.customer}</h2>
                  <p className="mt-2 text-sm text-slate-600">{request.product} · Qty {request.quantity}</p>
                </div>
                <span className="rounded bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#073b7a] ring-1 ring-blue-100">
                  {request.status}
                </span>
              </div>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                <p><strong>Phone:</strong> {request.phone}</p>
                <p><strong>Budget:</strong> {request.budget}</p>
                <p><strong>Date:</strong> {request.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
