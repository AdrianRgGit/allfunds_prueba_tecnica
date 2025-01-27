const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const newsRoutes = require("./routes/newsRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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
