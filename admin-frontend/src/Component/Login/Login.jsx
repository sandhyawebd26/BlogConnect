import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({}); // Clear any previous errors when the input changes
  };

  const validateForm = () => {
    const errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
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
          console.log(res)
          console.log(res.data.user.password); // Display the server response
          console.log(res.data.user.email);
          navigate("/"); // Navigate to the dashboard after successful login
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
      <Navbar />
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-user"></i> Blogen Admin
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h4>Account Login</h4>
                </div>
                <div className="card-body">
                  {errors.server && (
                    <div className="alert alert-danger">{errors.server}</div>
                  )}
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleLogin}
                      disabled={isLoading}
                      class="btn btn-primary btn-block"
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </button>
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

export default Login;
