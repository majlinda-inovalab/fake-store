import { useEffect, useState } from "react";

const useGetProduct = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);

  const getProduct = async (productId) => {
    setIsLoading(true);

    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return { isLoading, product, isError };
};

export default useGetProduct;
