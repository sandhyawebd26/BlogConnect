import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";



function UserDetails() {
  const navigate= useNavigate();

    const [user, setUser]=useState("");
    const {id}= useParams();


    //get user by id

    useEffect(() => {
        const fetchUserById = async () => {
          try {
            const res = await axios.get(`http://localhost:4000/api/v1/users/${id}`);
            setUser(res.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUserById();
      }, [id]);

    
      //update
  const handleUserUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/api/v1/users/${id}`, {
        user
      });
      alert("Category Updated Successfuly!!");
    } catch (error) {
      console.error(error);
    }
  };

    //delete by id
    const handleUserDelete = async (e) => {
        e.preventDefault();
    
        try {
          await axios.delete(`http://localhost:4000/api/v1/users/${id}`);
          alert("Category deleted successfully!!");
        } catch (error) {
          console.error(error);
        }
      };
    

  return (
    <div>
      <Navbar />
      <header id="main-header" class="py-2 bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>User</h1>
            </div>
          </div>
        </div>
      </header>
      <section id="actions" class="py-4 mb-4 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <button class="btn btn-light btn-block" onClick={()=>navigate(`/`)}>
                <i class="fas fa-arrow-left"></i> Back To Dashboard
              </button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-success btn-block" onClick={handleUserUpdate}>
                <i class="fas fa-check"></i> Save Changes
              </button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-danger btn-block" onClick={handleUserDelete}>
                <i class="fas fa-trash"></i> Delete User
              </button>
            </div>
          </div>
        </div>
      </section>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e)=>setUser(e.target.value)}
            // className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e)=>setUser(e.target.value)}
            // className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e)=>setUser(e.target.value)}
            // className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={(e)=>setUser(e.target.value)}
            // className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {/* {errors.password && <div className="invalid-feedback">{errors.password}
                  </div>} */}
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default UserDetails;
