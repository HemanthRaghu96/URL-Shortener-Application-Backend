// Import required modules

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const indexRouter = require("./routes/route");

// Create Express application
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use("/", indexRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MongoDB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error", err.message));

app.get("/", (req, res) => {
  res.send("URL Shortner Application");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
