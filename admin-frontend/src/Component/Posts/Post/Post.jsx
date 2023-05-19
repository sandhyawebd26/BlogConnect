import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Post() {
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
  console.log(data);
  // ...
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
                      <th>Image</th>
                      <th>Title</th>

                      <th>Category</th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data ? (
                      data.map((d, index) => {
                        console.log("Category:", d.categoryId.category);
                        console.log("Created At:", d.categoryId.createdAt);

                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src={`http://localhost:4000/api/v1/uploads/${d.blogImage}`}
                              />
                            </td>
                            <td>{d.title}</td>
                            <td>
                              {d.categoryId.category
                                ? d.categoryId.category
                                : "N/A"}
                            </td>
                            <td>
                              {d.categoryId
                                ? new Date(
                                    d.categoryId.createdAt
                                  ).toLocaleDateString()
                                : "N/A"}
                            </td>
                            <td>
                              <Link className="btn btn-secondary" to="/Details">
                                <i className="fas fa-angle-double-right"></i>{" "}
                                Details
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="5">No data available</td>
                      </tr>
                    )}
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
