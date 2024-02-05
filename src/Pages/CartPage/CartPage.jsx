import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context.jsx";
import styles from "./CartPage.module.css";

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
    <div className={styles.wrapper}>
      <Link to="/Shop">
        <button className={styles.btn}>Back to shop</button>
      </Link>
      <div className={styles.cart}>
        <div>
          <h1 className={styles.title}>Your cart items</h1>
        </div>
        <div className={styles.cartItems}>
          {cartProducts.map((product) => {
            const quantity = cartItems[product.id];
            return (
              <div key={product.id} className={styles.cartItem}>
                <img src={product.productImage} className={styles.img} />
                <div className={styles.description}>
                  <p className={styles.productName}>{product.productName}</p>
                  <p> {product.price} SEK</p>
                </div>
                <div className={styles.itemSection}>
                  <div className={styles.itemQuantity}>
                    <button
                      className={styles.plusBtn}
                      onClick={() => addToCart(product.id)}
                    >
                      +
                    </button>
                    <p className={styles.quantity}>{quantity}</p>
                    <button
                      className={styles.minusBtn}
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
        <div className={styles.discountInput}>
          <input
            className={styles.discountPrompt}
            type="text"
            placeholder="Enter discount code"
          />
          <input
            className={styles.discountSubmit}
            type="submit"
            value="Apply"
            onClick={handleClick}
          />
        </div>
        <div className={styles.discountMessage}></div>
        <div className={styles.totalCounter}>
          <p className={styles.total}>Total: {totalAmount} SEK</p>
        </div>
        <Link to="/CheckoutPage">
          <button className={styles.checkOutBtn}>Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
