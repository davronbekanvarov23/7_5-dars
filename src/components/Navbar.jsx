import { useState } from "react";
import NavLinks from "./NavLinks";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { MdShoppingCart } from "react-icons/md";
import Cart from "./Modal";

import { useSelector } from "react-redux";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const closaModal = (e) => {
    console.log(e);
  };
  const { amount } = useSelector((state) => state.products);
  return (
    <div className="Navbar ">
      <div className="Nav-content align-content">
        <img src={logo} alt="" width={138} height={20} />
        <ul className="Nav-List">
          <NavLinks />
        </ul>

        <div className="cartt">
          <div className="card" onClick={()=>setShowModal(true)}>
            <span className="soni">{amount}</span>
            <MdShoppingCart className="korzinka" />
          </div>
          {showModal && (
            <div className="modal" id="modal">
              <Cart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
