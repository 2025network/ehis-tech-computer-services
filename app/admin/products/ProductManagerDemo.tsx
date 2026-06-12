"use client";

import { useState } from "react";
import { Edit3, Plus, Trash2 } from "lucide-react";
import { laptopProducts } from "../../data";

const inputClass =
  "rounded border border-blue-100 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#0b4ea2] focus:ring-4 focus:ring-blue-100";

type SampleProduct = (typeof laptopProducts)[number];

export function ProductManagerDemo() {
  const [selected, setSelected] = useState<SampleProduct>(laptopProducts[0]);

  return (
    <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded bg-white p-5 shadow-sm ring-1 ring-blue-100">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">Sample inventory</p>
            <h2 className="mt-2 text-2xl font-bold text-[#073b7a]">Products</h2>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded bg-[#0b4ea2] px-4 py-2.5 text-sm font-bold text-white">
            <Plus size={17} aria-hidden="true" />
            Add Product
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-[#073b7a] text-white">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Brand</th>
                <th className="px-4 py-3">Specs</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {laptopProducts.map((product) => (
                <tr key={product.slug} className="border-t border-blue-100">
                  <td className="px-4 py-4 font-bold text-[#102033]">{product.name}</td>
                  <td className="px-4 py-4 text-slate-700">{product.brand}</td>
                  <td className="px-4 py-4 text-slate-700">
                    {product.ramGb}GB RAM · {product.storageGb}GB {product.storageType}
                  </td>
                  <td className="px-4 py-4 font-bold text-[#073b7a]">₦{product.price.toLocaleString()}</td>
                  <td className="px-4 py-4">
                    <span className="rounded bg-blue-50 px-2 py-1 text-xs font-bold text-[#073b7a]">
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelected(product)}
                        className="grid h-9 w-9 place-items-center rounded bg-[#073b7a] text-white"
                        aria-label={`Edit ${product.name}`}
                      >
                        <Edit3 size={16} aria-hidden="true" />
                      </button>
                      <button className="grid h-9 w-9 place-items-center rounded bg-red-50 text-red-700 ring-1 ring-red-200" aria-label={`Delete ${product.name}`}>
                        <Trash2 size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded bg-white p-5 shadow-sm ring-1 ring-blue-100">
        <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">Edit product layout</p>
        <h2 className="mt-2 text-2xl font-bold text-[#073b7a]">{selected.name}</h2>
        <form className="mt-5 grid gap-4">
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Product name
            <input className={inputClass} defaultValue={selected.name} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Brand
              <input className={inputClass} defaultValue={selected.brand} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Category
              <input className={inputClass} defaultValue={selected.category} />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              RAM
              <input className={inputClass} defaultValue={selected.ramGb} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Storage
              <input className={inputClass} defaultValue={selected.storageGb} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Price
              <input className={inputClass} defaultValue={selected.price} />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Description
            <textarea className={`${inputClass} min-h-28 resize-y`} defaultValue={selected.description} />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded bg-[#0b4ea2] px-5 py-3 text-sm font-bold text-white">
              <Edit3 size={17} aria-hidden="true" />
              Save Changes
            </button>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded bg-red-50 px-5 py-3 text-sm font-bold text-red-700 ring-1 ring-red-200">
              <Trash2 size={17} aria-hidden="true" />
              Delete Product
            </button>
          </div>
          <p className="rounded bg-[#fff3d8] px-4 py-3 text-sm font-semibold text-[#8a6423]">
            Sample UI only. Connect these controls to Prisma Product CRUD routes when ready.
          </p>
        </form>
      </section>
    </div>
  );
}
