const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    blogImage: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

// Use CommonJS export instead of ES modules export
module.exports.postBlogModel = async (data) => {
  const { body, blogImage } = data;
  const { title, categoryId, description, userId } = body; // Corrected the variable name 'CategoryId' to 'categoryId'

  try {
    const res = await Blog.create({
      title,
      categoryId,
      description,
      blogImage,
      userId
    });

    return { data: res, message: "Success", status: 200 };
  } catch (err) {
    return { message: err.message, status: 500 }; // Return the error message instead of the whole error object
  }
};

// Get all blogs
module.exports.getBlogModel = async () => {
  try {
    const res = await Blog.find().populate("categoryId").select("title categoryId blogImage description");

    return { data: res, message: "Success", status: 200 };
  } catch (err) {
    return { message: err.message, status: 500 }; // Return the error message instead of the whole error object
  }
};

// Get a specific blog by ID
module.exports.getBlogModelById = async (blogId) => {
  try {
    const res = await Blog.findById(blogId);

    if (!res) {
      return { message: "Blog not found", status: 404 };
    }

    return { data: res, message: "Success", status: 200 };
  } catch (err) {
    return { message: err.message, status: 500 };
  }
};


//Update By Id
module.exports.updateBlogModel = async (id, body, blogImage) => {
  if (!body || Object.keys(body).length === 0) {
    return { message: "No valid update fields provided", status: 400 };
  }
  try {
    const res = await Blog.findByIdAndUpdate(id,
      { ...body, blogImage },
      { new: true }


    );

    if (!res) {
      return { message: "Blog not found", status: 404 };
    }
    console.log("RES=>", res);

    return { result: res, message: "Success", status: 200 };
  } catch (err) {
    return { message: err.message, status: 500 };
  }
};


/// Delete a specific blog by ID
module.exports.deleteBlogModel = async (blogId) => {
  try {
    const res = await Blog.findByIdAndDelete(blogId);

    if (!res) {
      return { message: "Blog not found", status: 404 };
    }

    return { message: "Success", status: 200 };
  } catch (err) {
    return { message: err.message, status: 500 };
  }
};

//getByUSerBlogModel user_id

module.exports.getByUSerBlogModel = async (user_id) => {
  try {
    const res = await Blog.find({userId:user_id})
    return { data: res, message: "Success", status: 200 };
  } catch (err) {
    return { message: err, status: 500 };
  }
};