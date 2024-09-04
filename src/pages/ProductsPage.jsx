import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import useGetPosts from "../hooks/useGetProducts";
import MainLayout from "../layouts/MainLayout";

const ProductsPage = () => {
  const { products, isLoading } = useGetPosts();

  if (isLoading) return <div>loading...</div>;
  return (
    <MainLayout>
      {products.length > 0 ? (
        <div className="products-page">
          <div className="category-filter">
            <h3>Category</h3>
            <Category />
          </div>
          <div className="product-container">
            {products.map((product) => (
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

export default ProductsPage;
