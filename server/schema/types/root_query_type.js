const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const UserType = require("./user_type");
const ImageType = require("./image_type")
const ImageCategoryType = require("./image_category_type");

const User = mongoose.model("users");
const Image = mongoose.model("images");
const ImageCategory = mongoose.model("imageCategory");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return User.findById(args._id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    image: {
      type: ImageType,
      args: {_id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Image.findById(args._id)
      }
    },
    images: {
      type: new GraphQLList(ImageType),
      resolve() {
        return Image.find();
      }
    },
    imageCategory: {
      type: ImageCategoryType,
      args: {_id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve(_, args) {
        return ImageCategory.findById(args._id);
      }
    },
    imageCategories: {
      type: new GraphQLList(ImageCategoryType),
      resolve() {
        return ImageCategory.find();
      }
    },
  })
});

module.exports = RootQueryType;