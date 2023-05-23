import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "./Post"

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/get-blog");
        //  console.log("hello", res.data.data.data);
        setData(res.data.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <>
      <Navbar title="BlogsConnect" />
      <Post/>
      {data ? (
        data.map((d, index) => (
          <div
            className="card mb-3 mt-5"
            style={{ maxWidth: "100%" }}
            key={index + 1}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`http://localhost:4000/api/v1/uploads/${d.blogImage}`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{d.title}</h4>
                  <p className="card-text">{d.description}</p>
                  <h5 className="card-text">{d.category}</h5>
                  {/* <p>{d?.createdAt.slice(0, 10)}</p> */}
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/Details/${d._id}`)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
      <Footer />
    </>
  );
}

export default Home;
