const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const News = mongoose.model("News", NewsSchema);
module.exports = News;