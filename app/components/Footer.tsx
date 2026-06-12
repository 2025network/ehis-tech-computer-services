import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { brand, navItems, services } from "../data";
import { SocialLinks } from "./SocialLinks";

const serviceLinks = services.slice(0, 6);

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="border-b border-white/10 bg-[linear-gradient(135deg,#07111f,#092a4f_58%,#073b7a)]">
        <div className="section-shell grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.65fr_0.85fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-extrabold leading-tight">{brand.name}</h2>
            <p className="mt-2 max-w-xl text-sm font-semibold text-cyan-100">{brand.slogan}</p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
              Professional laptop sales, accessories, repairs, upgrades, installations, corporate supply, and warranty support for individuals, schools, offices, and organizations.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-200">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">Quality-tested laptops</span>
              <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1">Corporate supply</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">After-sales support</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#f6c453]">Quick links</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-cyan-200">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#f6c453]">Services</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              {serviceLinks.map((service) => (
                <Link key={service.title} href="/services" className="transition hover:text-cyan-200">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#f6c453]">Contact information</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <a href={`tel:${brand.phone}`} className="flex gap-2 transition hover:text-cyan-200">
                <Phone className="mt-0.5 shrink-0 text-cyan-300" size={17} aria-hidden="true" /> {brand.phoneDisplay}
              </a>
              <a href={`mailto:${brand.email}`} className="flex gap-2 transition hover:text-cyan-200">
                <Mail className="mt-0.5 shrink-0 text-cyan-300" size={17} aria-hidden="true" /> {brand.email}
              </a>
              <p className="flex gap-2">
                <MapPin className="mt-0.5 shrink-0 text-cyan-300" size={17} aria-hidden="true" /> {brand.address}
              </p>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-emerald-400">
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">
          Copyright {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <div>
          <h3 className="sr-only">Social media</h3>
          <SocialLinks
            className="flex gap-2"
            linkClassName="inline-flex h-9 w-9 items-center justify-center rounded border border-white/15 bg-white/5 text-white transition hover:border-[#f6c453] hover:bg-[#f6c453] hover:text-[#07111f] focus-visible:focus-ring"
          />
        </div>
      </div>
    </footer>
  );
}