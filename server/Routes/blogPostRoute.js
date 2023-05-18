const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  postBlogController,
  getBlogController,
  updateBlogController,
  deleteBlogController,
} = require("../Controllers/blogPostController");

const DestinationsFunction = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("../uploads"));
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, file.originalname  + "-" + Date.now() + ".png");
  },
});


const upload = multer({ storage: DestinationsFunction });

router.post("/post-blog", upload.single("file"), postBlogController);
router.get("/get-blog", getBlogController);
router.put("/update-blog/:id", updateBlogController);
router.delete("/delete-blog/:id", deleteBlogController);

module.exports = router;
