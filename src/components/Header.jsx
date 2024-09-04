import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    key: "home",
    path: "/",
    title: "Home",
  },
  {
    key: "products",
    path: "/products",
    title: "Products",
  },
  {
    key: "about",
    path: "/about",
    title: "About",
  },
];

export const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  let location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <nav>
      <ul className="navigation">
        {navLinks.map((link) => (
          <li
            style={{
              textDecoration: pathname == link.path ? "underline" : "",
            }}
            key={link.key}
          >
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}

        <li className="cart-icon">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
