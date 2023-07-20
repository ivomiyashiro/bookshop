/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    BASE_API_URL_DEV: process.env.BASE_API_URL_DEV,
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig;
