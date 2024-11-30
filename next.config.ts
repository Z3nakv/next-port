import type { NextConfig } from "next";

const nextConfig : NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.androidheadlines.com',
      },
    ],
  },
};


export default nextConfig;
