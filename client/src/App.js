import React from 'react';
import Dashboard from './Component/Dashboard/Dashboard';
import Posts from './Component/Posts/Posts';
import Categories from './Component/Categories/Categories.jsx';
import Users from './Component/Users/Users';
import Login from './Component/Login/Login';
import Welcome from './Component/Welcome/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
