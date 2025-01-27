const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true", // ✅ Enables only when ANALYZE=true
});
const BrotliPlugin = require("brotli-webpack-plugin");

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
                protocol: "https", // Update to use the live Strapi hostname
                hostname: "strapi.greycampus.com",
                port: "",
                pathname: "/uploads/**",
            },
            {
                protocol: "http", // For localhost during development
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**",
            },
            {
                protocol: "https", // For Strapi hosted on Greycampus
                hostname: "strapi.greycampus.com",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
    swcMinify: true, // ✅ Minify JS & CSS

    webpack(config, { isServer }) {
        // Split chunks for both server and client builds
        if (!isServer) {
            config.optimization.splitChunks = {
                chunks: "all", // Split all chunks, even those from node_modules
                cacheGroups: {
                    // Split React, ReactDOM, React-Query into their own chunks
                    react: {
                        test: /[\\/]node_modules[\\/]react|react-dom|react-query[\\/]/,
                        name: "react",
                        chunks: "all",
                        priority: 20,
                        enforce: true,
                    },
                    // Split @mui/material, @emotion into separate chunk for optimized loading
                    mui: {
                        test: /[\\/]node_modules[\\/](@mui|@emotion)[\\/]/,
                        name: "mui",
                        chunks: "all",
                        priority: 15,
                        enforce: true,
                    },
                    // Split large vendor libraries from node_modules into a separate chunk
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                        priority: 10,
                    },
                    // Default chunk for shared code between multiple pages/components
                    default: {
                        minChunks: 2, // Shared code between multiple pages/components
                        priority: 5,
                    },
                },
            };
        }

        // Enable module concatenation using the new Webpack optimization method
        config.optimization.concatenateModules = true;

        // Add Brotli compression for JavaScript and CSS files
        config.plugins.push(
            new BrotliPlugin({
                asset: "[path].br[query]",
                test: /\.js$|\.css$/, // Apply to .js and .css files
                compressionOptions: {
                    level: 11, // Maximum compression
                },
                threshold: 10240, // Only compress files larger than 10KB
                minRatio: 0.8, // Only compress files with a compression ratio higher than 0.8
            }),
        );

        return config;
    },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);