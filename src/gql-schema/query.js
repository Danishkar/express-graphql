import { GraphQLObjectType } from "graphql";
import getAllUser from "./queries/getAllUser.js";

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    getAllUser,
  }),
});

export default query;
