const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

router.post('/', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const authors = await Author.find();
    res.send(authors);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findOne({ authorID: req.params.id });
    if (!author) return res.status(400).send("Author not found");
    res.send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const author = await Author.findOneAndUpdate(
      { authorID: req.params.id },
      req.body,
      { new: true }
    );
    if (!author) return res.status(400).send("Author not found");
    res.send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Author.deleteOne({ authorID: req.params.id });
    if (result.deletedCount === 0) return res.status(404).send("Author not found");
    res.send({ message: "Author has been deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
