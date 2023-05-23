const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  postBlogController,
  getBlogController,
  updateBlogController,
  deleteBlogController,
  getBlogControllerById,
  getByUSerBlogController,
} = require("../Controllers/blogPostController");
const auth = require("../middleware/auth");

const DestinationsFunction = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname + "-" + Date.now() + ".jpeg");
  },
});

const upload = multer({ storage: DestinationsFunction });

router.post("/post-blog", upload.single("file"), postBlogController);
router.get("/get-blog", getBlogController);

// get blog by id
router.get("/get-blog/:id", getBlogControllerById);
router.put("/update-blog/:id", upload.single("file"), updateBlogController);
router.delete("/delete-blog/:id", deleteBlogController);
router.get("/get-blog-user",auth, getByUSerBlogController);

module.exports = router;
