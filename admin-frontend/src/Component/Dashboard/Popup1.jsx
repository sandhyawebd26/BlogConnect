import React, { useState } from "react";
import axios from 'axios';

function Popup1() {
  const [categoryTitle, setCategoryTitle] = useState("");

 

  return (
    <div>
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
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={categoryTitle}
                    // onChange={handleTitleChange}
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
