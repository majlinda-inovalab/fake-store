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
            <h3 className="title">{product.title}</h3>
            <div className="rating-reviews">
              <StarRating rating={product.rating.rate} />
              <p className="reviews">{product.rating.count} reviews</p>
            </div>
            <div className="price">
              <strong>{product.price}$ </strong>
            </div>

            <p className="description">{product.description}</p>
            <div className="add-to-cart">
              <div className="quantity">
                <button className="minus">-</button>
                <span> 1 </span>
                <button className="plus">+</button>
              </div>
              <button className="add" onClick={handleAddToCart}>
                Add to Cart
              </button>
              {addedToCart && (
                <p style={{ color: "#a6c07e", fontWeight: "bold" }}>
                  {" "}
                  Added to Cart!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
