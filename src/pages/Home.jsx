import { Link } from "react-router-dom";
import categoryImage from "../assets/electronics.jpg";
import categoryImage1 from "../assets/jewelry.jpeg";
import categoryImage2 from "../assets/mensClothing.webp";
import categoryImage3 from "../assets/womenClothing.jpg";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: categoryImage,
      code: "electronics",
    },
    {
      id: 2,
      name: "Jewelry",
      image: categoryImage1,
      code: "jewelery",
    },
    {
      id: 3,
      name: "Men's clothing",
      image: categoryImage2,
      code: "men's clothing",
    },
    {
      id: 4,
      name: "Women's clothing",
      image: categoryImage3,
      code: "women's clothing",
    },
  ];

  return (
    <MainLayout>
      <div className="category-container">
        {categories.map((category) => {
          return (
            <Link
              to={`/products/category/${category.code}`}
              className="no-underline"
              key={category.id}
            >
              <div className="category" key={category.id}>
                <div className="category-image">
                  <img src={category.image} alt="Category Image" />
                </div>
                <div className="category-name">
                  <h2>{category.name}</h2>{" "}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Home;
