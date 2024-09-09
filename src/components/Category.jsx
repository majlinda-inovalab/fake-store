import React from "react";
import { useNavigate } from "react-router-dom";
const Category = ({ activeCategory }) => {
  const categories = [
    { name: "Electronics", code: "electronics", count: 6 },
    { name: "Jewelry", code: "jewelery", count: 4 },
    { name: "Men's clothing", code: "men's clothing", count: 4 },
    { name: "Women's clothing", code: "women's clothing", count: 6 },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryCode) => {
    if (categoryCode === activeCategory) {
      navigate("/products");
    } else {
      navigate(`/products/category/${categoryCode}`);
    }
  };
  return (
    <div className="category-item">
      {categories.map((cat) => (
        <div
          key={cat.code}
          className={`name ${cat.code === activeCategory ? "active" : ""}`}
          onClick={() => handleCategoryClick(cat.code)}
          style={{ cursor: "pointer" }}
        >
          {cat.name} ({cat.count})
        </div>
      ))}
    </div>
  );
};

export default Category;
