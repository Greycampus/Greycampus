import { ApolloClient } from "@apollo/client/core";
import { InMemoryCache } from "@apollo/client/cache";
import type { NormalizedCacheObject } from "@apollo/client/core";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const createApolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: `${API_URL}/graphql/`,
  cache: new InMemoryCache(),
});

export const initializeApollo = () => {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return createApolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = createApolloClient;
  }

  return apolloClient;
};
