import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "yt3.ggpht.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "i.ytimg.com" }
    ]
  }
};

export default nextConfig;
