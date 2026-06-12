import type { Metadata } from "next";
import { brand, socialLinks } from "./data";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import "./globals.css";
import { seoKeywords, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ehi's Tech Computer Services",
    template: "%s | Ehi's Tech Computer Services",
  },
  description:
    "Trusted laptop sales, accessories, laptop repairs, upgrades, installations, and IT solutions for individuals, schools, offices, and organizations.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "64x64" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Ehi's Tech Computer Services",
    title: "Ehi's Tech Computer Services",
    description:
      "Trusted laptop sales, accessories, repairs, upgrades, installations, and corporate IT supply support in Nigeria.",
    images: [
      {
        url: "/ehis-tech-logo.png",
        width: 600,
        height: 600,
        alt: "Ehi's Tech Computer Services logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehi's Tech Computer Services",
    description:
      "Trusted laptop sales, accessories, repairs, upgrades, and IT solutions in Nigeria.",
    images: ["/ehis-tech-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  name: brand.name,
  url: siteUrl,
  logo: `${siteUrl}/ehis-tech-logo.png`,
  image: `${siteUrl}/ehis-tech-logo.png`,
  sameAs: socialLinks.map((social) => social.href),
  slogan: brand.slogan,
  description:
    "Computer services company in Nigeria offering laptop sales, accessories, laptop repairs, RAM and SSD upgrades, software installation, office computer setup, and corporate laptop supply.",
  telephone: brand.phone,
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address,
    addressCountry: "NG",
  },
  areaServed: ["Nigeria", "Lagos"],
  serviceType: [
    "Laptop sales",
    "Laptop accessories",
    "Laptop repairs",
    "RAM and SSD upgrades",
    "Software installation",
    "Corporate laptop supply",
    "Office computer setup",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
