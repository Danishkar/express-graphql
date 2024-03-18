import { UserType } from "../types/user.js";
import { GraphQLList } from "graphql";
import { User } from "../../models/user.js";

const getAllUser = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    return User.find();
  },
};

export default getAllUser;
