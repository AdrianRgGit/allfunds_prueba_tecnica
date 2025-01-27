const News = require("../models/News");

const NewsController = {
  // NOTE: OBTENER TODAS LAS NOTICIAS QUE NO TIENEN FECHA DE ARCHIVADO
  async getAllNews(req, res) {
    try {
      // NOTE: PAGINACIÓN DE 5 EN 5
      const { page = 1, limit = 5 } = req.query;
      const skip = (page - 1) * limit;

      // NOTE: ORDENO POR FECHA DESCENDENTE Y POR ID ASCENDENTE PARA EVITAR QUE LA PAGINACIÓN ME HAGA DUPLICADOS YA QUE CON LOS SEEDERS AL TENER TODOS LA MISMA FECHA ME DABAN ERRORES
      const news = await News.find({ archiveDate: { $eq: null } })
        .sort({ createdAt: -1, _id: 1 })
        .skip(skip)
        .limit(parseInt(limit));

      // NOTE: CONTAR EL TOTAL DE NOTICIAS
      const totalNews = await News.countDocuments({
        archiveDate: { $eq: null },
      });

      // NOTE: CÁLCULO DE PÁGINAS TOTALES
      const totalPages = Math.ceil(totalNews / limit);

      // NOTE: MANDAMOS EN EL JSON LAS NOTICIAS, LA PÁGINA ACTUAL, EL TOTAL DE PÁGINAS Y EL TOTAL DE NOTICIAS
      res.status(200).json({
        news,
        currentPage: page,
        totalPages: totalPages,
        totalNews: totalNews,
      });
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las noticias", error });
    }
  },

  // NOTE: OBTENER TODAS LAS NOTICIAS QUE TIENEN FECHA DE ARCHIVADO
  async getArchivedNews(req, res) {
    try {
      // NOTE: PAGINACIÓN DE 5 EN 5
      const page = parseInt(req.query.page) || 1;
      const limit = 5;
      const skip = (page - 1) * limit;

      // NOTE: FILTRAR NOTICIAS QUE TIENEN FECHA DE ARCHIVADO
      const news = await News.find({ archiveDate: { $ne: null } })
        .sort({
          createdAt: -1,
          _id: 1,
        })
        .skip(skip)
        .limit(limit);

      // NOTE: CONTAR EL TOTAL DE NOTICIAS ARCHIVADAS
      const totalArchivedNews = await News.countDocuments({
        archiveDate: { $ne: null },
      });

      // NOTE: CÁLCULO DE PÁGINAS TOTALES
      const totalPages = Math.ceil(totalArchivedNews / limit);

      // NOTE: MANDAMOS EN EL JSON LAS NOTICIAS, LA PÁGINA ACTUAL, EL TOTAL DE PÁGINAS Y EL TOTAL DE NOTICIAS ARCHIVADAS
      res.status(200).json({
        news,
        currentPage: page,
        totalPages: totalPages,
        totalNews: totalArchivedNews,
      });
    } catch (err) {
      console.error("Error fetching archived news:", err);
      res
        .status(500)
        .json({ message: "Error fetching archived news", error: err });
    }
  },

  // NOTE: CREAR NUEVA NOTICIA
  async createNew(req, res) {
    try {
      // NOTE: OBTENGO LOS DATOS DEL BODY
      const { title, description, content, author } = req.body;

      // NOTE: CREO UNA NUEVA NOTICIA. AL NO TENER AUTOR (NO HAY AUTENTIFICACIÓN EN LA APLICACIÓN), LE ASIGNO POR DEFECTO "Anónimo"
      const newNews = new News({
        title,
        description,
        content,
        author: author || "Anónimo",
      });

      // NOTE: GUARDO LA NOTICIA Y LA MANDO EN EL JSON
      await newNews.save();
      res.status(201).json(newNews);
    } catch (err) {
      console.error("Error creating news:", err);
      res.status(500).json({ message: "Error creating news", error: err });
    }
  },

  // NOTE: ARCHIVAR NOTICIA
  async archiveNew(req, res) {
    try {
      // NOTE: OBTENGO EL ID DE LA NOTICIA POR PARÁMETROS
      const { id } = req.params;

      // NOTE: BUSCO LA NOTICIA POR SU ID
      const news = await News.findById(id);

      // NOTE: SI NO ENCUENTRO LA NOTICIA, DEVUELVO UN ERROR
      if (!news) {
        return res.status(404).json({ message: "New not found" });
      }

      // NOTE: SI LA NOTICIA YA TIENE FECHA DE ARCHIVADO, DEVUELVO UN ERROR
      if (news.archiveDate) {
        return res.status(400).json({ message: "News is already archived" });
      }

      // NOTE: ACTUALIZO LA NOTICIA CON LA FECHA DE ARCHIVADO DE HOY
      const updatedNews = await News.findByIdAndUpdate(
        id,
        { archiveDate: new Date() },
        { new: true }
      );

      // NOTE: MANDO EN EL JSON LA NOTICIA ACTUALIZADA
      res.status(200).json(updatedNews);
    } catch (err) {
      console.error("Error archiving news:", err);
      res.status(500).json({ message: "Error archiving news", error: err });
    }
  },

  // NOTE: ELIMINAR NOTICIA
  async deleteNew(req, res) {
    try {
      // NOTE: OBTENGO EL ID DE LA NOTICIA POR PARÁMETROS
      const { id } = req.params;
      // NOTE: BUSCO LA NOTICIA POR SU ID Y LA BORRO
      const deletedNews = await News.findByIdAndDelete(id);

      // NOTE: SI NO ENCUENTRO LA NOTICIA, DEVUELVO UN ERROR
      if (!deletedNews) {
        return res.status(404).json({ message: "New not found" });
      }

      // NOTE: MANDO EN EL JSON EL MENSAJE DE QUE LA NOTICIA HA SIDO ELIMINADA
      res.status(200).json({ message: "New deleted successfully" });
    } catch (err) {
      console.error("Error deleting new:", err);
      res.status(500).json({ message: "Error deleting new", error: err });
    }
  },
};

module.exports = NewsController;
