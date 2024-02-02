import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <>
      <div className="checkoutPage">
        <div className="popUpMessage">
          <h2>Thank you for your order</h2>
          <p>Your order number: 834447 </p>
        </div>
        <Link to="/">
          <button className="HomePageBtn">Back to Homepage</button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutPage;
