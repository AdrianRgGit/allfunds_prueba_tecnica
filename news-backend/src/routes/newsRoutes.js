const express = require("express");
const NewsController = require("../controllers/NewsController");
const router = express.Router();

router.get("/getallnews", NewsController.getAllNews);

module.exports = router;
