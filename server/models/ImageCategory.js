const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  images: [{
    type: Schema.Types.ObjectId,
    ref: "images"
  }]
});

ImageCategorySchema.statics.findImages = function (id) {
  return this.findById(id)
    .populate('album')
    .then(imageCategory => {
      const Image = mongoose.model("images");
      const imageArr = imageCategory.images;
      let returnArr = [];
      imageArr.forEach(image => {
        returnArr.push(Image.findById(image))
      });
      return returnArr;
  })
};


module.exports = mongoose.model("imageCategory", ImageCategorySchema);