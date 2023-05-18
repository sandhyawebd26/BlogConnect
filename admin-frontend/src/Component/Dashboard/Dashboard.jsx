import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Popup from "./Popup";
import Popup1 from "./Popup1";
import Popup2 from "./Popup2";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);
  // ...

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/get-blog");
        console.log(res);
        setData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      <Navbar />
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-cog"></i> Dashboard
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#addPostModal"
              >
                <i className="fas fa-plus"></i> Add Post
              </a>
              <Popup />
            </div>
            <div className="col-md-3 ">
              <a
                href="#"
                className="btn btn-success btn-block"
                data-toggle="modal"
                data-target="#addCategoryModal"
              >
                <i className="fas fa-plus"></i> Add Category
              </a>
              <Popup1 />
            </div>
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-warning btn-block"
                data-toggle="modal"
                data-target="#addUserModal"
              >
                <i className="fas fa-plus"></i> Add User
              </a>
              <Popup2 />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------     */}
      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Posts</h4>
                </div>
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {data ? (
                      data.map((d, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          {/* <td>
                            <img
                              src={`http://localhost:4000/api/v1/uploads/${d.blogImage}`}
                            />
                          </td> */}
                          <td>{d.title}</td>
                          <td>{d.category}</td>
                          <td>{new Date(d.createdAt).toLocaleDateString()}</td>
                          <td>
                            <Link className="btn btn-secondary" to="/Details">
                              <i className="fas fa-angle-double-right"></i>{" "}
                              Details
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center bg-primary text-white mb-3">
                <div className="card-body">
                  <h3>Posts</h3>
                  <h4 className="display-4">
                    <i className="fas fa-pencil-alt"></i> 6
                  </h4>

                  <Link
                    to="/Posts"
                    className="btn btn-outline-light btn-sm"
                  >
                    View
                  </Link>
                </div>
              </div>

              <div className="card text-center bg-success text-white mb-3">
                <div className="card-body">
                  <h3>Categories</h3>
                  <h4 className="display-4">
                    <i className="fas fa-folder"></i> 4
                  </h4>
                  <Link
                    to="/Categories"
                    className="btn btn-outline-light btn-sm"
                  >
                    View
                  </Link>
                
                </div>
              </div>

              <div className="card text-center bg-warning text-white mb-3">
                <div className="card-body">
                  <h3>Users</h3>
                  <h4 className="display-4">
                    <i className="fas fa-users"></i> 4
                  </h4>
                  <Link
                    to="/Users"
                    className="btn btn-outline-light btn-sm"
                  >
                    View
                  </Link>
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

export default Dashboard;
