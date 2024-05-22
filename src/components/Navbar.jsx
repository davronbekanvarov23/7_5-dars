import React from "react";
import NavLinks from "./NavLinks";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar ">
      <div className="Nav-content align-content">
        {" "}
       <img src="" alt="" />
        <ul className="Nav-List">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
