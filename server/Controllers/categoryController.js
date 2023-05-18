const Blog = require("../Models/category.js");

// Create category
const postAllCatController = async (req, res) => {
    const { category } = req.body;
  
    if (!category) {
      return res.status(400).json({
        success: false,
        error: "Category name is required",
      });
    }
  
    try {
      const createdCategory = await Blog.create({ category });
      res.status(200).json({
        success: true,
        category: createdCategory,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: "Failed to create category",
      });
    }
  };
  ;

// Get all categories
const getAllCatController = async (req, res) => {
  try {
    const createdBlog = await Blog.find({
      category: 1,
      createdAt: 1,
      updatedAt: 1,
    });
    res.status(200).json({
      success: true,
      blog: createdBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Failed to retrieve blogs",
    });
  }
};

// Update category by id
const updateCatController = async (req, res) => {
  const { id, category } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { category },
      { new: true }
    );
    res.status(200).json({
      success: true,
      blog: updatedBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Failed to update category",
    });
  }
};

// Delete category by id
const deleteCatController = async (req, res) => {
  const { id } = req.body;

  try {
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Failed to delete category",
    });
  }
};

module.exports = {
  postAllCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
};
