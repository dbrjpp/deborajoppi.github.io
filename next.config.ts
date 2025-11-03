import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "deborajoppi.github.io"; // <- your repo name

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};

export default nextConfig;


