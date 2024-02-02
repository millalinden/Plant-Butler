// -----------------------------------------------------------------------------
// PRODUCT "CARD" STRUCTURE
// -----------------------------------------------------------------------------
import React, { useContext } from "react";
import styles from "./Product.module.css";
import { ShopContext } from "../../context/shop-context.jsx";


export const Product = (props) => {
  const { id, productName, price, productImage, productDescription } =
    props.data;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productCard}>
        <img
          className={styles.productImage}
          src={productImage}
          width={150}
          height={160}
          alt="Product Image"
        />
        <div className={styles.descriptionCard}>
          <p className={styles.productDescription}>{productDescription}</p>
        </div>
        <div className={styles.cardName}>
          <p className={styles.productName}>
            <b>{productName}</b>
          </p>
        </div>
        <div className={styles.cardPrice}>
          <p className={styles.productPrice}>
            <b>kr{price}</b>
          </p>
        </div>
        <div className={styles.addToCartButton}>
          <button
            className={styles.addToCartButtonMain}
            onClick={() => addToCart(id)}
          >
            <b>Add to cart</b>
          </button>
        </div>
      </div>
    </div>
  );
};
