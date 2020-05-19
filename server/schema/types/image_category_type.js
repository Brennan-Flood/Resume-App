const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList } = graphql;
const ImageCategory = mongoose.model("imageCategory");

const ImageCategoryType = new GraphQLObjectType({
  name: "ImageCategoryType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    images: {
      type: new GraphQLList(require("./image_type")),
      resolve(parentValue) {
        return ImageCategory.findImages(parentValue.id);
      }}
  })
});

module.exports = ImageCategoryType;