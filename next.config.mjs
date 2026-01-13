/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
