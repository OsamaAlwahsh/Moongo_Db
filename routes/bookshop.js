const express = require("express");
const router = express.Router();
const BookShop = require("../models/BookShop");

router.post('/', async (req, res) => {
  try {
    const bookShop = new BookShop(req.body);
    await bookShop.save();
    res.status(201).send(bookShop);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all bookshops
router.get("/", async (req, res) => {
  try {
    const bookShops = await BookShop.find();
    res.send(bookShops);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get bookshop by ID
router.get("/:id", async (req, res) => {
  try {
    const bookShop = await BookShop.findOne({ shopId: req.params.id });
    if (!bookShop) return res.status(400).send("Bookshop not found");
    res.send(bookShop);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update bookshop
router.put("/:id", async (req, res) => {
  try {
    const bookShop = await BookShop.findOneAndUpdate(
      { shopId: req.params.id },
      req.body,
      { new: true }
    );
    if (!bookShop) return res.status(400).send("Bookshop not found");
    res.send(bookShop);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete bookshop
router.delete("/:id", async (req, res) => {
  try {
    const result = await BookShop.deleteOne({ shopId: req.params.id });
    if (result.deletedCount === 0) return res.status(404).send("Bookshop not found");
    res.send({ message: "Bookshop has been deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
