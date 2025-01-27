const mongoose = require("mongoose");

// NOTE: ESQUEMA DE LAS NOTICIAS
const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    archiveDate: { type: Date, default: null },
  },
  // NOTE: AGREGA FECHAS DE CREACIÓN Y ACTUALIZACIÓN
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
