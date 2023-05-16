import React from "react";
import "./CarDetails.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router-dom";
import cards from "../cardJson";
import { Link } from "react-router-dom";

function CarDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Navbar />
      <Link to={`/${cards.id}`} style={{ textDecoration: "none" }}>
        <div className="container">
          <div className="title">
            <h3 className="carTitle">{cards[id - 1].title}</h3>
            <img src={cards[id - 1].imageUrl} alt="" />
            <p>{cards[id - 1].description}</p>
          </div>
        </div>
      </Link>
      <Footer />
    </>
  );
}

export default CarDetails;
