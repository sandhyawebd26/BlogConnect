const express = require("express");
const router = express.Router();
const {
  postAllCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
  getCatByIdController
} = require("../Controllers/categoryController");

//create category
router.post("/new", postAllCatController);

//get all categories
router.get("/get-category", getAllCatController);


//get category by id
router.get("/get-cat/:id", getCatByIdController);

router.put("/update-category/:id", updateCatController);

router.delete("/delete-category/:id", deleteCatController);

module.exports = router;
