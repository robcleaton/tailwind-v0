/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use a conditional basePath only in production
  basePath: process.env.NODE_ENV === 'production' ? '/tailwind-v0' : '',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
};

export default nextConfig;
