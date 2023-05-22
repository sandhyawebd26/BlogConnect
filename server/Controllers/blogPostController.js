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

    if (!data) {
      return res.status(404).json({
        success: false,
        error: 'Blogs not found',
      });
    }

    res.status(200).json({
      success: true,
      data: data,
      NumberOfBlogs: data.data.length
    });

    console.log("data =>", data);
  } catch (err) {
    console.log("ERROR =>", err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
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

// const { updateBlogModel } = require("../Models/blogPost");

const updateBlogController = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  const { id } = req.params;
  const body  = req.body;
  const blogImage = req?.file?.filename;


  try {
    // const data = {};

    // if (body) {
    //   // Add the fields to be updated to the `data` object
    //   data.body = body;
    // }

    // if (file) {
    //   data.blogImage = file.filename;
    // }

    const result = await updateBlogModel(id, body,blogImage);

    if (result.status === 404) {
      return res.status(404).json({
        success: false,
        error: result.message,
      });
    }

    if (result.status === 200) {
      return res.status(200).json({
        success: true,
     result
      });
    }

    // Handle other status codes if needed

    res.status(500).json({
      success: false,
      error: 'Failed to update blog',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Failed to update blog',
    });
  }
};

// module.exports = {
//   updateBlogController,
// };


// Update blog by ID
// const updateBlogController = async (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   const body = req?.body;
//   const blogImage = req?.file?.filename;
//   console.log(req.file)

//   try {
//     const updatedBlog = await updateBlogModel({ body, blogImage });

//     if (!updatedBlog.data) {
//       return res.status(404).json({
//         success: false,
//         error: 'Blog not found',
//       });
//     }

//     res.status(200).json({
//       success: true,
//       blog: updatedBlog.data,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       error: 'Failed to update blog',
//     });
//   }
// };

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
