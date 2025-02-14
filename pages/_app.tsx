import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AppProps } from "next/app";
import Script from "next/script";
import "@styles/global.css";
import Layout from "./layout";

const queryClient = new QueryClient();

interface CustomAppProps extends AppProps {
  pageProps: AppProps["pageProps"] & {
    dehydratedState?: unknown;
  };
}

function MyApp({ Component, pageProps }: CustomAppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        {/* ✅ Fixed GTM Syntax */}
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[]; 
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'}); 
                var f=d.getElementsByTagName(s)[0], 
                j=d.createElement(s), 
                dl=l!='dataLayer' ? '&l='+l : ''; 
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; // ✅ Removed extra quote
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W9W9X4QJ');
            `,
          }}
        />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
