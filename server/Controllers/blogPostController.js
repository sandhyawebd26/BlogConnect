const { postBlogModel, getBlogModelById, getBlogModel, updateBlogModel, deleteBlogModel } = require("../Models/blogPost");

const postBlogController = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  const body = req?.body;
  const blogImage = req?.file?.filename;
  console.log(req.file)

  try {
    const data = await postBlogModel({ body, blogImage });

    console.log("data =>", data);
    res.send(data);
  } catch (err) {
    console.log("ERROR =>", err);
    res.send(err);
  }
};


//get all blogs 

const getBlogController = async (req, res) => {
  try {
    const data = await getBlogModel();

    console.log("data =>", data);
    res.send(data);
  } catch (err) {
    console.log("ERROR =>", err);
    res.send(err);
  }
};


//get blogs by id 
const getBlogControllerById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await getBlogModelById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }

    res.json({
      success: true,
      data: blog,
    });
  } catch (err) {
    console.log("ERROR =>", err);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

//update blog by id
const updateBlogController = async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;

  try {
    const updatedBlog = await updateBlogModel(id, { category });

    if (!updatedBlog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }

    res.status(200).json({
      success: true,
      blog: updatedBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Failed to update blog',
    });
  }
};

//delete blogs by id

const deleteBlogController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await deleteBlogModel(id);

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog deleted',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete blog',
    });
  }
};

module.exports = {
  postBlogController,
  getBlogController,
  updateBlogController,
  deleteBlogController,
  getBlogControllerById
};
