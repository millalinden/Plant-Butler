import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../../context/shop-context";
import { PRODUCTS } from "../../products";
// import { Product } from "../../Components/Product/Product";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ShopContext);

  const product = PRODUCTS.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { productName, price, productImage, productDescription, productSize } =
    product;

  return (
    <div>
      <div className={styles.container}>
        <img src={productImage} width={150} height={160} alt="Product Image" />
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{productName}</h3>
          <p className={styles.price}>{price} kr</p>
        </div>
        <p className={styles.description}>{productDescription}</p>
        <p>
          <b>Size: {productSize}</b>
        </p>
        <button className={styles.btn} onClick={() => addToCart(id)}>
          <b>Add to cart</b>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

