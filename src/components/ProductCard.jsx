import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`} className="no-underline">
        <div className="product">
          <div className="product-image">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="product-content">
            <div className="product-name">
              <h2>{product.title}</h2>
            </div>
            <span className="product-price">{product.price}$</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
