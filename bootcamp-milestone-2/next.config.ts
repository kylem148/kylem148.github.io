import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true, // helpful for GitHub Pages
};
module.exports = nextConfig;
export default nextConfig;
