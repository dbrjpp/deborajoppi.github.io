import type { NextConfig } from "next";

const repoBase = "/deborajoppi.github.io"; // your repo name

const nextConfig: NextConfig = {
  // replaces `next export`
  output: "export",

  // GitHub Pages subpath
  basePath: repoBase,
  assetPrefix: `${repoBase}/`,

  // folders with index.html work better on GH Pages with trailing slashes
  trailingSlash: true,

  // disable server image optimization in static export
  images: { unoptimized: true },

  // optional: quiet some warnings
  experimental: { optimizePackageImports: [] },
};

export default nextConfig;
