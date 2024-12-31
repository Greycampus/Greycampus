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
        ],
    },
};

module.exports = withPlugins([], nextConfig);