import { useParams } from "react-router-dom";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import useGetPosts from "../hooks/useGetProducts";
import MainLayout from "../layouts/MainLayout";

const ListingPage = () => {
  const { categoryId } = useParams();
  const { products, isLoading } = useGetPosts();

  const filteredProducts = categoryId
    ? products.filter((product) => product.category === categoryId)
    : products;

  if (isLoading) return <div>loading...</div>;
  return (
    <MainLayout>
      {filteredProducts.length > 0 ? (
        <div className="products-page">
          <div className="category-filter">
            <h3>Category</h3>
            <Category activeCategory={categoryId} />
          </div>
          <div className="product-container">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <h2>No products</h2>
      )}
    </MainLayout>
  );
};

export default ListingPage;
