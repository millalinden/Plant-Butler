// -----------------------------------------------------------------------------
// STRUCTURE FOR SHOP AND THE "CONTAINER" WHERE THE PRODUCT CARDS ARE ADDED
// -----------------------------------------------------------------------------
import React from "react";
import { PRODUCTS } from "../../products.js";
import { Product } from "../../Components/Product/Product.jsx";
import styles from "./Shop.module.css";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.shopTitle}>
        <h1></h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
