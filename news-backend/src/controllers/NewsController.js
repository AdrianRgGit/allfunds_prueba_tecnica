const News = require("../models/News");

const NewsController = {
  async getAllNews(req, res) {
    try {
      const news = await News.find().sort({ createdAt: -1 });
      res.status(200).json(news);
    } catch (err) {
      console.error("Error al obtener las noticias:", err);
      res
        .status(500)
        .json({ message: "Error al obtener las noticias", error: err });
    }
  },
};

module.exports = NewsController;
