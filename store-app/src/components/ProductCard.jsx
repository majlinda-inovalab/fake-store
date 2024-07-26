import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product">
        <div className="product-image">
          <img src={product.image} alt="Product Image" />
        </div>
        <div className="product-content">
          <div className="product-name">
            <Link to={`${product.id}`} className="no-underline">
              <h2>{product.title}</h2>
            </Link>
          </div>
          <span className="product-price">{product.price}$</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
