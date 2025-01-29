import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./locales/request.tsx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "nwaa.trendline.marketing",
        pathname: "**",
        protocol: "https",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
