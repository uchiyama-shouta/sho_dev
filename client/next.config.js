/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require("next-pwa")({
//   pwa: {
//     dest: "public",
//     disable: process.env.NODE_ENV === "development",
//     runtimeCaching,
//   },
// });

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["images.microcms-assets.io"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    newNextLinkBehavior: true,
  },
};

const withPlugins = (plugins, config) => {
  return plugins.reduce((acc, plugin) => plugin(acc), { ...config });
};

module.exports = withPlugins([withBundleAnalyzer], config);
