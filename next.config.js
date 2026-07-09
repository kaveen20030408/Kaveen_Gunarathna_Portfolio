/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: []
  },
  // Disable webpack filesystem cache to prevent heap out-of-memory crashes
  // during cache serialization (Gzip buffer allocation failures).
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
