// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "deborajoppi.github.io";

const nextConfig: NextConfig = {
  output: "export",

  // ✅ Only add basePath on GitHub Pages build
  basePath: isProd ? `/${repo}` : "",

  // ✅ Only prefix assets in production
  assetPrefix: isProd ? `/${repo}/` : undefined,

  images: { unoptimized: true },
};

export default nextConfig;
