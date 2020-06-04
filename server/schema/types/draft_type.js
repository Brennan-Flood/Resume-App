const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList, GraphQLInputObjectType } = graphql;
const Draft = mongoose.model("images");

const DraftType = new GraphQLObjectType({
  name: "DraftType",
  fields: () => ({
    _id: { type: GraphQLID },
    state: {type: GraphQLString}
  })
});

module.exports = DraftType;