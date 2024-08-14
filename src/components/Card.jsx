// src/components/Card.jsx
import React from "react";
import Button from "./Button";
function Card({image, name, category, price, index, setCartItems, cartItems}) {
  return (
    <section className="h-auto w-[250px]">
      <div className="m-auto text-center relative mb-8">
        <img src={image.thumbnail} alt={name} className="w-full object-cover rounded-md shadow-md" />
        <Button name={name} index={index} price={price} setCartItems={setCartItems} cartItems={cartItems}></Button>
      </div>
      <h2 className="text-sm text-gray-500">{category}</h2>
      <h3 className="text-gray-700 font-bold">{name}</h3>
      <p className="text-orange-800 text-md">${price.toFixed(2)}</p>
    </section>
  );
}

export default Card;
