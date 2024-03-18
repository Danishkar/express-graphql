import { User } from "../../models/user.js";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { UserType } from "../types/user.js";

const createUser = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => {
    const user = await User.create(args);
    return user;
  },
};

export default createUser;
