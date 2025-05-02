const mongoose = require("mongoose");

const BookShopSchema = new mongoose.Schema({
  shopId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: String,
  booksAvailable: [String], // Array of bookIds
  contactNumber: String
});

module.exports = mongoose.model("BookShop", BookShopSchema);
