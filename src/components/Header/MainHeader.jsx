import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./mainHeader.css";
function MainHeader() {
  return (
    <>
      <div className="custom-header">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          About Us
        </NavLink>
        <Link to="/contact">Contact Us</Link>
        <Link to="/contribute">Contribute</Link>
      </div>
    </>
  );
}

export default MainHeader;
