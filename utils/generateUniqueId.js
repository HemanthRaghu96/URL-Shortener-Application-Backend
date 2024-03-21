const Url = require("../models/url");

module.exports = async () => {
  const { nanoid } = await import("nanoid");
  let urlId = nanoid(7);
  while (true) {
    const urlObject = await Url.findOne({ urlId });
    if (!urlObject) break;
    urlId = nanoid(7);
  }
  return urlId;
};
