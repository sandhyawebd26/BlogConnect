import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Blogen
          </NavLink>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/" activeClassName="active">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/Posts" activeClassName="active">
                  Posts
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/Categories" activeClassName="active">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/Users" activeClassName="active">
                  Users
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown mr-3">
                <NavLink
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="fas fa-user"></i> Welcome Brad
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/Profile">
                    <i className="fas fa-user-circle"></i> Profile
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/Settings"
                  >
                    <i className="fas fa-cog"></i> Settings
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"   to="/Login">
                  <i className="fas fa-user-times"></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
