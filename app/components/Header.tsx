import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { brand, navItems } from "../data";
import { SocialLinks } from "./SocialLinks";

const laptopMenu = [
  { label: "All Laptops", href: "/laptops" },
  { label: "HP Laptops", href: "/laptops?brand=HP" },
  { label: "Dell Laptops", href: "/laptops?brand=Dell" },
  { label: "Lenovo Laptops", href: "/laptops?brand=Lenovo" },
  { label: "MacBooks", href: "/laptops?brand=Apple" },
  { label: "Gaming Laptops", href: "/laptops?category=Gaming%20Laptops" },
  { label: "Student Laptops", href: "/laptops?category=Student%20Laptops" },
  { label: "Business Laptops", href: "/laptops?category=Business%20Laptops" },
  { label: "UK-Used Laptops", href: "/laptops?condition=UK-used" },
  { label: "Brand New Laptops", href: "/laptops?condition=Brand-new" },
  { label: "Workstation Laptops", href: "/laptops/hp-zbook-firefly-14-g8" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-white shadow-lg shadow-slate-950/5">
      <div className="border-b border-cyan-100 bg-[linear-gradient(120deg,#eaf8ff,#ffffff_48%,#fff7df)]">
        <div className="section-shell flex flex-col gap-2 py-2 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image src="/ehis-tech-logo.png" alt="Ehi's Tech Computer Services logo" width={100} height={100} priority className="h-[56px] w-[60px] shrink-0 rounded-md object-contain drop-shadow-sm md:h-[72px] md:w-[90px]" />
            <span className="min-w-0">
              <span className="block text-lg font-extrabold leading-tight text-slate-950 md:text-2xl">{brand.name}</span>
              <span className="mt-0.5 block text-xs font-bold text-cyan-800 md:text-sm">{brand.slogan}</span>
            </span>
          </Link>
          <SocialLinks className="w-fit rounded-lg border border-cyan-100 bg-white/80 px-2 py-1 shadow-sm" linkClassName="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700 focus-visible:focus-ring" />
        </div>
      </div>

      <div className="bg-slate-950">
        <div className="section-shell flex min-h-[60px] items-center justify-between gap-4 py-2">
          <nav className="flex flex-wrap gap-1 overflow-visible" aria-label="Main navigation">
            {navItems.map((item) =>
              item.label === "Laptops" ? (
                <div key={item.href} className="group relative shrink-0">
                  <Link href={item.href} className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-cyan-200 focus-visible:focus-ring">
                    Laptops <ChevronDown size={15} aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 mt-2 w-72 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-2xl shadow-slate-950/20 transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid gap-1">
                      {laptopMenu.map((menuItem) => (
                        <Link key={menuItem.label} href={menuItem.href} className="rounded-md px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-800 focus-visible:focus-ring">
                          {menuItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="shrink-0 rounded-md px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-cyan-200 focus-visible:focus-ring">
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <Link href="/laptops" className="hidden shrink-0 rounded-md bg-[#f6c453] px-4 py-2 text-sm font-extrabold text-[#07111f] shadow-sm transition hover:bg-[#e5b13d] focus-visible:focus-ring sm:inline-flex">
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}