const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

const authorRoutes = require("./routes/author");
const bookRoutes = require("./routes/book");
const bookshopRoutes = require("./routes/bookshop");

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/bookshops', bookshopRoutes);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
