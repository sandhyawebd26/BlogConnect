const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: String,
        category: String,
    },
    { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
