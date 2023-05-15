const express = require('express');
const Blog = require('../Models/blog');

const router = express.Router();

// Create blog
router.post("/new", async (req, res) => {
    const { title, category } = req.body;

    try {
        const createdBlog = await Blog.create({ title, category });
        res.status(200).json({
            success: true,
            blog: createdBlog,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Failed to create blog'
        });
    }
});

module.exports = router;
