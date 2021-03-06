const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } = graphql;
const mongoose = require("mongoose");
const Image = require("../models/Image");
const User = require("../models/User");
const ImageCategory = require("../models/ImageCategory");
const Draft = require("../models/Draft");

const AuthService = require("../services/auth");
const UserType = require("./types/user_type");
const ImageType = require("./types/image_type");
const ImageCategoryType = require("./types/image_category_type");
const DraftType = require("./types/draft_type");


const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        name: {type: GraphQLString },
        email: {type: GraphQLString },
        password: { type:GraphQLString }
      }, 
      resolve(_, args) {
        return AuthService.register(args);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      }, 
      resolve(_, args) {
        return AuthService.login(args);
      }
    },
    logout: {
      type: UserType,
      args: {
        _id: { type: GraphQLID }
      }, 
      resolve(_, args) {
        return AuthService.logout(args);
      }
    }, 
    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.verifyUser(args);
      }
    },
    createImage: {
      type: ImageType,
      args: {
        url: { type: GraphQLString },
        category: { type: GraphQLID },
        name: { type: GraphQLString }
      },
      resolve(_, args) {
        return new Image({ url: args.url, category: args.category, name: args.name })
          .save()
          .then(image => {
            Image.addImageToCategory(image._id, image.category);
            return image;
          });
      }
    },
    createImageCategory: {
      type: ImageCategoryType,
      args: {
        name: { type: GraphQLString},
        images: { type: new GraphQLList(GraphQLID)}
      },
      resolve(_, args) {
        return new ImageCategory({
          name: args.name,
          images: args.images
        })
          .save()
          .then(imageCategory => {
            return imageCategory;
          });
      }
    },
    addImageToCategory: {
        type: ImageType,
        args: {
          imageId: { type: GraphQLID },
          categoryId: { type: GraphQLID }
        },
        resolve(_, args) {
          return Image.addImageToCategory(args.imageId, args.categoryId);
        }
    },
    toggleUserMembership: {
      type: UserType,
      args: {
        _id: {type: GraphQLID }
      },
      resolve(_, args) {
        return User.toggleUserMembership(args._id);
      }
    },
    toggleUserAdmin: {
      type: UserType,
      args: {
        _id: { type: GraphQLID }
      },
      resolve(_, args) {
        return User.toggleAdmin(args._id);
      }
    },
    toggleUserRootAdmin: {
      type: UserType,
      args: {
        _id: { type: GraphQLID }
      },
      resolve(_, args) {
        return User.toggleRootAdmin(args._id);
      }
    },
    createDraft: {
      type: DraftType,
      resolve(_, args) {
        return new Draft({})
        .save()
        .then((draft) => {
          return draft;
        })
      }
    },
    updateDraft: {
      type: DraftType,
      args: {
        _id: {type: GraphQLID},
        state: {type: GraphQLString}
      },
      resolve(_, args) {
        return Draft.updateState(args._id, args.state);
      }
    },
    addRecentDraft: {
      type: UserType,
      args: {
        _id: {type: GraphQLID},
        state: {type: GraphQLString}
      },
      resolve(_, args) {
        return User.addRecentDraft(args._id, args.state);
      }
    }
  }
});

module.exports = mutation