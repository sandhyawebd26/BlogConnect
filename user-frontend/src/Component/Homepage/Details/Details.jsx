import React, { useState, useEffect } from "react";
import "./Details.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import cards from "../cardJson";
import { Link } from "react-router-dom";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  
    useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/get-blog/${id}`);
       
       console.log(res.data.data.data)
        setBlog(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogDetails();
  }, [id]);

  
  return (
    <>
      <Navbar />
      {blog ? (
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
              <h2>{blog.title}</h2>
              {/* <img
                src={`http://localhost:4000/api/v1/uploads/${blog.blogImage}`}
                alt="Blog"
                className="img-fluid my-4"
              /> */}
              <p>{blog.description}</p>
              <h4>Category: {blog.category}</h4>
              {/* Additional blog details can be displayed here */}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </>
  );
}

export default Details;
