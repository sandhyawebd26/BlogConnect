// routes/BlogRoutes.js

const express = require("express");
const router = express.Router();
const {
  postAllCatController, getAllCatController,
} = require("../Controllers/getAllCatController.js");
///home/hp/Desktop/Project2/server/Controllers/getAllCatController.js
// Define the GET route and associate it with the controller method
router.post("/new", postAllCatController);
router.get("/get-category", getAllCatController);

module.exports = router;
