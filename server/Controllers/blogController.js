const fs = require('fs');
const Blog = require('../models/blogModel');

const createBlog = (req, res) => {
  // Read the image file as a Buffer
  const imageBuffer = fs.readFileSync(req.file.path);

  // Create a new Blog document
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    image: {
      filename: req.file.originalname,
      data: imageBuffer,
      contentType: req.file.mimetype,
    },
  });

  // Save the blog to MongoDB
  blog.save((err) => {
    if (err) {
      console.log('Error saving blog:', err);
      res.status(500).json({ error: 'Failed to save blog' });
    } else {
      console.log('Blog saved successfully');
      res.status(200).json({ message: 'Blog saved successfully' });
    }
  });
};

module.exports = {
  createBlog,
};
