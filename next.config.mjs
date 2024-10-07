/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/90s',
        destination: 'https://mario90ssite.github.io/'
      }
    ];
  },
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgix.cosmicjs.com",
        pathname: "/**",
      },
    ],
  }
};


export default nextConfig;
