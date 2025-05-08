/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "violet-soft-stoat-492.mypinata.cloud",
      },
      {
        hostname: "gateway.pinata.cloud",
      },
      {
        hostname: "assets.surlatable.com",
      },
    ],
  },
  // Silence warnings
  // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
