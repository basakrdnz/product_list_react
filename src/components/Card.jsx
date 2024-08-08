// src/components/Card.jsx
import React from "react";

function Card({ image, name, category, price }) {
  return (
    <section className="bg-blue-200 h-auto w-64">
      <div className="m-auto text-center">
        <img src={image.thumbnail} alt={name} className="w-full object-cover" />
        <button className="m-auto p-2 rounded-xl bg-white">Add Card</button>
      </div>
      <h2 className="text-lg font-semibold">{category}</h2>
      <h3 className="text-gray-700">{name}</h3>
      <p className="text-gray-500">${price.toFixed(2)}</p>
    </section>
  );
}

export default Card;
