"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "./ProductCard";

type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  ramGb: number;
  storageGb: number;
  storageType: string;
  condition: string;
  price: number;
  status: string;
  image: string;
  images: readonly string[];
  shortDescription: string;
  specs: readonly string[];
  description: string;
};

const priceBands = [
  { label: "All prices", min: 0, max: Infinity },
  { label: "Under ₦300k", min: 0, max: 300000 },
  { label: "₦300k - ₦500k", min: 300000, max: 500000 },
  { label: "₦500k - ₦800k", min: 500000, max: 800000 },
  { label: "Above ₦800k", min: 800000, max: Infinity },
];

export function LaptopInventory({ products }: { products: readonly Product[] }) {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [ram, setRam] = useState("All");
  const [storage, setStorage] = useState("All");
  const [condition, setCondition] = useState("All");
  const [priceBand, setPriceBand] = useState("All prices");

  const brands = ["All", ...Array.from(new Set(products.map((product) => product.brand)))];
  const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];
  const rams = ["All", ...Array.from(new Set(products.map((product) => product.ramGb))).sort((a, b) => a - b).map(String)];
  const storages = ["All", ...Array.from(new Set(products.map((product) => product.storageGb))).sort((a, b) => a - b).map(String)];
  const conditions = ["All", ...Array.from(new Set(products.map((product) => product.condition)))];

  const visibleProducts = useMemo(() => {
    const selectedPrice = priceBands.find((band) => band.label === priceBand) ?? priceBands[0];
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const searchable = [product.name, product.brand, product.category, product.condition, product.description, ...product.specs]
        .join(" ")
        .toLowerCase();

      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (brand === "All" || product.brand === brand) &&
        (category === "All" || product.category === category) &&
        (ram === "All" || product.ramGb === Number(ram)) &&
        (storage === "All" || product.storageGb === Number(storage)) &&
        (condition === "All" || product.condition === condition) &&
        product.price >= selectedPrice.min &&
        product.price <= selectedPrice.max
      );
    });
  }, [brand, category, condition, priceBand, products, query, ram, storage]);

  return (
    <div>
      <div className="rounded-xl border border-cyan-100 bg-[linear-gradient(135deg,#f0f9ff,#ffffff_48%,#eef6ff)] p-5 shadow-xl shadow-slate-950/5 ring-1 ring-cyan-100/70 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_repeat(3,170px)]">
          <label className="grid gap-2 text-sm font-extrabold text-slate-800">
            Search inventory
            <span className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-600" size={18} aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search HP, SSD, ThinkPad, gaming..."
                className="w-full rounded-lg border border-cyan-100 bg-white py-3.5 pl-10 pr-3 text-sm font-medium text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </span>
          </label>
          <Filter label="Brand" value={brand} values={brands} onChange={setBrand} />
          <Filter label="Category" value={category} values={categories} onChange={setCategory} />
          <Filter label="Condition" value={condition} values={conditions} onChange={setCondition} />
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <Filter label="RAM" value={ram} values={rams} onChange={setRam} suffix="GB" />
          <Filter label="Storage" value={storage} values={storages} onChange={setStorage} suffix="GB" />
          <Filter label="Price" value={priceBand} values={priceBands.map((band) => band.label)} onChange={setPriceBand} />
        </div>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">
          <SlidersHorizontal className="text-cyan-300" size={17} aria-hidden="true" />
          Showing {visibleProducts.length} of {products.length} products
        </p>
      </div>

      {visibleProducts.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-cyan-100 bg-white p-8 text-center shadow-sm ring-1 ring-cyan-100">
          <h2 className="text-xl font-bold text-cyan-800">No matching laptops</h2>
          <p className="mt-2 text-sm text-slate-600">Try a different brand, RAM, storage, condition, or price range.</p>
        </div>
      )}
    </div>
  );
}

function Filter({
  label,
  value,
  values,
  onChange,
  suffix = "",
}: {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
  suffix?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-slate-800">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="rounded-lg border border-cyan-100 bg-white px-3 py-3.5 text-sm font-semibold text-slate-700 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
        {values.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? item : `${item}${suffix && /^\d+$/.test(item) ? suffix : ""}`}
          </option>
        ))}
      </select>
    </label>
  );
}
