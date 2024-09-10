import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <FontAwesomeIcon icon={faStore} />
            <span
              className="cart-count"
              style={{
                color: "#4f4531e6",
                fontWeight: "bold",
                verticalAlign: "top",
                marginLeft: "2px",
                padding: "0",
              }}
            >
              {cartCount}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
