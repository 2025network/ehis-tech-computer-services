import type { MetadataRoute } from "next";
import { laptopProducts } from "./data";
import { siteUrl } from "@/lib/seo";

const routes = [
  "",
  "/about",
  "/laptops",
  "/corporate",
  "/warranty",
  "/services",
    "/apply-now",
  "/track-application",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const productRoutes = laptopProducts.map((product) => `/laptops/${product.slug}`);

  return [...routes, ...productRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
