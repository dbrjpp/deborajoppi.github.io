const isProd = process.env.NODE_ENV === 'production';

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/deborajoppi.github.io" : "",
  assetPrefix: isProd ? "/deborajoppi.github.io/" : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
