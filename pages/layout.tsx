import React from "react";
import dynamic from "next/dynamic";
import Header from "@components/css/header";

// ✅ Lazy load Footer (loaded only when needed)
const Footer = dynamic(() => import("@components/css/footer"), { ssr: false });

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;