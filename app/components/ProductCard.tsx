import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { brand } from "../data";
import { ProductImageRotator } from "./ProductImageRotator";

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
};

export function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  const message = encodeURIComponent(`Hello ${brand.name}, I want a quote for ${product.name}.`);

  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl hover:shadow-slate-950/10">
      <Link href={`/laptops/${product.slug}`} className="block">
        <ProductImageRotator
          images={product.images}
          name={product.name}
          className={large ? "aspect-[4/3]" : "aspect-[5/4]"}
          sizes={large ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
        />
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{product.brand}</span>
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">{product.condition}</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{product.status}</span>
        </div>
        <h2 className="mt-4 text-xl font-bold text-slate-950">{product.name}</h2>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        <p className="mt-4 text-2xl font-bold text-slate-950">NGN {product.price.toLocaleString()}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
          <span className="rounded bg-slate-50 px-2.5 py-1 ring-1 ring-slate-200">{product.ramGb}GB RAM</span>
          <span className="rounded bg-slate-50 px-2.5 py-1 ring-1 ring-slate-200">{product.storageGb}GB {product.storageType}</span>
          <span className="rounded bg-slate-50 px-2.5 py-1 ring-1 ring-slate-200">{product.category}</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link href={`/laptops/${product.slug}`} className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-cyan-700">
            Details <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href={`https://wa.me/${brand.whatsapp}?text=${message}`} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50">
            Quote <MessageCircle size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}