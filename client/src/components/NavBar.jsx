import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>BLOGS</h1>
      <Link to={"/create"} className="create-btn">
        Create Blog
      </Link>
    </div>
  );
};

export default NavBar;
