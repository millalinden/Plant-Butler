import React, { useState } from "react";
import "./productFilter.css";
import { useNavigate } from "react-router-dom";
import ProductData from "../../productData.json";

function ProductFilter() {
  const [items, setItems] = useState(ProductData);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const uniqueSizes = [...new Set(ProductData.map((val) => val.productSize))];

  const handleSizeClick = (size) => {
    setSelectedSize(size);

    const filteredProducts = size
      ? ProductData.filter((product) => product.productSize === size)
      : ProductData;

    setItems(filteredProducts);
  };

  const handlePlantSelect = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="filter-container  mt-5">
      <h1 className="filter-h1">Product filter</h1>
      <div className="buttonRow">
        {uniqueSizes.map((size) => (
          <button
            className="sizeButtons"
            key={size}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>

      {selectedSize && (
        <div className="filteredProducts">
          <select onChange={(e) => handlePlantSelect(e.target.value)}>
            <option value="">Select a plant</option>
            {items.map((product) => (
              <option key={product.id} value={product.id}>
                {product.productName}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default ProductFilter;
