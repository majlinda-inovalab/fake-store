import { useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import MainLayout from "../layouts/MainLayout";

const Product = () => {
  const { productId } = useParams();
  const { isLoading, product, isError } = useGetProduct(productId);

  console.log(product, product.length);
  return (
    <MainLayout>
      <div></div>
    </MainLayout>
  );
};

export default Product;
