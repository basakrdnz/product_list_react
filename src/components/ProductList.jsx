import React from "react";
import data from "/data.json"; 
import Card from "./Card";

function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
