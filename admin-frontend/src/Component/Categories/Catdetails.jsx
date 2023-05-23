import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function CatDetailsPage() {
  const navigate= useNavigate();
  const [category, setCategory] = useState("");
  const { id } = useParams();

  //get cat by id
  useEffect(() => {
    const fetchCategoryById = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/get-cat/${id}`);
        setCategory(res.data.category.category);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryById();
  }, [id]);

  //update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/api/update-category/${id}`, {
        category,
      });
      alert("Category Updated Successfuly!!");
    } catch (error) {
      console.error(error);
    }
  };


  //delete by id
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:4000/api/delete-category/${id}`);
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
              <h1>Post One</h1>
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
              <button class="btn btn-success btn-block" onClick={handleSubmit}>
                <i class="fas fa-check"></i> Save Changes
              </button>
            </div>
            <div class="col-md-3">
              <button class="btn btn-danger btn-block" onClick={handleDelete}>
                <i class="fas fa-trash"></i> Delete Post
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="details">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4>Edit Category</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <input
                        type="text"
                        className="form-control"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                  </form>
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

export default CatDetailsPage;
