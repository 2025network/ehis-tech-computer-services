import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ["sharp"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;