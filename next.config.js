/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: { loader: "@svgr/webpack", options: { typescript: true } },
    });

    return config;
  },
};

module.exports = nextConfig;
