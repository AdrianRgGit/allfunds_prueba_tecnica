const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  archiveDate: { type: Date, default: null },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
