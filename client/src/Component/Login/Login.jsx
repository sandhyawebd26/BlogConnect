import React, {useState} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",

    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(data.name, data.email, data.contact, data.password);
    axios
      .post("http://localhost:4000/api/auth/register", {
        fullname: data.name,
        email: data.email,
        contact: data.contact,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");

        alert("success");
      })
      .catch((err) => {
        console.log(err);
        alert("service error");
      });
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
                  <form action="index.html">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" />
                    </div>

                    <button
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                      onClick={handleLogin}
                    >
                      Login
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
