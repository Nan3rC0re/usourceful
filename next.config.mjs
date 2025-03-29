/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "usourcefulresourceimg.s3.us-east-1.amazonaw.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
