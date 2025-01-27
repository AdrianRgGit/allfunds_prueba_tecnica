const News = require("../models/News");

const NewsController = {
  async getAllNews(req, res) {
    try {
      const news = await News.find().sort({ createdAt: -1 });
      res.status(200).json(news);
    } catch (err) {
      console.error("Error fetching news:", err);
      res.status(500).json({ message: "Error fetching news", error: err });
    }
  },

  async createNew(req, res) {
    try {
      const { title, description, content, author } = req.body;
      const newNews = new News({
        title,
        description,
        content,
        author: author || "Anónimo",
      });

      await newNews.save();
      res.status(201).json(newNews);
    } catch (err) {
      console.error("Error creating news:", err);
      res.status(500).json({ message: "Error creating news", error: err });
    }
  },
};

module.exports = NewsController;
