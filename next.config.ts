import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false as any, // Override type checking
  },
  // Add other configurations
};

export default nextConfig;
