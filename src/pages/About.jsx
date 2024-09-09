import React from "react";
import MainLayout from "../layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="about-container">
        <h1>Welcome to Fake Store</h1>
        <p>
          We are passionate about providing the best products to our customers.
          Our platform connects you with a wide variety of products, ranging
          from electronics to fashion and more. We source our products from
          trusted suppliers to ensure you receive high-quality items at
          competitive prices.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make online shopping easy, enjoyable, and accessible
          to everyone. We believe in offering a seamless shopping experience
          with a focus on customer satisfaction. Our dedicated team works
          tirelessly to bring you the latest trends and the best deals
          available.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, feedback, or need assistance, please do not
          hesitate to reach out to our customer service team. We are here to
          help!
        </p>
      </div>
    </MainLayout>
  );
};

export default About;
