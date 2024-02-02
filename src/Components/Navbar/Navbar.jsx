// -----------------------------------------------------------------------------
// NAVBAR STRUCTURE + LINK TO CART
// -----------------------------------------------------------------------------
/*
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import placeholderLogo from "../../../images/Images/placeholderLogo.png";
import { ShopContext } from "../../context/shop-context.jsx";

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
*/
import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import placeholderLogo from "../../../public/Images/Logo.jpg";
import { ShopContext } from "../../context/shop-context.jsx";

export default function Navbar() {
  const { cartItems, updateCartItemCount } = useContext(ShopContext);

  const handleUpdateCart = (newAmount, itemId) => {
    updateCartItemCount(newAmount, itemId);
  };
  const totalCount = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/LandingPage">
          <img src={placeholderLogo} className="placeholderLogo" />
        </Link>
      </div>
      <div className="cartLogo">
        <Link to="/CartPage">
          <ShoppingCart className="shoppingCart" size={42} />
        </Link>
      </div>
      <div className="cartItemCount">{totalCount}</div>
    </div>
  );
}
