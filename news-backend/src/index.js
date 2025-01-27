const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const newsRoutes = require("./routes/newsRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// NOTE: YA QUE ES UNA PRUEBA TÉCNICA PERMITO TODAS LAS URLS
const allowedOrigins = ["*"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/api/news", newsRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
