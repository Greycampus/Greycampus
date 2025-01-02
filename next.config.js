const withPlugins = require("next-compose-plugins");

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.greycampus.com",
                port: "",
                pathname: "/hubfs/GreyCampus/**",
            },
            {
                protocol: "http", // For localhost during development
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**",
            },
        ],
    },
};

module.exports = withPlugins([], nextConfig);