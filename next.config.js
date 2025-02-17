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

    async redirects() {
        return [
          {
            source: "/elearning/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/career/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/cyber-security/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/e-learning/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/agile-and-scrum-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/scholarships/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/lean-six-sigma-green-and-black-belt-training-combo/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/six-sigma-green-belt-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/fullstack-development-foundation-program/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/apply/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/data-science", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/jeremy-barclay/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/chat/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/lean-six-sigma-black-belt-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/data-science-certifications", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/vineet-choudhary/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/capm-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/parveen-kumar/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/pmp-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/fundamentals-of-php-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/set-location/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/six-sigma-yellow-belt-certification-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/devops-ci-cd-with-jenkins-pipelines-maven-gradle-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/adam-keddy/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/professional-graphic-designer-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/certificate/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/ahmad-sulaiman/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/lean-six-sigma-green-belt-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/nikhat/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/deep-learning-for-nlp-using-tensorflow/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/divanshu-paliwal/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/prince2-practitioner-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/pmi-acp-certification-training/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/prince2-foundation-and-practitioner-training-combo/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/victoria-clarke/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/adam-sales/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/aishwarya-srivastava/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/adolfo-o-calderon-c/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/kevin-hoppe/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/csm-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/build-modern-web-apps-with-mean-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/emerson/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/paritala-bala-gopi-raju/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/apurva-shah/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/hiren-joshi/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/machine-learning-for-app-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/full-stack-development-masters-program/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/david-ovitt-jr/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/kathryn-battle/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/introduction-to-data-science/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/programming/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/ruby-fundamentals-online-self-learning/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/xml-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/project-management/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/intro-to-the-nem-blockchain-for-developers-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/big-data-hadoop-developer-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/microsoft-70-462-administering-sql-server-2012-databases-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/python-object-oriented-programming-fundamentals-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/elearning-bundle/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/pmpGreyCampus/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/sql-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/build-a-website-from-scratch-using-html-css-javascript/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/prince2-foundation-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/sap-netweaver-process-integration-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/sap-business-planning-and-consolidation-administration-and-planning-configuration-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/itil-foundation-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/mohamed-elmasry/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/sap-workflow-management-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/codelabs/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/rohit-sharma/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/cloud-computing-certifications/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/leadership-skills-vs-management-training-course/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/sap-training/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/sap-plant-maintenance-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
          {
            source: "/sap-plant-maintenance-training-instructor-led/:path*", // Match all paths under /elearning/*
            destination: "/", // Redirect to /elearning homepage
            permanent: true, // 301 redirect (Recommended for SEO)
          },
        ];
      },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig,);