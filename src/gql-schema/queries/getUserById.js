import { UserType } from "../types/user.js";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { User } from "../../models/user.js";

const getUserById = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    return User.findById(args.id);
  },
};

export default getUserById;
