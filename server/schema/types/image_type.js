const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList } = graphql;
const Image = mongoose.model("images");

const ImageType = new GraphQLObjectType({
  name: "ImageType",
  fields: () => ({
    _id: { type: GraphQLID },
    category: {
      type: require("./image_category_type"),
      resolve(parentValue) {
        return Image.findCategory(parentValue.id);
      }},
    url: { type: GraphQLString }
  })
});

module.exports = ImageType;