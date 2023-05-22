import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const [blog, setBlog] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [blogImage, setBlogImage]=useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/get-category");
        setCategories(res.data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, [id]);

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/get-blog/${id}`
        );
        console.log("=?",res);
        setBlog(res.data.data.data);
        setSelectedCategory(res.data.data.data.categoryId);
        setBlogImage(res.data.data.data.blogImage); 
        console.log(res.data.data.data.blogImage)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogById();
  }, [id]);

  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", blog.title);
      formData.append("description", blog.body);
      formData.append("categoryId", selectedCategory);
      formData.append("file", blog.blogImage); // Assuming blogPost.image is the selected file

      const res = await axios.put(
        `http://localhost:4000/api/v1/update-blog/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      alert("Blog Updated successfully");
      // setCloseModal(true);
    } catch (error) {
      console.log(error);
    }
  };


  const handleImageChange = (e) => {
    setBlog({
      ...blog,
      blogImage: e.target.files[0],
    });
  };


  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:4000/api/v1/delete-blog/${id}`, {
        blog,
      });
      alert("Blog deleted successfully!!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <header id="main-header" class="py-2 bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Post One</h1>
            </div>
          </div>
        </div>
      </header>

      <section id="actions" class="py-4 mb-4 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <a href="index.html" class="btn btn-light btn-block">
                <i class="fas fa-arrow-left"></i> Back To Dashboard
              </a>
            </div>
            <div class="col-md-3">
              <a
                href="index.html"
                class="btn btn-success btn-block"
                onClick={handleUpdate}
              >
                <i class="fas fa-check"></i> Save Changes
              </a>
            </div>
            <div class="col-md-3">
              <a
                href="index.html"
                class="btn btn-danger btn-block"
                onClick={handleDelete}
              >
                <i class="fas fa-trash"></i> Delete Post
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="details">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4>Edit Post</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        value={blog?.title}
                        onChange={(e) => {
                          setBlog({ ...blog, title: e.target.value });
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor="category">Category</label>
                      <select
                        className="form-control"
                        value={selectedCategory}
                        // key={categories._id} value={categories._id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category?.category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <label htmlFor="image">Upload Image</label>
                      <img
                                src={`http://localhost:4000/api/v1/uploads/${blog.blogImage}`}
                              />
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="image"
                          onChange={handleImageChange}                        />
                        <label htmlFor="image" class="custom-file-label">
                        {blogImage ? blogImage.name : "Choose File"}

                        </label>
                      </div>
                      <small class="form-text text-muted">Max Size 3mb</small>
                    </div>
                    <div class="form-group">
                      <label htmlFor="body">Body</label>
                      <textarea
                        name="editor1"
                        class="form-control"
                        value={blog?.description}
                        onChange={(e) => setBlog(e.target.value)}
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Details;
