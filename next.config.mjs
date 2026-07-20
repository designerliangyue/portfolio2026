const isStaticExport = process.env.STATIC_EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // China deployment: STATIC_EXPORT=1 builds plain HTML/CSS/JS into out/ for
  // Aliyun OSS + CDN. The Vercel build is unaffected.
  ...(isStaticExport ? { output: "export" } : {}),
  images: {
    ...(isStaticExport ? { unoptimized: true } : {}),
    remotePatterns: [
      { protocol: "https", hostname: "**.amazonaws.com" },
      { protocol: "https", hostname: "**.notion.so" }
    ]
  }
};

export default nextConfig;
