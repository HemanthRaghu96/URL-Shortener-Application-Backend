// Import required modules

const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  shortUrlId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("Url", UrlSchema);
