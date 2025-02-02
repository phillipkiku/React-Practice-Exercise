import React from "react";
import "../index.css"

function Products({ image, name, price, description, stock }) {
  return (
    <div className="products">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <button>Add to Cart</button>
      {stock !== "OutOfStock" && stock !== "" && (
        <div className="stock">
          <p>{stock}</p>
        </div>
      )}
    </div>
  );
}

export default Products;
