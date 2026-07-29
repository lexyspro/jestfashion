import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  // Allow the shop page to be a client component
  experimental: {},
};

export default nextConfig;
