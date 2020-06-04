const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList } = graphql;

const User = mongoose.model("users")
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean },
    admin: {type: GraphQLBoolean },
    rootAdmin: {type: GraphQLBoolean },
    member: {type: GraphQLBoolean },
    draft: {
      type: require("./draft_type"),
      resolve(parentValue) {
        return User.findDraft(parentValue.id);
      }
    }
  })
});

module.exports = UserType;