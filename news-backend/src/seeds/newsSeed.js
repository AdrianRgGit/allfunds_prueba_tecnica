const mongoose = require("mongoose");
const News = require("../models/News");
const dotenv = require("dotenv");

dotenv.config();

// NOTE: SEED DE LAS NOTICIAS. AÑADO 1OS 10 NOTICIAS A LA BASE DE DATOS PARA NO TENERLA VACÍA
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const newsData = [];

    for (let i = 1; i <= 10; i++) {
      newsData.push({
        title: `Noticia ${i}`,
        description: `Descripción de la noticia ${i}`,
        content: `Contenido completo de la noticia ${i}. Este es un ejemplo de contenido largo.`,
        author: `Autor ${i}`,
        archiveDate: null,
      });
    }

    News.insertMany(newsData)
      .then(() => {
        console.log("Added 10 news to the database successfully");
        mongoose.disconnect();
      })
      .catch((err) => {
        console.error("Error adding news:", err);
        mongoose.disconnect();
      });
  })
  .catch((err) => {
    console.error("Error de conexión:", err);
  });
