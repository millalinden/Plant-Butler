// -----------------------------------------------------------------------------
// NAVBAR STRUCTURE + LINK TO CART
// -----------------------------------------------------------------------------

import React, { useContext } from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import placeholderLogo from "../../../src/Assets/Images/Logo.jpg";
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
    <>
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
          <div className="cartItemCount">{totalCount}</div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
