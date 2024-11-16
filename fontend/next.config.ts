import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enabling React Strict Mode
  reactStrictMode: true,

  // Enable SWC minifier for better performance
  swcMinify: true,

  // Optional TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },

  // Enable file system-based routing for both pages and app directories
  pageExtensions: ["tsx", "ts", "jsx", "js"],

  // Additional configurations
  images: {
    domains: [], // Add any external image domains you want to allow
  },
};

export default nextConfig;
