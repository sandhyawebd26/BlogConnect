import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import $ from 'jquery';
window.jQuery = $;

function Popup1() {
  const [category, setCategory] = useState("");
  const modalRef = useRef(null);

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/new", { category });
      console.log(res.data);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    $("#addCategoryModal").modal("hide");
    setCategory("");
  };

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      $(modal).on("hidden.bs.modal", () => {
        setCategory("");
      });
    }
  }, []);

  return (
    <div>
      <div className="modal fade" id="addCategoryModal" ref={modalRef}>
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
    </div>
  );
}

export default Popup1;
