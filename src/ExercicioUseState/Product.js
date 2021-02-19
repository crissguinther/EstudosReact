import React from "react";

const Product = ({ product, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {product}
    </button>
  );
};

export default Product;
