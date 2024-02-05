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
    const Price = document.querySelector(".total");
    const discountedTotal = document.querySelector(".discountedTotal");

    if (textBox.value === "fed25") {
      discountMessage.textContent = "Applied Successfully";
      discountedTotal.textContent = `kr${Math.floor(totalAmount * 0.8)}`;
      Price.style.textDecoration = "line-through";
    }
  };

  return (
    <>
      <Link to="/Shop">
        <button className="cart-btn">Back to shop</button>
      </Link>
      <div className="cart-wrapper">
        <div className="cart-container">
          <div>
            <h1>Your cart items</h1>
          </div>
          <div className="cartItems">
            {cartProducts.map((product) => {
              const quantity = cartItems[product.id];
              return (
                <div key={product.id} className="cartItem">
                  <img src={product.productImage} className="img" />
                  <div className="description">
                    <p className="productName">{product.productName}</p>
                    <p className="item-price">{product.price} SEK</p>
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
          <div className="discountContainer">
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
              <p>Total:</p>
              <p className="total">{totalAmount} SEK</p>
              <p className="discountedTotal"></p>
            </div>
            <div className="btnContainer">
              <button
                className="checkOutBtn"
                onClick={() => window.location.reload()}
              >
                <Link className="link" to="/CheckoutPage">
                  Check out
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
