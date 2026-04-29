import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;
