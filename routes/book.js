const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ bookId: req.params.id });
    if (!book) return res.status(400).send("Book not found");
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { bookId: req.params.id },
      req.body,
      { new: true }
    );
    if (!book) return res.status(400).send("Book not found");
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Book.deleteOne({ bookId: req.params.id });
    if (result.deletedCount === 0) return res.status(404).send("Book not found");
    res.send({ message: "Book has been deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
