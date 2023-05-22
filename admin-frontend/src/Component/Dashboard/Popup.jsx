import React, { useState, useEffect } from "react";
import axios from "axios";

function Popup() {
  const [closeModal, setCloseModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [blogPost, setBlogPost] = useState({
    title: "",
    body: "",
    category: "",
  });

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
    try {
      const formData = new FormData();
      formData.append("title", blogPost.title);
      formData.append("description", blogPost.body);
      formData.append("categoryId", selectedCategory);
      formData.append("file", blogPost.blogImage); // Assuming blogPost.image is the selected file

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
      setCloseModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    setBlogPost({
      ...blogPost,
      blogImage: e.target.files[0],
    });
  };

  const handleCloseModal = () => {
    setBlogPost({
      title: "",
      body: "",
      category: "",
    });
    setCloseModal(false);
  };

  return (
    <div>
      {closeModal ? null : (
        <div className="modal fade" id="addPostModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Add Post</h5>
                <button
                  className="close"
                  data-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handlePostSubmit}>
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
                      value={selectedCategory}
                      // key={categories._id} value={categories._id}
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
            </div>
            )
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
