import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "@services/graphql";
import "@styles/global.css";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import Layout from "./layout";

interface CustomAppProps extends AppProps {
  pageProps: AppProps["pageProps"] & {
    dehydratedState?: unknown;
  };
}

function MyApp({ Component, pageProps }: CustomAppProps): JSX.Element {
  const apolloClient = initializeApollo();
  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default MyApp;
