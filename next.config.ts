import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
