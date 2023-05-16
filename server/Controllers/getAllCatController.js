// controllers/BlogController.js

const Blog = require("../Models/blog.js");

 

const postAllCatController =  async (req, res) => {
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
  }``
}

const getAllCatController = async(req,res)=>{
  try {
    const createdBlog = await Blog.find({},{category:1,createdAt:1,updatedAt:1});
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
}``
}


module.exports = {postAllCatController,getAllCatController}