import styles from "./ProductPage.module.css";

export default function ProductPage() {

    // ADD LOGIC AND PROPS HERE
  return (
    <div className={styles.container}>
      <img
        src={productImage}
        className={styles.img}
        width={300}
        height={300}
      />
      <div className={styles.test}>
        <h3 className={styles.title}>{productName}</h3>
        <p className={styles.price}>{price} kr</p>
      </div>
      <div className={styles.description}>
        {productDescription}
        <p><b>Size: {size}</b></p>
      </div>
      <button className={styles.btn}>add to cart</button>
    </div>
  );
}
