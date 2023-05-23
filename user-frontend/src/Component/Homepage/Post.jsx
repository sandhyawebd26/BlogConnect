import React, { useState } from "react";
import axios from "axios";
// import post from "../../Assets/WriteBlog.jpeg";

function Post() {
  const [category, setCategory] = useState("");
  const [closeModal, setCloseModal] = useState(false);

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/new", {
        category,
      });
      console.log(res);

      setCloseModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setCategory("");
    setCloseModal(false);
  };
  return (
    <div>
      {/* <img src={post} style={{ width: "50px" }} alt="" /> */}

      {closeModal ? null : (
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
                <form onSubmit={handleCategorySubmit}>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <i nput
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
      )}
    </div>
  );
}

export default Post;
