/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Replace 'tailwind-v0' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/tailwind-v0' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
