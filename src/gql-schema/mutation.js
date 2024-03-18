import { GraphQLObjectType } from "graphql";
import createUser from "./mutations/createUser.js";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createUser,
  }),
});

export default mutation;
