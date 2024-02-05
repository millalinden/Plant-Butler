import { Link } from "react-router-dom";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  return (
    <>
      <div className={styles.checkoutPage}>
        <div className={styles.popUpMessage}>
          <h3>Thank you for your order</h3>
          <p>Your order number: 834447 </p>
        </div>
        <Link to="/">
          <button className={styles.HomePageBtn}>Back to Homepage</button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutPage;
