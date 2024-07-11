/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techcrunch.com",
      },
    ],
  },
};

export default nextConfig;
