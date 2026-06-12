import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Headphones, Monitor, PackageCheck, Phone, ShieldCheck, Sparkles, Star, Truck, Wrench } from "lucide-react";
import type { Metadata } from "next";
import { HeroMessageRotator } from "./components/HeroMessageRotator";
import { PageShell } from "./components/PageShell";
import { ProductCard } from "./components/ProductCard";
import { WhatsAppCta } from "./components/WhatsAppCta";
import { brand, laptopProducts, testimonials, warrantySupport } from "./data";

export const metadata: Metadata = {
  title: "Professional Laptop Supplier and IT Solutions",
  description:
    "Ehi's Tech Computer Services is a modern laptop showroom for quality laptops, accessories, repairs, upgrades, corporate supply, and warranty support.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Ehi's Tech Computer Services",
    description: "Professional laptop showroom, corporate laptop supply, repairs, upgrades, accessories, and support.",
  },
};

const featured = laptopProducts.slice(0, 3);
const business = laptopProducts.filter((product) => product.category === "Business Laptops").slice(0, 4);
const students = laptopProducts.filter((product) => product.category === "Student Laptops");

const trust = [
  { label: "Premium laptop sourcing", icon: Sparkles },
  { label: "Quality checked devices", icon: ShieldCheck },
  { label: "Corporate supply support", icon: Truck },
  { label: "Repairs and upgrades", icon: Wrench },
];

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(250,204,21,0.08),transparent_24%),linear-gradient(135deg,#020617,#0f172a_52%,#111827)]" />
        <HeroMessageRotator />
        <div className="section-shell relative grid min-h-[430px] items-center gap-6 pb-7 pt-7 sm:pt-8 lg:grid-cols-[0.98fr_1.02fr] lg:pb-8 lg:pt-8">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Professional laptop supplier
            </div>
            <h1 className="mt-3 max-w-[600px] text-[30px] font-extrabold leading-[1.12] text-white sm:text-[40px] lg:text-[40px] xl:text-[46px]">
              Professional Laptop Supplier for Work, School & Business
            </h1>
            <p className="mt-3 max-w-[600px] text-base font-medium leading-7 text-[#e5e7eb] sm:text-[17px]">
              Quality-tested laptops, accessories, repairs, upgrades, and corporate supply support from Ehi's Tech Computer Services.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/laptops" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
                Browse Inventory <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Request Quote
              </Link>
            </div>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {trust.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2.5 rounded-md border border-white/10 bg-white/5 p-3">
                    <Icon className="text-cyan-300" size={20} aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-100">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30">
              <div className="rounded-lg bg-white p-3">
                <div className="relative mx-auto aspect-[16/10] w-[85%] overflow-hidden rounded-md bg-slate-100">
                  <Image src="/hp-1/1.jpg" alt="Premium laptop supplied by Ehi's Tech" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-contain p-3" />
                </div>
              </div>
              <div className="grid gap-2.5 pt-3 sm:grid-cols-3">
                {[
                  { label: "Tested systems", icon: ShieldCheck },
                  { label: "Warranty support", icon: PackageCheck },
                  { label: "Upgrade ready", icon: Monitor },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-md border border-white/10 bg-white/5 p-3 text-center">
                      <Icon className="mx-auto text-cyan-300" size={20} aria-hidden="true" />
                      <p className="mt-1.5 text-xs font-bold text-white">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#eaf8ff_0%,#f8fbff_45%,#ffffff_100%)] py-4 sm:py-6 lg:py-8">
        <div className="section-shell">
          <SectionIntro label="Featured laptops" title="Quality systems ready for quote requests." text="Explore selected laptops with real product photos, clear specifications, and quote support." />
          <div className="mt-4 grid gap-4 md:mt-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((product) => <ProductCard key={product.slug} product={product} large />)}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-10">
        <div className="section-shell">
          <SectionIntro label="Business laptops" title="Built for offices, executives, and productivity." text="Corporate-grade laptops for multitasking, meetings, documents, accounting, school administration, and team deployment." />
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {business.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionIntro label="Student laptops" title="Reliable systems for study and everyday work." text="Balanced options for assignments, research, online classes, home use, and light business tasks." />
            <Link href="/laptops" className="mt-6 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
              Browse student options <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {students.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">Corporate supply</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">Equip your team with dependable laptops and accessories.</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              We support schools, offices, startups, and organizations with laptop sourcing, accessories, setup, upgrades, and after-sales support.
            </p>
            <Link href="/corporate" className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
              Request bulk supply quote <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Bulk laptop sourcing", "Accessories and setup", "RAM/SSD upgrade planning", "Delivery and support coordination"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
                <Building2 className="text-cyan-300" size={28} aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Structured support for professional buying decisions and organization-ready deployment.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro label="Why choose Ehi's Tech" title="A showroom experience built on clarity and support." text="You get real product photos, practical recommendations, clear specs, quote support, and setup guidance after purchase." />
          <div className="grid gap-5 sm:grid-cols-2">
            {["Real product images", "Clear specifications", "After-sales guidance", "Upgrade and repair support"].map((item) => (
              <article key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <CheckCircle2 className="text-cyan-600" size={28} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-slate-950">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Professional advice before and after you choose a laptop.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="section-shell">
          <SectionIntro label="Customer testimonials" title="Trusted by individual buyers and organizations." text="A practical, professional buying experience for students, offices, and teams." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-cyan-600">{[0, 1, 2, 3, 4].map((item) => <Star key={item} size={18} fill="currentColor" aria-hidden="true" />)}</div>
                <p className="mt-4 text-sm leading-7 text-slate-700">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-5 font-bold text-slate-950">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">Warranty & support</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Support that continues after purchase.</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">Warranty terms are explained before payment, with setup, repair, upgrade, and follow-up support available.</p>
            <Link href="/warranty" className="mt-7 inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-cyan-300 hover:bg-cyan-50">View support details</Link>
          </div>
          <div className="grid gap-3">
            {warrantySupport.slice(0, 5).map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-4">
                <Headphones className="text-cyan-600" size={20} aria-hidden="true" />
                <span className="font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="section-shell grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">Contact section</p>
            <h2 className="mt-3 text-4xl font-bold">Ready to request a laptop quote?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Contact {brand.name} for laptop sales, accessories, repairs, upgrades, warranty support, or corporate supply.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-[auto_auto]">
            <a href={`tel:${brand.phone}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15">
              <Phone size={18} aria-hidden="true" /> {brand.phoneDisplay}
            </a>
            <WhatsAppCta className="bg-emerald-500 px-6 py-3.5 text-white hover:bg-emerald-400" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function SectionIntro({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">{label}</p>
      <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}