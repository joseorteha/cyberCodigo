import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'jcuhtjbovyveuluqaqrg.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/testimonials/**',
      },
    ],
  },
};

export default nextConfig;
