/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig; 