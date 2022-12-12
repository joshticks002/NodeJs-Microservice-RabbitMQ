const product = require("mongoose");

const productSchema = product.Schema({
  admin_id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

module.exports = product.model("Products", productSchema);
