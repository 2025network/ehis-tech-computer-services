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
      <Link href="/laptops" className="inline-flex items-center gap-1 rounded-md px-2 py-2 text-[13px] font-semibold text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700 focus-visible:focus-ring xl:px-2.5 xl:text-sm">
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
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan-100 bg-[linear-gradient(120deg,#f8fcff,#eefaff_52%,#fff7df)] shadow-lg shadow-slate-950/5">
      <div className="section-shell flex min-h-[68px] flex-wrap items-center justify-between gap-x-3 gap-y-2 py-2 lg:flex-nowrap lg:gap-4 xl:min-h-[72px]">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3 lg:max-w-[285px] xl:max-w-none">
          <Image src="/ehis-tech-logo.png" alt="Ehi's Tech Computer Services logo" width={100} height={100} priority className="h-[50px] w-[60px] shrink-0 object-contain drop-shadow-sm md:h-[56px] md:w-[70px]" />
          <span className="min-w-0">
            <span className="block text-base font-extrabold leading-tight text-slate-950 sm:text-lg lg:text-base xl:text-xl">{brand.name}</span>
            <span className="mt-0.5 block max-w-[250px] text-[11px] font-bold leading-snug text-cyan-800 sm:text-xs lg:max-w-[185px] xl:max-w-none">{brand.slogan}</span>
          </span>
        </Link>

        <nav className="order-3 flex w-full items-center gap-1 overflow-x-auto pb-1 lg:order-none lg:w-auto lg:flex-1 lg:justify-center lg:overflow-visible lg:pb-0" aria-label="Main navigation">
          {navItems.map((item) =>
            item.label === "Laptops" ? (
              <LaptopDropdown key={item.href} />
            ) : (
              <Link key={item.href} href={item.href} className="shrink-0 rounded-md px-2 py-2 text-[13px] font-semibold text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700 focus-visible:focus-ring xl:px-2.5 xl:text-sm">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/laptops" className="shrink-0 rounded-md bg-[#f6c453] px-3.5 py-2.5 text-sm font-extrabold text-[#07111f] shadow-sm transition hover:bg-[#e5b13d] focus-visible:focus-ring">
          Request a Quote
        </Link>
      </div>
    </header>
  );
}

