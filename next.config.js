const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true", // ✅ Enables only when ANALYZE=true
});

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.greycampus.com",
                port: "",
                pathname: "/hubfs/**",
            },
            {
                protocol: "http", // For localhost during development
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**",
            },
        ],
    },
    swcMinify: true, // ✅ Minify JS & CSS
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);