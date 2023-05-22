import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";



function Details() {
  const [blog, setBlog]=useState([]);
  const {id}=useParams();

  useEffect(()=>{
    const fetchBlogById= async()=>{
      try{
        const res = await axios.get(`http://localhost:4000/api/v1/get-blog/${id}`);
        setBlog(res.data.blog);
        console.log(res.data);
      } catch(error){
        console.log(error);
      }
    };
    fetchBlogById();
  }, [id]);

 
const handleUpdate= async (e)=>{
  e.preventDefault();

  try{
    await axios.put(`http://localhost:4000/api/v1/update-blog/${id}`,{
      blog,
    })
    alert("Blog Updated successfully");

  } catch(error){
    console.log(error);
  }
};

const handleDelete = async (e) => {
  e.preventDefault();

  try {
    await axios.delete(`http://localhost:4000/api/v1/delete-blog/${id}`,{
  blog,
});
    alert("Blog deleted successfully!!");
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
              <a href="index.html" class="btn btn-light btn-block">
                <i class="fas fa-arrow-left"></i> Back To Dashboard
              </a>
            </div>
            <div class="col-md-3">
              <a href="index.html" class="btn btn-success btn-block" onClick={handleUpdate}>
                <i class="fas fa-check"></i> Save Changes
              </a>
            </div>
            <div class="col-md-3">
              <a href="index.html" class="btn btn-danger btn-block"  onClick={handleDelete}>
                <i class="fas fa-trash"></i> Delete Post
              </a>
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
                  <h4>Edit Post</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label for="title">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        value={blog.title}
          onChange={(e) => {
            setBlog({ ...blog, title: e.target.value });
          }}
                      />
                    </div>
                    <div class="form-group">
                      <label for="category">Category</label>
                      <select class="form-control">
                        <option value="" selected>
                          Web Development
                        </option>
                        <option value="">Tech Gadgets</option>
                        <option value="">Business</option>
                        <option value="">Health & Wellness</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="image">Upload Image</label>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="image"
                          value=""
                        />
                        <label for="image" class="custom-file-label">
                          Choose File
                        </label>
                      </div>
                      <small class="form-text text-muted">Max Size 3mb</small>
                    </div>
                    <div class="form-group">
                      <label for="body">Body</label>
                      <textarea name="editor1" class="form-control">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat culpa nam cumque voluptatum. Possimus
                        recusandae porro architecto officiis illo dignissimos
                        ratione aut officia reprehenderit! Iure cum numquam
                        fugit doloremque quis ullam illo odit, odio voluptates
                        non quisquam laboriosam consectetur quasi perspiciatis!
                        Sapiente minus aperiam nobis molestias autem ut
                        praesentium laudantium?
                      </textarea>
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

export default Details;
