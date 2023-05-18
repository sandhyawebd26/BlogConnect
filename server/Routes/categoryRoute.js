const express = require("express");
const router = express.Router();
const {
  postAllCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
} = require("../Controllers/categoryController");
const { getBlogControllerById } = require("../Controllers/blogPostController");

router.post("/new", postAllCatController);
router.get("/get-category", getAllCatController);

//get blog by id
router.get("/get-blog", getBlogControllerById);

router.put("/update-category", updateCatController);
router.delete("/delete-category", deleteCatController);

module.exports = router;
