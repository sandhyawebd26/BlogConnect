const Blog = require("../Models/blogPost");

const postBlogController = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  const body = req?.body;
  const blogImage = req?.file?.filename;
  console.log(req.file)

  try {
    const data = await Blog.create({ ...body, blogImage });

    console.log("data =>", data);
    res.send(data);
  } catch (err) {
    console.log("ERROR =>", err);
    res.send(err);
  }
};

const getBlogController = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Failed to get blogs',
    });
  }
};

const updateBlogController = async (req, res) => {
  const { id } = req.params;
  const { title, category } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, category },
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
      error: 'Failed to update blog',
    });
  }
};

const deleteBlogController = async (req, res) => {
  const { id } = req.params;

  try {
    await Blog.findByIdAndDelete(id);
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
};
