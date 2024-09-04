import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <MainLayout>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}$</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </MainLayout>
  );
};

export default CartPage;
