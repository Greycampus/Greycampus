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
  // Support per-page layout opt-out via either a static getLayout or a disableLayout flag
  const AnyComponent = Component as typeof Component & {
    getLayout?: (page: JSX.Element) => JSX.Element;
    disableLayout?: boolean;
  };

  const renderWithLayout = AnyComponent.getLayout
    ? AnyComponent.getLayout(<Component {...pageProps} />)
    : AnyComponent.disableLayout
    ? (<Component {...pageProps} />)
    : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        {/* ✅ Inject GTM script from lib */}
        <Script id="gtm" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: gtmScript }} />
        {renderWithLayout}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
