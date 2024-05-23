import React from "react";
import NavLinks from "./NavLinks";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { MdShoppingCart } from "react-icons/md";

import { useSelector } from "react-redux";

function Navbar() {
  const { amount } = useSelector((state) => state.products);
  return (
    <div className="Navbar ">
      <div className="Nav-content align-content">
        <img src={logo} alt="" width={138} height={20} />
        <ul className="Nav-List">
          <NavLinks />
        </ul>

        <div className="card">
          <span className="soni">
            {amount}
          </span>
          <MdShoppingCart className="korzinka" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
