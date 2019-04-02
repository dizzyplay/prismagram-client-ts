import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

const client = new ApolloClient({
  uri: "http://10.0.1.19:3000",
  clientState: {
    defaults,
    resolvers
  }
});
export default client;
