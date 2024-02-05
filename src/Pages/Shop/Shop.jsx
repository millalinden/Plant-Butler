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
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    console.log("Popup Timer Set");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(popupTimer);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.shop}>
      <div className="productFilter">
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
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p className={styles.modalMessage}>
                Hello plant lover! Your exclusive discount code: <b>fed25</b>
              </p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
