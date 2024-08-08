/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["default", "ru", "en"],
    defaultLocale: "default",
    localeDetection: false,
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:8080",
  },
};

export default nextConfig;
