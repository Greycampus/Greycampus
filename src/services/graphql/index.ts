import { ApolloClient } from "@apollo/client/core";
import { InMemoryCache } from "@apollo/client/cache";
import type { NormalizedCacheObject } from "@apollo/client/core";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const createApolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: "http://localhost:1337/graphql/",
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
