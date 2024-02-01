/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  //   async headers() {
  //     return [
  //       {
  //         source: "/:all*(svg|jpg|png)",
  //         locale: false,
  //         headers: [
  //           {
  //             key: "Cache-Control",
  //             value: "public, max-age=9999999999, must-revalidate",
  //           },
  //         ],
  //       },
  //     ];
  //   },
  output: "standalone",
  reactStrictMode: false,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
};
