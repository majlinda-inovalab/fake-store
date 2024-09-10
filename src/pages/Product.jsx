import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import useGetProduct from "../hooks/useGetProduct";
import MainLayout from "../layouts/MainLayout";

const Product = () => {
  const { productId } = useParams();
  const { isLoading, product, isError, addToCart } = useGetProduct(productId);
  const [addedToCart, setAddedToCart] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !product)
    return (
      <div>
        <p>Something went wrong</p>
        <Link to={"/products"}>Back to products</Link>
      </div>
    );

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
  };

  return (
    <MainLayout>
      <div className="card">
        <div className="product-item">
          <div className="product-image">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="productContent">
            <div className="rating-reviews">
              <StarRating rating={product.rating.rate} />
              <span className="reviews">{product.rating.count} reviews</span>
            </div>
            <h3 className="title">{product.title}</h3>
            <div className="category">
              <strong>Category: </strong>
              {product.category}
            </div>
            <span className="price">
              <strong>Price: </strong>
              {product.price}$
            </span>
            <p className="description">
              <strong>Description: </strong>
              {product.description}
            </p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {addedToCart && <p style={{ color: "green" }}>Added to Cart!</p>}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
