/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/public/info.html",
      destination: "/pages/api/info.js",
    },
  ],
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
