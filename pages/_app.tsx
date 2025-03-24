import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AppProps } from "next/app";
import Script from "next/script";
import "@styles/global.css";
import Layout from "./layout";

// ✅ Import GTM script
import { gtmScript } from "src/lib/gtm";

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
        {/* ✅ Inject GTM script from lib */}
        <Script id="gtm" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: gtmScript }} />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
