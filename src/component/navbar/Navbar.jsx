import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../images/indexImg";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <CustomLink to="/">menu</CustomLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
