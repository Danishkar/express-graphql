import { GraphQLSchema } from "graphql";
import query from "./query.js";
import mutation from "./mutation.js";

export default new GraphQLSchema({
  query: query,
  mutation: mutation,
});
