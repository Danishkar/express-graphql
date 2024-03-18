import { GraphQLObjectType } from "graphql";
import createUser from "./mutations/createUser.js";
import updateUser from "./mutations/updateUser.js";
import deleteUser from "./mutations/deleteUser.js";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createUser,
    updateUser,
    deleteUser,
  }),
});

export default mutation;
