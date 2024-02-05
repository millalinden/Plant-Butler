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

    if (textBox.value !== "") {
      discountMessage.textContent = "applied successfully";
      discountedTotal.textContent = `kr${Math.floor(totalAmount * 0.8)}`;
      Price.style.textDecoration = "line-through";
    }
  };

  return (
    <div className="cart">
      <div>
        <Link to="/Shop">
          <button>Back to shop</button>
        </Link>
      </div>
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
          <p>Total:</p>
          <p className="total"> kr{totalAmount}</p>
          <p className="discountedTotal"></p>
        </div>
        <div className="btnContainer">
          <link rel="stylesheet" href="" />
          <button className="checkOutBtn" onClick={"window.location.reload()"}>
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
