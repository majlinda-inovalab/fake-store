import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/category/:categoryId" element={<ListingPage />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ListingPage />} />
    </Routes>
  );
}

export default App;
