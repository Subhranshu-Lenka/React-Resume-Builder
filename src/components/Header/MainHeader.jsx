import React from "react";
import { Link } from "react-router-dom";
import "./mainHeader.css"
function MainHeader() {
  return (
    <>
      This is the Main Header
      <div className="custom-header">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </>
  );
}

export default MainHeader;
