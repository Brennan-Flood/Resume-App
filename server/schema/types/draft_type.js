const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const Draft = mongoose.model("images");

const DraftType = new GraphQLObjectType({
  name: "DraftType",
  fields: () => ({
    _id: { type: GraphQLID },
    state: {type: GraphQLString},
    date: {type: GraphQLString}
  })
});

module.exports = DraftType;