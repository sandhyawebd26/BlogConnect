import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";

function Welcome() {
  return (
    <div>
      <Navbar />
      <Profile/>
      <Footer />
    </div>
  );
}

export default Welcome;
