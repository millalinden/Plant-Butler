// -----------------------------------------------------------------------------
// STRUCTURE FOR HOW THE CART SHOULD LOOK
// -----------------------------------------------------------------------------
import { useState, useEffect } from "react";
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
