import { GraphQLObjectType } from "graphql";
import getAllUser from "./queries/getAllUser.js";
import getUserById from "./queries/getUserById.js";

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    getAllUser,
    getUserById,
  }),
});

export default query;
