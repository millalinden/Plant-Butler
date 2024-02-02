// -----------------------------------------------------------------------------
// NAVBAR STRUCTURE + LINK TO CART
// -----------------------------------------------------------------------------

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import placeholderLogo from "../../../images/Images/placeholderLogo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={placeholderLogo} className="placeholderLogo" />
        </Link>
      </div>
      <div className="cartLogo">
        <Link to="/CartPage">
          <ShoppingCart className="shoppingCart" size={42} />
        </Link>
      </div>
    </div>
  );
}
