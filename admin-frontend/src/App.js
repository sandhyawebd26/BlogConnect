import React from "react";
import Dashboard from "./Component/Dashboard/Dashboard";
import Posts from "./Component/Posts/Posts";
import Categories from "./Component/Categories/Categories.jsx";
import Users from "./Component/Users/Users";
import Login from "./Component/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Component/Welcome/Profile/Profile";
import Settings from "./Component/Welcome/Setings/Settings";

import Details from "./Component/Posts/Details";
import CatDetailsPage from "./Component/Categories/Catdetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/catdetails/:id" element={<CatDetailsPage />} />

        <Route path="/Users" element={<Users />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />

        <Route path="/Details/:id" element={<Details />} />

        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
