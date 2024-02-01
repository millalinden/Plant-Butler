import React from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="cart-item">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>kr {price}</p>
      </div>
    </div>
  );
};
