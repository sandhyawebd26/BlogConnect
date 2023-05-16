const express = require("express");
const router = express.Router();
const multer = require("multer");
const postBlogController = require("../Controllers/blogPostController");

const DestinationsFunction = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("../Images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: DestinationsFunction });

blogRoutes.post("/post-blog", upload.single("blog"), postBlogController);

module.exports = router;
