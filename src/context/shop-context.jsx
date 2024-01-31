/*import React from "react";
import { PRODUCTS } from "../products";
import ShopContextProvider from "react-redux";
import { useState } from "react";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToCart, removeFromCart };
  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
      <div>shop-context</div>
    </ShopContext.Provider>
  );
};
export const ShopContext = createContext(null);
*/
import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products.js";
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContext = createContext(null);
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToCart, removeFromCart };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
      <div>shop-context</div>
    </ShopContext.Provider>
  );
};
