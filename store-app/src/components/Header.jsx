import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
