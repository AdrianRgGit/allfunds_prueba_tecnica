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

  async archiveNew(req, res) {
    try {
      const { id } = req.params;

      const news = await News.findById(id);

      if (!news) {
        return res.status(404).json({ message: "New not found" });
      }

      if (news.archiveDate) {
        return res.status(400).json({ message: "News is already archived" });
      }

      const updatedNews = await News.findByIdAndUpdate(
        id,
        { archiveDate: new Date() },
        { new: true }
      );

      res.status(200).json(updatedNews);
    } catch (err) {
      console.error("Error archiving news:", err);
      res.status(500).json({ message: "Error archiving news", error: err });
    }
  },
};

module.exports = NewsController;
