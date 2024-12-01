import type { NextConfig } from "next";

const nextConfig : NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'www.androidheadlines.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'openweathermap.org',
      //   pathname: '/img/wn/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'platform.polygon.com',
      //   pathname: '/wp-content/uploads/**',
      // },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};


export default nextConfig;
