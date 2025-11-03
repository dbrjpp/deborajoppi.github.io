import type { NextConfig } from "next";

const repo = "deborajoppi.github.io"; // your repo name

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true, // helps Pages serve static files
};

export default nextConfig;
