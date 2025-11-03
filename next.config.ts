import type { NextConfig } from "next";

const repo = "deborajoppi.github.io"; // <-- your repo name

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: `/${repo}` },
};


export default nextConfig;


