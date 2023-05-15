const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  image: {
    filename: String,
    data: Buffer,
    contentType: String,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
