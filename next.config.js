/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API_URL_PROD: process.env.BASE_API_URL_PROD,
    BASE_API_URL_DEV: process.env.BASE_API_URL_DEV,
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig;
