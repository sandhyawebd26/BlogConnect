const Category = require('../Models/category')

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
    const createdCategory = await Category.create({ category });
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

// Get all categories
const getAllCatController = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      categories: categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Failed to retrieve categories",
    });
  }
};

//Get category by Id

const getCatByIdController= async (req, res) => {
  const { id } = req.params; // Get the category ID from the URL path

  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        error: "Category not found",
      });
    }
    res.status(200).json({
      success: true,
      category: category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Failed to retrieve category",
    });
  }
};

// Update category by id
const updateCatController = async (req, res) => {
  const { id } = req.params; // Use req.params to get the category id from the URL path
  const { category } = req.body; // Get the updated category name from the request body

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { category },
      { new: true }
    );
    res.status(200).json({
      success: true,
      category: updatedCategory,
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
  const { id } = req.params; // Retrieve the ID from req.params instead of req.body

  try {
    await Category.findByIdAndDelete(id);
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
  getCatByIdController
};
