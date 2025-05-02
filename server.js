const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Import routes
const authorRoutes = require("./routes/author");
const bookRoutes = require("./routes/book");
const bookshopRoutes = require("./routes/bookshop");

// Use routes
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/bookshops', bookshopRoutes);

// Set up the server port
const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
