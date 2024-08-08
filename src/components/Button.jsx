import React, { useState } from 'react'

const Button = () => {
    const handleClick = () => {
        const [state, setState] = useState(initialState)
        console.log("heyy");
    }

  return (
    <div>
    <button 
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center w-44 p-2 rounded-3xl bg-white border-2 border-orange-600 font-bold"
    onClick={handleClick}>
    <img src="assets\images\icon-add-to-cart.svg" alt="shopping icon" className='px-2' />
          Add to Cart
    </button>
    </div>
  )
}

export default Button


//şimdi burda yapmam gerekenler

//butona tıkladığında başka buton 
//2. butonun içine iki buton ve bunlarla değişen değer 
//usestate???araştır
