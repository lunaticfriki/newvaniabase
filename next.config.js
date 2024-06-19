/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'quhzaztrtoafgjzveztu.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
