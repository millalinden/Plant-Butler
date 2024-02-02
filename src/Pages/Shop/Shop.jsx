// -----------------------------------------------------------------------------
// STRUCTURE FOR SHOP AND THE "CONTAINER" WHERE THE PRODUCT CARDS ARE ADDED
// -----------------------------------------------------------------------------
import React from "react";
import { PRODUCTS } from "../../products.js";
import { Product } from "../../Components/Product/Product.jsx";
import styles from "./Shop.module.css";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.shopTitle}>
        <h1></h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <Link
              className="link_default"
              to={`/product/${product.id}`}
              key={product.id}
            >
              <Product data={product} />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
