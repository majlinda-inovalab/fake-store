import { Link, useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import MainLayout from "../layouts/MainLayout";

const Product = () => {
  const { productId } = useParams();
  const { isLoading, product, isError } = useGetProduct(productId);

  console.log(product, product.length);
  if (isLoading) return <div>Loading...</div>;
  if (isError || Object.keys(product).length === 0)
    return (
      <div>
        <p>Something went wrong</p>
        <Link to={"/products"}>Back to posts</Link>
      </div>
    );

  return (
    <MainLayout>
      <div className="product-card">
        <div className="product">
          <div className="product-image">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="product-content">
            <div className="rating-reviews">
              <span className="rate">{product.rating.rate}</span>
              <span className="reviews">{product.rating.count}</span>
            </div>
            <h3 className="title">{product.title}</h3>
            <div className="category">{product.category}</div>
            <span className="price">{product.price}$</span>
            <p className="dscription">{product.description}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
