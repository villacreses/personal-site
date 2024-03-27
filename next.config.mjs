/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/90s',
        destination: 'https://mario90ssite.github.io/'
      }
    ];
  }
};

export default nextConfig;
