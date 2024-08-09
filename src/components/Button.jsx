import React, { useState } from 'react'


const Button = () => {

  //useState hook
  const [addCard, setAddCard]=useState(false);
  const [count, setCount]=useState(0);

  const handleClick = () =>{
    setAddCard(true);
  }

  const handleAzalt = () => {
    if (count>1) {
    setCount(count-1)
    }
    else {
      setAddCard(false)
    }
  }
  
  const handleArttır = () => {
    setCount(count + 1);
  };


// {!isAdded ? ( ... ) : ( ... )} koşullu render
// "ternary operator" denilen üçlü operatör

  return (
    <div>
      {!addCard ?(
    <button 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center w-44 p-2 rounded-3xl bg-white border-2 border-orange-600 font-bold"
        onClick={handleClick}
        >
        <img src="assets\images\icon-add-to-cart.svg" alt="shopping icon" className='px-2' />
            Add to Card
              
        </button>
      ):
      <div
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-between w-44 p-2 rounded-3xl bg-orange-600 text-white font-bold"
    >
      <button onClick={handleAzalt} 
      className="px-2 border-2 rounded-full hover:bg-white hover:text-orange-600 hover:border-orange-600"
      >-</button>
      <div>{count}</div>
      <button onClick={handleArttır}       
      className="px-2 border-2 rounded-full hover:bg-white hover:text-orange-600 hover:border-orange-600"
      >+</button>
    </div>
    
    }
    </div>
  )
}

export default Button
