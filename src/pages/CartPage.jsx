import { useEffect, useState } from "react";
import cartPng from "../assets/empty-cart.png";
import MainLayout from "../layouts/MainLayout";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  
  const calculateTotalPrice = (product) => {
    return (product.price * product.quantity).toFixed(2);
  };

  const updateQuantity = (productId, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <MainLayout>
      {cart.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <span>{item.title}</span>
                </td>
                <td>{item.price}$</td>
                <td>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span> {item.quantity} </span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </td>
                <td>{calculateTotalPrice(item)}$</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className="not-found">
            <img className="cart-empty" src={cartPng} alt="Cart is empty" />
            <h1>Your cart is empty</h1>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default CartPage;
