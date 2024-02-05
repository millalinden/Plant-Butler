// -----------------------------------------------------------------------------
// STRUCTURE FOR SHOP AND THE "CONTAINER" WHERE THE PRODUCT CARDS ARE ADDED
// -----------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products.js";
import { Product } from "../../Components/Product/Product.jsx";
import styles from "./Shop.module.css";
import Footer from "../../Components/Footer/Footer";
import ScrollToTopButton from "../../Components/ScrolltotopButton/Scroll-to-top-Button.jsx";
import ProductFilter from "../../Components/productFilter/productFilter.jsx";

const Shop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.shop}>
      <div className={styles.productFilter}>
        <ProductFilter />
      </div>
      <div className={styles.shopTitle}></div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <Product data={product} />
          </div>
        ))}
      </div>
      {showTopBtn && <ScrollToTopButton onClick={goToTop} />}
      <Footer />
    </div>
  );
};

export default Shop;
