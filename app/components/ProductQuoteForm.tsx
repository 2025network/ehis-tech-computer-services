"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type ProductQuoteFormProps = {
  productName?: string;
  mode?: "product" | "bulk";
};

const inputClass =
  "rounded border border-blue-100 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#0b4ea2] focus:ring-4 focus:ring-blue-100";

export function ProductQuoteForm({ productName, mode = "product" }: ProductQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded bg-white p-5 shadow-sm ring-1 ring-blue-100 md:p-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">
          {mode === "bulk" ? "Corporate bulk quote" : "Product quote request"}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#073b7a]">
          {mode === "bulk" ? "Request bulk supply pricing" : `Request quote${productName ? ` for ${productName}` : ""}`}
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {mode === "bulk" ? "Organization name" : "Full name"}
          <input className={inputClass} name="name" required placeholder={mode === "bulk" ? "School, office, or company" : "Your name"} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Phone / WhatsApp
          <input className={inputClass} name="phone" required placeholder="+234..." />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email
          <input className={inputClass} name="email" type="email" placeholder="you@example.com" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Quantity
          <input className={inputClass} name="quantity" type="number" min="1" defaultValue={mode === "bulk" ? 10 : 1} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Product interest
          <input className={inputClass} name="product" defaultValue={productName ?? ""} placeholder="Laptop model or category" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Budget
          <input className={inputClass} name="budget" placeholder="Example: ₦300,000 or ₦5m" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Requirements
        <textarea
          className={`${inputClass} min-h-32 resize-y`}
          name="message"
          placeholder="Preferred brand, RAM, SSD, condition, delivery timeline, accessories, warranty needs..."
          required
        />
      </label>

      {submitted ? (
        <p className="rounded bg-green-50 px-4 py-3 text-sm font-semibold text-green-800 ring-1 ring-green-200">
          Demo request captured. This form is ready to connect to the Prisma QuoteRequest or BulkOrderRequest table.
        </p>
      ) : null}

      <button className="inline-flex items-center justify-center gap-2 rounded bg-[#0b4ea2] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#073b7a]">
        Submit Quote Request <Send size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
