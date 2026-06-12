import {
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Cpu,
  FileCheck2,
  GraduationCap,
  HardDrive,
  HeartPulse,
  Hotel,
  Laptop,
  MapPinned,
  MonitorCog,
  Plane,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Truck,
  UsersRound,
  Wrench,
} from "lucide-react";

export const brand = {
  name: "Ehi's Tech Computer Services",
  slogan: "Trusted Laptop Sales, Accessories & IT Solutions",
  tagline: "Trusted Laptop Sales, Accessories & IT Solutions",
  phone: "08145755579",
  phoneDisplay: "+234 814 575 579",
  whatsapp: "2348145755579",
  email: "info@ehistech.com",
  address: "Shop 30, Computer Village, Ikeja, Lagos, Nigeria",
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/EhisTech" },
  { label: "Instagram", href: "https://instagram.com/EhisTech" },
  { label: "TikTok", href: "https://tiktok.com/@EhisTech" },
  { label: "YouTube", href: "https://youtube.com/@EhisTech" },
  { label: "WhatsApp", href: "https://wa.me/2348145755579" },
] as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/laptops", label: "Laptops" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/corporate", label: "Corporate" },
  { href: "/warranty", label: "Warranty" },
  { href: "/contact", label: "Contact" },
];

export const laptopCategories = [
  {
    name: "Business Laptops",
    slug: "business-laptops",
    description: "Reliable systems for offices, executives, remote workers, and organizations.",
  },
  {
    name: "Student Laptops",
    slug: "student-laptops",
    description: "Affordable laptops for study, assignments, research, and everyday use.",
  },
  {
    name: "Gaming Laptops",
    slug: "gaming-laptops",
    description: "Performance laptops for gaming, design work, editing, and heavier workloads.",
  },
  {
    name: "UK-used Laptops",
    slug: "uk-used-laptops",
    description: "Carefully checked UK-used laptops with strong value for money.",
  },
  {
    name: "Brand-new Laptops",
    slug: "brand-new-laptops",
    description: "New laptop options for customers who want untouched devices.",
  },
] as const;

export const laptopProducts = [
  {
    id: 1,
    slug: "hp-zbook-firefly-14-g8",
    name: "HP ZBook Firefly 14 G8",
    brand: "HP",
    model: "ZBook Firefly 14 G8",
    category: "Business Laptops",
    ramGb: 16,
    storageGb: 512,
    storageType: "SSD",
    condition: "Premium Pre-Owned",
    price: 650000,
    status: "Available",
    warranty: "30 days warranty",
    image: "/hp-1/1.jpg",
    images: ["/hp-1/1.jpg", "/hp-1/11.jpg", "/hp-1/111.jpg", "/hp-1/1111.jpg", "/hp-1/11111.jpg", "/hp-1/111111.jpg"],
    shortDescription: "A premium mobile workstation for executives, creators, engineers, and power users who need business-grade speed in a slim 14-inch body.",
    description: "The HP ZBook Firefly 14 G8 combines workstation reliability with a light, professional design. Its 11th Gen Intel Core i7 processor, 16GB DDR4 RAM, fast 512GB SSD, FHD IPS display, keyboard light, fingerprint reader, webcam, Bluetooth, WiFi, and Windows 11 readiness make it a strong choice for business productivity, design work, presentations, and multitasking.",
    specs: ["Intel Core i7-1185G7, 11th Gen", "Turbo speed up to 4.40GHz", "16GB DDR4 RAM", "512GB SSD storage", "14-inch FHD IPS display, 1920 x 1080", "Intel Iris Xe graphics", "Webcam, Bluetooth, WiFi, fingerprint reader", "Backlit keyboard and Windows 11 ready"],
    highlights: ["Mobile workstation", "Backlit keyboard", "Fingerprint reader", "Windows 11 ready"],
  },
  {
    id: 2,
    slug: "hp-elitebook-840-g7",
    name: "HP EliteBook 840 G7",
    brand: "HP",
    model: "EliteBook 840 G7",
    category: "Business Laptops",
    ramGb: 8,
    storageGb: 256,
    storageType: "SSD",
    condition: "Premium Pre-Owned",
    price: 870000,
    status: "Available",
    warranty: "30 days support",
    image: "/LP-2/2.webp",
    images: ["/LP-2/2.webp", "/LP-2/22.webp", "/LP-2/222.webp", "/LP-2/2222.webp", "/LP-2/22222.webp", "/LP-2/222222.webp"],
    shortDescription: "A refined 10th Gen business laptop for office work, remote productivity, meetings, and dependable everyday performance.",
    description: "The HP EliteBook 840 G7 is built for modern productivity with a premium pre-owned finish, 10th Gen Intel Core i5 performance, 8GB RAM, 256GB SSD storage, and a backlit keyboard. It is a practical choice for professionals, students, small teams, and corporate buyers who want a portable, durable, and easy-to-manage laptop.",
    specs: ["Intel Core i5, 10th Gen", "8GB RAM", "256GB SSD storage", "14-inch business-class display", "Backlit keyboard", "Premium pre-owned condition", "Portable aluminum business chassis", "Suitable for office, school, and remote work"],
    highlights: ["Business class", "Backlit keyboard", "Premium pre-owned", "Portable design"],
  },
  {
    id: 3,
    slug: "dell-latitude-7420-business-laptop",
    name: "Dell Latitude 7420 Business Laptop",
    brand: "Dell",
    model: "Latitude 7420",
    category: "Business Laptops",
    ramGb: 16,
    storageGb: 512,
    storageType: "SSD",
    condition: "UK-used",
    price: 160000,
    status: "Available",
    warranty: "30 days support",
    image: "/LP-3/3.png",
    images: ["/LP-3/3.png", "/LP-3/33.png", "/LP-3/333.png", "/LP-3/3333.png", "/LP-3/33333.png", "/LP-3/333333.png"],
    shortDescription: "A sleek corporate-grade laptop for managers, consultants, office teams, and multitasking business users.",
    description: "This Dell Latitude 7420 package is positioned for buyers who need a premium, reliable work laptop with strong multitasking performance. It is ideal for spreadsheets, virtual meetings, browser-heavy workflows, presentations, school administration, and general corporate deployment.",
    specs: ["Intel Core i5/i7 business-class processor option", "16GB RAM configuration", "512GB SSD storage", "14-inch professional display", "Slim corporate chassis", "Webcam and wireless connectivity", "Recommended for office and executive use", "Setup support available after purchase"],
    highlights: ["Corporate grade", "Fast SSD", "Slim design", "Office ready"],
  },
  {
    id: 4,
    slug: "lenovo-thinkpad-t14-business-laptop",
    name: "Lenovo ThinkPad T14 Business Laptop",
    brand: "Lenovo",
    model: "ThinkPad T14",
    category: "Business Laptops",
    ramGb: 16,
    storageGb: 512,
    storageType: "SSD",
    condition: "UK-used",
    price: 485000,
    status: "Available",
    warranty: "30 days support",
    image: "/4.webp",
    images: ["/4.webp"],
    shortDescription: "A durable ThinkPad for professionals who value keyboard comfort, reliability, and stable daily performance.",
    description: "The Lenovo ThinkPad T14 is a dependable business laptop for office users, students, and teams that need a strong keyboard, practical ports, and consistent performance. It is well suited for documents, accounting tools, online meetings, research, and multitasking.",
    specs: ["Intel Core i5/i7 option", "16GB RAM", "512GB SSD", "14-inch display", "Durable ThinkPad keyboard", "Business-ready ports", "Windows ready"],
    highlights: ["Durable build", "Excellent keyboard", "SSD speed", "Business ready"],
  },
  {
    id: 5,
    slug: "hp-probook-450-g8-student-business-laptop",
    name: "HP ProBook 450 G8",
    brand: "HP",
    model: "ProBook 450 G8",
    category: "Student Laptops",
    ramGb: 8,
    storageGb: 256,
    storageType: "SSD",
    condition: "Premium Pre-Owned",
    price: 365000,
    status: "Available",
    warranty: "30 days support",
    image: "/5.webp",
    images: ["/5.webp"],
    shortDescription: "A practical laptop for students, home users, and small business owners who need reliable everyday productivity.",
    description: "The HP ProBook 450 G8 balances performance, screen size, and value. It works well for assignments, browsing, online classes, office documents, business records, and everyday computing, with SSD responsiveness and Ehi's Tech setup support.",
    specs: ["Intel Core i5 option", "8GB RAM", "256GB SSD", "15.6-inch display", "Webcam and WiFi", "Good for school and office work", "Upgrade options available"],
    highlights: ["Student friendly", "Office ready", "Upgrade support", "Good value"],
  },
  {
    id: 6,
    slug: "apple-macbook-pro-retina-13",
    name: "Apple MacBook Pro Retina 13",
    brand: "Apple",
    model: "MacBook Pro Retina 13",
    category: "Brand-new Laptops",
    ramGb: 8,
    storageGb: 256,
    storageType: "SSD",
    condition: "On request",
    price: 780000,
    status: "On request",
    warranty: "Supplier warranty",
    image: "/6.jpg",
    images: ["/6.jpg"],
    shortDescription: "A premium macOS laptop option for creative users, executives, students, and professionals who prefer Apple hardware.",
    description: "The Apple MacBook Pro Retina 13 is a polished laptop for design, presentations, writing, study, content work, and executive productivity. Ehi's Tech can help confirm configuration, condition, warranty terms, and setup needs before purchase.",
    specs: ["Apple MacBook Pro Retina class", "8GB RAM option", "256GB SSD option", "Retina display", "macOS productivity", "Premium aluminum body", "Available on request"],
    highlights: ["Retina display", "Premium build", "Creative work", "macOS"],
  },
  {
    id: 7,
    slug: "asus-vivobook-15-everyday-laptop",
    name: "ASUS VivoBook 15 Everyday Laptop",
    brand: "ASUS",
    model: "VivoBook 15",
    category: "Student Laptops",
    ramGb: 8,
    storageGb: 512,
    storageType: "SSD",
    condition: "Brand-new",
    price: 870000,
    status: "Available",
    warranty: "Supplier warranty",
    image: "/7.jpg",
    images: ["/7.jpg"],
    shortDescription: "A modern everyday laptop for students, families, and office users who need a clean, fast, and affordable system.",
    description: "The ASUS VivoBook 15 is a sensible choice for school work, home productivity, web apps, video calls, media, and light business tasks. It offers fast SSD storage, a comfortable screen size, and a clean modern design for daily use.",
    specs: ["Intel Core i3/i5 option", "8GB RAM", "512GB SSD", "15.6-inch display", "Webcam and WiFi", "Good for study and daily productivity", "Supplier warranty option"],
    highlights: ["Everyday use", "Student friendly", "Large display", "Fast SSD"],
  },
] as const;

export const sampleQuoteRequests = [
  {
    id: "Q-1001",
    customer: "Chinedu Okafor",
    product: "HP ZBook Firefly 14 G8",
    phone: "08000000001",
    quantity: 1,
    budget: "₦300,000",
    status: "New",
    date: "2026-06-10",
  },
  {
    id: "Q-1002",
    customer: "Bright Future School",
    product: "HP EliteBook 840 G7",
    phone: "08000000002",
    quantity: 12,
    budget: "₦4,500,000",
    status: "Reviewing",
    date: "2026-06-11",
  },
  {
    id: "Q-1003",
    customer: "Mira Designs",
    product: "Lenovo ThinkPad T14 Business Laptop",
    phone: "08000000003",
    quantity: 2,
    budget: "₦2,000,000",
    status: "Contacted",
    date: "2026-06-12",
  },
] as const;

export const sampleWarrantyRecords = [
  {
    code: "WTY-2401",
    customer: "Ada Williams",
    product: "Dell Latitude 7420 Business Laptop",
    issue: "Battery check",
    status: "In review",
    expires: "2026-07-15",
  },
  {
    code: "WTY-2402",
    customer: "Kemi Lawal",
    product: "HP ZBook Firefly 14 G8",
    issue: "Keyboard support",
    status: "Resolved",
    expires: "2026-07-02",
  },
] as const;

export const services = [
  { title: "Laptop Sales", description: "Quality-tested laptops for students, professionals, offices, and organizations.", icon: Laptop },
  { title: "Laptop Accessories", description: "Chargers, bags, mice, keyboards, headsets, cables, storage, and workstation accessories.", icon: ShoppingBag },
  { title: "Laptop Repairs", description: "Troubleshooting, screen support, charging issues, performance checks, and general repairs.", icon: Wrench },
  { title: "RAM and SSD Upgrades", description: "Speed up slow systems with practical RAM and SSD upgrade options.", icon: HardDrive },
  { title: "Software Installation", description: "Operating system setup, drivers, productivity tools, antivirus, and essential applications.", icon: MonitorCog },
  { title: "Corporate Laptop Supply", description: "Laptop sourcing and supply support for schools, offices, startups, and organizations.", icon: Truck },
  { title: "Office Computer Setup", description: "Setup support for workstations, accessories, installations, and basic IT readiness.", icon: Building2 },
  { title: "Diagnostics and Advice", description: "Clear recommendations before you buy, repair, upgrade, or replace a system.", icon: Cpu },
];

export const supportedCountries = [
  "Students",
  "Home users",
  "Offices",
  "Schools",
  "Startups",
  "Organizations",
  "IT teams",
  "Corporate buyers",
];

export const processSteps = [
  "Submit your service request",
  "Receive a tracking code",
  "Get a tailored recommendation",
  "Upload photos or supporting files",
  "Monitor status updates",
];

export const trustPoints = [
  { value: "5+", label: "Years of experience" },
  { value: "24/7", label: "WhatsApp inquiry access" },
  { value: "Tested", label: "Quality-checked laptops" },
  { value: "B2B", label: "Corporate supply support" },
];

export const reasons = [
  { title: "Quality-tested devices", description: "Laptops are checked so customers can buy with more confidence.", icon: ShieldCheck },
  { title: "Practical recommendations", description: "We help match specifications to real work, school, gaming, or office needs.", icon: FileCheck2 },
  { title: "After-sales support", description: "Customers can return for setup, upgrades, repair support, and guidance.", icon: CalendarCheck },
];

export const testimonials = [
  {
    name: "Student laptop buyer",
    role: "Laptop customer",
    quote: "The laptop recommendation matched my budget and the setup support made it easy to start using.",
  },
  {
    name: "Small business client",
    role: "Office setup",
    quote: "Ehi's Tech explained the best options clearly and helped us choose reliable laptops for the team.",
  },
  {
    name: "Corporate buyer",
    role: "Bulk supply",
    quote: "The supply process was straightforward, with helpful advice on specs, accessories, and upgrades.",
  },
];

export const faqs = [
  {
    question: "Does Ehi's Tech offer warranty or support?",
    answer: "Warranty and support terms depend on the product condition and supplier terms. We explain available support clearly before purchase.",
  },
  {
    question: "Can I request a specific laptop model?",
    answer: "Yes. Share your preferred brand, budget, specifications, and quantity so we can advise on availability.",
  },
  {
    question: "Do you supply schools and offices?",
    answer: "Yes. We support bulk laptop and accessory supply for schools, offices, startups, and organizations.",
  },
  {
    question: "Do you handle upgrades and installations?",
    answer: "Yes. We support RAM upgrades, SSD upgrades, software installation, and basic office computer setup.",
  },
];

export const corporateBenefits = [
  "Laptop sourcing based on budget and specifications",
  "Bulk supply for schools, offices, and organizations",
  "Accessory bundling for complete workstation readiness",
  "Upgrade, installation, and after-sales support options",
];
export const customerTypes = ["Students", "Individuals", "Schools", "Offices", "Organizations"];
export const warrantySupport = [
  "Quality-tested laptops before handover",
  "Warranty terms explained per product",
  "Upgrade and repair support options",
  "After-sales setup guidance",
];
export const adminReadyNotes = [
  "Product and inquiry data can be connected to Prisma.",
  "Future product uploads can include name, specs, condition, price, images, and stock status.",
  "Admin request tracking, email notification hooks, and status updates are enabled.",
];
