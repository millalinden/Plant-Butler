// -----------------------------------------------------------------------------
// STRUCTURE FOR HOW THE CART SHOULD LOOK
// -----------------------------------------------------------------------------
/*
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const handleClick = () => {
  const discountMessage = document.querySelector(".discountMessage");
  const textBox = document.querySelector(".discountPrompt");
  if (textBox.value !== "") {
    discountMessage.textContent = "applied successfully";
  }
};

const CartPage = () => {
  return (
    <>
      <div className="container">
        <div className="itemSection">
          <div className="itemQuantity">
            <button className="plusBtn">+</button>
            <p className="quantity">1</p>
            <button className="minusBtn">-</button>
          </div>
        </div>
        <div className="discountInput">
          <input
            className="discountPrompt"
            type="text"
            placeholder="Enter discount code"
          />
          <input
            className="discountSubmit"
            type="submit"
            value="Apply"
            onClick={handleClick}
          />
        </div>
        <div className="discountMessage"></div>
        <div className="totalCounter">
          <p className="total">Total: 99 Kr</p>
        </div>
        <div className="btnContainer">
          <link rel="stylesheet" href="" />
          <button className="checkOutBtn">
            <Link className="link" to="/CheckoutPage">
              Check out
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
*/
/*
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context.jsx";
import { CartItem } from "./Cart-item.jsx";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      <div className="container">
        <div className="itemSection">
          <div className="itemQuantity">
            <button className="plusBtn">+</button>
            <p className="quantity">1</p>
            <button className="minusBtn">-</button>
          </div>
        </div>
        <div className="discountInput">
          <input
            className="discountPrompt"
            type="text"
            placeholder="Enter discount code"
          />
          <input
            className="discountSubmit"
            type="submit"
            value="Apply"
            onClick={handleClick}
          />
        </div>
        <div className="discountMessage"></div>
        <div className="totalCounter">
          <p className="total">Total: 99 Kr</p>
        </div>
        <div className="btnContainer">
          <link rel="stylesheet" href="" />
          <button className="checkOutBtn">
            <Link className="link" to="/CheckoutPage">
              Check out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const handleClick = () => {
  const discountMessage = document.querySelector(".discountMessage");
  const textBox = document.querySelector(".discountPrompt");
  if (textBox.value !== "") {
    discountMessage.textContent = "applied successfully";
  }
};

export default Cart;
*/
/*
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context.jsx";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const cartProducts = PRODUCTS.filter((product) => cartItems[product.id] > 0);

  const handleClick = () => {
    const discountMessage = document.querySelector(".discountMessage");
    const textBox = document.querySelector(".discountPrompt");
    if (textBox.value !== "") {
      discountMessage.textContent = "applied successfully";
    }
  };

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          const quantity = cartItems[product.id];
          return (
            <div key={product.id} className="cart-item">
              <img src={product.productImage} width={150} height={150} />
              <div className="description">
                <p>
                  <b>{product.productName}</b>
                </p>
                <p>kr {product.price}</p>
              </div>
              <div className="itemSection">
                <div className="itemQuantity">
                  <button
                    className="minusBtn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    -
                  </button>
                  <p className="quantity">{quantity}</p>
                  <button
                    className="plusBtn"
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">{/* Other components */ /*}</div>
    </div>
  );
};

export default CartPage;
*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context.jsx";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const cartProducts = PRODUCTS.filter((product) => cartItems[product.id] > 0);

  const handleClick = () => {
    const discountMessage = document.querySelector(".discountMessage");
    const textBox = document.querySelector(".discountPrompt");
    if (textBox.value !== "") {
      discountMessage.textContent = "applied successfully";
    }
  };

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {cartProducts.map((product) => {
          const quantity = cartItems[product.id];
          return (
            <div key={product.id} className="cart-item">
              <img src={product.productImage} width={150} height={150} />
              <div className="description">
                <p>
                  <b>{product.productName}</b>
                </p>
                <p>kr {product.price}</p>
              </div>
              <div className="itemSection">
                <div className="itemQuantity">
                  <button
                    className="plusBtn"
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </button>
                  <p className="quantity">{quantity}</p>
                  <button
                    className="minusBtn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="discountInput">
          <input
            className="discountPrompt"
            type="text"
            placeholder="Enter discount code"
          />
          <input
            className="discountSubmit"
            type="submit"
            value="Apply"
            onClick={handleClick}
          />
        </div>
        <div className="discountMessage"></div>
        <div className="totalCounter">
          <p className="total">Total: kr{totalAmount}</p>
        </div>
        <div className="btnContainer">
          <link rel="stylesheet" href="" />
          <button className="checkOutBtn">
            <Link className="link" to="/CheckoutPage">
              Check out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
