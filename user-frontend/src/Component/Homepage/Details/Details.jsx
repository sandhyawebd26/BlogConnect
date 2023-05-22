import React, { useState, useEffect } from "react";
import "./Details.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import cards from "../cardJson";
import { Link } from "react-router-dom";
import axios from "axios";

function CarDetails() {
  const navigate = useNavigate(); // useNavigate hook

  const [data, setData] = useState([]);

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
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Navbar />
      <Link to={`/${cards.id}`} style={{ textDecoration: "none" }}>
        <div className="container">
          <div className="title">
            <h3 className="carTitle">{cards[id - 1]?.title}</h3>
            {/* <img
              src={`http://localhost:4000/api/v1/uploads/${d.blogImage}`}
              alt="..."
            /> */}
            <p>{cards[id - 1]?.description}</p>
          </div>
        </div>
      </Link>
      <Footer />
    </>
  );
}

export default CarDetails;
