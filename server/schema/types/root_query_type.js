const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require("./user_type");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // to check if a user has logged in or not
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
