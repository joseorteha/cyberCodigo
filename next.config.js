/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'jcuhtjbovyveuluqaqrg.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'cybercodigo.netlify.app',
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
      },
    ],
  },
};

module.exports = nextConfig; 