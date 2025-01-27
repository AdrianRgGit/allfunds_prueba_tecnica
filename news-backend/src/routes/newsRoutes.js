const express = require("express");
const NewsController = require("../controllers/NewsController");
const router = express.Router();

router.get("/getallnews", NewsController.getAllNews);

router.post("/createnew", NewsController.createNew);

router.put("/archivenew/:id", NewsController.archiveNew);

module.exports = router;
