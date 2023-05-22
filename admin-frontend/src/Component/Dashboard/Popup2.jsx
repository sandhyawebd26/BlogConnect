import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Popup2() {
  const navigate = useNavigate();
const [errors, setErrors]=useState("")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data.name, data.email, data.password, data.confirmPassword);
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/v1/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      console.log("heyy",response);
      navigate("/");
      alert("Success");
    } catch (err) {
      console.log(err.response);
      if (err.response && err.response.data && err.response.data.errors) {
        // Set the errors in state to display them in the UI
        setErrors(err.response.data.errors);
      } else {
        alert("Service error");
      }
    }
  };
  
  return (
    <div>
      <div className="modal fade" id="addUserModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title">Add User</h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleInputs}
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleInputs}
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleInputs}
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleInputs}
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button 
                
                onClick={handleSubmit}
                type="submit" className="btn btn-warning" data-dismiss="modal" onSubmit={handleSubmit}>
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

export default Popup2;
