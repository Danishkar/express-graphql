import { User } from "../../models/user.js";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { UserType } from "../types/user.js";

const updateUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    const user = await User.findByIdAndUpdate(args.id, args, { new: true });
    return user;
  },
};

export default updateUser;
