import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: [
      'http://localhost:3000', // Your frontend origin
      'http://127.0.0.1:3000', // Alternative localhost
      // Add any other development origins you need
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;