// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["images.unsplash.com", "via.placeholder.com"], // ✅ Allow Unsplash & Placeholder images
      formats: ["image/webp"],
    },
    experimental: {
      optimizeCss: true,
      scrollRestoration: true,
    },
    trailingSlash: false,
  };
  
  export default nextConfig;
  