const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookId: { type: String, required: true, unique: true },
  title: String,
  genre: String,
  publishYear: Number,
  authorId: { type: String, required: true },
  availableCopies: Number
});

module.exports = mongoose.model("Book", BookSchema);
