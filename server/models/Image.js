const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "imageCategory"
  }
});

ImageSchema.statics.addImageToCategory = function (id, category) {
  const ImageCategorySchema = mongoose.model("imageCategory");
  const Image = mongoose.model("images");

  return Image.findById(id)
  .then( (image) => {
  ImageCategorySchema.findById(category)
  .then( (category) => {
    image.category = category;
    category.images.push(image);
    return Promise.all([image.save(), category.save()])
    .then(([image, category]) => [image, category])
  })})
};

ImageSchema.statics.findCategory = function (id) {
  return this.findById(id)
    .populate("category")
    .then(image => {
      const ImageCategory = mongoose.model("imageCategory");
      return ImageCategory.findById(image.category);
    });
};

module.exports = mongoose.model("images", ImageSchema);