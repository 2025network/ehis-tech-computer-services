import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAdminLoggedIn } from "@/lib/auth";
import { logProductionError } from "@/lib/runtime";
import { PageShell } from "../../components/PageShell";
import { ProductManagerDemo } from "./ProductManagerDemo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Product Management",
  description: "Sample product add, edit, and delete UI for Ehi's Tech laptop inventory.",
  robots: { index: false, follow: false },
};

export default async function AdminProductsPage() {
  let loggedIn = false;

  try {
    loggedIn = await isAdminLoggedIn();
  } catch (error) {
    logProductionError("Admin products auth check failed", error);
  }

  if (!loggedIn) {
    redirect("/admin/login");
  }

  return (
    <PageShell>
      <section className="bg-[#073b7a] py-12 text-white">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">Admin products</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Product management</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">
            Add, edit, and delete product layout using sample inventory data for now.
          </p>
        </div>
      </section>
      <section className="section-shell py-10 sm:py-12">
        <ProductManagerDemo />
      </section>
    </PageShell>
  );
}
