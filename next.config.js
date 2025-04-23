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
      {
        source:"/lean-six-sigma-green-belt-training-instructor-led/live",
        destination: "/lean-six-sigma-green-belt-training-instructor-led/live",
        permanent: true
      },
      {
        source: "/blog/programming",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/blog/project-management/top-7-organizational-trends-in-quality-management",
        destination: "/blog/quality-management/top-7-organizational-trends-in-quality-management",
        permanent: true
      },
      {
        source: "/blog/project-management/risk-management-tips",
        destination: "/blog/project-management/project-risk-management-tips",
        permanent: true
      },
      {
        source: "/blog/project-management/top-quality-management-tips-to-enhance-your-business-performance",
        destination: "/blog/quality-management/top-quality-management-tips-to-enhance-your-business-performance",
        permanent: true
      },
      {
        source: "/blog/quality-management/relationship-between-cmdb-and-cms",
        destination: "/blog/it-service-management/relationship-between-cmdb-and-cms",
        permanent: true
      },
      {
        source: "/blog/queries-on-itil",
        destination: "/blog/it-service-management/queries-on-itil",
        permanent: true
      },
      {
        source: "/blog/why-project-management-certification-matter",
        destination: "/blog/project-management/why-project-management-certification-matter",
        permanent: true
      },
      {
        source: "/blog/project-management/twelve-principles-of-the-agile-manifesto",
        destination: "/blog/agile-and-scrum/twelve-principles-of-the-agile-manifesto",
        permanent: true
      },
      {
        source: "/blog/project-management/top-five-tools-used-for-process-improvement",
        destination: "/blog/quality-management/top-five-tools-used-for-process-improvement",
        permanent: true
      },
      {
        source: "/blog/project-management/steps-for-implementing-a-quality-management-system-the-successful-way",
        destination: "/blog/quality-management/steps-for-implementing-a-quality-management-system-the-successful-way",
        permanent: true
      },
      {
        source: "/blog/why-get-pmp-certified",
        destination: "/blog/project-management/why-get-pmp-certified",
        permanent: true
      },
      {
        source: "/blog/quality-management/5-important-lean-six-sigma-tools",
        destination: "/blog/quality-management/12-six-sigma-tools",
        permanent: true
      },
      {
        source: "/blog/quality-management/guide-to-create-business-case-using-cost-benefit-analysis",
        destination: "/blog/it-service-management/guide-to-create-business-case-using-cost-benefit-analysis",
        permanent: true
      },
      {
        source: "/blog/quality-management/steps-involved-in-implementing-lean-six-sigma-using-dmaic-methodology",
        destination: "/blog/quality-management/dmaic-a-six-sigma-process-improvement-methodology",
        permanent: true
      },
      {
        source: "/blog/project-management/top-5-project-management-apps-for-project-managers",
        destination: "/blog/project-management/top-6-project-management-apps-for-project-managers",
        permanent: true
      },
      {
        source: "/blog/project-management/what-is-total-quality-management",
        destination: "/blog/quality-management/what-is-total-quality-management",
        permanent: true
      },
      {
        source: "/blog/quality-management",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/blog/cybersecurity",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/blog/it-service-management",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/blog/project-management",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/opencampus/agile-certified-practitioner",
        destination: "/opencampus/agile-certified-practitioner/what-is-pmi-acp",
        permanent: true
      },
      {
        source: "/opencampus/big-data-developer",
        destination: "http://www.odinschool.com/learning-hub/big-data-developer/what-is-big-data",
        permanent: true
      },
      {
        source: "/opencampus/certified-associate-in-project-management",
        destination: "/opencampus/certified-associate-in-project-management/what-is-capm",
        permanent: true
      },
      {
        source: "/opencampus/hadoop-administrator",
        destination: "http://www.odinschool.com/learning-hub/hadoop-administrator/what-is-hadoop",
        permanent: true
      },
      {
        source: "/opencampus/itil-foundation",
        destination: "/opencampus/itil-foundation/what-is-itil",
        permanent: true
      },
      {
        source: "/opencampus/itil-foundation/what-is-iti",
        destination: "/opencampus/itil-foundation/what-is-itil",
        permanent: true
      },
      {
        source: "/opencampus/lean-six-sigma-green-belt",
        destination: "/opencampus/lean-six-sigma-green-belt/what-is-lean-six-sigma-green-belt",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/what-is-machine-learning",
        permanent: true
      },
      {
        source: "/opencampus/ms-excel",
        destination: "/opencampus/ms-excel/what-is-ms-excel",
        permanent: true
      },
      {
        source: "/opencampus/prince-2-foundation",
        destination: "/opencampus/prince-2-foundation/what-is-prince-2",
        permanent: true
      },
      {
        source: "/opencampus/prince-2-practitioner",
        destination: "/opencampus/prince-2-practitioner/what-is-prince-2",
        permanent: true
      },
      {
        source: "/opencampus/project-management-professional",
        destination: "/opencampus/project-management-professional/what-is-pmp",
        permanent: true
      },
      {
        source: "/opencampus/project-management-professional/communaication-management-plan",
        destination: "/opencampus/project-management-professional/communication-management-plan",
        permanent: true
      },
      {
        source: "/opencampus/project-management-professional/project-product-life-cycle",
        destination: "/opencampus/project-management-professional/project-lifecycle-and-tailoring",
        permanent: true
      },
      {
        source: "/opencampus/six-sigma-black-belt",
        destination: "/opencampus/six-sigma-black-belt/what-is-six-sigma-black-belt",
        permanent: true
      },
      {
        source: "/opencampus/six-sigma-green-belt",
        destination: "/opencampus/six-sigma-green-belt/what-is-six-sigma-green-belt",
        permanent: true
      },
      {
        source: "/opencampus/six-sigma-white-belt",
        destination: "/opencampus/six-sigma-white-belt/what-is-six-sigma",
        permanent: true
      },
      {
        source: "/opencampus/six-sigma-yellow-belt",
        destination: "/opencampus/six-sigma-yellow-belt/what-is-six-sigma-yellow-belt",
        permanent: true
      },
      {
        source: "/blog/big-data/machine-learning-for-a-stronger-iot-security-environment",
        destination: "/blog/data-science/machine-learning-for-a-stronger-iot-security-environment",
        permanent: true
      },
      {
        source: "/blog/essence-of-project-management",
        destination: "/blog/project-management/essence-of-project-management",
        permanent: true
      },
      {
        source: "/blog/how-to-become-a-pmp",
        destination: "/blog/project-management/how-to-become-a-pmp",
        permanent: true
      },
      {
        source: "/blog/how-to-crack-itil-foundation-exam-in-one-shot",
        destination: "/blog/it-service-management/how-to-crack-itil-foundation-exam-in-one-shot",
        permanent: true
      },
      {
        source: "/blog/information-security/top-wireless-hacking-tools",
        destination: "/blog/cybersecurity/top-wireless-hacking-tools",
        permanent: true
      },
      {
        source: "/blog/it-service-management/itilr-certification",
        destination: "/blog/it-service-management/itil-certification",
        permanent: true
      },
      {
        source: "/blog/itil-best-practices",
        destination: "/blog/it-service-management/itil-best-practices",
        permanent: true
      },
      {
        source: "/blog/itil-big-picture",
        destination: "/blog/it-service-management/itil-big-picture",
        permanent: true
      },
      {
        source: "/blog/itilr-certification",
        destination: "/blog/it-service-management/itilr-certification",
        permanent: true
      },
      {
        source: "/blog/latest-updates/how-to-become-an-ethical-hacker-with-our-easy-payment-plan",
        destination: "/blog/information-security/how-to-become-an-ethical-hacker-with-our-easy-payment-plan",
        permanent: true
      },
      {
        source: "/blog/levels-of-itil-certification",
        destination: "/blog/it-service-management/levels-of-itil-certification",
        permanent: true
      },
      {
        source: "/blog/networking/cloud-computing-and-cissp-all-questions-answered",
        destination: "/blog/information-security/cloud-computing-and-cissp-all-questions-answered",
        permanent: true
      },
      {
        source: "/blog/networking/the-cissp-certification-building-next-generation-information-security-experts",
        destination: "/blog/information-security/the-cissp-certification-building-next-generation-information-security-experts",
        permanent: true
      },
      {
        source: "/blog/project-management-in-different-sectors",
        destination: "/blog/project-management/project-management-in-different-sectors",
        permanent: true
      },
      {
        source: "/blog/project-management-pmbok5",
        destination: "/blog/project-management/project-management-pmbok5",
        permanent: true
      },
      {
        source: "/blog/project-management-your-dream-career",
        destination: "/blog/project-management/project-management-your-dream-career",
        permanent: true
      },
      {
        source: "/blog/project-management/cmdb-goals-benefits-and-effect-in-relation-to-key-stakeholders",
        destination: "/blog/it-service-management/cmdb-goals-benefits-and-effect-in-relation-to-key-stakeholders",
        permanent: true
      },
      {
        source: "/blog/project-management/five-quality-management-trends-to-watch-out-for-in-2018",
        destination: "/blog/quality-management/five-quality-management-trends-to-watch-out-for-in-2018",
        permanent: true
      },
      {
        source: "/blog/project-management/get-easy-approval-from-key-stakeholders-step-by-step",
        destination: "/blog/it-service-management/get-easy-approval-from-key-stakeholders-step-by-step",
        permanent: true
      },
      {
        source: "/blog/project-management/guide-to-create-business-case-using-cost-benefit-analysis",
        destination: "/blog/it-service-management/guide-to-create-business-case-using-cost-benefit-analysis",
        permanent: true
      },
      {
        source: "/blog/project-management/persional-vision-mission-statement-how-do-you-build-them",
        destination: "/blog/project-management/personal-vision-mission-statement-how-do-you-build-them",
        permanent: true
      },
      {
        source: "/blog/project-management/project-management-decoded--from-certifications-to-careers",
        destination: "/blog/project-management/project-management-decoded-from-certifications-to-careers",
        permanent: true
      },
      {
        source:"/pmi-acp-certification-training/live",
        destination: "/pmi-acp-certification-training/live",
        permanent: true
      },
      {
        source: "/prince2-practitioner-online-self-learning",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/certified-ethical-hacker-training-instructor-led",
        destination: "/opencampus/ethical-hacking/what-is-hacking",
        permanent: true
      },
      {
        source: "/fundamentals-of-java-programming-training-course",
        destination: "/data-science-and-programming/fundamentals-of-java-programming-training-course",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/atlanta",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/ruby-on-rails-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/project-schedule-management-basics",
        destination: "/pmp-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/jacksonville",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/washington-dc",
        destination: "/lean-six-sigma-green-belt-training-instructor-led/washington-dc",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/atlanta",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/internet-of-things-101",
        destination: "/internet-of-things-iot-101-certification-training-course",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/pune",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-practitioner-training-instructor-led/london",
        destination: "/prince2-foundation-training-instructor-led/london",
        permanent: true
      },
      {
        source: "/cyber-security-attacks",
        destination: "/cyber-security/attacks",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/chennai",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/lean-six-sigma-green-belt-training-instructor-led/san-diego",
        destination: "/lean-six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/raleigh",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/manila",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/cisa-certified-information-systems-auditor-training-instructor-led",
        destination: "/cisa-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/data-science-with-python-training-course",
        destination: "/data-science-program",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-online-self-learning",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/bangalore",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-yellow-belt-certification-training-course/new-york",
        destination: "/six-sigma-yellow-belt-certification-training-course",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/minneapolis",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/comptia-a-plus-220-902-training-course",
        destination: "/comptia-a-plus-certification-training",
        permanent: true
      },
      {
        source: "/microsoft-70-463-implementing-a-data-warehouse-with-sql-server-2012-training-course",
        destination: "/data-science-and-programming/microsoft-70-463-implementing-a-data-warehouse-with-sql-server-2012-training-course",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/singapore",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/pmp-classroom",
        destination: "/pmp-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-practitioner-certification-training-and-certification-exam",
        destination: "/prince2-practitioner-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-practitioner-training-instructor-led/bangalore",
        destination: "/prince2-practitioner-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/chicago",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-practitioner-training-instructor-led/hyderabad",
        destination: "/prince2-foundation-training-instructor-led/hyderabad",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/hyderabad",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/data-visualization-with-python-and-matplotlib-certification-training-course",
        destination: "/data-science",
        permanent: true
      },
      {
        source: "/pmp-training-online-self-learning",
        destination: "/pmp-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/jacksonville",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-spark-training-course",
        destination: "/data-science-program",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/new-york",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/service-management-certification-training-course",
        destination: "/it-service-management",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/bangalore",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/full-stack-development-masters-program",
        destination: "/web-development-career-program",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/philadelphia",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-and-practitioner-training-combo/houston",
        destination: "/prince2-foundation-and-practitioner-training-combo",
        permanent: true
      },
      {
        source: "/prince2-foundation-and-practitioner-training-combo/chicago",
        destination: "/prince2-foundation-and-practitioner-training-combo",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/washington-dc",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/charlotte",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/denver",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/hong-kong",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/jakarta",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/aws-training",
        destination: "/aws-certfied-solutions-architect-associate",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/miami",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/houston",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/pmi-acp-training-instructor-led",
        destination: "/pmi-acp-certification-training",
        permanent: true
      },
      {
        source: "/prince2-practitioner-training-instructor-led/philadelphia",
        destination: "/prince2-practitioner-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data",
        destination: "/information-technology",
        permanent: true
      },
      {
        source: "/itil-foundation-training-instructor-led/hong-kong",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/dubai",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/hyderabad",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/itil-foundation-training-instructor-led/abu-dhabi",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/washington-dc",
        destination: "/lean-six-sigma-black-belt-training-instructor-led/washington-dc",
        permanent: true
      },
      {
        source: "/lean-six-sigma-green-belt-training-instructor-led/minneapolis",
        destination: "/lean-six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/c-programming-language-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-online-self-learning",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/abu-dhabi",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/san-diego",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/minneapolis",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-and-black-belt-training-combo/washington-dc",
        destination: "/lean-six-sigma-green-and-black-belt-training-combo/washington-dc",
        permanent: true
      },
      {
        source: "/tableau-online-self-learning-course",
        destination: "/tableau-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/hong-kong",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/bangalore",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/dubai",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/internet-of-things-iot-101-certification-training-course",
        destination: "/professional-skills/internet-of-things-iot-101-certification-training-course",
        permanent: true
      },
      {
        source: "/six-sigma-green-and-black-belt-training-combo/mumbai",
        destination: "/six-sigma-green-and-black-belt-training-combo",
        permanent: true
      },
      {
        source: "/prince2-practitioner-training-instructor-led/sydney",
        destination: "/prince2-foundation-training-instructor-led/sydney",
        permanent: true
      },
      {
        source: "/itil-intermediate-service-transition-training-instructor-led",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/atlanta",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/pmi-acp-training-online-self-learning",
        destination: "/pmi-acp-training-instructor-led",
        permanent: true
      },
      {
        source: "/aws-certfied-solutions-architect-associate",
        destination: "/aws-certified-solutions-architect-associate",
        permanent: true
      },
      {
        source: "/ccna-routing-switching-certification-training-course",
        destination: "/professional-skills/ccna-routing-switching-certification-training-course",
        permanent: true
      },
      {
        source: "/java-script-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/service-management-online-training",
        destination: "/it-service-management",
        permanent: true
      },
      {
        source: "/programming",
        destination: "/software-development",
        permanent: true
      },
      {
        source: "/prince2-practitioner-training-instructor-led/boston",
        destination: "/prince2-practitioner-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/chicago",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/perl-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/boston",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-yellow-belt-certification-training-course/chicago",
        destination: "/six-sigma-yellow-belt-certification-training-course",
        permanent: true
      },
      {
        source: "/pmi-acp-training-instructor-led/miami",
        destination: "/pmi-acp-training-instructor-led",
        permanent: true
      },
      {
        source: "/microsoft-70-461-querying-sql-server-2012-training-course",
        destination: "/data-science-and-programming/microsoft-70-461-querying-sql-server-2012-training-course",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/dallas",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/los-angeles",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/los-angeles",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/jakarta",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/houston",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/social-media-marketing-training-course",
        destination: "/data-science-and-programming/social-media-marketing-training-course",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led/dallas",
        destination: "/big-data-hadoop-developer-training-instructor-led",
        permanent: true
      },
      {
        source: "/minitab-online-training",
        destination: "/minitab-certification-training-course",
        permanent: true
      },
      {
        source: "/ms-excel-2013-basic-training-instructor-led",
        destination: "/ms-excel-2013-advanced-training-instructor-led",
        permanent: true
      },
      {
        source: "/mysql-database-administrator-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/charlotte",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/jeddah",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/kuala-lumpur",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/codelabs",
        destination: "https://codelabs.greycampus.com/",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab",
        destination: "https://codelabs.greycampus.com/python/python-lab",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab",
        permanent: true
      },
      {
        source: "/codelabs/php/introduction",
        destination: "https://codelabs.greycampus.com/php/introduction",
        permanent: true
      },
      {
        source: "/codelabs/ruby/introduction",
        destination: "https://codelabs.greycampus.com/ruby/introduction",
        permanent: true
      },
      {
        source: "/codelabs/codelabs",
        destination: "https://codelabs.greycampus.com/codelabs",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/natural",
        destination: "https://codelabs.greycampus.com/php/php-lab/natural",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/session-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/session-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/exception-handling-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/exception-handling-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/exception-handling-example-1",
        destination: "https://codelabs.greycampus.com/php/php-lab/exception-handling-example-1",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/type-casting-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/type-casting-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/type-casting-example-1",
        destination: "https://codelabs.greycampus.com/php/php-lab/type-casting-example-1",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/datatypes-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/datatypes-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/datatypes-example-0",
        destination: "https://codelabs.greycampus.com/php/php-lab/datatypes-example-0",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/datatypes-example-1",
        destination: "https://codelabs.greycampus.com/php/php-lab/datatypes-example-1",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/file-handling-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/file-handling-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/file-handling-example-1",
        destination: "https://codelabs.greycampus.com/php/php-lab/file-handling-example-1",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/file-handling-example-2",
        destination: "https://codelabs.greycampus.com/php/php-lab/file-handling-example-2",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/file-handling-example-3",
        destination: "https://codelabs.greycampus.com/php/php-lab/file-handling-example-3",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/oops-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/oops-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/oops-example-0",
        destination: "https://codelabs.greycampus.com/php/php-lab/oops-example-0",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/oops-example-1",
        destination: "https://codelabs.greycampus.com/php/php-lab/oops-example-1",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/oops-example-3",
        destination: "https://codelabs.greycampus.com/php/php-lab/oops-example-3",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/regular-expression-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/regular-expression-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/regular-expression-example-1",
        destination: "https://codelabs.greycampus.com/php/php-lab/regular-expression-example-1",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/regular-expression-example-2",
        destination: "https://codelabs.greycampus.com/php/php-lab/regular-expression-example-2",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/regular-expression-example-3",
        destination: "https://codelabs.greycampus.com/php/php-lab/regular-expression-example-3",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/decision-making-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/decision-making-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/decision-making-example-0",
        destination: "https://codelabs.greycampus.com/php/php-lab/decision-making-example-0",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/decision-making-example-1",
        destination: "https://codelabs.greycampus.com/php/php-lab/decision-making-example-1",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/decision-making-example-3",
        destination: "https://codelabs.greycampus.com/php/php-lab/decision-making-example-3",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/decision-making-example-4",
        destination: "https://codelabs.greycampus.com/php/php-lab/decision-making-example-4",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/functions-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/functions-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/functions-example-0",
        destination: "https://codelabs.greycampus.com/php/php-lab/functions-example-0",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/functions-example-1",
        destination: "https://codelabs.greycampus.com/php/php-lab/functions-example-1",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/functions-example-3",
        destination: "https://codelabs.greycampus.com/php/php-lab/functions-example-3",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/functions-example-4",
        destination: "https://codelabs.greycampus.com/php/php-lab/functions-example-4",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/loops-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/loops-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/loops-example-0",
        destination: "https://codelabs.greycampus.com/php/php-lab/loops-example-0",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/loops-example-2",
        destination: "https://codelabs.greycampus.com/php/php-lab/loops-example-2",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/loops-example-3",
        destination: "https://codelabs.greycampus.com/php/php-lab/loops-example-3",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/functional-parameters-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/functional-parameters-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/global-variables-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/global-variables-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/local-variables-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/local-variables-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/static-variables-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/static-variables-example",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/using-global-variables-in-php",
        destination: "https://codelabs.greycampus.com/php/php-lab/using-global-variables-in-php",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab/variables-example",
        destination: "https://codelabs.greycampus.com/php/php-lab/variables-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/arrays-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/arrays-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/hashes-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/hashes-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/literals-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/literals-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/quantifiers-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/quantifiers-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/else-if-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/else-if-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/iterator-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/iterator-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/oops-example-3d4fca20-49de-4688-9c7e-6b29b2648078",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/oops-example-3d4fca20-49de-4688-9c7e-6b29b2648078",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/complex-exception-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/complex-exception-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/zero-exception-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/zero-exception-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/global-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/global-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/local-example",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/local-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab/helloworld",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/helloworld",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/arguments-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/arguments-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/class-and-instances-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/class-and-instances-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/defining-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/defining-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/dictionary-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/dictionary-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/elseif-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/elseif-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/exception-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/exception-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/findall-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/findall-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/global-and-local-variables-example1",
        destination: "https://codelabs.greycampus.com/python/python-lab/global-and-local-variables-example1",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/global-and-local-variables-example2",
        destination: "https://codelabs.greycampus.com/python/python-lab/global-and-local-variables-example2",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/inheritance-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/inheritance-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/intro-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/intro-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/iterating-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/iterating-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/lists-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/lists-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/nestedif-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/nestedif-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/raising-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/raising-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/sentiment-analysis-using-tweepy-and-textblob",
        destination: "https://codelabs.greycampus.com/python/python-lab/sentiment-analysis-using-tweepy-and-textblob",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/sub-function-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/sub-function-example",
        permanent: true
      },
      {
        source: "/codelabs/python/python-lab/while-example",
        destination: "https://codelabs.greycampus.com/python/python-lab/while-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/arrays-example-1",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/arrays-example-1",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/calling-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/calling-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/for-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/for-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/global-example-0",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/global-example-0",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/if-else-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/if-else-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/if-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/if-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/local-example-0",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/local-example-0",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/object-constructor-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/object-constructor-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/objects-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/objects-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/oops-example1",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/oops-example1",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/params-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/params-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/replace-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/replace-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/string-parse-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/string-parse-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/throw-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/throw-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/try-catch-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/try-catch-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/types-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/types-example",
        permanent: true
      },
      {
        source: "/codelabs/javascript/javascript-lab/using-string-methods-example",
        destination: "https://codelabs.greycampus.com/javascript/javascript-lab/using-string-methods-example",
        permanent: true
      },
      {
        source: "/codelabs/ruby/installation",
        destination: "https://codelabs.greycampus.com/ruby/installation",
        permanent: true
      },
      {
        source: "/codelabs/ruby/variables",
        destination: "https://codelabs.greycampus.com/ruby/variables",
        permanent: true
      },
      {
        source: "/codelabs/ruby/exceptions",
        destination: "https://codelabs.greycampus.com/ruby/exceptions",
        permanent: true
      },
      {
        source: "/codelabs/ruby/arrays",
        destination: "https://codelabs.greycampus.com/ruby/arrays",
        permanent: true
      },
      {
        source: "/codelabs/ruby/classes",
        destination: "https://codelabs.greycampus.com/ruby/classes",
        permanent: true
      },
      {
        source: "/codelabs/ruby/datatypes",
        destination: "https://codelabs.greycampus.com/ruby/datatypes",
        permanent: true
      },
      {
        source: "/codelabs/ruby/decision-making",
        destination: "https://codelabs.greycampus.com/ruby/decision-making",
        permanent: true
      },
      {
        source: "/codelabs/ruby/hashes",
        destination: "https://codelabs.greycampus.com/ruby/hashes",
        permanent: true
      },
      {
        source: "/codelabs/ruby/iterators",
        destination: "https://codelabs.greycampus.com/ruby/iterators",
        permanent: true
      },
      {
        source: "/codelabs/ruby/operators",
        destination: "https://codelabs.greycampus.com/ruby/operators",
        permanent: true
      },
      {
        source: "/codelabs/ruby/regular-expressions",
        destination: "https://codelabs.greycampus.com/ruby/regular-expressions",
        permanent: true
      },
      {
        source: "/codelabs/ruby/blocks",
        destination: "https://codelabs.greycampus.com/ruby/blocks",
        permanent: true
      },
      {
        source: "/codelabs/ruby/files",
        destination: "https://codelabs.greycampus.com/ruby/files",
        permanent: true
      },
      {
        source: "/codelabs/ruby/methods",
        destination: "https://codelabs.greycampus.com/ruby/methods",
        permanent: true
      },
      {
        source: "/codelabs/ruby/modules",
        destination: "https://codelabs.greycampus.com/ruby/modules",
        permanent: true
      },
      {
        source: "/codelabs/php/variables",
        destination: "https://codelabs.greycampus.com/php/variables",
        permanent: true
      },
      {
        source: "/codelabs/php/decision-making",
        destination: "https://codelabs.greycampus.com/php/decision-making",
        permanent: true
      },
      {
        source: "/codelabs/php/functions",
        destination: "https://codelabs.greycampus.com/php/functions",
        permanent: true
      },
      {
        source: "/codelabs/php/loops",
        destination: "https://codelabs.greycampus.com/php/loops",
        permanent: true
      },
      {
        source: "/codelabs/php/OOPS",
        destination: "https://codelabs.greycampus.com/php/OOPS",
        permanent: true
      },
      {
        source: "/codelabs/php/file-handling",
        destination: "https://codelabs.greycampus.com/php/file-handling",
        permanent: true
      },
      {
        source: "/codelabs/php/regular-expression",
        destination: "https://codelabs.greycampus.com/php/regular-expression",
        permanent: true
      },
      {
        source: "/codelabs/php/datatypes",
        destination: "https://codelabs.greycampus.com/php/datatypes",
        permanent: true
      },
      {
        source: "/codelabs/php/exception-handling",
        destination: "https://codelabs.greycampus.com/php/exception-handling",
        permanent: true
      },
      {
        source: "/codelabs/php/type-casting",
        destination: "https://codelabs.greycampus.com/php/type-casting",
        permanent: true
      },
      {
        source: "/codelabs/php/serialization",
        destination: "https://codelabs.greycampus.com/php/serialization",
        permanent: true
      },
      {
        source: "/codelabs/php/session",
        destination: "https://codelabs.greycampus.com/php/session",
        permanent: true
      },
      {
        source: "/codelabs/php/arrays",
        destination: "https://codelabs.greycampus.com/php/arrays",
        permanent: true
      },
      {
        source: "/codelabs/php/installation-process",
        destination: "https://codelabs.greycampus.com/php/installation-process",
        permanent: true
      },
      {
        source: "/codelabs/php/operators",
        destination: "https://codelabs.greycampus.com/php/operators",
        permanent: true
      },
      {
        source: "/codelabs/php/php-lab",
        destination: "https://codelabs.greycampus.com/php/php-lab/",
        permanent: true
      },
      {
        source: "/codelabs/ruby/ruby-lab",
        destination: "https://codelabs.greycampus.com/ruby/ruby-lab/",
        permanent: true
      },
      {
        source:"/lean-six-sigma-black-belt-training-instructor-led/live",
        destination: "/lean-six-sigma-black-belt-training-instructor-led/live",
        permanent: true
      },
      {
        source: "/comptia-a-plus-220-901-training-course",
        destination: "/comptia-a-plus-certification-training",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-online-self-learning",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/miami",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/django-unchained-with-python-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/java-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/itil-intermediate-service-operations-certification-training-course",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/certified-digital-marketing-professional",
        destination: "/",
        permanent: true
      },
      {
        source: "/deep-learning-with-tensorflow-training-course",
        destination: "/data-science-program",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/mumbai",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/pune",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-training-instructor-led/chicago",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/minneapolis",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/natural-language-processing-training-course",
        destination: "/data-science-program",
        permanent: true
      },
      {
        source: "/itil-foundation-certification-training-and-certification-exam",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/capm-training-online-self-learning",
        destination: "/capm-training-instructor-led",
        permanent: true
      },
      {
        source: "/machine-learning-training-course",
        destination: "/data-science-program",
        permanent: true
      },
      {
        source: "/itil-foundation-training-online-self-learning",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/itil-v3-foundation-training-certification-course",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/data-science-guide/data-science-job-surge-during-COVID19",
        destination: "/data-science-certifications/data-science-job-surge-during-COVID19",
        permanent: true
      },
      {
        source: "/itil-foundation-classroom",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/php-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/phoenix",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/psm-training-and-certification-course",
        destination: "/project-management",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/jeddah",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-training-online-self-learning",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-yellow-belt-certification-training-course/washington-dc",
        destination: "/six-sigma-yellow-belt-certification-training-course",
        permanent: true
      },
      {
        source: "/blog/data-science-and-ai/10-machine-learning-models-to-know-for-beginners",
        destination: "/blog/data-science/10-machine-learning-models-to-know-for-beginners",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/riyadh",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-training-instructor-led/pune",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/philadelphia",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/singapore",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-certification-training-and-certification-exam",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-yellow-belt-training-online-self-learning",
        destination: "/six-sigma-yellow-belt-certification-training-course",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/miami",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/dubai",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/charlotte",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/mysql-database-for-beginners-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/mumbai",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/blog/project-management/types-of-guys-you-meet-in-different-projects",
        destination: "/blog/project-management/types-of-people-you-meet-in-different-projects",
        permanent: true
      },
      {
        source: "/blog/pmpr-exam-prep-tips-on-the-5-process-groups",
        destination: "/blog/project-management/pmpr-exam-prep-tips-on-the-5-process-groups",
        permanent: true
      },
      {
        source: "/online-marketing-essentials",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/lean-six-sigma-green-belt-training-online-self-learning",
        destination: "/lean-six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-training-instructor-led/new-delhi",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/lean-six-sigma-black-belt-training-online-self-learning",
        destination: "/lean-six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/microsoft-visual-basic-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/microsoft-project-and-pmp-training-combo",
        destination: "/pmp-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-and-practitioner-training-combo/jakarta",
        destination: "/prince2-foundation-and-practitioner-training-combo",
        permanent: true
      },
      {
        source: "/blog/data-science-and-ai/machine-learning-and-cloud-computing",
        destination: "/blog/data-science/machine-learning-and-cloud-computing",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/houston",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/data-science-with-r-training-course",
        destination: "/data-science-program",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/boston",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/denver",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/seattle",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/san-diego",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/jacksonville",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/itil-intermediate-csi-training-instructor-led",
        destination: "/itil-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/elearning",
        destination: "/offers",
        permanent: true
      },
      {
        source: "/android-application-development-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/los-angeles",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/blog/marketing-and-people-skills/how-cutting-edge-ai-is-helping-scientists-tackle-covid-19",
        destination: "/blog/others/how-cutting-edge-ai-is-helping-scientists-tackle-covid-19",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/portland",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/blog/data-science-and-ai/ai-and-ml-how-are-they-related",
        destination: "/blog/data-science/ai-and-ml-how-are-they-related",
        permanent: true
      },
      {
        source: "/online-marketing-complete",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/new-york",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/certificate-program-in-data-science",
        destination: "/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/six-sigma-green-belt-training-instructor-led/san-francisco",
        destination: "/six-sigma-green-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/phoenix",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/html-training-instructor-led",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/lean-six-sigma-black-belt-training-instructor-led/minneapolis",
        destination: "/lean-six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/seattle",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-black-belt-training-instructor-led/san-francisco",
        destination: "/six-sigma-black-belt-training-instructor-led",
        permanent: true
      },
      {
        source:"/lean-six-sigma-black-belt-training-instructor-led/live-online",
        destination: "/lean-six-sigma-black-belt-training-instructor-led/live-online",
        permanent: true
      },
      {
        source: "/blog/data-science",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/-temporary-slug-696f460f-ec14-4c3a-b540-02d3cb98adb0",
        destination: "/",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/atlanta",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/bangalore",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/chennai",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/chicago",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/hyderabad",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/mumbai",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/new-delhi",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/csm-training-instructor-led/pune",
        destination: "/csm-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-and-practitioner-training-combo/hyderabad",
        destination: "/prince2-foundation-and-practitioner-training-combo",
        permanent: true
      },
      {
        source: "/prince2-foundation-and-practitioner-training-combo/london",
        destination: "/prince2-foundation-and-practitioner-training-combo",
        permanent: true
      },
      {
        source: "/prince2-foundation-and-practitioner-training-combo/sydney",
        destination: "/prince2-foundation-and-practitioner-training-combo",
        permanent: true
      },
      {
        source: "/prince2-foundation-training-instructor-led/hyderabad",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-training-instructor-led/london",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-training-instructor-led/mumbai",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/prince2-foundation-training-instructor-led/sydney",
        destination: "/prince2-foundation-training-instructor-led",
        permanent: true
      },
      {
        source: "/six-sigma-green-and-black-belt-training-combo",
        destination: "/lean-six-sigma-green-and-black-belt-training-combo",
        permanent: true
      },
      {
        source: "/six-sigma-green-and-black-belt-training-combo/hyderabad",
        destination: "/lean-six-sigma-green-and-black-belt-training-combo",
        permanent: true
      },
      {
        source: "/six-sigma-green-and-black-belt-training-combo/san-francisco",
        destination: "/lean-six-sigma-green-and-black-belt-training-combo",
        permanent: true
      },
      {
        source: "/six-sigma-green-and-black-belt-training-combo/singapore",
        destination: "/lean-six-sigma-green-and-black-belt-training-combo",
        permanent: true
      },
      {
        source: "/blog/project-management/different-types-of-contract-&amp;-project-management",
        destination: "/blog/project-management/different-types-of-contract-&-project-management",
        permanent: true
      },
      {
        source:"/codelabs/javascript/cookies",
        destination: "https://codelabs.greycampus.com/javascript/cookies",
        permanent: true
      },
      {
        source: "/cissp-certification-training-instructor-led/abu-dhabi",
        destination: "/cissp-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/cissp-certification-training-instructor-led/atlanta",
        destination: "/cissp-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/cissp-certification-training-instructor-led/dubai",
        destination: "/cissp-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/cissp-certification-training-instructor-led/hong-kong",
        destination: "/cissp-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/cissp-certification-training-instructor-led/riyadh",
        destination: "/cissp-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/cissp-certification-training-instructor-led/singapore",
        destination: "/cissp-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/cissp-certification-training-instructor-led/sydney",
        destination: "/cissp-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/cissp-certification-training-instructor-led/toronto",
        destination: "/cissp-certification-training-instructor-led",
        permanent: true
      },
      {
        source: "/feedback",
        destination: "http://www.greycampus.com/feedback",
        permanent: true
      },
      {
        source: "/thankyou",
        destination: "http://www.odinschool.com/thankyou",
        permanent: true
      },
      {
        source: "/application",
        destination: "http://www.odinschool.com/application",
        permanent: true
      },
      {
        source:"/professional-skills",
        destination: "https://www.greycampus.com/quality-management",
        permanent: true
      },
      {
        source: "/pmp-training",
        destination: "/pmp-training-instructor-led",
        permanent: true
      },
      {
        source: "/bootcamp-application",
        destination: "http://www.odinschool.com/bootcamp-application",
        permanent: true
      },
      {
        source: "/pmp-demo-session",
        destination: "http://www.greycampus.com/pmp-demo-session",
        permanent: true
      },
      {
        source: "/online-datascience-bootcamp",
        destination: "http://www.odinschool.com/online-datascience-bootcamp",
        permanent: true
      },
      {
        source: "/scholarships",
        destination: "/college-scholarships",
        permanent: true
      },
      {
        source: "/data-science-bootcamp",
        destination: "/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/chat",
        destination: "http://www.greycampus.com/chat",
        permanent: true
      },
      {
        source: "/datascience-bootcamp",
        destination: "http://www.greycampus.com/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/academy/platform",
        destination: "https://learn.odinschool.com/s/store/courses/description/academy",
        permanent: true
      },
      {
        source:"/data-science-program",
        destination: "https://www.greycampus.com/datascience-bootcamp",
        permanent: true
      },
      {
        source:"/post-graduate-program-in-data-science-pgp-ds",
        destination: "https://www.greycampus.com/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/pmp-training-instructor-led",
        destination: "/pmp-training-instructor-led-old",
        permanent: true
      },
      {
        source: "/uni-con",
        destination: "http://www.odinschool.com/uni-con",
        permanent: true
      },
      {
        source:"/opencampus/ethical-hacking",
        destination: "https://www.greycampus.com/opencampus/ethical-hacking/what-is-hacking",
        permanent: true
      },
      {
        source:"/scrum-master-training-instructor-led",
        destination: "https://www.greycampus.com/agile-and-scrum-training-instructor-led",
        permanent: true
      },
      {
        source: "/-temporary-slug-49286c3a-6103-41e8-9879-9eb887660cd2",
        destination: "/",
        permanent: true
      },
      {
        source:"/offers-0",
        destination: "http://greycampus.co/offers",
        permanent: true
      },
      {
        source: "/datascience-bootcamp-download-brochure",
        destination: "http://www.odinschool.com/datascience-bootcamp-download-brochure",
        permanent: true
      },
      {
        source: "/for-corporate",
        destination: "/hire-odin-grades",
        permanent: true
      },
      {
        source:"/blog/information-security/owasp-top-vulnerabilities-in-web-application",
        destination: "https://www.greycampus.com/blog/information-security/owasp-top-vulnerabilities-in-web-applications",
        permanent: true
      },
      {
        source:"/blog/project-management/different-types-of-contract-&-project-management",
        destination: "https://www.greycampus.com/blog/project-management/different-types-of-contract-project-management",
        permanent: true
      },
      {
        source: "/hire-odin-grades",
        destination: "/hire-odin-grads",
        permanent: true
      },
      {
        source: "/hire-odin-grades",
        destination: "/hire-odin-grads",
        permanent: true
      },
      {
        source:"/sap-hcm-training-course",
        destination: "/sap-human-capital-management-training-instructor-led",
        permanent: true
      },
      {
        source:"/sap-plm-training-course",
        destination: "/sap-product-lifecycle-management-training-instructor-led",
        permanent: true
      },
      {
        source:"/sap-ewm-training-course",
        destination: "/sap-extended-warehouse-management-training-instructor-led",
        permanent: true
      },
      {
        source:"/sap-pm-training-course",
        destination: "/sap-plant-maintenance-training-instructor-led",
        permanent: true
      },
      {
        source:"/sap-abap-training-course",
        destination: "/https/uat.greycampus.com/sap-abap-training-instructor-led",
        permanent: true
      },
      {
        source:"/sap-wm-training-course",
        destination: "/https/uat.greycampus.com/sap-warehouse-management-training-instructor-led",
        permanent: true
      },
      {
        source:"/sap-sales-distribution-training",
        destination: "/sap-sales-and-distribution-training-instructor-led",
        permanent: true
      },
      {
        source:"/https/uat.greycampus.com/sap-abap-training-instructor-led",
        destination: "/sap-abap-training-instructor-led",
        permanent: true
      },
      {
        source:"/https/uat.greycampus.com/sap-warehouse-management-training-instructor-led",
        destination: "/sap-warehouse-management-training-instructor-led",
        permanent: true
      },
      {
        source:"/professional-skills/gns3-certification-training-course",
        destination: "/gns3-certification-training-course",
        permanent: true
      },
      {
        source:"/gns3-certification-training-course",
        destination: "/gns3-graphical-network-simulator-3-training",
        permanent: true
      },
      {
        source:"/sap-human-capital-management-training-instructor-led-1",
        destination: "/aws-certified-sysops-administrator-training-instructor-led",
        permanent: true
      },
      {
        source:"/cloud-and-security/cyber-security-certification-training-course",
        destination: "/cyber-security-certification-training-course",
        permanent: true
      },
      {
        source: "/full-stack-java-program",
        destination: "/full-stack-developer-bootcamp",
        permanent: true
      },
      {
        source: "/corder/order-details",
        destination: "/order/order-details",
        permanent: true
      },
      {
        source: "/-ab-variant-e2c6f884-aba5-4634-9a7e-76fb3272460f",
        destination: "/academy",
        permanent: true
      },
      {
        source: "/online-datascience-bootcamp",
        destination: "/webinar-registernow",
        permanent: true
      },
      {
        source: "/webinar",
        destination: "/webinar-registernow",
        permanent: true
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms-of-use",
        permanent: true
      },
      {
        source: "/pmp-certification-training-live-online",
        destination: "/pmp-certification-training/live-online",
        permanent: true
      },
      {
        source: "/pmp-certification-training/live-online",
        destination: "/pmp-training-instructor-led/live-online",
        permanent: true
      },
      {
        source: "/pmp-training-instructor-led/live-online",
        destination: "http://www.greycampus.com/pmp-training-instructor-led/live-online",
        permanent: true
      },
      {
        source: "/-temporary-slug-27428cac-eca8-4166-b68a-2caa6ed51ce8",
        destination: "/full-stack-application",
        permanent: true
      },
      {
        source: "/full-stack-application",
        destination: "/full-stack-java-developer-bootcamp-application",
        permanent: true
      },
      {
        source: "/-temporary-slug-947c2b5f-6958-4c9c-a5eb-04a9a011a491",
        destination: "/full-stack-interview-scheduler",
        permanent: true
      },
      {
        source: "/full-stack-java-developer-bootcamp-application",
        destination: "http://www.odinschool.com/full-stack-java-developer-bootcamp-application",
        permanent: true
      },
      {
        source: "/full-stack-java-developer-bootcamp-application",
        destination: "/full-stack-java-developer-bootcamp/application",
        permanent: true
      },
      {
        source: "/schedule-interview",
        destination: "http://www.odinschool.com/schedule-interview",
        permanent: true
      },
      {
        source: "/our-bootcamp",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/full-stack-interview-scheduler",
        destination: "/schedule-interview",
        permanent: true
      },
      {
        source: "/os-thank-you-2",
        destination: "/fs-thank-you-not-eligible",
        permanent: true
      },
      {
        source: "/fs-thank-you-eligible",
        destination: "http://www.odinschool.com/fs-thank-you-eligible",
        permanent: true
      },
      {
        source: "/fs-thank-you-not-eligible",
        destination: "http://www.odinschool.com/fs-thank-you-not-eligible",
        permanent: true
      },
      {
        source: "/fs-thank-you-not-eligible-0",
        destination: "/fs-thank-you-eligible",
        permanent: true
      },
      {
        source: "/thankyou-1",
        destination: "/ds-thankyou",
        permanent: true
      },
      {
        source: "/full-stack-java-developer-bootcamp/application-0",
        destination: "/datascience-application",
        permanent: true
      },
      {
        source: "/ds-thank-you-not-eligible-0",
        destination: "/ds-thank-you-not-eligible",
        permanent: true
      },
      {
        source: "/datascience-application",
        destination: "http://www.odinschool.com/datascience-application",
        permanent: true
      },
      {
        source: "/fs-workflow-eligibility",
        destination: "http://www.odinschool.com/fs-workflow-eligibility",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/walk-ins",
        destination: "http://20029733.hs-sites.com/bootcamp/walk-ins",
        permanent: true
      },
      {
        source: "/fs-workflow-eligibility",
        destination: "/fs-thankyou-not-eligible",
        permanent: true
      },
      {
        source: "/ds-thank-you-eligible",
        destination: "/ds-thank-you",
        permanent: true
      },
      {
        source: "/fs-entrance-exam",
        destination: "http://www.odinschool.com/fs-entrance-exam",
        permanent: true
      },
      {
        source: "/fs-thank-you-eligible",
        destination: "/full-stack-java-developer-bootcamp/application/thank-you",
        permanent: true
      },
      {
        source: "/fs-entrance-exam",
        destination: "/full-stack-java-developer-bootcamp/scholarship/application",
        permanent: true
      },
      {
        source: "/fs-thank-you-not-eligible",
        destination: "/full-stack-java-developer-bootcamp/application/thank-you/not-eligible",
        permanent: true
      },
      {
        source: "/ds-thank-you",
        destination: "/datascience-bootcamp/application/thank-you/eligible",
        permanent: true
      },
      {
        source: "/ds-thank-you-eligible",
        destination: "/datascience-bootcamp/application/thank-you/eligible",
        permanent: true
      },
      {
        source: "/ds-thank-you-not-eligible",
        destination: "/datascience-bootcamp/application/thank-you/not-eligible",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/scholarship/application/thank-you-0",
        destination: "/order/order-details/thank-you",
        permanent: true
      },
     
      {
        source:"/-temporary-slug-c72f55b4-5ee0-4977-a8df-dd00c65d3cba",
        destination: "http://20029733.hs-sites.com/blog",
        permanent: true
      },
      {
        source: "/application",
        destination: "/bootcamp/application",
        permanent: true
      },
      {
        source: "/type-form-test-0",
        destination: "/ds-calculator",
        permanent: true
      },
      {
        source: "/bootcamp",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/bootcamps",
        destination: "/bootcamps-drafted",
        permanent: true
      },
      {
        source: "/ds-calculator",
        destination: "/salary-calculator",
        permanent: true
      },
      {
        source: "/full-stack-java-developer/aptitude-test/thank-you",
        destination: "/job-fair/test-1/thank-you",
        permanent: true
      },
      {
        source: "/job-fair-company",
        destination: "http://www.odinschool.com/job-fair-company",
        permanent: true
      },
      {
        source: "/-ab-variant-c9251222-36ff-40a2-9e06-93eec6f3e485",
        destination: "/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/job-fair",
        destination: "http://www.odinschool.com/job-fair",
        permanent: true
      },
      {
        source: "/bootcamps/hyderabad",
        destination: "/test-bootcamps/hyderabad",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/booking",
        destination: "/datascience-bootcamp/2-days-pass",
        permanent: true
      },
      {
        source: "/webinar-listing",
        destination: "/webinars",
        permanent: true
      },
      {
        source: "/webinars",
        destination: "http://www.odinschool.com/webinars",
        permanent: true
      },
      {
        source: "/job-fair/mediamint-technologies",
        destination: "/job-fair/ctrl-s",
        permanent: true
      },
      {
        source: "/scholarship",
        destination: "http://www.odinschool.com/scholarship",
        permanent: true
      },
      {
        source: "/open-scholarship/application",
        destination: "https://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source: "/scholarship",
        destination: "http://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/job-fair/face-academcy",
        destination: "/job-fair/face-academy",
        permanent: true
      },
      {
        source: "/job-fair/test-1/thank-you",
        destination: "/job-fair/resume-video",
        permanent: true
      },
      {
        source: "/job-fair/resume-video",
        destination: "/job-fair/resume-and-video",
        permanent: true
      },
      {
        source:"/angularjs-training-instructor-led",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/cisa-certification-training-instructor-led",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/cyber-security-certification-training-course",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/comptia-a-plus-certification-training",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/comptia-security-plus-certification-training",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/aws-certified-sysops-administrator-training-instructor-led",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/aws-certified-devops-engineer-training-instructor-led",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/computer-vision-training-course",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/aws-certified-solutions-architect-associate",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/azure-architect-expert-training-course",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/selenium-for-software-testing-getting-started",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/hadoop-administrator-training-instructor-led",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source:"/gns3-graphical-network-simulator-3-training",
        destination: "http://www.greycampus.com/enterprise",
        permanent: true
      },
      {
        source: "/webinar-registernow",
        destination: "http://www.odinschool.com/webinars",
        permanent: true
      },
      {
        source:"/datascience-bootcamp",
        destination: "https://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source: "/salary-calculator",
        destination: "/salary-calculator-0",
        permanent: true
      },
      {
        source: "/odin-talk-listing-0",
        destination: "/odin-talk",
        permanent: true
      },
      {
        source:"/data-science-foundation-program",
        destination: "https://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source:"/dasm-preparatory-live-online",
        destination: "/dasm-certification-training",
        permanent: true
      },
      {
        source: "/zerocodehr",
        destination: "http://www.odinschool.com/zerocodehr",
        permanent: true
      },
      {
        source: "/zerocodehr",
        destination: "/jobs-zerocodehr",
        permanent: true
      },
      {
        source: "/jobs-zerocodehr",
        destination: "/jobs/zerocodehr",
        permanent: true
      },
      {
        source: "/job-portal-table",
        destination: "/jobs",
        permanent: true
      },
      {
        source: "/full-stack-java-developer-bootcamp/scholarship",
        destination: "http://www.odinschool.com/full-stack-java-developer-bootcamp",
        permanent: true
      },
      {
        source: "/odin-talk",
        destination: "/odintalk/mukesh-vijay",
        permanent: true
      },
      {
        source: "/odintalk/mukesh-vijay",
        destination: "/odintalk/mukeshvijay",
        permanent: true
      },
      {
        source: "/odintalk/sushanth-goanker",
        destination: "/odintalk/sushanthgoankar",
        permanent: true
      },
      {
        source: "/odintalk/mr-satish-kathirisetti",
        destination: "/odintalk/satish-kathirisetti",
        permanent: true
      },
      {
        source: "/odintalk/anand-narayan-0",
        destination: "/odintalk/kapil-mahajan",
        permanent: true
      },
      {
        source: "/odintalk/sushanthgoankar",
        destination: "/odintalk/sushanthgaonkar",
        permanent: true
      },
      {
        source: "/odin-talk-listing",
        destination: "/odintalk",
        permanent: true
      },
      {
        source: "/odintalk/vikramduggal",
        destination: "http://www.odinschool.com/odintalk/vikramduggal",
        permanent: true
      },
      {
        source: "/odintalk/krishnakumar",
        destination: "http://www.odinschool.com/odintalk/krishnakumar",
        permanent: true
      },
      {
        source: "/odintalk/sushanthgaonkar",
        destination: "http://www.odinschool.com/odintalk/sushanthgaonkar",
        permanent: true
      },
      {
        source: "/odintalk/vishal-jain",
        destination: "http://www.odinschool.com/odintalk/vishal-jain",
        permanent: true
      },
      {
        source: "/odintalk",
        destination: "http://www.odinschool.com/odintalk",
        permanent: true
      },
      {
        source: "/odintalk/sharthakacharjee",
        destination: "http://www.odinschool.com/odintalk/sharthakacharjee",
        permanent: true
      },
      {
        source: "/odintalk/ajay-malgaonkar",
        destination: "http://www.odinschool.com/odintalk/ajay-malgaonkar",
        permanent: true
      },
      {
        source: "/odintalk",
        destination: "/odintalks",
        permanent: true
      },
      {
        source: "/odintalk/shashank-mishra",
        destination: "http://www.odinschool.com/odintalk/shashank-mishra",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/form",
        destination: "/datascience-bootcamp-with-job-assistance",
        permanent: true
      },
      {
        source:"/blog/data-science/10-machine-learning-models-to-know-for-beginners",
        destination: "https://www.odinschool.com/blog/data-science/10-machine-learning-models-to-know-for-beginners",
        permanent: true
      },
      {
        source: "/blog/data-science/beautifulsoup-a-step-by-step-guide-to-data-scraping-with-python",
        destination: "https://www.greycampus.com/blog/data-science/beautifulsoup-a-step-by-step-guide-to-data-scraping-with-python",
        permanent: true
      },
      {
        source:"/blog/data-science/beautifulsoup-a-step-by-step-guide-to-data-scraping-with-python",
        destination: "https://www.odinschool.com/blog/data-science/beautifulsoup-a-step-by-step-guide-to-data-scraping-with-python",
        permanent: true
      },
      {
        source:"/blog/data-science/business-analytics-and-data-science-webinar",
        destination: "https://www.odinschool.com/blog/data-science/business-analytics-and-data-science-webinar",
        permanent: true
      },
      {
        source:"/blog/data-science/ai-and-ml-how-are-they-related",
        destination: "https://www.odinschool.com/blog/data-science/ai-and-ml-how-are-they-related",
        permanent: true
      },
      {
        source:"/blog/data-science/artificial-intelligence-benefits-and-risks",
        destination: "https://www.odinschool.com/blog/data-science/artificial-intelligence-benefits-and-risks",
        permanent: true
      },
      {
        source:"/blog/data-science/data-blending-in-tableau-a-step-by-step-guide",
        destination: "https://www.odinschool.com/blog/data-science/data-blending-in-tableau-a-step-by-step-guide",
        permanent: true
      },
      {
        source:"/blog/data-science/data-science-master-guide-top-tips-to-ace-your-interview-like-a-pro",
        destination: "https://www.odinschool.com/blog/data-science/data-science-master-guide-top-tips-to-ace-your-interview-like-a-pro",
        permanent: true
      },
      {
        source:"/blog/data-science/data-science-vs-computer-science-vs-data-analytics",
        destination: "https://www.odinschool.com/blog/data-science/data-science-vs-computer-science-vs-data-analytics",
        permanent: true
      },
      {
        source:"/blog/data-science/data-visualization-how-bes-to-do-it",
        destination: "https://www.odinschool.com/blog/data-science/data-visualization-how-bes-to-do-it",
        permanent: true
      },
      {
        source:"/blog/data-science/machine-learning-projects-for-all-levels-of-difficulty",
        destination: "https://www.odinschool.com/blog/data-science/machine-learning-projects-for-all-levels-of-difficulty",
        permanent: true
      },
      {
        source:"/blog/data-science/linear-regression-with-python-scikit-learn",
        destination: "https://www.odinschool.com/blog/data-science/linear-regression-with-python-scikit-learn",
        permanent: true
      },
      {
        source:"/blog/data-science/how-to-drive-business-value-with-robotic-process-automation",
        destination: "https://www.odinschool.com/blog/data-science/how-to-drive-business-value-with-robotic-process-automation",
        permanent: true
      },
      {
        source:"/blog/data-science/machine-learning-and-cloud-computing",
        destination: "https://www.odinschool.com/blog/data-science/machine-learning-and-cloud-computing",
        permanent: true
      },
      {
        source:"/blog/data-science/top-algorithms-every-machine-learning-engineer-needs-to-know",
        destination: "https://www.odinschool.com/blog/data-science/top-algorithms-every-machine-learning-engineer-needs-to-know",
        permanent: true
      },
      {
        source:"/blog/data-science/libraries-of-python-for-data-science",
        destination: "https://www.odinschool.com/blog/data-science/libraries-of-python-for-data-science",
        permanent: true
      },
      {
        source:"/blog/data-science/machine-learning-for-dummies",
        destination: "https://www.odinschool.com/blog/data-science/machine-learning-for-dummies",
        permanent: true
      },
      {
        source:"/blog/data-science/machine-learning-for-a-stronger-iot-security-environment",
        destination: "https://www.odinschool.com/blog/data-science/machine-learning-for-a-stronger-iot-security-environment",
        permanent: true
      },
      {
        source:"/blog/data-science/nine-must-have-data-analysis-tools-to-create-dashing-business-reports",
        destination: "https://www.odinschool.com/blog/data-science/nine-must-have-data-analysis-tools-to-create-dashing-business-reports",
        permanent: true
      },
      {
        source:"/blog/data-science/artificial-neural-network-walkthrough",
        destination: "https://www.odinschool.com/blog/data-science/artificial-neural-network-walkthrough",
        permanent: true
      },
      {
        source:"/blog/data-science/data-science-career-guide-2021",
        destination: "https://www.odinschool.com/blog/data-science/data-science-career-guide-2021",
        permanent: true
      },
      {
        source:"/blog/data-science/how-to-become-a-data-scientist-in-2020",
        destination: "https://www.odinschool.com/blog/data-science/how-to-become-a-data-scientist-in-2020",
        permanent: true
      },
      {
        source:"/blog/data-science/sentiment-analysis-on-twitter-tweets-using-python",
        destination: "https://www.odinschool.com/blog/data-science/sentiment-analysis-on-twitter-tweets-using-python",
        permanent: true
      },
      {
        source:"/data-science-certifications",
        destination: "http://www.odinschool.com/data-science-certifications",
        permanent: true
      },
      {
        source:"/data-science-certifications/data-science-job-surge-during-covid19",
        destination: "http://www.odinschool.com/data-science-certifications/data-science-job-surge-during-covid19",
        permanent: true
      },
      {
        source:"/blog/big-data/top-20-questions-asked-during-an-interview-for-a-data-analyst-position",
        destination: "https://www.odinschool.com/blog/big-data/top-20-questions-asked-during-an-interview-for-a-data-analyst-position",
        permanent: true
      },
      {
        source:"/blog/quality-management/types-of-hypothesis-testing",
        destination: "https://www.odinschool.com/blog/quality-management/types-of-hypothesis-testing",
        permanent: true
      },
      {
        source:"/blog/latest-updates/women-in-tech-scholarship",
        destination: "https://www.odinschool.com/blog/latest-updates/women-in-tech-scholarship",
        permanent: true
      },
      {
        source:"/blog/big-data/how-value-of-technology-is-greatly-enhanced-by-big-data-analytics",
        destination: "https://www.odinschool.com/blog/big-data/how-value-of-technology-is-greatly-enhanced-by-big-data-analytics",
        permanent: true
      },
      {
        source:"/blog/it-service-management/how-important-is-itil-for-business-analysts",
        destination: "https://www.odinschool.com/blog/it-service-management/how-important-is-itil-for-business-analysts",
        permanent: true
      },
      {
        source:"/blog/project-management/business-analysts-and-project-managers-a-comparison-of-their-roles-and-responsibilities",
        destination: "https://www.odinschool.com/blog/project-management/business-analysts-and-project-managers-a-comparison-of-their-roles-and-responsibilities",
        permanent: true
      },
      {
        source:"/blog/others/top-21-business-analyst-interview-questions-and-answers",
        destination: "https://www.odinschool.com/blog/others/top-21-business-analyst-interview-questions-and-answers",
        permanent: true
      },
      {
        source:"/blog/big-data/benefits-of-big-data-for-a-better-roi",
        destination: "https://www.odinschool.com/blog/big-data/benefits-of-big-data-for-a-better-roi",
        permanent: true
      },
      {
        source:"/blog/big-data/know-how-data-scientists-analyze-big-data-for-better-results",
        destination: "https://www.odinschool.com/blog/big-data/know-how-data-scientists-analyze-big-data-for-better-results",
        permanent: true
      },
      {
        source:"/blog/others/the-difference-between-a-resume-and-a-cv-curriculum-vitae",
        destination: "https://www.odinschool.com/blog/others/the-difference-between-a-resume-and-a-cv-curriculum-vitae",
        permanent: true
      },
      {
        source:"/blog/emerging-technologies/top-8-trending-technologies-taking-the-world-by-storm",
        destination: "https://www.odinschool.com/blog/emerging-technologies/top-8-trending-technologies-taking-the-world-by-storm",
        permanent: true
      },
      {
        source:"/blog/big-data/top-big-data-skills-to-future-proof-your-career-become-a-data-engineer-now",
        destination: "https://www.odinschool.com/blog/big-data/top-big-data-skills-to-future-proof-your-career-become-a-data-engineer-now",
        permanent: true
      },
      {
        source:"/blog/big-data/the-150-most-influential-people-in-big-data-hadoop",
        destination: "https://www.odinschool.com/blog/big-data/the-150-most-influential-people-in-big-data-hadoop",
        permanent: true
      },
      {
        source:"/blog/big-data/top-10-reasons-why-big-data-analytics-is-the-best-career-move",
        destination: "https://www.odinschool.com/blog/big-data/top-10-reasons-why-big-data-analytics-is-the-best-career-move",
        permanent: true
      },
      {
        source:"/blog/programming/full-stack-developer-guide",
        destination: "https://www.odinschool.com/blog/programming/full-stack-developer-guide",
        permanent: true
      },
      {
        source:"/blog/latest-updates/seven-important-questions-to-ask-yourself-before-accepting-a-new-role",
        destination: "https://www.odinschool.com/blog/latest-updates/seven-important-questions-to-ask-yourself-before-accepting-a-new-role",
        permanent: true
      },
      {
        source:"/blog/big-data/top-10-big-data-interview-questions-you-should-be-prepared-for",
        destination: "https://www.odinschool.com/blog/big-data/top-10-big-data-interview-questions-you-should-be-prepared-for",
        permanent: true
      },
      {
        source:"/blog/others/a-quick-guide-to-nailing-your-job-interview-through-video-conferencing",
        destination: "https://www.odinschool.com/blog/others/a-quick-guide-to-nailing-your-job-interview-through-video-conferencing",
        permanent: true
      },
      {
        source:"/blog/it-service-management/itil-interview-questions",
        destination: "https://www.odinschool.com/blog/it-service-management/itil-interview-questions",
        permanent: true
      },
      {
        source:"/blog/latest-updates/interview-questions-and-answers-informatica-powercenter",
        destination: "https://www.odinschool.com/blog/latest-updates/interview-questions-and-answers-informatica-powercenter",
        permanent: true
      },
      {
        source:"/blog/programming/top-spring-interview-questions-and-answers",
        destination: "https://www.odinschool.com/blog/programming/top-spring-interview-questions-and-answers",
        permanent: true
      },
      {
        source:"/blog/others/good-questions-to-ask-your-interviewer",
        destination: "https://www.odinschool.com/blog/others/good-questions-to-ask-your-interviewer",
        permanent: true
      },
      {
        source:"/blog/programming/top-python-interview-questions-with-answers-for-freshers",
        destination: "https://www.odinschool.com/blog/programming/top-python-interview-questions-with-answers-for-freshers",
        permanent: true
      },
      {
        source:"/blog/programming/html-five-interview-questions-and-answers",
        destination: "https://www.odinschool.com/blog/programming/html-five-interview-questions-and-answers",
        permanent: true
      },
      {
        source:"/blog/others/how-to-answer-behavioural-interview-questions",
        destination: "https://www.odinschool.com/blog/others/how-to-answer-behavioural-interview-questions",
        permanent: true
      },
      {
        source:"/blog/others/20-selenium-interview-questions-and-answers-you-should-prepare",
        destination: "https://www.odinschool.com/blog/others/20-selenium-interview-questions-and-answers-you-should-prepare",
        permanent: true
      },
      {
        source:"/blog/programming/top-30-interview-questions-and-answers-on-angular-5",
        destination: "https://www.odinschool.com/blog/programming/top-30-interview-questions-and-answers-on-angular-5",
        permanent: true
      },
      {
        source:"/blog/programming/top-fifty-five-java-interview-questions-and-answers",
        destination: "https://www.odinschool.com/blog/programming/top-fifty-five-java-interview-questions-and-answers",
        permanent: true
      },
      {
        source:"/blog/programming/top-javascript-interview-questions-and-answers",
        destination: "https://www.odinschool.com/blog/programming/top-javascript-interview-questions-and-answers",
        permanent: true
      },
      {
        source:"/blog/information-technology/must-practice-software-testing-interview-questions-before-your-interview",
        destination: "https://www.odinschool.com/blog/information-technology/must-practice-software-testing-interview-questions-before-your-interview",
        permanent: true
      },
      {
        source:"/blog/cloud/top-33-frequently-asked-devops-interview-questions-and-answers",
        destination: "https://www.odinschool.com/blog/cloud/top-33-frequently-asked-devops-interview-questions-and-answers",
        permanent: true
      },
      {
        source:"/blog/others/top-30-linux-interview-questions-and-answers",
        destination: "https://www.odinschool.com/blog/others/top-30-linux-interview-questions-and-answers",
        permanent: true
      },
      {
        source: "/business-analytics/application",
        destination: "http://www.odinschool.com/datascience-application",
        permanent: true
      },
      {
        source: "/data-science-interview",
        destination: "/data-science-interview/live",
        permanent: true
      },
      {
        source: "/data-science-interview/start",
        destination: "/data-science-interview",
        permanent: true
      },
      {
        source:"/-temporary-slug-df48755f-5cfa-4d9a-aed3-d5f895d2335a",
        destination: "/blog",
        permanent: true
      },
      {
        source:"/blog/others/top-10-certifications-you-can-do-in-2020",
        destination: "https://www.odinschool.com/blog/others/top-10-certifications-you-can-do-in-2020",
        permanent: true
      },
      {
        source:"/blog/others/explain-gaps-in-your-resume",
        destination: "https://www.odinschool.com/blog/others/explain-gaps-in-your-resume",
        permanent: true
      },
      {
        source:"/blog/quality-management/a-good-business-requirements-document-puts-you-ahead-of-the-game",
        destination: "https://www.odinschool.com/blog/quality-management/a-good-business-requirements-document-puts-you-ahead-of-the-game",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-analytics-leading-the-way-for-marketers",
        destination: "https://www.odinschool.com/blog/big-data/big-data-analytics-leading-the-way-for-marketers",
        permanent: true
      },
      {
        source:"/blog/big-data/how-does-predictive-analytics-benefit-big-data",
        destination: "https://www.odinschool.com/blog/big-data/how-does-predictive-analytics-benefit-big-data",
        permanent: true
      },
      {
        source:"/blog/big-data/working-with-big-data-challenges",
        destination: "https://www.odinschool.com/blog/big-data/working-with-big-data-challenges",
        permanent: true
      },
      {
        source:"/blog/it-service-management/itil-service-life-cycle",
        destination: "https://www.odinschool.com/blog/it-service-management/itil-service-life-cycle",
        permanent: true
      },
      {
        source:"/blog/quality-management/the-robots-are-coming-will-process-excellence-survive",
        destination: "https://www.odinschool.com/blog/quality-management/the-robots-are-coming-will-process-excellence-survive",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-transforms-business",
        destination: "https://www.odinschool.com/blog/big-data/big-data-transforms-business",
        permanent: true
      },
      {
        source:"/blog/big-data/top-ways-to-use-big-data-in-projects",
        destination: "https://www.odinschool.com/blog/big-data/top-ways-to-use-big-data-in-projects",
        permanent: true
      },
      {
        source:"/blog/big-data/impact-of-apache-hadoop-and-big-data-analytics-on-banking-and-securities-industry",
        destination: "https://www.odinschool.com/blog/big-data/impact-of-apache-hadoop-and-big-data-analytics-on-banking-and-securities-industry",
        permanent: true
      },
      {
        source:"/blog/programming/python-programming-jobs",
        destination: "https://www.odinschool.com/blog/programming/python-programming-jobs",
        permanent: true
      },
      {
        source: "/opencampus/big-data-developer/about-big-data-developer",
        destination: "https://www.odinschool.com/learning-hub/big-data-developer/about-big-data-developer",
        permanent: true
      },
      {
        source: "/opencampus/big-data-developer/applications-of-big-data",
        destination: "http://www.odinschool.com/learning-hub/big-data-developer/applications-of-big-data",
        permanent: true
      },
      {
        source: "/opencampus/big-data-developer/benefits-of-big-data-developer-certification",
        destination: "http://www.odinschool.com/learning-hub/big-data-developer/benefits-of-big-data-developer-certification",
        permanent: true
      },
      {
        source: "/opencampus/big-data-developer/career-opportunities-for-big-data-developer",
        destination: "http://www.odinschool.com/learning-hub/big-data-developer/career-opportunities-for-big-data-developer",
        permanent: true
      },
      {
        source: "/opencampus/hadoop-administrator/about-hadoop-administrator",
        destination: "http://www.odinschool.com/learning-hub/hadoop-administrator/about-hadoop-administrator",
        permanent: true
      },
      {
        source: "/opencampus/hadoop-administrator/career-opportunities-availaible-for-hadoop-administrator",
        destination: "http://www.odinschool.com/learning-hub/hadoop-administrator/career-opportunities-availaible-for-hadoop-administrator",
        permanent: true
      },
      {
        source:"/opencampus/ms-excel/mos-certification-exam-format",
        destination: "http://www.odinschool.com/learning-hub/ms-excel/mos-certification-exam-format",
        permanent: true
      },
      {
        source:"/opencampus/ms-excel/mos-excel-2007-exam",
        destination: "https://www.odinschool.com/opecampus/ms-excel/mos-excel-2007-exam",
        permanent: true
      },
      {
        source:"/opencampus/ms-excel/mos-excel-2010-exam",
        destination: "http://www.odinschool.com/learning-hub/ms-excel/mos-excel-2010-exam",
        permanent: true
      },
      {
        source:"/opencampus/ms-excel/what-is-ms-excel",
        destination: "https://www.odinschool.com/opecampus/ms-excel/what-is-ms-excel",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/application-of-machine-learning",
        destination: "https://www.odinschool.com/opecampus/machine-learning/application-of-machine-learning",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/classification-algorithms",
        destination: "https://www.odinschool.com/opecampus/machine-learning/classification-algorithms",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/confusion-matrix",
        destination: "https://www.odinschool.com/opecampus/machine-learning/confusion-matrix",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/decision-tree-model",
        destination: "https://www.odinschool.com/opecampus/machine-learning/decision-tree-model",
        permanent: true
      },
      {
        source: "/opencampus/big-data-developer/various-job-roles",
        destination: "http://www.odinschool.com/learning-hub/big-data-developer/various-job-roles",
        permanent: true
      },
      {
        source: "/opencampus/big-data-developer/use-cases-of-big-data",
        destination: "http://www.odinschool.com/learning-hub/big-data-developer/use-cases-of-big-data",
        permanent: true
      },
      {
        source: "/opencampus/hadoop-administrator/eligibility-criteria-for-hadoop-administrator",
        destination: "http://www.odinschool.com/learning-hub/hadoop-administrator/eligibility-criteria-for-hadoop-administrator",
        permanent: true
      },
      {
        source:"/opencampus/ms-excel/microsoft-office-specialist",
        destination: "https://www.odinschool.com/opecampus/ms-excel/microsoft-office-specialist",
        permanent: true
      },
      {
        source:"/opencampus/ms-excel/mos-excel-2013-exam",
        destination: "https://www.odinschool.com/opecampus/ms-excel/mos-excel-2013-exam",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/different-types-of-classifiers",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/different-types-of-classifiers",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/dimensionality-reduction-pca",
        destination: "https://www.odinschool.com/opecampus/machine-learning/dimensionality-reduction-pca",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/errors-overfitting",
        destination: "https://www.odinschool.com/opecampus/machine-learning/errors-overfitting",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/k-nearest-neighbour",
        destination: "https://www.odinschool.com/opecampus/machine-learning/k-nearest-neighbour",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/k-fold-cross-validation",
        destination: "https://www.odinschool.com/opecampus/machine-learning/k-fold-cross-validation",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/perceptron-vs-svm",
        destination: "https://www.odinschool.com/opecampus/machine-learning/perceptron-vs-svm",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/supervised-and-unsupervised-learning",
        destination: "https://www.odinschool.com/opecampus/machine-learning/supervised-and-unsupervised-learning",
        permanent: true
      },
      {
        source:"/opencampus/machine-learning/why-do-linear-models-fail",
        destination: "https://www.odinschool.com/opecampus/machine-learning/why-do-linear-models-fail",
        permanent: true
      },
      {
        source:"/opencampus/minitab/data-types-in-minitab",
        destination: "https://www.odinschool.com/opecampus/minitab/data-types-in-minitab",
        permanent: true
      },
      {
        source:"/opencampus/data-analytics/evolution-of-analytics",
        destination: "https://www.odinschool.com/opecampus/data-analytics/evolution-of-analytics",
        permanent: true
      },
      {
        source:"/opencampus/data-analytics/data-analytics-explosion",
        destination: "https://www.odinschool.com/opecampus/data-analytics/data-analytics-explosion",
        permanent: true
      },
      {
        source:"/opencampus/data-analytics/data-analytics-redefining-the-process-in-healthcare-industry",
        destination: "https://www.odinschool.com/opecampus/data-analytics/data-analytics-redefining-the-process-in-healthcare-industry",
        permanent: true
      },
      {
        source:"/opencampus/data-analytics/what-is-analytics",
        destination: "https://www.odinschool.com/opecampus/data-analytics/what-is-analytics",
        permanent: true
      },
      {
        source:"/opencampus/data-analytics/finding-your-path-in-data-analytics",
        destination: "https://www.odinschool.com/opecampus/data-analytics/finding-your-path-in-data-analytics",
        permanent: true
      },
      {
        source:"/opencampus/data-analytics/perspective-of-a-consultant-to-data-analytics",
        destination: "https://www.odinschool.com/opecampus/data-analytics/perspective-of-a-consultant-to-data-analytics",
        permanent: true
      },
      {
        source: "/open-campus",
        destination: "/opencampus",
        permanent: true
      },
      {
        source: "/open-campus",
        destination: "/opencampus",
        permanent: true
      },
      {
        source: "/datascience-bootcamp-with-job-assistance-0",
        destination: "/datascience-bootcamp/job-assistance",
        permanent: true
      },
      {
        source: "/channel-partner",
        destination: "http://www.odinschool.com/",
        permanent: true
      },
      {
        source:"/blog/information-security/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
        destination: "https://www.odinschool.com/blog/information-security/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
        permanent: true
      },
      {
        source:"/blog/others/working-from-home-top-9-productivity-tips",
        destination: "https://www.odinschool.com/blog/others/working-from-home-top-9-productivity-tips",
        permanent: true
      },
      {
        source:"/blog/others/critical-thinking-new-age-reality",
        destination: "https://www.odinschool.com/blog/others/critical-thinking-new-age-reality",
        permanent: true
      },
      {
        source:"/blog/big-data/what-is-big-data",
        destination: "https://www.odinschool.com/blog/big-data/what-is-big-data",
        permanent: true
      },
      {
        source:"/blog/big-data/fast-data-or-big-data-whats-right-for-you",
        destination: "https://www.odinschool.com/blog/big-data/fast-data-or-big-data-whats-right-for-you",
        permanent: true
      },
      {
        source:"/blog/big-data/why-big-data-is-the-new-competitive-advantage",
        destination: "https://www.odinschool.com/blog/big-data/why-big-data-is-the-new-competitive-advantage",
        permanent: true
      },
      {
        source:"/blog/big-data/how-to-bag-top-big-data-jobs",
        destination: "https://www.odinschool.com/blog/big-data/how-to-bag-top-big-data-jobs",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-top-trends-in-2015",
        destination: "https://www.odinschool.com/blog/big-data/big-data-top-trends-in-2015",
        permanent: true
      },
      {
        source:"/blog/it-service-management/itil-service-design-overview-principles-objectives",
        destination: "https://www.odinschool.com/blog/it-service-management/itil-service-design-overview-principles-objectives",
        permanent: true
      },
      {
        source:"/blog/big-data/challenges-in-the-way-of-big-data",
        destination: "https://www.odinschool.com/blog/big-data/challenges-in-the-way-of-big-data",
        permanent: true
      },
      {
        source:"/blog/big-data/importance-of-big-data-for-software-developers",
        destination: "https://www.odinschool.com/blog/big-data/importance-of-big-data-for-software-developers",
        permanent: true
      },
      {
        source:"/blog/programming/java-script-versions",
        destination: "https://www.odinschool.com/blog/programming/java-script-versions",
        permanent: true
      },
      {
        source:"/blog/quality-management/better-software-development-and-testing-with-the-defect-bug-life-cycle",
        destination: "https://www.odinschool.com/blog/quality-management/better-software-development-and-testing-with-the-defect-bug-life-cycle",
        permanent: true
      },
      {
        source:"/blog/project-management/top-3-agile-software-development-methods",
        destination: "https://www.odinschool.com/blog/project-management/top-3-agile-software-development-methods",
        permanent: true
      },
      {
        source:"/blog/programming/complete-information-about-hypertext-markup-language",
        destination: "https://www.odinschool.com/blog/programming/complete-information-about-hypertext-markup-language",
        permanent: true
      },
      {
        source:"/blog/programming/top-five-skills-that-make-you-a-sure-shot-programmer",
        destination: "https://www.odinschool.com/blog/programming/top-five-skills-that-make-you-a-sure-shot-programmer",
        permanent: true
      },
      {
        source:"/blog/programming/difference-between-java-and-javascript",
        destination: "https://www.odinschool.com/blog/programming/difference-between-java-and-javascript",
        permanent: true
      },
      {
        source:"/blog/big-data/the-increasing-world-of-open-source-big-data-tools",
        destination: "https://www.odinschool.com/blog/big-data/the-increasing-world-of-open-source-big-data-tools",
        permanent: true
      },
      {
        source:"/blog/big-data/is-big-data-applicable-for-small-businesses",
        destination: "https://www.odinschool.com/blog/big-data/is-big-data-applicable-for-small-businesses",
        permanent: true
      },
      {
        source:"/blog/big-data/identify-a-big-data-problem",
        destination: "https://www.odinschool.com/blog/big-data/identify-a-big-data-problem",
        permanent: true
      },
      {
        source:"/blog/it-service-management/itil-service-strategy-processes",
        destination: "https://www.odinschool.com/blog/it-service-management/itil-service-strategy-processes",
        permanent: true
      },
      {
        source:"/blog/big-data/unlocking-business-value-through-hadoop",
        destination: "https://www.odinschool.com/blog/big-data/unlocking-business-value-through-hadoop",
        permanent: true
      },
      {
        source:"/blog/programming/react-vs-angular",
        destination: "https://www.odinschool.com/blog/programming/react-vs-angular",
        permanent: true
      },
      {
        source:"/blog/programming/eight-up-and-coming-programming-languages-developers-should-know",
        destination: "https://www.odinschool.com/blog/programming/eight-up-and-coming-programming-languages-developers-should-know",
        permanent: true
      },
      {
        source:"/blog/programming/how-is-c-programming-still-popular",
        destination: "https://www.odinschool.com/blog/programming/how-is-c-programming-still-popular",
        permanent: true
      },
      {
        source:"/blog/big-data/prepare-for-big-datas-big-tomorrow-today",
        destination: "https://www.odinschool.com/blog/big-data/prepare-for-big-datas-big-tomorrow-today",
        permanent: true
      },
      {
        source:"/blog/big-data/steps-to-become-big-data-developer",
        destination: "https://www.odinschool.com/blog/big-data/steps-to-become-big-data-developer",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-in-action-ten-case-studies-that-really-matter",
        destination: "https://www.odinschool.com/blog/big-data/big-data-in-action-ten-case-studies-that-really-matter",
        permanent: true
      },
      {
        source:"/blog/big-data/introduction-to-big-data-and-hadoop",
        destination: "https://www.odinschool.com/blog/big-data/introduction-to-big-data-and-hadoop",
        permanent: true
      },
      {
        source:"/blog/workplace-tools/five-excellent-basic-formatting-tips-on-ms-excel",
        destination: "https://www.odinschool.com/blog/workplace-tools/five-excellent-basic-formatting-tips-on-ms-excel",
        permanent: true
      },
      {
        source: "/opecampus",
        destination: "/learning-hub",
        permanent: true
      },
      {
        source: "/blog/quality-management/a-good-business-requirements-document-puts-you-ahead-of-the-game",
        destination: "https://www.greycampus.com/blog/quality-management/a-good-business-requirements-document-puts-you-ahead-of-the-game",
        permanent: true
      },
      {
        source: "/blog/latest-updates/women-in-tech-scholarship",
        destination: "https://www.greycampus.com/blog/latest-updates/women-in-tech-scholarship",
        permanent: true
      },
      {
        source: "/opecampus/ms-excel/mos-excel-2007-exam",
        destination: "https://www.greycampus.com/opencampus/ms-excel/mos-excel-2007-exam",
        permanent: true
      },
      {
        source: "/opecampus/ms-excel/mos-excel-2013-exam",
        destination: "https://www.greycampus.com/opencampus/ms-excel/mos-excel-2013-exam",
        permanent: true
      },

      {
        source: "/blog/hadoop-administrator/eligibility-criteria-for-hadoop-administrator",
        destination: "https://www.odinschool.com/learning-hub/hadoop-administrator/eligibility-criteria-for-hadoop-administrator",
        permanent: true
      },
      {
        source:"/blog/big-data/top-differences-between-hadoop-1-0-and-hadoop-2-0",
        destination: "https://www.odinschool.com/blog/big-data/top-differences-between-hadoop-1-0-and-hadoop-2-0",
        permanent: true
      },
      {
        source:"/blog/big-data/land-your-dream-big-data-job-in-2015-with-9-essential-skills",
        destination: "https://www.odinschool.com/blog/big-data/land-your-dream-big-data-job-in-2015-with-9-essential-skills",
        permanent: true
      },
      {
        source:"/blog/big-data/top-7-must-have-skills-for-landing-big-data-jobs-in-2015",
        destination: "https://www.odinschool.com/blog/big-data/top-7-must-have-skills-for-landing-big-data-jobs-in-2015",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-the-creator-of-big-job-opportunities",
        destination: "https://www.odinschool.com/blog/big-data/big-data-the-creator-of-big-job-opportunities",
        permanent: true
      },
      {
        source:"/blog/big-data/challenges-in-monitoring-apache-spark",
        destination: "https://www.odinschool.com/blog/big-data/challenges-in-monitoring-apache-spark",
        permanent: true
      },
      {
        source:"/blog/big-data/the-perfect-combination-hadoop-and-saphana",
        destination: "https://www.odinschool.com/blog/big-data/the-perfect-combination-hadoop-and-saphana",
        permanent: true
      },
      {
        source:"/blog/big-data/advantages-of-big-data-and-iot-in-digital-marketing",
        destination: "https://www.odinschool.com/blog/big-data/advantages-of-big-data-and-iot-in-digital-marketing",
        permanent: true
      },
      {
        source:"/blog/big-data/the-next-stop-for-big-data-in-travel-industry",
        destination: "https://www.odinschool.com/blog/big-data/the-next-stop-for-big-data-in-travel-industry",
        permanent: true
      },
      {
        source:"/blog/big-data/why-hadoop-with-apache-spark-matters",
        destination: "https://www.odinschool.com/blog/big-data/why-hadoop-with-apache-spark-matters",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-accomplishes-many-practical-uses-too",
        destination: "https://www.odinschool.com/blog/big-data/big-data-accomplishes-many-practical-uses-too",
        permanent: true
      },
      {
        source:"/blog/big-data/best-big-data-and-business-analytics-companies-in-2016",
        destination: "https://www.odinschool.com/blog/big-data/best-big-data-and-business-analytics-companies-in-2016",
        permanent: true
      },
      {
        source:"/blog/big-data/how-big-data-is-creating-big-wonders-for-organizations-globally",
        destination: "https://www.odinschool.com/blog/big-data/how-big-data-is-creating-big-wonders-for-organizations-globally",
        permanent: true
      },
      {
        source:"/blog/big-data/5-tips-for-turning-big-data-to-big-success",
        destination: "https://www.odinschool.com/blog/big-data/5-tips-for-turning-big-data-to-big-success",
        permanent: true
      },
      {
        source:"/blog/big-data/5-big-data-predictions-what-to-look-for-in-2015",
        destination: "https://www.odinschool.com/blog/big-data/5-big-data-predictions-what-to-look-for-in-2015",
        permanent: true
      },
      {
        source:"/blog/big-data/top-3-meaningful-reasons-to-learn-hadoop",
        destination: "https://www.odinschool.com/blog/big-data/top-3-meaningful-reasons-to-learn-hadoop",
        permanent: true
      },
      {
        source:"/blog/big-data/3-big-tools-to-tame-the-many-features-of-big-data",
        destination: "https://www.odinschool.com/blog/big-data/3-big-tools-to-tame-the-many-features-of-big-data",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-as-a-service-is-it-next-in-line-after-big-data",
        destination: "https://www.odinschool.com/blog/big-data/big-data-as-a-service-is-it-next-in-line-after-big-data",
        permanent: true
      },
      {
        source:"/blog/big-data/successful-digital-businesses-need-big-data",
        destination: "https://www.odinschool.com/blog/big-data/successful-digital-businesses-need-big-data",
        permanent: true
      },
      {
        source:"/blog/big-data/can-next-generation-databases-keep-up-with-big-data",
        destination: "https://www.odinschool.com/blog/big-data/can-next-generation-databases-keep-up-with-big-data",
        permanent: true
      },
      {
        source:"/blog/big-data/wiley-partners-with-greycampus-to-launch-it-certification-courses-in-india",
        destination: "https://www.odinschool.com/blog/big-data/wiley-partners-with-greycampus-to-launch-it-certification-courses-in-india",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-myths-that-impact-smes",
        destination: "https://www.odinschool.com/blog/big-data/big-data-myths-that-impact-smes",
        permanent: true
      },
      {
        source:"/blog/big-data/consumer-empowerment-big-datas-latest-buzz-word",
        destination: "https://www.odinschool.com/blog/big-data/consumer-empowerment-big-datas-latest-buzz-word",
        permanent: true
      },
      {
        source:"/blog/big-data/a-peep-into-the-world-of-top-hadoop-distributions",
        destination: "https://www.odinschool.com/blog/big-data/a-peep-into-the-world-of-top-hadoop-distributions",
        permanent: true
      },
      {
        source:"/blog/big-data/how-data-driven-decisions-are-fast-changing-the-way-we-do-business",
        destination: "https://www.odinschool.com/blog/big-data/how-data-driven-decisions-are-fast-changing-the-way-we-do-business",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-best-practice-check-list-for-small-and-medium-enterprises",
        destination: "https://www.odinschool.com/blog/big-data/big-data-best-practice-check-list-for-small-and-medium-enterprises",
        permanent: true
      },
      {
        source:"/blog/big-data/all-you-need-to-know-about-hadoop",
        destination: "https://www.odinschool.com/blog/big-data/all-you-need-to-know-about-hadoop",
        permanent: true
      },
      {
        source:"/blog/big-data/basics-of-big-data-developer",
        destination: "https://www.odinschool.com/blog/big-data/basics-of-big-data-developer",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-challenges-in-2016-that-are-making-it-strategists-sweat",
        destination: "https://www.odinschool.com/blog/big-data/big-data-challenges-in-2016-that-are-making-it-strategists-sweat",
        permanent: true
      },
      {
        source:"/blog/big-data/big-data-governance-what-is-it-how-to-get-started",
        destination: "https://www.odinschool.com/blog/big-data/big-data-governance-what-is-it-how-to-get-started",
        permanent: true
      },
      {
        source:"/blog/programming/top-9-programming-languages-of-2016",
        destination: "https://www.odinschool.com/blog/programming/top-9-programming-languages-of-2016",
        permanent: true
      },
      {
        source:"/blog/programming/react-js-vs-react-native",
        destination: "https://www.odinschool.com/blog/programming/react-js-vs-react-native",
        permanent: true
      },
      {
        source:"/blog/programming/highest-paying-programming-languages-in-2016",
        destination: "https://www.odinschool.com/blog/programming/highest-paying-programming-languages-in-2016",
        permanent: true
      },
      {
        source:"/blog/programming/which-is-better-to-learn-first-c-plus-plus-or-c-hash",
        destination: "https://www.odinschool.com/blog/programming/which-is-better-to-learn-first-c-plus-plus-or-c-hash",
        permanent: true
      },
      {
        source:"/blog/programming/introduction-to-react-programming-language",
        destination: "https://www.odinschool.com/blog/programming/introduction-to-react-programming-language",
        permanent: true
      },
      {
        source:"/blog/programming/good-and-bad-of-angular-development",
        destination: "https://www.odinschool.com/blog/programming/good-and-bad-of-angular-development",
        permanent: true
      },
      {
        source:"/blog/programming/why-strings-are-important-in-java",
        destination: "https://www.odinschool.com/blog/programming/why-strings-are-important-in-java",
        permanent: true
      },
      {
        source:"/blog/programming/six-ways-sql-and-nosql-databases-offer",
        destination: "https://www.odinschool.com/blog/programming/six-ways-sql-and-nosql-databases-offer",
        permanent: true
      },
      {
        source:"/blog/programming/angular-js-vs-angular-x",
        destination: "https://www.odinschool.com/blog/programming/angular-js-vs-angular-x",
        permanent: true
      },
      {
        source:"/blog/programming/10-hot-programming-trends-and-10-going-cold",
        destination: "https://www.odinschool.com/blog/programming/10-hot-programming-trends-and-10-going-cold",
        permanent: true
      },
      {
        source:"/blog/programming/top-five-myths-about-becoming-a-software-developer",
        destination: "https://www.odinschool.com/blog/programming/top-five-myths-about-becoming-a-software-developer",
        permanent: true
      },
      {
        source:"/blog/programming/react-for-web-development",
        destination: "https://www.odinschool.com/blog/programming/react-for-web-development",
        permanent: true
      },
      {
        source:"/blog/cloud/10-cutting-edge-cloud-services-offered-by-azure-in-2020",
        destination: "https://www.odinschool.com/blog/cloud/10-cutting-edge-cloud-services-offered-by-azure-in-2020",
        permanent: true
      },
      {
        source:"/blog/cloud/top-10-reasons-to-get-an-aws-certification",
        destination: "https://www.odinschool.com/blog/cloud/top-10-reasons-to-get-an-aws-certification",
        permanent: true
      },
      {
        source:"/blog/cloud/which-aws-certification-should-i-choose",
        destination: "https://www.odinschool.com/blog/cloud/which-aws-certification-should-i-choose",
        permanent: true
      },
      {
        source:"/blog/cloud/top-aws-interview-questions-and-answers",
        destination: "https://www.odinschool.com/blog/cloud/top-aws-interview-questions-and-answers",
        permanent: true
      },
      {
        source:"/blog/cloud/pros-and-cons-of-cloud-computing-how-to-work-around-them",
        destination: "https://www.odinschool.com/blog/cloud/pros-and-cons-of-cloud-computing-how-to-work-around-them",
        permanent: true
      },
      {
        source:"/blog/cloud/top-paying-cloud-certifications",
        destination: "https://www.odinschool.com/blog/cloud/top-paying-cloud-certifications",
        permanent: true
      },
      {
        source:"/blog/cloud/cloud-computing-the-global-standard-of-internet-business",
        destination: "https://www.odinschool.com/blog/cloud/cloud-computing-the-global-standard-of-internet-business",
        permanent: true
      },
      {
        source:"/blog/cloud/aws-vs-azure-what-s-right-for-your-needs",
        destination: "https://www.odinschool.com/blog/cloud/aws-vs-azure-what-s-right-for-your-needs",
        permanent: true
      },
      {
        source:"/blog/cloud/your-guide-to-becoming-an-aws-solutions-architect",
        destination: "https://www.odinschool.com/blog/cloud/your-guide-to-becoming-an-aws-solutions-architect",
        permanent: true
      },
      {
        source: "/become-an-afffiliate/application",
        destination: "/become-an-affiliate/application",
        permanent: true
      },
      {
        source: "/learning-hub/installation",
        destination: "/learning-hub/ruby/installation",
        permanent: true
      },
      {
        source: "/blog/top-25-tableau-interview-questions-and-answers-for-2022",
        destination: "/blog/top-25-tableau-interview-questions-and-answers-for-2023",
        permanent: true
      },
      {
        source: "/learnin-hub",
        destination: "https://www.odinschool.com/learning-hub",
        permanent: true
      },
      {
        source: "/full-stack-java-developer-bootcamp",
        destination: "/full-stack-software-development-bootcamp",
        permanent: true
      },
      {
        source: "/full-stack-java-developer-bootcamp",
        destination: "/full-stack-software-development-bootcamp",
        permanent: true
      },
      {
        source: "/h5p-testing",
        destination: "/fun-with-statistics/kurtosis",
        permanent: true
      },
      {
        source:"/blog/making-a-career-change-to-data-science-with-limited-or-no-coding-skills-here-are-some-tips",
        destination: "http://www.odinschool.com/blog/making-a-career-change-to-data-science-with-limited-or-no-coding-skills-here-are-some-tips",
        permanent: true
      },
      {
        source:"/blog/what-is-data-modelling",
        destination: "http://www.odinschool.com/blog/what-is-data-modelling",
        permanent: true
      },
      {
        source:"/blog/top-25-tableau-interview-questions-and-answers-for-2022",
        destination: "http://www.odinschool.com/blog/top-25-tableau-interview-questions-and-answers-for-2022",
        permanent: true
      },
      {
        source:"/blog/data-science-roadmap-for-beginners",
        destination: "http://www.odinschool.com/blog/data-science-roadmap-for-beginners",
        permanent: true
      },
      {
        source:"/blog/data-analyst-job-description-responsibilities-skills-required-and-salary-trends",
        destination: "http://www.odinschool.com/blog/data-analyst-job-description-responsibilities-skills-required-and-salary-trends",
        permanent: true
      },
      {
        source:"/blog/engineers-need-to-be-data-savvy-now-more-than-ever",
        destination: "http://www.odinschool.com/blog/engineers-need-to-be-data-savvy-now-more-than-ever",
        permanent: true
      },
      {
        source:"/blog/top-20-questions-to-prepare-for-your-entry-level-data-analyst-interview",
        destination: "http://www.odinschool.com/blog/top-20-questions-to-prepare-for-your-entry-level-data-analyst-interview",
        permanent: true
      },
      {
        source:"/blog/getting-started-in-data-science-here-are-some-key-areas-you-can-specialise-in",
        destination: "http://www.odinschool.com/blog/getting-started-in-data-science-here-are-some-key-areas-you-can-specialise-in",
        permanent: true
      },
      {
        source:"/blog/data-science-the-cutting-edge-technology-at-the-climate-crisis-warfront",
        destination: "http://www.odinschool.com/blog/data-science-the-cutting-edge-technology-at-the-climate-crisis-warfront",
        permanent: true
      },
      {
        source:"/blog/here-are-some-tips-to-prepare-for-your-next-data-science-interview",
        destination: "http://www.odinschool.com/blog/here-are-some-tips-to-prepare-for-your-next-data-science-interview",
        permanent: true
      },
      {
        source:"/blog/top-20-data-science-interview-questions",
        destination: "http://www.odinschool.com/blog/top-20-data-science-interview-questions",
        permanent: true
      },
      {
        source:"/blog/the-story-of-bill-peace-how-a-former-security-professional-uses-ai-to-combat-human-trafficking",
        destination: "http://www.odinschool.com/blog/the-story-of-bill-peace-how-a-former-security-professional-uses-ai-to-combat-human-trafficking",
        permanent: true
      },
      {
        source:"/blog/nats-world-how-python-changed-a-boys-life",
        destination: "http://www.odinschool.com/blog/nats-world-how-python-changed-a-boys-life",
        permanent: true
      },
      {
        source:"/blog/why-you-should-prioritize-skills-over-degrees-in-your-data-science",
        destination: "http://www.odinschool.com/blog/why-you-should-prioritize-skills-over-degrees-in-your-data-science",
        permanent: true
      },
      {
        source:"/blog/heres-how-you-can-get-a-job-in-data-science",
        destination: "http://www.odinschool.com/blog/heres-how-you-can-get-a-job-in-data-science",
        permanent: true
      },
      {
        source:"/blog/debunking-data-science-myths-5-common-misconceptions-to-unlearn",
        destination: "http://www.odinschool.com/blog/debunking-data-science-myths-5-common-misconceptions-to-unlearn",
        permanent: true
      },
      {
        source:"/blog/5-ways-to-gain-hands-on-experience-in-data-science",
        destination: "http://www.odinschool.com/blog/5-ways-to-gain-hands-on-experience-in-data-science",
        permanent: true
      },
      {
        source:"/blog/optimize-your-resume-for-your-data-science-career-with-these-tips",
        destination: "http://www.odinschool.com/blog/optimize-your-resume-for-your-data-science-career-with-these-tips",
        permanent: true
      },
      {
        source:"/blog/land-your-first-data-science-job-with-these-8-tips",
        destination: "http://www.odinschool.com/blog/land-your-first-data-science-job-with-these-8-tips",
        permanent: true
      },
      {
        source:"/blog/5-signs-you-need-a-career-change",
        destination: "http://www.odinschool.com/blog/5-signs-you-need-a-career-change",
        permanent: true
      },
      {
        source: "/opencampus/ms-excel/mos-certification-exam-format",
        destination: "http://www.odinschool.com/learning-hub/ms-excel/mos-certification-exam-format",
        permanent: true
      },
      {
        source: "/opencampus/ms-excel/mos-excel-2007-exam",
        destination: "http://www.odinschool.com/learning-hub/ms-excel/mos-excel-2007-exam",
        permanent: true
      },
      {
        source: "/opencampus/ms-excel/mos-excel-2010-exam",
        destination: "http://www.odinschool.com/learning-hub/ms-excel/mos-excel-2010-exam",
        permanent: true
      },
      {
        source: "/opencampus/ms-excel/mos-excel-2013-exam",
        destination: "http://www.odinschool.com/learning-hub/ms-excel/mos-excel-2013-exam",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/k-fold-cross-validation",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/k-fold-cross-validation",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/k-nearest-neighbour",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/k-nearest-neighbour",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/perceptron-vs-svm",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/perceptron-vs-svm",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/supervised-and-unsupervised-learning",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/supervised-and-unsupervised-learning",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/why-do-linear-models-fail",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/why-do-linear-models-fail",
        permanent: true
      },
      {
        source: "/opencampus/data-analytics/data-analytics-explosion",
        destination: "http://www.odinschool.com/learning-hub/data-analytics/data-analytics-explosion",
        permanent: true
      },
      {
        source: "/opencampus/data-analytics/data-analytics-redefining-the-process-in-healthcare-industry",
        destination: "http://www.odinschool.com/learning-hub/data-analytics/data-analytics-redefining-the-process-in-healthcare-industry",
        permanent: true
      },
      {
        source: "/opencampus/data-analytics/evolution-of-analytics",
        destination: "http://www.odinschool.com/learning-hub/data-analytics/evolution-of-analytics",
        permanent: true
      },
      {
        source: "/opencampus/data-analytics/finding-your-path-in-data-analytics",
        destination: "http://www.odinschool.com/learning-hub/data-analytics/finding-your-path-in-data-analytics",
        permanent: true
      },
      {
        source: "/opencampus/data-analytics/what-is-analytics",
        destination: "http://www.odinschool.com/learning-hub/data-analytics/what-is-analytics",
        permanent: true
      },
      {
        source: "/opencampus/data-analytics/perspective-of-a-consultant-to-data-analytics",
        destination: "http://www.odinschool.com/learning-hub/data-analytics/perspective-of-a-consultant-to-data-analytics",
        permanent: true
      },
      {
        source: "/opencampus/ms-excel/microsoft-office-specialist",
        destination: "http://www.odinschool.com/learning-hub/ms-excel/microsoft-office-specialist",
        permanent: true
      },
      {
        source: "/opencampus/ms-excel/what-is-ms-excel",
        destination: "http://www.odinschool.com/learning-hub/ms-excel/what-is-ms-excel",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/application-of-machine-learning",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/application-of-machine-learning",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/classification-algorithms",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/classification-algorithms",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/confusion-matrix",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/confusion-matrix",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/decision-tree-model",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/decision-tree-model",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/dimensionality-reduction-pca",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/dimensionality-reduction-pca",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/errors-overfitting",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/errors-overfitting",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/terminology-descriptive-vs-inferential-statistics-0-0-0",
        destination: "/en/fun-with-statistics/statistical-measures",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/scatter-plot-0",
        destination: "/en/fun-with-statistics/some-more-charts",
        permanent: true
      },
      {
        source: "/demo-class/thank-you",
        destination: "/data-science/affiliate/demo-class/thank-you",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/lets-make-statistics-fun",
        destination: "/fun-with-statistics/lets-make-statistics-fun",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/putting-it-all-together-and-getting-you-to-do-some-analysis",
        destination: "/fun-with-statistics/putting-it-all-together-and-getting-you-to-do-some-analysis",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/coefficient-of-variation",
        destination: "/fun-with-statistics/coefficient-of-variation",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/variance",
        destination: "/fun-with-statistics/variance",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/correlation",
        destination: "/fun-with-statistics/correlation",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/covariance",
        destination: "/fun-with-statistics/covariance",
        permanent: true
      },
      {
        source: "/en/measures-of-relationships-between-variables",
        destination: "/measures-of-relationships-between-variables",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/standard-deviation",
        destination: "/fun-with-statistics/standard-deviation",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/measures-of-variability",
        destination: "/fun-with-statistics/measures-of-variability",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/kurtosis",
        destination: "/fun-with-statistics/kurtosis",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/skewness",
        destination: "/fun-with-statistics/skewness",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/measures-of-asymmetry",
        destination: "/fun-with-statistics/measures-of-asymmetry",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/some-more-charts",
        destination: "/fun-with-statistics/some-more-charts",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/median",
        destination: "/fun-with-statistics/median",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/mode",
        destination: "/fun-with-statistics/mode",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/outliers",
        destination: "/fun-with-statistics/outliers",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/mean",
        destination: "/fun-with-statistics/mean",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/measures-of-central-tendency",
        destination: "/fun-with-statistics/measures-of-central-tendency",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/descriptive-statistics",
        destination: "/fun-with-statistics/descriptive-statistics",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/terminology-descriptive-vs-inferential-statistics",
        destination: "/fun-with-statistics/terminology-descriptive-vs-inferential-statistics",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/scatter-plot",
        destination: "/fun-with-statistics/scatter-plot",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/histograms",
        destination: "/fun-with-statistics/histograms",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/bar-charts",
        destination: "/fun-with-statistics/bar-charts",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/pie-chart",
        destination: "/fun-with-statistics/pie-chart",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/charts-and-graphs",
        destination: "/fun-with-statistics/charts-and-graphs",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/statistical-measures",
        destination: "/fun-with-statistics/statistical-measures",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/terminology-descriptive-vs-inferential-statistics-0-0",
        destination: "/fun-with-statistics/terminology-descriptive-vs-inferential-statistics-0-0",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/terminology1",
        destination: "/fun-with-statistics/terminology1",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/pareto-chart",
        destination: "/fun-with-statistics/pareto-chart",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/stem-and-leaf-plots",
        destination: "/fun-with-statistics/stem-and-leaf-plots",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/data-measurement",
        destination: "/fun-with-statistics/data-measurement",
        permanent: true
      },
      {
        source: "/fun-with-statistics/terminology-descriptive-vs-inferential-statistics-0-0",
        destination: "/fun-with-statistics/quiz-on-data-measurement",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/terminology-descriptive-vs-inferential-statistics-0",
        destination: "/en/fun-with-statistics/data-measurement",
        permanent: true
      },
      {
        source: "/odintalk/vishal-jain-0",
        destination: "/odintalk/anirudh-kasturi",
        permanent: true
      },
      {
        source: "/en/fun-with-statistics/normal-distribution",
        destination: "/fun-with-statistics/normal-distribution",
        permanent: true
      },
      {
        source: "/blog/others/top-21-business-analyst-interview-questions-and-answers",
        destination: "/blog/data-science/top-21-business-analyst-interview-questions-and-answers",
        permanent: true
      },
      {
        source: "/blog/top-20-questions-asked-during-an-interview-for-a-data-analyst-position",
        destination: "http://www.odinschool.com/blog/big-data/top-20-questions-asked-during-an-interview-for-a-data-analyst-position",
        permanent: true
      },
      {
        source: "/corporate-training",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: "/corporate",
        destination: "http://www.odinschool.com/corporate",
        permanent: true
      },
      {
        source: "/corporate/blogs/how-to-conduct-a-skills-gap-analysis-a-step-by-step-guide",
        destination: "/corporate/blogs/for-corporate/how-to-conduct-a-skills-gap-analysis-a-step-by-step-guide",
        permanent: true
      },
      {
        source: "/odintalk/vishal-jain",
        destination: "/odintalks/vishal-jain",
        permanent: true
      },
      {
        source: "/odintalk/sharthakacharjee",
        destination: "/odintalks/sharthakacharjee",
        permanent: true
      },
      {
        source: "/odintalk/sushanthgaonkar",
        destination: "/odintalks/sushanthgaonkar",
        permanent: true
      },
      {
        source: "/odintalk/krishnakumar",
        destination: "/odintalks/krishnakumar",
        permanent: true
      },
      {
        source: "/corporate-training",
        destination: "/corporate/training",
        permanent: true
      },
      {
        source: "/hire-odin-grads",
        destination: "/corporate/hire-odin-grads",
        permanent: true
      },
      {
        source: "/odintalk/vikramduggal",
        destination: "/odintalks/vikramduggal",
        permanent: true
      },
      {
        source: "/data-science",
        destination: "http://www.odinschool.com/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/odintalk/ajay-malgaonkar",
        destination: "/odintalks/ajay-malgaonkar",
        permanent: true
      },
      {
        source: "/odintalk/shashank-mishra",
        destination: "/odintalks/shashank-mishra",
        permanent: true
      },
      {
        source: "/odintalk/raam-gururanjan",
        destination: "/odintalks/raam-gururanjan",
        permanent: true
      },
      {
        source: "/odintalk/anirudh-kasturi",
        destination: "/odintalks/anirudh-kasturi",
        permanent: true
      },
      {
        source: "/measures-of-relationships-between-variables",
        destination: "/fun-with-statistics/measures-of-relationships-between-variables",
        permanent: true
      },
      {
        source: "/blog/what-is-data-modelling",
        destination: "/blog/data-science/what-is-data-modelling",
        permanent: true
      },
      {
        source: "/blog/top-25-tableau-interview-questions-and-answers-for-2023",
        destination: "/blog/data-science/top-25-tableau-interview-questions-and-answers-for-2023",
        permanent: true
      },
      {
        source: "/blog/data-science-roadmap-for-beginners",
        destination: "/blog/data-science/data-science-roadmap-for-beginners",
        permanent: true
      },
      {
        source: "/blog/data-analyst-job-description-responsibilities-skills-required-and-salary-trends",
        destination: "/blog/data-science/data-analyst-job-description-responsibilities-skills-required-and-salary-trends",
        permanent: true
      },
      {
        source: "/blog/top-20-questions-to-prepare-for-your-entry-level-data-analyst-interview",
        destination: "/blog/data-science/top-20-questions-to-prepare-for-your-entry-level-data-analyst-interview",
        permanent: true
      },
      {
        source: "/blog/engineers-need-to-be-data-savvy-now-more-than-ever",
        destination: "/blog/data-science/engineers-need-to-be-data-savvy-now-more-than-ever",
        permanent: true
      },
      {
        source: "/blog/getting-started-in-data-science-here-are-some-key-areas-you-can-specialise-in",
        destination: "/blog/data-science/getting-started-in-data-science-here-are-some-key-areas-you-can-specialise-in",
        permanent: true
      },
      {
        source: "/blog/data-science-the-cutting-edge-technology-at-the-climate-crisis-warfront",
        destination: "/blog/data-science/data-science-the-cutting-edge-technology-at-the-climate-crisis-warfront",
        permanent: true
      },
      {
        source: "/blog/top-20-data-science-interview-questions",
        destination: "/blog/data-science/top-20-data-science-interview-questions",
        permanent: true
      },
      {
        source: "/blog/why-you-should-prioritize-skills-over-degrees-in-your-data-science",
        destination: "/blog/data-science/why-you-should-prioritize-skills-over-degrees-in-your-data-science",
        permanent: true
      },
      {
        source: "/blog/5-ways-to-gain-hands-on-experience-in-data-science",
        destination: "/blog/data-science/5-ways-to-gain-hands-on-experience-in-data-science",
        permanent: true
      },
      {
        source: "/blog/optimize-your-resume-for-your-data-science-career-with-these-tips",
        destination: "/blog/data-science/optimize-your-resume-for-your-data-science-career-with-these-tips",
        permanent: true
      },
      {
        source: "/blog/making-a-career-change-to-data-science-with-limited-or-no-coding-skills-here-are-some-tips",
        destination: "/blog/data-science/making-a-career-change-to-data-science-with-limited-or-no-coding-skills-here-are-some-tips",
        permanent: true
      },
      {
        source: "/blog/here-are-some-tips-to-prepare-for-your-next-data-science-interview",
        destination: "/blog/data-science/here-are-some-tips-to-prepare-for-your-next-data-science-interview",
        permanent: true
      },
      {
        source: "/blog/the-story-of-bill-peace-how-a-former-security-professional-uses-ai-to-combat-human-trafficking",
        destination: "/blog/data-science/the-story-of-bill-peace-how-a-former-security-professional-uses-ai-to-combat-human-trafficking",
        permanent: true
      },
      {
        source: "/blog/nats-world-how-python-changed-a-boys-life",
        destination: "/blog/data-science/nats-world-how-python-changed-a-boys-life",
        permanent: true
      },
      {
        source: "/blog/heres-how-you-can-get-a-job-in-data-science",
        destination: "/blog/data-science/heres-how-you-can-get-a-job-in-data-science",
        permanent: true
      },
      {
        source: "/blog/debunking-data-science-myths-5-common-misconceptions-to-unlearn",
        destination: "/blog/data-science/debunking-data-science-myths-5-common-misconceptions-to-unlearn",
        permanent: true
      },
      {
        source: "/blog/land-your-first-data-science-job-with-these-8-tips",
        destination: "/blog/data-science/land-your-first-data-science-job-with-these-8-tips",
        permanent: true
      },
      {
        source: "/blog/5-signs-you-need-a-career-change",
        destination: "/blog/data-science/5-signs-you-need-a-career-change",
        permanent: true
      },
      {
        source: "/blog/quality-management/types-of-hypothesis-testing",
        destination: "/blog/data-science/types-of-hypothesis-testing",
        permanent: true
      },
      {
        source: "/blog/emerging-technologies/top-8-trending-technologies-taking-the-world-by-storm",
        destination: "/blog/data-science/top-8-trending-technologies-taking-the-world-by-storm",
        permanent: true
      },
      {
        source: "/blog/information-technology/must-practice-software-testing-interview-questions-before-your-interview",
        destination: "/blog/programming/must-practice-software-testing-interview-questions-before-your-interview",
        permanent: true
      },
      {
        source: "/blog/others/20-selenium-interview-questions-and-answers-you-should-prepare",
        destination: "/blog/programming/20-selenium-interview-questions-and-answers-you-should-prepare",
        permanent: true
      },
      {
        source: "/blog/others/top-30-linux-interview-questions-and-answers",
        destination: "/blog/programming/top-30-linux-interview-questions-and-answers",
        permanent: true
      },
      {
        source: "/blog/others/the-difference-between-a-resume-and-a-cv-curriculum-vitae",
        destination: "/blog/data-science/the-difference-between-a-resume-and-a-cv-curriculum-vitae",
        permanent: true
      },
      {
        source: "/blog/it-service-management/itil-interview-questions",
        destination: "/blog/programming/itil-interview-questions",
        permanent: true
      },
      {
        source: "/blog/it-service-management/how-important-is-itil-for-business-analysts",
        destination: "/blog/programming/how-important-is-itil-for-business-analysts",
        permanent: true
      },
      {
        source: "/blog/latest-updates/interview-questions-and-answers-informatica-powercenter",
        destination: "/blog/data-science/interview-questions-and-answers-informatica-powercenter",
        permanent: true
      },
      {
        source: "/blog/cloud/top-33-frequently-asked-devops-interview-questions-and-answers",
        destination: "/blog/cloud-computing/top-33-frequently-asked-devops-interview-questions-and-answers",
        permanent: true
      },
      {
        source: "/blog/it-service-management/itil-service-life-cycle",
        destination: "/blog/programming/itil-service-life-cycle",
        permanent: true
      },
      {
        source: "/blog/information-security/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
        destination: "/blog/programming/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
        permanent: true
      },
      {
        source: "/blog/quality-management/the-robots-are-coming-will-process-excellence-survive",
        destination: "/blog/programming/the-robots-are-coming-will-process-excellence-survive",
        permanent: true
      },
      {
        source: "/blog/programming/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
        destination: "/blog/data-science/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
        permanent: true
      },
      {
        source: "/blog/it-service-management/itil-service-design-overview-principles-objectives",
        destination: "/blog/programming/itil-service-design-overview-principles-objectives",
        permanent: true
      },
      {
        source: "/blog/quality-management/better-software-development-and-testing-with-the-defect-bug-life-cycle",
        destination: "/blog/programming/better-software-development-and-testing-with-the-defect-bug-life-cycle",
        permanent: true
      },
      {
        source: "/blog/cloud/top-10-reasons-to-get-an-aws-certification",
        destination: "/blog/cloud-computing/top-10-reasons-to-get-an-aws-certification",
        permanent: true
      },
      {
        source: "/blog/it-service-management/itil-service-strategy-processes",
        destination: "/blog/programming/itil-service-strategy-processes",
        permanent: true
      },
      {
        source: "/blog/project-management/top-3-agile-software-development-methods",
        destination: "/blog/programming/top-3-agile-software-development-methods",
        permanent: true
      },
      {
        source: "/blog/workplace-tools/five-excellent-basic-formatting-tips-on-ms-excel",
        destination: "/blog/others/five-excellent-basic-formatting-tips-on-ms-excel",
        permanent: true
      },
      {
        source: "/blog/cloud/10-cutting-edge-cloud-services-offered-by-azure-in-2020",
        destination: "/blog/cloud-computing/10-cutting-edge-cloud-services-offered-by-azure-in-2020",
        permanent: true
      },
      {
        source: "/blog/project-management/business-analysts-and-project-managers-a-comparison-of-their-roles-and-responsibilities",
        destination: "/blog/data-science/business-analysts-and-project-managers-a-comparison-of-their-roles-and-responsibilities",
        permanent: true
      },
      {
        source: "/corporate/training",
        destination: "/corporate/enterprise",
        permanent: true
      },
      {
        source: "/enterprise",
        destination: "/corporate/enterprise",
        permanent: true
      },
      {
        source: "/-ab-variant-9f17f636-09bb-439f-8ed3-53d477f134be",
        destination: "/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/masterclass/weather-killing-business-find-out-with-tableau-forecasting",
        destination: "http://www.odinschool.com/masterclass/weather-killing-business-find-out-with-tableau-forecasting",
        permanent: true
      },
      {
        source: "/data-science/master-class/thank-you",
        destination: "/master-class/thank-you",
        permanent: true
      },
      {
        source: "/data-science/master-class",
        destination: "/masterclass/weather-killing-business-find-out-with-tableau-forecasting",
        permanent: true
      },
      {
        source: "/master-class/thank-you",
        destination: "/masterclass/thank-you",
        permanent: true
      },
      {
        source: "/salary-calculator",
        destination: "/data-science/salary-calculator",
        permanent: true
      },
      {
        source: "/fun-with-statistics/putting-it-all-together-and-getting-you-to-do-some-analysis",
        destination: "http://www.odinschool.com/fun-with-statistics/putting-it-all-together-and-getting-you-to-do-some-analysis",
        permanent: true
      },
      {
        source: "/fun-with-statistics/terminology1",
        destination: "http://www.odinschool.com/fun-with-statistics/terminology1",
        permanent: true
      },
      {
        source: "/fun-with-statistics/terminology-descriptive-vs-inferential-statistics",
        destination: "http://www.odinschool.com/fun-with-statistics/terminology-descriptive-vs-inferential-statistics",
        permanent: true
      },
      {
        source: "/fun-with-statistics/stem-and-leaf-plots",
        destination: "http://www.odinschool.com/fun-with-statistics/stem-and-leaf-plots",
        permanent: true
      },
      {
        source: "/fun-with-statistics/data-measurement",
        destination: "http://www.odinschool.com/fun-with-statistics/data-measurement",
        permanent: true
      },
      {
        source: "/fun-with-statistics/charts-and-graphs",
        destination: "http://www.odinschool.com/fun-with-statistics/charts-and-graphs",
        permanent: true
      },
      {
        source: "/fun-with-statistics/pie-chart",
        destination: "http://www.odinschool.com/fun-with-statistics/pie-chart",
        permanent: true
      },
      {
        source: "/fun-with-statistics/pareto-chart",
        destination: "http://www.odinschool.com/fun-with-statistics/pareto-chart",
        permanent: true
      },
      {
        source: "/fun-with-statistics/quiz-on-data-measurement",
        destination: "http://www.odinschool.com/fun-with-statistics/quiz-on-data-measurement",
        permanent: true
      },
      {
        source: "/fun-with-statistics/statistical-measures",
        destination: "http://www.odinschool.com/fun-with-statistics/statistical-measures",
        permanent: true
      },
      {
        source: "/fun-with-statistics/bar-charts",
        destination: "http://www.odinschool.com/fun-with-statistics/bar-charts",
        permanent: true
      },
      {
        source: "/fun-with-statistics/histograms",
        destination: "http://www.odinschool.com/fun-with-statistics/histograms",
        permanent: true
      },
      {
        source: "/fun-with-statistics/scatter-plot",
        destination: "http://www.odinschool.com/fun-with-statistics/scatter-plot",
        permanent: true
      },
      {
        source: "/fun-with-statistics/some-more-charts",
        destination: "http://www.odinschool.com/fun-with-statistics/some-more-charts",
        permanent: true
      },
      {
        source: "/fun-with-statistics/descriptive-statistics",
        destination: "http://www.odinschool.com/fun-with-statistics/descriptive-statistics",
        permanent: true
      },
      {
        source: "/fun-with-statistics/measures-of-central-tendency",
        destination: "http://www.odinschool.com/fun-with-statistics/measures-of-central-tendency",
        permanent: true
      },
      {
        source: "/fun-with-statistics/mean",
        destination: "http://www.odinschool.com/fun-with-statistics/mean",
        permanent: true
      },
      {
        source: "/fun-with-statistics/outliers",
        destination: "http://www.odinschool.com/fun-with-statistics/outliers",
        permanent: true
      },
      {
        source: "/fun-with-statistics/normal-distribution",
        destination: "http://www.odinschool.com/fun-with-statistics/normal-distribution",
        permanent: true
      },
      {
        source: "/fun-with-statistics/median",
        destination: "http://www.odinschool.com/fun-with-statistics/median",
        permanent: true
      },
      {
        source: "/fun-with-statistics/mode",
        destination: "http://www.odinschool.com/fun-with-statistics/mode",
        permanent: true
      },
      {
        source: "/fun-with-statistics/measures-of-asymmetry",
        destination: "http://www.odinschool.com/fun-with-statistics/measures-of-asymmetry",
        permanent: true
      },
      {
        source: "/fun-with-statistics/skewness",
        destination: "http://www.odinschool.com/fun-with-statistics/skewness",
        permanent: true
      },
      {
        source: "/fun-with-statistics/kurtosis",
        destination: "http://www.odinschool.com/fun-with-statistics/kurtosis",
        permanent: true
      },
      {
        source: "/fun-with-statistics/measures-of-variability",
        destination: "http://www.odinschool.com/fun-with-statistics/measures-of-variability",
        permanent: true
      },
      {
        source: "/fun-with-statistics/variance",
        destination: "http://www.odinschool.com/fun-with-statistics/variance",
        permanent: true
      },
      {
        source: "/fun-with-statistics/standard-deviation",
        destination: "http://www.odinschool.com/fun-with-statistics/standard-deviation",
        permanent: true
      },
      {
        source: "/fun-with-statistics/coefficient-of-variation",
        destination: "http://www.odinschool.com/fun-with-statistics/coefficient-of-variation",
        permanent: true
      },
      {
        source: "/fun-with-statistics/measures-of-relationships-between-variables",
        destination: "http://www.odinschool.com/fun-with-statistics/measures-of-relationships-between-variables",
        permanent: true
      },
      {
        source: "/fun-with-statistics/covariance",
        destination: "http://www.odinschool.com/fun-with-statistics/covariance",
        permanent: true
      },
      {
        source: "/fun-with-statistics/lets-make-statistics-fun",
        destination: "http://www.odinschool.com/fun-with-statistics/lets-make-statistics-fun",
        permanent: true
      },
      {
        source: "/fun-with-statistics/correlation",
        destination: "http://www.odinschool.com/fun-with-statistics/correlation",
        permanent: true
      },
      {
        source: "/fun-with-statistics",
        destination: "http://www.odinschool.com/fun-with-statistics",
        permanent: true
      },
      {
        source: "/fun-with-statistics/thank-you",
        destination: "http://www.odinschool.com/fun-with-statistics/thank-you",
        permanent: true
      },
      {
        source: "/test-header-page",
        destination: "/resume-builder",
        permanent: true
      },
      {
        source: "/data-science/career-opportunities",
        destination: "http://www.odinschool.com/data-science/career-opportunities",
        permanent: true
      },
      {
        source: "/masterclass/analyzing-loan-application-data-using-pytho",
        destination: "/masterclass/analyzing-loan-application-data-using-python",
        permanent: true
      },
      {
        source: "/data-science-course",
        destination: "http://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source: "/careers",
        destination: "http://www.odinschool.com/careers",
        permanent: true
      },
      {
        source: "/masterclass/learn-to-build-a-candy-crush-style-game",
        destination: "/ful-stack-foundation-bootcamp",
        permanent: true
      },
      {
        source: "/ful-stack-foundation-bootcamp",
        destination: "/full-stack-foundation-bootcamp",
        permanent: true
      },
      {
        source: "/full-stack-foundation-bootcamp",
        destination: "http://www.odinschool.com/full-stack-foundation-bootcamp",
        permanent: true
      },
      {
        source: "/masterclass/demystifying-deep-learning-a-visual-journey",
        destination: "http://www.odinschool.com/events",
        permanent: true
      },
      {
        source: "/full-stack-java-developer-bootcamp/application/thank-you",
        destination: "/full-stack-software-development-bootcamp/application/thank-you/eligible",
        permanent: true
      },
      {
        source: "/full-stack-java-developer-bootcamp/application/thank-you/not-eligible",
        destination: "/full-stack-software-development-bootcamp/application/thank-you/not-eligible",
        permanent: true
      },
      {
        source: "/enterprise",
        destination: "http://www.odinschool.com/corporate/enterprise",
        permanent: true
      },
      {
        source: "/big-data-hadoop-developer-training-instructor-led",
        destination: "http://www.odinschool.com",
        permanent: true
      },
      {
        source: "/bootcamps-hyderabad",
        destination: "/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/masterclass/paid/thankyou",
        destination: "/masterclass/paid/thank-you",
        permanent: true
      },
      {
        source: "/opencampus/big-data-developer/what-is-big-data",
        destination: "http://www.odinschool.com/learning-hub/big-data-developer/what-is-big-data",
        permanent: true
      },
      {
        source: "/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession",
        destination: "/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession/22-feb-2023",
        permanent: true
      },
      {
        source: "/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession/22-feb-2023",
        destination: "/college/webinar/22-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession",
        permanent: true
      },
      {
        source: "/college/masterclass/thank-you",
        destination: "/college/webinar/thank-you",
        permanent: true
      },
      {
        source: "/opencampus/hadoop-administrator/what-is-hadoop",
        destination: "http://www.odinschool.com/learning-hub/hadoop-administrator/what-is-hadoop",
        permanent: true
      },
      {
        source: "/college/webinar/23-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession-0",
        destination: "/college/webinar/23-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession",
        permanent: true
      },
      {
        source: "/opencampus/machine-learning/what-is-machine-learning",
        destination: "http://www.odinschool.com/learning-hub/machine-learning/what-is-machine-learning",
        permanent: true
      },
      {
        source: "/business-analytics-bootcamp",
        destination: "/business-analytics-bootcamp-old",
        permanent: true
      },
      {
        source: "/-ab-variant-d29edbdc-dadc-4688-b408-847ddf48dd9b",
        destination: "/full-stack/salary-calculator",
        permanent: true
      },
      {
        source: "/-ab-variant-df19fbda-3a77-48bf-901c-16df067364f9",
        destination: "/data-science/salary-calculator",
        permanent: true
      },
      {
        source: "/odinsights",
        destination: "/events",
        permanent: true
      },
      {
        source: "/datascience-bootcamp-v3",
        destination: "/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/masterclass",
        destination: "/events",
        permanent: true
      },
      {
        source: "/full-stack-software-development-bootcamp/application/thank-you/not-eligible/v3",
        destination: "/full-stack-software-development-bootcamp/application/thank-you/not-eligible",
        permanent: true
      },
      {
        source: "/-ab-variant-a5b78f2a-e8cf-42fa-8b05-58b97def8fc1",
        destination: "/-ab-variant-f87842ff-42fe-408d-93ba-23a1ae551fbd",
        permanent: true
      },
      {
        source: "/v3-hire-from-us",
        destination: "http://www.odinschool.com/v3-hire-from-us",
        permanent: true
      },
      {
        source: "/v3-about-us",
        destination: "http://www.odinschool.com/v3-about-us",
        permanent: true
      },
      {
        source: "/v3-contact-us",
        destination: "http://www.odinschool.com/v3-contact-us",
        permanent: true
      },
      {
        source: "/v3-home",
        destination: "http://www.odinschool.com/v3-home",
        permanent: true
      },
      {
        source: "/v3-contact-us",
        destination: "/contact-us",
        permanent: true
      },
      {
        source: "/contact-us",
        destination: "/v3-contact-us",
        permanent: true
      },
      {
        source: "/v3-about-us",
        destination: "/about-us",
        permanent: true
      },
      {
        source: "/v3-hire-from-us",
        destination: "/corporate/hire-odin-grads",
        permanent: true
      },
      {
        source: "/v3-home",
        destination: "/",
        permanent: true
      },
      {
        source: "/terms-of-use-v3-0",
        destination: "/sitemap-v3",
        permanent: true
      },
      {
        source: "/v3-faqs",
        destination: "http://www.odinschool.com/v3-faqs",
        permanent: true
      },
      {
        source: "/privacy-policy-v3",
        destination: "http://www.odinschool.com/privacy-policy-v3",
        permanent: true
      },
      {
        source: "/terms-of-use-v3",
        destination: "http://www.odinschool.com/terms-of-use-v3",
        permanent: true
      },
      {
        source: "/sitemap-v3",
        destination: "http://www.odinschool.com/sitemap-v3",
        permanent: true
      },
      {
        source: "/terms-of-use-v3",
        destination: "/terms-of-use",
        permanent: true
      },
      {
        source: "/privacy-policy-v3",
        destination: "/privacy-policy",
        permanent: true
      },
      {
        source: "/v3-faqs",
        destination: "/faqs",
        permanent: true
      },
      {
        source: "/sitemap",
        destination: "/m22/sitemap",
        permanent: true
      },
      {
        source: "/sitemap-v3",
        destination: "/sitemap",
        permanent: true
      },
      {
        source: "/v3-corporate-listing",
        destination: "/corporate",
        permanent: true
      },
      {
        source: "/become-an-affliate-v3",
        destination: "/become-an-affiliate",
        permanent: true
      },
      {
        source: "/success-stories-v3",
        destination: "/success-stories",
        permanent: true
      },
      {
        source: "/success-stories-v3",
        destination: "http://www.odinschool.com/success-stories-v3",
        permanent: true
      },
      {
        source: "/success-stories",
        destination: "/m22/success-stories",
        permanent: true
      },
      {
        source: "/business-analytics-bootcamp",
        destination: "/datascience-bootcamp",
        permanent: true
      },
      {
        source: "/bootcamps",
        destination: "/v3-bootcamps",
        permanent: true
      },
      {
        source: "/v3-events",
        destination: "/events",
        permanent: true
      },
      {
        source: "/v3-enterprise",
        destination: "/corporate/enterprise",
        permanent: true
      },
      {
        source: "/reviews",
        destination: "http://www.odinschool.com/reviews",
        permanent: true
      },
      {
        source: "/v3-reviews",
        destination: "/reviews",
        permanent: true
      },
      {
        source: "/digital-marketing-bootcamp",
        destination: "http://www.odinschool.com/digital-marketing-course",
        permanent: true
      },
      {
        source: "/v3-careers",
        destination: "/careers",
        permanent: true
      },
      {
        source: "/v3-careers",
        destination: "http://www.odinschool.com/v3-careers",
        permanent: true
      },
      {
        source: "/careers",
        destination: "/m22/careers",
        permanent: true
      },
      {
        source: "/digital-marketing-bootcamp/application",
        destination: "http://www.odinschool.com/digital-marketing-bootcamp/application",
        permanent: true
      },
      {
        source: "/fullstack-category",
        destination: "/full-stack-software-development-bootcamp",
        permanent: true
      },
      {
        source: "/corporate/enterprise",
        destination: "/training-solution",
        permanent: true
      },
      {
        source: "/masterclass/data-drift-detection-and-model-monitoring",
        destination: "/masterclass/learn-to-create-insurance-web-aggregator-from-scratch-with-mern-stack",
        permanent: true
      },
      {
        source: "/corporate/hire-odin-grads",
        destination: "/talent-solution",
        permanent: true
      },
      {
        source: "/full-stack-software-development-bootcamp",
        destination: "https://www.odinschool.com/full-stack-developer-course",
        permanent: true
      },
      {
        source: "/full-stack-salary-calculator",
        destination: "/full-stack/salary-calculator",
        permanent: true
      },
      {
        source: "/data-science-salary-calculator",
        destination: "http://www.odinschool.com/data-science-salary-calculator",
        permanent: true
      },
      {
        source: "/data-science-salary-calculator",
        destination: "/data-science-salary-calculator-archived",
        permanent: true
      },
      {
        source: "/data-science-salary-calculator",
        destination: "/data-science/salary-calculator",
        permanent: true
      },
      {
        source: "/v3-become-a-mentor",
        destination: "/become-a-mentor",
        permanent: true
      },
      {
        source: "/careers/application/thank-you/eligible",
        destination: "/careers/application",
        permanent: true
      },
      {
        source: "/thank-you-0",
        destination: "/careerthank-you",
        permanent: true
      },
      {
        source: "/careerthank-you",
        destination: "/careers/application/thank-you",
        permanent: true
      },
      {
        source: "/test/checkout-0-0",
        destination: "/checkout",
        permanent: true
      },
      {
        source: "/v3-tools",
        destination: "/resources",
        permanent: true
      },
      {
        source: "/v3-odin-talks",
        destination: "/odintalks",
        permanent: true
      },
      {
        source: "/checkout-ab",
        destination: "/checkout",
        permanent: true
      },
      {
        source: "/masterclass/analyzing-loan-application-data-using-python-understanding-the-factors-behind-loan-default",
        destination: "/masterclass/analyzing-loan-application-data-using-python",
        permanent: true
      },
      {
        source: "/rahul-saha",
        destination: "http://www.odinschool.com/rahul-saha",
        permanent: true
      },
      {
        source: "/rahul-saha",
        destination: "/odintalks/rahul-saha",
        permanent: true
      },
      {
        source: "/data-science/affiliate/demo-class",
        destination: "https://www.odinschool.com/data-science/demo-class",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/affiliate/application/thank-you/eligible",
        destination: "https://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/job-assistance",
        destination: "https://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source: "/data-science/affiliate/demo-class/thank-you",
        destination: "https://www.odinschool.com/data-science/demo-class/thank-you",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/bangalore-v3",
        destination: "/datascience-bootcamp/bangalore-v3-archived",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/hyderabad-v3",
        destination: "/datascience-bootcamp/hyderabad-v3-archived",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/mumbai-v3",
        destination: "/datascience-bootcamp/mumbai",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/bangalore-v3",
        destination: "/datascience-bootcamp/bangalore",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/hyderabad-v3",
        destination: "/datascience-bootcamp/hyderabad",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/pune-v3",
        destination: "/datascience-bootcamp/pune",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/mumbai-v3",
        destination: "/datascience-bootcamp/mumbai",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/mumbai-v3",
        destination: "/datascience-bootcamp/mumbai-v3-archived",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/chennai-v3",
        destination: "/datascience-bootcamp/chennai-v3-archived",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/pune-v3",
        destination: "/datascience-bootcamp/pune-v3-archived",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/chennai-v3",
        destination: "/datascience-bootcamp/chennai",
        permanent: true
      },
      {
        source: "/datascience-bootcamp-8",
        destination: "http://20029733.hs-sites.com/datascience-bootcamp-8",
        permanent: true
      },
      {
        source: "/quotations-crm",
        destination: "/quotations",
        permanent: true
      },
      {
        source: "/performance-marketing-bootcamp",
        destination: "http://www.odinschool.com/performance-marketing-bootcamp",
        permanent: true
      },
      {
        source: "/performance-marketing-bootcamp",
        destination: "/digital-marketing/performance-marketing-bootcamp",
        permanent: true
      },
      {
        source: "/resume-builder/thank-you",
        destination: "http://20029733.hs-sites.com/resume-builder/thank-you",
        permanent: true
      },
      {
        source: "/v3-resume",
        destination: "/resume-builder",
        permanent: true
      },
      {
        source: "/become-an-affiliate",
        destination: "http://www.odinschool.com",
        permanent: true
      },
      {
        source: "/microsoft-azure-fundamentals-training-course",
        destination: "http://www.greycampus.in/microsoft-azure-fundamentals-training-course",
        permanent: true
      },
      {
        source:"/sap-finance-and-controlling-training-instructor-led",
        destination: "http://www.greycampus.in/sap-finance-and-controlling-training-instructor-led",
        permanent: true
      },
      {
        source:"/blog/project-management-ten-essential-time-management-strategies",
        destination: "https://www.greycampus.com/blog/project-management/ten-essential-time-management-strategies/",
        permanent: true
      },
      {
        source:"/blog/project-management-pmp-prep-on-a-shoestring-budget",
        destination: "https://www.greycampus.com/blog/project-management/pmp-prep-on-a-shoestring-budget/",
        permanent: true
      },
      {
        source:"/blog/agile-and-scrum-why-get-scrum-master-certification-in-2021",
        destination: "https://www.greycampus.com/blog/agile-and-scrum/why-get-scrum-master-certification-in-2021/",
        permanent: true
      },
      {
        source: "/datascience-bootcamp-10",
        destination: "http://20029733.hs-sites.com/datascience-bootcamp-10",
        permanent: true
      },
      {
        source: "/web-developer-bootcamp",
        destination: "https://www.odinschool.com/web-development-course",
        permanent: true
      },
      {
        source:"/blog/project-management-seven-steps-to-build-great-teams-at-the-workplace",
        destination: "https://www.greycampus.com/blog/project-management/seven-steps-to-build-great-teams-at-the-workplace",
        permanent: true
      },
      {
        source:"/blog/cybersecurity-comptia-security-plus-study-guide",
        destination: "https://www.greycampus.com/blog/cybersecurity/comptia-security-plus-study-guide",
        permanent: true
      },
      {
        source:"/blog/project-management-ai-powered-project-management-tools",
        destination: "https://www.greycampus.com/blog/project-management/ai-powered-project-management-tools/",
        permanent: true
      },
      {
        source:"/blog/quality-management-quality-engineering-from-everything-about-it-to-the-kind-of-job-roles-in-the-field",
        destination: "https://www.greycampus.com/blog/quality-management/quality-engineering-from-everything-about-it-to-the-kind-of-job-roles-in-the-field",
        permanent: true
      },
      {
        source:"/blog/project-management-what-are-project-deliverables",
        destination: "https://www.greycampus.com/blog/project-management/what-are-project-deliverables/",
        permanent: true
      },
      {
        source:"/blog/project-management-steps-involved-in-defining-project-scope",
        destination: "https://www.greycampus.com/blog/project-management/steps-involved-in-defining-project-scope",
        permanent: true
      },
      {
        source: "/digital-marketing",
        destination: "https://www.odinschool.com/digital-marketing/performance-marketing-bootcamp",
        permanent: true
      },
      {
        source: "/blog/karthik",
        destination: "/blog/from-logistics-to-data-analysis-karthiks-career-transition-to-global-transportation-analyst",
        permanent: true
      },
      {
        source: "/thankyou",
        destination: "https://www.odinschool.com/thank-you",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/scholarship/application/thank-you",
        destination: "https://www.odinschool.com/data-science-bootcamp/scholarship/application/thank-you",
        permanent: true
      },
      {
        source: "/digital-marketing/performance-marketing-bootcamp",
        destination: "/digital-marketing/performance-marketing-bootcamp-archived",
        permanent: true
      },
      {
        source: "/digital-marketing/performance-marketing-bootcamp",
        destination: "/digital-marketing-course",
        permanent: true
      },
      {
        source: "/digital-marketing/performance-marketing-bootcamp",
        destination: "/digital-marketing-course",
        permanent: true
      },
      {
        source:"/checkout",
        destination: "/checkout/old",
        permanent: true
      },
      {
        source:"/payment",
        destination: "/checkout",
        permanent: true
      },
      {
        source:"/thank-you-15-11",
        destination: "/thank-you-09-12",
        permanent: true
      },
      {
        source:"/career/roadmap-to-success-15-11",
        destination: "/career/roadmap-to-success-09-12",
        permanent: true
      },
      {
        source: "/blog/are-data-science-courses-affordable-in-india",
        destination: "/blog/why-is-data-science-always-in-demand",
        permanent: true
      },
      {
        source:"/charting-success-journey-25-11",
        destination: "/how-to-grow-your-salary-25-11",
        permanent: true
      },
      {
        source: "/v3/datascience-bootcamp-with-job-assistance",
        destination: "/datascience-bootcamp-with-job-assistance",
        permanent: true
      },
      {
        source: "/blog/a-blueprint-for-data-science-career-advancement",
        destination: "/blog/data-science-roadmap-2024-everything-you-should-know",
        permanent: true
      },
      {
        source: "/varsity",
        destination: "http://www.odinschool.com/varsity",
        permanent: true
      },
      {
        source: "/varsity/tutorial",
        destination: "http://www.odinschool.com/varsity/tutorial",
        permanent: true
      },
      {
        source: "/data-science-salary-calculator-archived",
        destination: "/data-science-interview/thank-you",
        permanent: true
      },
      {
        source: "/verify-certificate",
        destination: "https://go.odinschool.com/verify-certificate",
        permanent: true
      },
      {
        source:"/retail",
        destination: "/",
        permanent: true
      },
      {
        source:"/enterprise",
        destination: "https://www.greycampus.com/",
        permanent: true
      },
      {
        source: "/data-analyst-career-hackathon-odinschool",
        destination: "/masterclass/data-analyst-career-hackathon-hack-your-future",
        permanent: true
      },
      {
        source: "/v3-ds-guide",
        destination: "/data-science-guide-pdf",
        permanent: true
      },
      {
        source: "/os-pl-300-bootcamp",
        destination: "/power-bi-certification-course",
        permanent: true
      },
      {
        source: "/power-bi-certification-course",
        destination: "http://www.odinschool.com/power-bi-certification-course",
        permanent: true
      },
      {
        source: "/blog/data-science-pay-after-placement-programs-5-top-risks",
        destination: "/blog/data-science-pay-after-placement-pros-and-cons",
        permanent: true
      },
      {
        source: "/blog/web-developer-salary-in-india-2024-insights-for-freshers-experienced",
        destination: "/blog/web-development-salary-in-india-2024-insights-for-freshers-experienced",
        permanent: true
      },
      {
        source: "/blog/performance-marketing-role-in-the-great-indian-festival-and-big-billion-days",
        destination: "/blog/digital-marketing-in-the-great-indian-festival-and-big-billion-days",
        permanent: true
      },
      {
        source: "/varsity/tutorial",
        destination: "/varsity",
        permanent: true
      },
      {
        source: "/blog/data-science-driving-constant-gratification-in-2023",
        destination: "/blog/data-science-driving-constant-gratification",
        permanent: true
      },
      {
        source: "/varsity/tutorial/sql-and-mysql/data-extraction-transformation-and-loading-etl",
        destination: "https://www.odinschool.com/varsity/sql/data-extraction-transformation-and-loading-etl",
        permanent: true
      },
      {
        source: "/varsity/tutorial/sql/mysql-mastery/advanced-database-design-and-constraints",
        destination: "https://www.odinschool.com/varsity/sql/advanced-database-design-and-constraints",
        permanent: true
      },
      {
        source: "/varsity/tutorial/sql/mysql-mastery/basic-mysql-operations",
        destination: "https://www.odinschool.com/varsity/sql/basic-mysql-operations",
        permanent: true
      },
      {
        source: "/varsity/tutorial/sql/mysql-mastery/introduction-to-databases-sql-and-mysql",
        destination: "https://www.odinschool.com/varsity/sql/introduction-to-databases-sql-and-mysql",
        permanent: true
      },
      {
        source: "/digital-marketing-bootcamp/application",
        destination: "https://www.odinschool.com/digital-marketing-course",
        permanent: true
      },
      {
        source: "/blog/the-symbiosis-of-data-science-and-artificial-intelligence",
        destination: "/blog/data-science-and-artificial-intelligence-partners-in-tech-innovation",
        permanent: true
      },
      {
        source: "/data-science-bootcamp/checkout",
        destination: "http://dev.odinschool.com/data-science-bootcamp/checkout",
        permanent: true
      },
      {
        source: "/bootcamps/success-stories",
        destination: "http://www.odinschool.com/bootcamps/success-stories",
        permanent: true
      },
      {
        source: "/events/exploring-data-analyst-roles",
        destination: "http://www.odinschool.com/events/exploring-data-analyst-roles",
        permanent: true
      },
      {
        source: "/events/webinar-18-jan",
        destination: "/events/exploring-data-analyst-roles",
        permanent: true
      },
      {
        source: "/blog/shashanks-journey-through-start-ups-and-data-science-discoveries",
        destination: "/blog/how-shashank-rebooted-his-career-with-data-science",
        permanent: true
      },
      {
        source: "/power-bi-certification-bootcamp",
        destination: "/power-bi-certification-course",
        permanent: true
      },
      {
        source: "/power-bi-certification-course/checkout",
        destination: "http://www.odinschool.com/power-bi-certification-course/checkout",
        permanent: true
      },
      {
        source: "/power-bi-certification-bootcamp/checkout",
        destination: "/power-bi-certification-course/checkout",
        permanent: true
      },
      {
        source: "/blog/why-is-data-science-always-in-demand&gt;",
        destination: "https://www.odinschool.com/blog/why-is-data-science-always-in-demand",
        permanent: true
      },
      {
        source: "/os-webinar-13-feb",
        destination: "/mastering-data-science-webinar",
        permanent: true
      },
      {
        source: "/events/mastering-data-science-webinar",
        destination: "http://www.odinschool.com/events/mastering-data-science-webinar",
        permanent: true
      },
      {
        source: "/mastering-data-science-webinar",
        destination: "/events/mastering-data-science-webinar",
        permanent: true
      },
      {
        source: "/masterclass/digital-marketing-for-entrepreneurs",
        destination: "https://www.odinschool.com/events",
        permanent: true
      },
      {
        source: "/blog/13-most-in-demand-data-science-skills-in-2023",
        destination: "/blog/13-most-in-demand-data-science-skills",
        permanent: true
      },
      {
        source: "/blog/reshaping-destiny-soniyas-inspiring-journey-from-hr-to-data-science",
        destination: "https://www.odinschool.com/blog/tag/success-story",
        permanent: true
      },
      {
        source: "/blog/saravanas-journey-of-learning-problems-and-a-career-change",
        destination: "/blog/saravanas-journey-of-learning-challenges-and-a-career-change",
        permanent: true
      },
      {
        source: "/os-webinar-17-feb",
        destination: "/events/emerging-job-opportunities-in-web-development",
        permanent: true
      },
      {
        source: "/events/emerging-job-opportunities-in-web-development",
        destination: "/events/opportunities-in-web-development",
        permanent: true
      },
      {
        source: "/events/opportunities-in-web-development",
        destination: "http://www.odinschool.com/events/opportunities-in-web-development",
        permanent: true
      },
      {
        source: "/page-speed-test",
        destination: "http://dev.odinschool.com/page-speed-test",
        permanent: true
      },
      {
        source: "/varsity/big-data-fundamentals/introduction-to-mongo-db",
        destination: "https://www.odinschool.com/varsity/big-data-fundamentals/fundamentals-of-mongodb",
        permanent: true
      },
      {
        source: "/blog/lights-camera-data-an-actors-transformation-into-a-lead-analyst",
        destination: "/blog/lights-camera-data-an-actor-transformation-into-a-lead-analyst",
        permanent: true
      },
      {
        source: "/events/building-blocks-and-career-pathways",
        destination: "http://www.odinschool.com/events/building-blocks-and-career-pathways",
        permanent: true
      },
      {
        source: "/os-webinar-/-06-mar",
        destination: "/events/building-blocks-and-career-pathways",
        permanent: true
      },
      {
        source: "/courses",
        destination: "http://www.odinschool.com/courses",
        permanent: true
      },
      {
        source: "/software-engineering/react-web-development-course",
        destination: "/web-development-course",
        permanent: true
      },
      {
        source: "/software-engineering/react-web-development-course",
        destination: "/web-development-course",
        permanent: true
      },
      {
        source: "/datascience-bootcamp",
        destination: "https://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source: "/data-science/demo-class",
        destination: "https://www.odinschool.com/events",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/data-science-course",
        destination: "https://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/brochure",
        destination: "https://www.odinschool.com/data-science-course",
        permanent: true
      },
      {
        source: "/blog/support-role-to-bda-to-sr.-data-analyst-at-sony-with-15-lpa",
        destination: "/blog/support-role-to-bda-to-sr.-data-analyst-at-sony-with-huge-salary",
        permanent: true
      },
      {
        source: "/os-webinar/-16-mar",
        destination: "/events/essential-skills-for-advancement-in-reactjs",
        permanent: true
      },
      {
        source: "/events/essential-skills-for-advancement-in-reactjs",
        destination: "http://www.odinschool.com/events/essential-skills-for-advancement-in-reactjs",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/hyderabad",
        destination: "/data-science-course/hyderabad",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/pune",
        destination: "/data-science-course/pune",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/chennai",
        destination: "/data-science-course/chennai",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/mumbai",
        destination: "/data-science-course/mumbai",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/bangalore",
        destination: "/data-science-course/bangalore",
        permanent: true
      },
      {
        source: "/data-science-course-0",
        destination: "/data-science-course-version-b-testing",
        permanent: true
      },
      {
        source: "/os-web-development-new-product",
        destination: "/web-development-course/testing-pagespeed",
        permanent: true
      },
      {
        source: "/web-development-course/testing-pagespeed",
        destination: "http://www.odinschool.com/web-development-course/testing-pagespeed",
        permanent: true
      },
      {
        source: "/web-development-course",
        destination: "/web-development-course/oldpage",
        permanent: true
      },
      {
        source: "/web-development-course/testing-pagespeed",
        destination: "/web-development-course",
        permanent: true
      },
      {
        source: "/rwd/checkout",
        destination: "/checkout/rwd",
        permanent: true
      },
      {
        source: "/-ab-variant-a7c55f0a-e3ed-4747-beaa-5ef9e73bedf5",
        destination: "/data-science-course",
        permanent: true
      },
      {
        source: "/-ab-variant-4e73bc59-638f-4c91-980f-ef993d2a6e87",
        destination: "/",
        permanent: true
      },
      {
        source: "/form-page-speed-test",
        destination: "http://dev.odinschool.com/form-page-speed-test",
        permanent: true
      },
      {
        source: "/events/mastering-interviews-with-generative-ai",
        destination: "http://www.odinschool.com/events/mastering-interviews-with-generative-ai",
        permanent: true
      },
      {
        source: "/os-webinar-/12-apr",
        destination: "/events/mastering-interviews-with-generative-ai",
        permanent: true
      },
      {
        source: "/dsc-test-page-speed-2",
        destination: "http://dev.odinschool.com/dsc-test-page-speed-2",
        permanent: true
      },
      {
        source: "/accountant",
        destination: "/certified-business-accountant-course",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/book-a-demo",
        destination: "https://www.odinschool.com/events",
        permanent: true
      },
      {
        source: "/software-engineering/react-web-development-course/book-a-demo",
        destination: "https://www.odinschool.com/events",
        permanent: true
      },
      {
        source: "/datascience-bootcamp/book-a-demo/register",
        destination: "https://www.odinschool.com/events",
        permanent: true
      },
      {
        source: "/blog/unlocking-vast-potential-full-stack-development-opportunities-in-the-mobile-market",
        destination: "/blog/unlocking-web-development-opportunities-in-the-mobile-market",
        permanent: true
      },
      {
        source: "/blog/enhancing-mental-health-assessment-through-full-stack-development-bridging-technology-and-mental-well-being",
        destination: "/blog/enhancing-mental-health-assessment-through-web-development",
        permanent: true
      },
      {
        source: "/blog/behavioural-data-science-interview-questions-are-not-hr-questions",
        destination: "/blog/master-behavioral-interview-questions-data-science-interview",
        permanent: true
      },
      {
        source: "/certified-business-accountant-course",
        destination: "http://www.odinschool.com/certified-business-accountant-course",
        permanent: true
      },
      {
        source: "/os-webinar/-may-25",
        destination: "/events/job-search-with-generative-ai",
        permanent: true
      },
      {
        source: "/os-webinar-/16-may",
        destination: "/events/current-trends-in-the-finance-accounting-job-market",
        permanent: true
      },
      {
        source: "/events/current-trends-in-the-finance-accounting-job-market",
        destination: "http://www.odinschool.com/events/current-trends-in-the-finance-accounting-job-market",
        permanent: true
      },
      {
        source: "/certified-business-accountant-course/scholarship-registration",
        destination: "http://www.odinschool.com/certified-business-accountant-course/scholarship-registration",
        permanent: true
      },
      {
        source: "/os-certified-business-accountant-course/scholarship-test",
        destination: "/certified-business-accountant-course/scholarship-registration",
        permanent: true
      },
      {
        source: "/events/job-search-with-generative-ai",
        destination: "http://www.odinschool.com/events/job-search-with-generative-ai",
        permanent: true
      },
      {
        source: "/manipal-mba-course",
        destination: "/manipal-university-jaipur/mba",
        permanent: true
      },
      {
        source: "/manipal-university-jaipur/mba",
        destination: "/online-mba-manipal-university-jaipur",
        permanent: true
      },
      {
        source: "/manipal-university-jaipur/mca",
        destination: "/online-mca-manipal-university-jaipur",
        permanent: true
      },
      {
        source: "/university-programs",
        destination: "http://www.odinschool.com/university-programs",
        permanent: true
      },
      {
        source: "/os-university-listings",
        destination: "/university-programs",
        permanent: true
      },
      {
        source: "/online-mca-manipal-university-sikkim",
        destination: "/online-mca-sikkim-manipal-university",
        permanent: true
      },
      {
        source: "/online-mba-lovely-professional-university",
        destination: "http://www.odinschool.com/online-mba-lovely-professional-university",
        permanent: true
      },
      {
        source: "/os-university-lpu-mba",
        destination: "/online-mba-lovely-professional-university",
        permanent: true
      },
      {
        source: "/os-university-lpu-mca",
        destination: "/online-mca-lovely-professional-university",
        permanent: true
      },
      {
        source: "/online-mca-lovely-professional-university",
        destination: "http://www.odinschool.com/online-mca-lovely-professional-university",
        permanent: true
      },
      {
        source: "/mba-courses",
        destination: "http://www.odinschool.com/mba-courses",
        permanent: true
      },
      {
        source: "/mca-courses",
        destination: "http://www.odinschool.com/mca-courses",
        permanent: true
      },
      {
        source: "/os-university-mba-programs-listing",
        destination: "/mba-courses",
        permanent: true
      },
      {
        source: "/os-university-mca-programs-listing",
        destination: "/mca-courses",
        permanent: true
      },
      {
        source: "/online-bca-manipal-university-jaipur",
        destination: "http://www.odinschool.com/online-bca-manipal-university-jaipur",
        permanent: true
      },
      {
        source: "/digital-marketing-bootcamp",
        destination: "https://www.odinschool.com/digital-marketing-course",
        permanent: true
      },
      {
        source: "/os-university-manipal-jaipur-bca",
        destination: "/online-bca-manipal-university-jaipur",
        permanent: true
      },
      {
        source: "/online-mba-course-mumbai",
        destination: "http://www.odinschool.com/online-mba-course-mumbai",
        permanent: true
      },
      {
        source: "/online-mba-course-pune",
        destination: "http://www.odinschool.com/online-mba-course-pune",
        permanent: true
      },
      {
        source: "/os-university-mba-programs-mumbai",
        destination: "/online-mba-course-mumbai",
        permanent: true
      },
      {
        source: "/os-university-mba-programs-pune",
        destination: "/online-mba-course-pune",
        permanent: true
      },
      {
        source: "/os-university-amity-mba",
        destination: "/online-mba-amity-university",
        permanent: true
      },
      {
        source: "/online-mba-amity-university",
        destination: "http://www.odinschool.com/online-mba-amity-university",
        permanent: true
      },
      {
        source: "/os-university-muj-bba",
        destination: "/online-bba-manipal-university-jaipur",
        permanent: true
      },
      {
        source: "/online-bba-manipal-university-jaipur",
        destination: "http://www.odinschool.com/online-bba-manipal-university-jaipur",
        permanent: true
      },
      {
        source: "/os-iit-guwahatis-certification",
        destination: "/generative-ai-course-iitg",
        permanent: true
      },
      {
        source: "/generative-ai-course-iitg",
        destination: "http://www.odinschool.com/generative-ai-course-iitg",
        permanent: true
      },
      {
        source: "/-ab-variant-d0ca8ba2-8488-4322-be8b-e75607c52b19",
        destination: "/",
        permanent: true
      },
      {
        source: "/courses",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/university-programs",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/os-microsoft-azure-900-webpage",
        destination: "/azure-course-with-az-900-certification",
        permanent: true
      },
      {
        source: "/os-microsoft-azure-900-webpage/checkout",
        destination: "/azure-course-with-az-900-certification/checkout",
        permanent: true
      },
      {
        source: "/azure-course-with-az-900-certification",
        destination: "http://www.odinschool.com/azure-course-with-az-900-certification",
        permanent: true
      },
      {
        source: "/projects-page-test-march-2024",
        destination: "/test-2024",
        permanent: true
      },
      {
        source: "/bootcamps-drafted",
        destination: "https://www.odinschool.com",
        permanent: true
      },
      {
        source: "/thank-you-26",
        destination: "http://dev.odinschool.com/thank-you-26",
        permanent: true
      },
      {
        source: "/artificial-intelligence-course",
        destination: "http://www.odinschool.com/artificial-intelligence-course",
        permanent: true
      },
      {
        source: "/os-ai-foundation-course-page",
        destination: "/artificial-intelligence-course",
        permanent: true
      },
      {
        source: "/full-stack-web-development-course-1",
        destination: "/full-stack-web-development-course",
        permanent: true
      },
      {
        source: "/full-stack-web-development-course",
        destination: "/full-stack-developer-course",
        permanent: true
      },
      {
        source: "/full-stack-developer-course",
        destination: "http://www.odinschool.com/full-stack-developer-course",
        permanent: true
      },
      {
        source: "/full-stack-foundation-bootcamp",
        destination: "https://www.odinschool.com/full-stack-developer-course",
        permanent: true
      },
      {
        source: "/data-science-course-hello-bar",
        destination: "/data-science-course-vb",
        permanent: true
      },
      {
        source: "/data-science-course-vb",
        destination: "/data-science-course/vb",
        permanent: true
      },
      {
        source: "/os-webinar/-sep-19",
        destination: "/events/how-to-crack-a-top-tier-data-science-interview",
        permanent: true
      },
      {
        source: "/events/how-to-crack-a-top-tier-data-science-interview",
        destination: "http://www.odinschool.com/events/how-to-crack-a-top-tier-data-science-interview",
        permanent: true
      },
      {
        source: "/data-science-course/email-marketing",
        destination: "http://www.odinschool.com/data-science-course/email-marketing",
        permanent: true
      },
      {
        source: "/os-webinar-/-27-sep",
        destination: "/events/10x-how-to-increase-your-productivity-using-ai",
        permanent: true
      },
      {
        source: "/events/10x-how-to-increase-your-productivity-using-ai",
        destination: "http://www.odinschool.com/events/10x-how-to-increase-your-productivity-using-ai",
        permanent: true
      },
      {
        source: "/os-cloud-computing",
        destination: "/devops-cloud-computing-course-iitg",
        permanent: true
      },
      {
        source: "/devops-cloud-computing-course-iitg",
        destination: "http://www.odinschool.com/devops-cloud-computing-course-iitg",
        permanent: true
      },
      {
        source: "/online-mba-manipal-university-jaipur",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/online-mba-lovely-professional-university",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/online-mca-sikkim-manipal-university",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/online-mba-amity-university",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/online-mca-manipal-university-jaipur",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/online-mca-lovely-professional-university",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/online-bca-manipal-university-jaipur",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/online-bba-manipal-university-jaipur",
        destination: "https://www.odinschool.com/",
        permanent: true
      },
      {
        source: "/blog-test",
        destination: "http://dev.odinschool.com/blog-test",
        permanent: true
      },
      {
        source: "/os-ds-naresh-book-a-demo",
        destination: "/ds-naresh-book-a-demo",
        permanent: true
      },
      {
        source: "/ds-naresh-book-a-demo-0",
        destination: "/ds-naresh-apply-now-yt",
        permanent: true
      },
      {
        source: "/homev4test",
        destination: "http://dev.odinschool.com/generative-ai-course-iitg/fayyaz",
        permanent: true
      },
      {
        source: "/ds-naresh-apply-now-yt",
        destination: "/ds-naresh-apply-now",
        permanent: true
      },
      {
        source: "/iim-trichy-business-analytics-for-managers-course",
        destination: "/business-analytics-course",
        permanent: true
      },
      {
        source: "/ds-naresh-apply-now",
        destination: "/data-science-course/success-story",
        permanent: true
      },
      {
        source: "/ds-naresh-book-a-demo",
        destination: "/data-science-course/book-a-demo/",
        permanent: true
      },
      {
        source: "/data-science-course/success-story",
        destination: "http://www.odinschool.com/data-science-course/success-story",
        permanent: true
      },
      {
        source: "/business-analytics-course",
        destination: "http://www.odinschool.com/business-analytics-course",
        permanent: true
      },
      {
        source: "/data-science-course/book-a-demo",
        destination: "http://www.odinschool.com/data-science-course/book-a-demo/",
        permanent: true
      },
      {
        source: "/checkout/iim",
        destination: "/business-analytics-course/checkout",
        permanent: true
      },
      {
        source: "/-ab-variant-bd158fcb-81ab-4553-8548-f8916ff23f03",
        destination: "/data-science-course",
        permanent: true
      },
      {
        source: "/os-data-science-course-usa",
        destination: "/data-science-course-usa",
        permanent: true
      },
      {
        source: "/data-science-course/checkout",
        destination: "/data-science-course-usa/checkout",
        permanent: true
      },
      {
        source: "/checkout/usa",
        destination: "/data-science-course/checkout",
        permanent: true
      },
      {
        source: "/data-science-course-usa",
        destination: "/generative-ai-course-usa",
        permanent: true
      },
      {
        source: "/data-science-course-usa/checkout",
        destination: "/generative-ai-course-iitg-usa/checkout",
        permanent: true
      },
      {
        source: "/generative-ai-course-usa",
        destination: "/applied-generative-ai-online-course",
        permanent: true
      },
      {
        source: "/generative-ai-course-iitg-usa/checkout",
        destination: "/applied-generative-ai-online-course/checkout",
        permanent: true
      },
      {
        source: "/applied-generative-ai-online-course",
        destination: "http://www.odinschool.com/applied-generative-ai-online-course",
        permanent: true
      },
      {
        source: "/os-data-science-course/metaads",
        destination: "/data-science-course/metaads",
        permanent: true
      },
      {
        source: "/os-data-science-course-metaads",
        destination: "/os-data-science-course/metaads",
        permanent: true
      },
      {
        source: "/data-science-course/metaads",
        destination: "/data-science-course/delhi",
        permanent: true
      },
      {
        source: "/data-science-course/delhi",
        destination: "http://www.odinschool.com/data-science-course/delhi",
        permanent: true
      },
      {
        source: "/jatin-test-2024",
        destination: "http://dev.odinschool.com/jatin-test-2024",
        permanent: true
      },
      {
        source: "/certified-business-accountant-course",
        destination: "https://www.odinschool.com",
        permanent: true
      },
      {
        source: "/digital-marketing-course",
        destination: "https://www.odinschool.com",
        permanent: true
      },
      {
        source: "/full-stack-developer-course",
        destination: "https://www.odinschool.com",
        permanent: true
      },
      {
        source: "/azure-course-with-az-900-certification",
        destination: "https://www.odinschool.com",
        permanent: true
      },
      {
        source: "/pg-certification-in-ds-ml-iitg",
        destination: "/certificate-course-in-data-science-and-machine-learning",
        permanent: true
      },
      {
        source: "/certificate-course-in-data-science-and-machine-learning",
        destination: "/certification-in-data-science-and-machine-learning",
        permanent: true
      },
      {
        source: "/generative-ai-course-iitg/checkout-0",
        destination: "/certification-in-data-science-and-machine-learning/checkout",
        permanent: true
      },
      {
        source: "/certification-in-data-science-and-machine-learning/checkout",
        destination: "/certificate-program-in-data-science-and-machine-learning/checkout",
        permanent: true
      },
      {
        source: "/certification-in-data-science-and-machine-learning",
        destination: "/certificate-program-in-data-science-and-machine-learning",
        permanent: true
      },
      {
        source: "/certificate-program-in-data-science-and-machine-learning",
        destination: "http://www.odinschool.com/certificate-program-in-data-science-and-machine-learning",
        permanent: true
      },
      {
        source: "/data-science-course-96",
        destination: "http://dev.odinschool.com/data-science-course-96",
        permanent: true
      },
      {
        source: "/college-students",
        destination: "/college-programs",
        permanent: true
      },
      {
        source: "/ai-analyst-program",
        destination: "/ai-analyst-course",
        permanent: true
      },
      {
        source: "/data-analyst-program",
        destination: "/data-analyst-course",
        permanent: true
      },
      {
        source: "/college-programs",
        destination: "http://www.odinschool.com/college-programs",
        permanent: true
      },
      {
        source: "/data-analyst-course",
        destination: "http://www.odinschool.com/data-analyst-course",
        permanent: true
      },
      {
        source: "/ai-analyst-course",
        destination: "http://www.odinschool.com/ai-analyst-course",
        permanent: true
      },
      {
        source: "/gen-ai-bootcamp/checkout",
        destination: "/generative-ai-bootcamp/checkout",
        permanent: true
      },
      {
        source: "/generative-ai-bootcamp",
        destination: "http://www.odinschool.com/generative-ai-bootcamp",
        permanent: true
      }

    ];
  },

  // ✅ ADDED: Headers to improve cache policy for static assets
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/uploads/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig,);