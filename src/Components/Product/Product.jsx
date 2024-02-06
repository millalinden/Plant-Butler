// -----------------------------------------------------------------------------
// PRODUCT "CARD" STRUCTURE
// -----------------------------------------------------------------------------
import React, { useContext } from "react";
import styles from "./Product.module.css";
import { ShopContext } from "../../context/shop-context.jsx";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, productImage, productDescription } =
    props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <>
      <div className={styles.productsContainer}>
        <img
          className={styles.productImage}
          src={productImage}
          alt="Product Image"
        />
        <div className={styles.textContainer}>
          <div className={styles.cardName}>
            <b>{productName}</b>
          </div>
          <div className={styles.btnDes}>
            <Link className="link_default" to={`/product/${id}`} key={id}>
              <div className={styles.descriptionCard}>
                <p className={styles.productDescription}>
                  {productDescription}
                </p>
              </div>
            </Link>
            <p className={styles.productPrice}>{price} SEK</p>
          </div>
          <div className={styles.addToCartButton} onClick={() => addToCart(id)}>
            <button className={styles.addToCartButtonMain}>
              Add to cart {cartItemCount > 0 && <>({cartItemCount})</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
