import React from "react";

function Popup1() {
  return (
    <div>
      <div class="modal fade" id="addCategoryModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-success text-white">
              <h5 class="modal-title">Add Category</h5>
              <button class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" class="form-control" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-success" data-dismiss="modal">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup1;
