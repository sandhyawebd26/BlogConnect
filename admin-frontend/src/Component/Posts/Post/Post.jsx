import React from "react";
import { Link } from "react-router-dom";

function Post() {
  return (
    <div>
      {" "}
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-pencil-alt"></i> Posts
              </h1>
            </div>
          </div>
        </div>
      </header>
      {/* SEARCH */}
      <section id="search" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Posts..."
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* POSTS */}
      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col">
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
                        <Link className="btn btn-secondary" to="/Details">
                          <i className="fas fa-angle-double-right"></i> Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Post Two</td>
                      <td>Tech Gadgets</td>
                      <td>May 11 2018</td>
                      <td>
                        <Link className="btn btn-secondary" to="/Details">
                          <i className="fas fa-angle-double-right"></i> Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Post Three</td>
                      <td>Web Development</td>
                      <td>May 13 2018</td>
                      <td>
                        <Link className="btn btn-secondary" to="/Details">
                          <i className="fas fa-angle-double-right"></i> Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Post Four</td>
                      <td>Business</td>
                      <td>May 15 2018</td>
                      <td>
                        <Link className="btn btn-secondary" to="/Details">
                          <i className="fas fa-angle-double-right"></i> Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Post Five</td>
                      <td>Web Development</td>
                      <td>May 17 2018</td>
                      <td>
                        <Link className="btn btn-secondary" to="/Details">
                          <i className="fas fa-angle-double-right"></i> Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Post Six</td>
                      <td>Health & Wellness</td>
                      <td>May 20 2018</td>
                      <td>
                        <Link className="btn btn-secondary" to="/Details">
                          <i className="fas fa-angle-double-right"></i> Details
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* PAGINATION */}
                <nav className="ml-4">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a href="#" className="page-link">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Post;
