// Import required modules

const Url = require("../models/url");

// Export an asynchronous function that generates a unique URL ID
module.exports = async () => {
  const { nanoid } = await import("nanoid");
  let urlId = nanoid(7);
  // Loop until a unique URL ID is generated
  while (true) {
    const urlObject = await Url.findOne({ urlId });
    if (!urlObject) break;
    urlId = nanoid(7);
  }
  return urlId;
};
