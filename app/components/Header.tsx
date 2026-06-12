import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { brand, navItems } from "../data";

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

function LaptopDropdown() {
  return (
    <div className="group relative shrink-0">
      <Link href="/laptops" className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-[13px] font-semibold text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700 focus-visible:focus-ring xl:px-2.5">
        Laptops <ChevronDown size={14} aria-hidden="true" />
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
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan-100 bg-[linear-gradient(120deg,#ffffff,#eefaff_58%,#fff8e6)] shadow-md shadow-slate-950/5">
      <div className="section-shell flex min-h-[54px] flex-wrap items-center justify-between gap-x-3 gap-y-2 py-2 lg:min-h-[62px] lg:flex-nowrap lg:gap-4 xl:min-h-[64px]">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-lg bg-white/75 py-1 pr-2 shadow-sm ring-1 ring-cyan-100/80 lg:max-w-[292px] xl:max-w-none">
          <span className="flex h-[48px] w-[58px] shrink-0 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-slate-100 md:h-[55px] md:w-[66px]">
            <Image src="/ehis-tech-logo.png" alt="Ehi's Tech Computer Services logo" width={100} height={100} priority className="h-full max-h-[55px] w-full object-contain p-1" />
          </span>
          <span className="min-w-0">
            <span className="block text-[15px] font-extrabold leading-tight text-slate-950 sm:text-base lg:text-[15px] xl:text-lg">{brand.name}</span>
            <span className="mt-0.5 block max-w-[240px] text-[10px] font-bold leading-snug text-cyan-800 sm:text-[11px] lg:max-w-[176px] xl:max-w-none">{brand.slogan}</span>
          </span>
        </Link>

        <nav className="order-3 flex w-full items-center gap-0.5 overflow-x-auto pb-1 lg:order-none lg:w-auto lg:flex-1 lg:justify-center lg:overflow-visible lg:pb-0" aria-label="Main navigation">
          {navItems.map((item) =>
            item.label === "Laptops" ? (
              <LaptopDropdown key={item.href} />
            ) : (
              <Link key={item.href} href={item.href} className="shrink-0 rounded-md px-2 py-1.5 text-[13px] font-semibold text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700 focus-visible:focus-ring xl:px-2.5">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/laptops" className="shrink-0 rounded-md bg-[#f6c453] px-3.5 py-2 text-[13px] font-extrabold text-[#07111f] shadow-sm transition hover:bg-[#e5b13d] focus-visible:focus-ring">
          Request Quote
        </Link>
      </div>
    </header>
  );
}