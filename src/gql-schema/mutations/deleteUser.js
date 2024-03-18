import { User } from "../../models/user.js";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { UserType } from "../types/user.js";

const deleteUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => {
    const user = await User.findByIdAndDelete(args.id);
    return user;
  },
};

export default deleteUser;
