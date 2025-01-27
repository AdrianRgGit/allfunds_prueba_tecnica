const express = require("express");
const NewsController = require("../controllers/NewsController");
const router = express.Router();

router.get("/getallnews", NewsController.getAllNews);
router.get("/getarchivednews", NewsController.getArchivedNews);

router.post("/createnew", NewsController.createNew);

router.put("/archivenew/:id", NewsController.archiveNew);

router.delete("/deletenew/:id", NewsController.deleteNew);

module.exports = router;
