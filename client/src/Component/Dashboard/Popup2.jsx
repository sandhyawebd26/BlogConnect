import React from 'react'

function Popup2() {
  return (
    <div> <div class="modal fade" id="addUserModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-warning text-white">
          <h5 class="modal-title">Add User</h5>
          <button class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="password2">Confirm Password</label>
              <input type="password" class="form-control"/>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-warning" data-dismiss="modal">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Popup2