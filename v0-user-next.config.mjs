/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure for GitHub Pages with a repo name as the base path
  // Replace 'tailwind-styleguide' with your actual repository name if different
  basePath: process.env.NODE_ENV === 'production' ? '/tailwind-styleguide' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

