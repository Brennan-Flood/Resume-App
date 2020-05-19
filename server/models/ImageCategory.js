const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("users", ImageSchema);