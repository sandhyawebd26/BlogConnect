import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "./Post";
import blog from "../../Assets/blog.jpeg";

function Home() {
  const user_id = localStorage.getItem("user_id");
  const user_token = localStorage.getItem("user_token");
  console.log("user_token =>", user_token);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [numBlogs, setNumBlogs] = useState([]);
  const [userBlog, setUserBlog] = useState([]); // Track the number of blogs

  const [blogPost, setBlogPost] = useState({
    title: "",
    body: "",
    category: "",
    userId: user_id,
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/get-blog");
        //  console.log("hello", res.data.data.data);
        setData(res.data.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
    getAllBlogByUSer();
  }, []);

  const getAllBlogByUSer = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/get-blog-user",
        {
          headers: {
            Authorization: `Bearer ${user_token}`,
          },
        }
      );
      console.log("REddrerertS=>", res);
      setUserBlog();
    } catch (error) {
      console.error(error);
    }
  };

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
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (data.length < 5) {
      try {
        const formData = new FormData();
        formData.append("title", blogPost.title);
        formData.append("description", blogPost.body);
        formData.append("categoryId", selectedCategory);
        formData.append("file", blogPost.blogImage); // Assuming blogPost.image is the selected file
        formData.append("userId", blogPost.userId);

        const res = await axios.post(
          "http://localhost:4000/api/v1/post-blog",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(res);
        console.log(numBlogs);
        setNumBlogs([...numBlogs, numBlogs + 1]); // Increment the number of blogs
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(
        "You have reached the maximum limit of 5 blogs. Please pay to add more blogs."
      );
    }
  };
  const handleImageChange = (e) => {
    setBlogPost({
      ...blogPost,
      blogImage: e.target.files[0],
    });
  };

  return (
    <>
      <Navbar title="BlogsConnect" />
      <div>
        <Post />
        <div className="row">
          <img className="col-md-6" src={blog} alt="" />
          <form
            className="col-md-6"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
            onSubmit={handlePostSubmit}
          >
            <h2>Write a Blog..</h2>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                value={blogPost.title}
                onChange={(e) =>
                  setBlogPost({
                    ...blogPost,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                className="form-control"
                // value={selectedCategory}
                key={categories._id}
                value={categories._id}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="image"
                  onChange={handleImageChange}
                />
                <label htmlFor="image" className="custom-file-label">
                  Choose File
                </label>
              </div>
              <small className="form-text text-muted">Max Size 3mb</small>
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                name="editor1"
                className="form-control"
                value={blogPost.body}
                onChange={(e) =>
                  setBlogPost({ ...blogPost, body: e.target.value })
                }
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className="modal fade" id="addCategoryModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Add Category</h5>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {data ? (
          data.map((d, index) => (
            <div
              className="card mb-3 mt-5"
              style={{ maxWidth: "100%" }}
              key={index + 1}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:4000/api/v1/uploads/${d.blogImage}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{d.title}</h4>
                    <p className="card-text">{d.description}</p>
                    <h5 className="card-text">{d.category}</h5>
                    {/* <p>{d?.createdAt.slice(0, 10)}</p> */}
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/Details/${d._id}`)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
