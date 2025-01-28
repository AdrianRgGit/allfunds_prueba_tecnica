const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const newsRoutes = require("./routes/newsRoutes");
const cors = require("cors");

// NOTE: CONFIGURACIÓN DE DOTENV PARA USAR VARIABLES DE ENTORNO
dotenv.config();

// NOTE: CONFIGURACIÓN DE EXPRESS Y PUERTO A UTILIZAR
const app = express();
const PORT = process.env.PORT || 5000;

// NOTE: YA QUE ES UNA PRUEBA TÉCNICA PERMITO TODAS LAS URLS. EN LA APLICACIÓN ATLAS DE MONGODB TAMBIÉN LAS HE TENIDO QUE PERMITIR TODAS
const allowedOrigins = "*";

// NOTE: CONFIGURACIÓN DE CORS
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// NOTE: CONFIGURACIÓN DE MIDDLEWARE
app.use(express.json());

// NOTE: CONFIGURACIÓN DE RUTAS PRINCIPALES
app.use("/api/news", newsRoutes);

// NOTE: CONEXIÓN A MONGODB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// NOTE: INICIALIZACIÓN DEL SERVIDOR
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// NOTE: EXPORTO EL SERVIDOR PARA UTILIZARLO EN EL TESTING
module.exports = app;
