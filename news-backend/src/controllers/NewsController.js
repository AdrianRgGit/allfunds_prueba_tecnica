const News = require("../models/News");

const NewsController = {
  async getAllNews(req, res) {
    try {
      const { page = 1, limit = 5 } = req.query;
      const skip = (page - 1) * limit;

      // NOTE: Filtrar noticias que no tienen fecha de archivado
      const totalNews = await News.countDocuments({
        archiveDate: { $eq: null },
      });

      // NOTE: ORDENO POR FECHA DESCENDENTE Y POR ID ASCENDENTE PARA EVITAR QUE LA PAGINACIÓN ME HAGA DUPLICADOS YA QUE CON LOS SEEDERS AL TENER TODOS LA MISMA FECHA ME DABAN ERRORES
      const news = await News.find({ archiveDate: { $eq: null } })
        .sort({ createdAt: -1, _id: 1 })
        .skip(skip)
        .limit(parseInt(limit));

      const totalPages = Math.ceil(totalNews / limit);

      res.status(200).json({
        news,
        currentPage: page,
        totalPages,
        totalNews,
      });
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las noticias", error });
    }
  },

  async getArchivedNews(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 5;
      const skip = (page - 1) * limit;

      const news = await News.find({ archiveDate: { $ne: null } })
        .sort({
          createdAt: -1,
          _id: 1,
        })
        .skip(skip)
        .limit(limit);

      const totalArchivedNews = await News.countDocuments({
        archiveDate: { $ne: null },
      });

      res.status(200).json({
        news,
        currentPage: page,
        totalPages: Math.ceil(totalArchivedNews / limit),
        totalNews: totalArchivedNews,
      });
    } catch (err) {
      console.error("Error fetching archived news:", err);
      res
        .status(500)
        .json({ message: "Error fetching archived news", error: err });
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

  async deleteNew(req, res) {
    try {
      const { id } = req.params;
      const deletedNews = await News.findByIdAndDelete(id);

      if (!deletedNews) {
        return res.status(404).json({ message: "New not found" });
      }

      res.status(200).json({ message: "New deleted successfully" });
    } catch (err) {
      console.error("Error deleting new:", err);
      res.status(500).json({ message: "Error deleting new", error: err });
    }
  },
};

module.exports = NewsController;
