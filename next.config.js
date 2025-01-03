const withPlugins = require("next-compose-plugins");

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
    experimental: {
        optimizeCss: true, // ✅ Ensures CSS is optimized
    },
};

module.exports = withPlugins([], nextConfig);