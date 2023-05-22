import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/get-category");
        console.log(res);
        setData(res.data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchBlog();

  }, []);

  return (
    <div>
      <Navbar />

      <header id="main-header" className="py-2 bg-success text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-folder"></i> Categories
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section id="search" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Categories..."
                />
                <div className="input-group-append">
                  <button className="btn btn-success">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Categories</h4>
                </div>
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data ? (
                      data.map((d, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{d.category}</td>
                          <td>{d.createdAt.slice(0, 10)}</td>{" "}
                          <td>
                            <button
                              onClick={() =>navigate(`/catdetails/${d._id}`)}
                              className="btn btn-secondary"
                            >
                              <i className="fas fa-angle-double-right"></i>{" "}
                              Details
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3">No data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Categories;
