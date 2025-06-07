import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "yt3.ggpht.com" },
    ]
  }
};

export default nextConfig;
