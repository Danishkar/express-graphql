import graphql from "graphql";
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
