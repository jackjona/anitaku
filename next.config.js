/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/1/:path*",
        destination: "https://api.waifu.pics/:path*",
      },
      {
        source: "/api/2/:path*",
        destination: "https://api.waifu.im/:path*",
      },
      {
        source: "/api/3/:path*",
        destination: "https://pic.re/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
