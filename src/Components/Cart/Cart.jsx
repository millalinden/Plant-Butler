// -----------------------------------------------------------------------------
// CART LOGIC = WHAT YOU SEE IN HEADER (WHEN YOU ADD PRODUCTS COUNT)
// -----------------------------------------------------------------------------
/*
import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context.jsx";
import { CartItem } from "./Cart-item.jsx";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};   */
