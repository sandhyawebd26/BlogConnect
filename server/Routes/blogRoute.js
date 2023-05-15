const express = require('express');
const router = express.Router();
const multer = require('multer');
const blogController = require('../controllers/blogController');

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' });

// Create a blog
router.post('/blogs', upload.single('image'), blogController.createBlog);

module.exports = router;
