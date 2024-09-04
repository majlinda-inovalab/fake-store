import { useEffect, useState } from "react";

const useGetProduct = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);
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

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return { isLoading, product, isError, addToCart };
};

export default useGetProduct;
