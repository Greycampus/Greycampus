import React from "react";
import lazyLoadHydrate from "next-lazy-hydrate";
import Header from "@components/css/header";
import Head from "next/head";

// ✅ Lazy load Footer (loaded only when needed)
const Footer = lazyLoadHydrate(() => import("@components/css/footer"));

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
        <Head>
        <link rel="icon" type="image/webp" href="/GC_favicon.webp" />
        </Head>
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
        </>
    );
};

export default Layout;