import React, { useState } from "react";
import axios from "axios";

function Popup2() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({}); // Clear any previous errors when the input changes
  };

  const validateForm = () => {
    const errors = {};

    if (!data.name.trim()) {
      errors.password = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    if (!data.password2.trim()) {
      errors.password = "Confirm password is required";
    }


    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      setIsLoading(true);

      axios
        .post("http://localhost:4000/api/v1/admin", data)
        .then((res) => {
          console.log(res);
          console.log(res.data.user.password); // Display the server response
          console.log(res.data.user.email);
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrors({ server: "An error occurred. Please try again." });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <div class="modal fade" id="addUserModal">
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
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    class={`form-control ${errors.email ? "is-invalid" : ""}`}
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                </div>
                <div class="form-group">
                  <label for="password2">Confirm Password</label>
                  <input
                    type="password"
                    name="password2"
                    value={data.password2}
                    onChange={handleInputChange}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                onClick={handleLogin}
                disabled={isLoading}
                class="btn btn-warning"
                data-dismiss="modal"
              >
              
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup2;
