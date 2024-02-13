import React, { useEffect } from "react";
import ProductList from "../grid/productList";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    description: "This is the first product.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "This is the second product.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "This is the second product.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "This is the second product.",
  },
  // Add more products as needed
];

const Home = () => {
  const API_ENDPOINT = "https://your-api-url.com/products";

  const getProducts = () => {
    axios
      .get(API_ENDPOINT)
      .then((response) => {
        // The response data (your products) will be in response.data
        const products = response.data;

        // You can now use the products data in your application
        console.log(products);
        return products;
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching data", error);
      });
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Home</h1>
        <Link to="/cart" className="nav-link">
          <button className="cart-button">Cart</button>
        </Link>
      </nav>
      <ProductList products={products} />
    </div>
  );
};

Home.defaultProps = {
  title: "default",
};

export default Home;
