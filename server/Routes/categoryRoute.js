const express = require("express");
const router = express.Router();
const {
  postAllCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
} = require("../Controllers/categoryController");

router.post("/new", postAllCatController);
router.get("/get-category", getAllCatController);
router.put("/update-category", updateCatController);
router.delete("/delete-category", deleteCatController);

module.exports = router;
