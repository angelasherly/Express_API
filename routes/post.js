var express = require("express");
var router = express.Router();

const PostController = require("../controllers/PostController");

// Route for Product Category
router.post("/", PostController.storeData);
router.get("/", PostController.showData);
router.get("/:id", PostController.showDataById);
router.put("/:id", PostController.editDataById);
router.delete("/:id", PostController.deleteDataById);

module.exports = router;