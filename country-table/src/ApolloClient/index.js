import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
// import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "https://countries.trevorblades.com",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
