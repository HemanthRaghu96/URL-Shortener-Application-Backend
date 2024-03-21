require("dotenv").config();
const express = require("express");
const urlController = require("../controller/url");

const router = express.Router();
// create short url
router.post("/", urlController.createShortUrl);

// find and redirect to original url
router.get("/:shortUrlId", urlController.redirectToOriginalUrl);

// delete single url
router.delete("/", urlController.deleteUrl);

module.exports = router;
