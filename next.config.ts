import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // enables `next export` -> /out
  images: { unoptimized: true }, // needed for GitHub Pages
};

export default nextConfig;

