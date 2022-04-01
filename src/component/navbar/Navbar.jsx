import React from "react";
import { logo } from "../../images/indexImg";

const Navbar = () => {
  return (
    <>
      <div className=" bg-cyan-300 h-12 w-full">
        <img src={logo} alt="" />

        <h2>Hello From Munna</h2>
      </div>
    </>
  );
};

export default Navbar;
