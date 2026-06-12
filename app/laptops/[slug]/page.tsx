import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { PageShell } from "../../components/PageShell";
import { ProductGallery } from "../../components/ProductGallery";
import { ProductQuoteForm } from "../../components/ProductQuoteForm";
import { brand, laptopProducts } from "../../data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return laptopProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = laptopProducts.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Laptop not found" };
  }

  return {
    title: `${product.name} | Laptop Quote`,
    description: `Request a quote for ${product.name}. ${product.ramGb}GB RAM, ${product.storageGb}GB ${product.storageType}, ${product.condition}, priced at NGN ${product.price.toLocaleString()}.`,
    alternates: { canonical: `/laptops/${product.slug}` },
    openGraph: {
      title: `${product.name} | Ehi's Tech Computer Services`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = laptopProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(`Hello ${brand.name}, I want a quote for ${product.name}.`);

  return (
    <PageShell>
      <section className="bg-slate-100 py-10 sm:py-14">
        <div className="section-shell">
          <Link href="/laptops" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-cyan-700">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to inventory
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <ProductGallery images={product.images} name={product.name} />
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">{product.brand}</span>
                <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">{product.condition}</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">{product.status}</span>
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">{product.name}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-700">{product.shortDescription}</p>
              <p className="mt-5 text-3xl font-bold text-slate-950">NGN {product.price.toLocaleString()}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[`${product.ramGb}GB RAM`, `${product.storageGb}GB ${product.storageType}`, product.category, product.warranty].map((item) => (
                  <p key={item} className="flex items-center gap-2 rounded-md bg-slate-50 p-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                    <CheckCircle2 className="text-cyan-600" size={18} aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/${brand.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400">
                  WhatsApp Inquiry <MessageCircle size={18} aria-hidden="true" />
                </a>
                <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">Request Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-14 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <ShieldCheck className="text-cyan-600" size={32} aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold text-slate-950">Specifications</h2>
          <div className="mt-5 grid gap-3">
            {product.specs.map((spec) => (
              <p key={spec} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 size={16} className="text-cyan-600" aria-hidden="true" />
                {spec}
              </p>
            ))}
          </div>
        </aside>
        <div className="grid gap-8">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Professional description</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">{product.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.highlights.map((item) => (
                <span key={item} className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">{item}</span>
              ))}
            </div>
          </article>
          <div id="quote">
            <ProductQuoteForm productName={product.name} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}