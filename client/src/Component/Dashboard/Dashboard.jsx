import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Posts from "../Posts/Posts";

function Dashboard() {
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
            </div>
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-success btn-block"
                data-toggle="modal"
                data-target="#addCategoryModal"
              >
                <i className="fas fa-plus"></i> Add Category
              </a>
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
                    <tr>
                      <td>1</td>
                      <td>Post One</td>
                      <td>Web Development</td>
                      <td>May 10 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Post Two</td>
                      <td>Tech Gadgets</td>
                      <td>May 11 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Post Three</td>
                      <td>Web Development</td>
                      <td>May 13 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Post Four</td>
                      <td>Business</td>
                      <td>May 15 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Post Five</td>
                      <td>Web Development</td>
                      <td>May 17 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Post Six</td>
                      <td>Health & Wellness</td>
                      <td>May 20 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right"></i> Details
                        </a>
                      </td>
                    </tr>
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
                  <a href="posts.html" className="btn btn-outline-light btn-sm">
                    View
                  </a>
                </div>
              </div>

              <div className="card text-center bg-success text-white mb-3">
                <div className="card-body">
                  <h3>Categories</h3>
                  <h4 className="display-4">
                    <i className="fas fa-folder"></i> 4
                  </h4>
                  <a
                    href="categories.html"
                    className="btn btn-outline-light btn-sm"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="card text-center bg-warning text-white mb-3">
                <div className="card-body">
                  <h3>Users</h3>
                  <h4 className="display-4">
                    <i className="fas fa-users"></i> 4
                  </h4>
                  <a href="users.html" className="btn btn-outline-light btn-sm">
                    View
                  </a>
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
