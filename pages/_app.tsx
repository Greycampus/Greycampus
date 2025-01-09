import dynamic from "next/dynamic";
import { AppProps } from "next/app";
import { Hydrate } from "react-query/hydration";
//import "@styles/global.css";
//import { initializeApollo } from "@services/graphql";
import { QueryClient } from "react-query";
import Layout from "./layout";


const QueryClientProvider = dynamic(() => import("react-query").then(mod => mod.QueryClientProvider), { ssr: false });

// ✅ Move Clients Outside MyApp
//const apolloClient = initializeApollo();
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
  );
}

export default MyApp;