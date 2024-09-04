import React from "react";

const Category = () => {
  const categories = [
    { name: "Electronics", code: "electronics", count: 6 },
    { name: "Jewelry", code: "jewelery", count: 4 },
    { name: "Men's clothing", code: "men's clothing", count: 4 },
    { name: "Women's clothing", code: "women's clothing", count: 6 },
  ];

  return (
    <>
      <div className="category-item">
        <div className="name">Electronics (6)</div>
      </div>
      <div className="category-item">
        <div className="name">Jewelry (4)</div>
      </div>
      <div className="category-item">
        <div className="name">Men's clothing (4)</div>
      </div>
      <div className="category-item">
        <div className="name">Women's clothing (6)</div>
      </div>
    </>
  );
};

export default Category;

/*import React from "react";

const Category = () => {
  const categories = [
    { name: "Electronics", code: "electronics", count: 6 },
    { name: "Jewelry", code: "jewelery", count: 4 },
    { name: "Men's clothing", code: "men's clothing", count: 4 },
    { name: "Women's clothing", code: "women's clothing", count: 6 },
  ];

  return (
    <div className="category-item">
      {categories.map((cat) => (
        <div className="name">
          {cat.name} ({cat.count})
        </div>
      ))}
    </div>
  );
};

export default Category;
*/
