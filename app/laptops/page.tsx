import type { Metadata } from "next";
import { LaptopInventory } from "../components/LaptopInventory";
import { PageShell } from "../components/PageShell";
import { laptopCategories, laptopProducts } from "../data";

export const metadata: Metadata = {
  title: "Laptop Inventory",
  description:
    "Search Ehi's Tech laptop inventory by brand, category, RAM, storage, condition, and price. Request quotes for business, student, gaming, UK-used, and brand-new laptops.",
  alternates: { canonical: "/laptops" },
};

export default function LaptopsPage() {
  return (
    <PageShell>
      <section className="bg-[linear-gradient(180deg,#eaf8ff,#f8fbff)] py-8 sm:py-10">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">Laptop inventory</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
            Search available laptops and request a quote.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Filter by brand, category, RAM, SSD size, condition, and price to find a laptop that
            fits your work, school, gaming, or corporate supply needs.
          </p>
        </div>
      </section>

      <section className="section-shell -mt-3 pb-10 pt-0 sm:-mt-4 sm:pb-12">
        <LaptopInventory products={laptopProducts} />
      </section>

      <section className="bg-white py-14">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">Categories</p>
          <h2 className="mt-3 text-3xl font-bold text-cyan-800">Shop by laptop category.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {laptopCategories.map((category) => (
              <article key={category.slug} className="rounded border border-blue-100 bg-[#f4f8ff] p-5">
                <h3 className="font-bold text-[#102033]">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
