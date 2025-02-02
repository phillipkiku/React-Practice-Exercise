import React, { useState } from "react";
import Products from "./Components/Products";
import Pic1 from "./assets/pic1.jpeg";

function App() {

  let product = [
    {
      image: Pic1,
      name: "Savannah Desert",
      price: "900",
      description: "abdcefghmi",
      // stock: "Instock",
      stock: "Instock"
    },
    {
      image: Pic1,
      name: "Savannah Desert",
      price: "900",
      description: "abdcefghmi",
      // stock: "Instock",
      stock: "OutOfStock"
    },
    {
      image: Pic1,
      name: "Savannah Desert",
      price: "900",
      description: "abdcefghmi",
      // stock: "Instock",
      stock: "Instock"
    },

    {
      image: Pic1,
      name: "Savannah Desert",
      price: "900",
      description: "abdcefghmi",
      // stock: "Instock",
      stock: ""
    },
  ];

  return (
    <div className="page">
      <h1>E-Commerce Products Page. </h1>

      {product.map((products, index) => (
        <Products
          key={index}
          image={products.image}
          name={products.name}
          price={products.price}
          description={products.description}
          stock={products.stock}
        />
      ))}
    </div>
  );
}
export default App;
