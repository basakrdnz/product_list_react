import React from "react";
import Button from "./Button";

function Card({ image, name, category, price, index, setCartItems, cartItems, buttonStates, setButtonStates }) {
  return (
    <section className="h-auto w-[250px]">
      <div className="m-auto text-center relative mb-8">
        <img src={image.thumbnail} alt={name} className="w-full object-cover rounded-md shadow-md" />
        <Button
          name={name}
          price={price}
          image={image.thumbnail}
          setCartItems={setCartItems}
          cartItems={cartItems}
          buttonStates={buttonStates}
          setButtonStates={setButtonStates}
        />
      </div>
      <h2 className="text-sm text-rose-300">{category}</h2>
      <h3 className="text-black font-bold">{name}</h3>
      <p className="text-red text-md font-medium">${price.toFixed(2)}</p>

    </section>
  );
}

export default Card;
