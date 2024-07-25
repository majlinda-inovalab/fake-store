import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product">
        <div className="product-image">
          <img src={product.image} alt="Product Image" />
        </div>
        <div className="product-content">
          <h2>{product.title}</h2>
          <span className="product-price">{product.price}$</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
