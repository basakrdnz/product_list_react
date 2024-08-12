import React from "react";
import data from "/data.json"; 
import Card from "./Card";

function ProductList() {
  return (
    <section>
    <h1 className="text-4xl font-bold mb-4">Desserts</h1>
    <div className="gap-4 flex flex-wrap">
      {data.map((product, index) => (
        <Card
          key={index}
          index={index+1}
          image={product.image}
          name={product.name}
          category={product.category}
          cart={cart}
          setCart={setCart}
          price={product.price}
        />
      ))}
    </div>
    </section>
  );
}

export default ProductList;
