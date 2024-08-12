import React, { useEffect, useState } from 'react'

const Button = ({ name, index }) => {

  //useState hook
  const [addCard, setAddCard]=useState(false);
  const [count, setCount]=useState(0);

  const[sepet,setSepet]=useState([]); 

  //şimdi sepeti array gibi düşünürsek
  const sepetUpdates = (name, count) => {
    setSepet(prevSepet => {
      // x = ürün sepette var mı?
      const existingItem = prevSepet.find(item => item.name === name);
      
      if (existingItem) {
        // (x) doğruysa yani varsa
        if (count > 0) {
          // count 1'den büyükse artır
          return prevSepet.map(item =>
            item.name === name ? { ...item, count } : item
          );
        } else {
          // count 0 veya daha azsa sepetten çıkar
          return prevSepet.filter(item => item.name !== name);
        }
      } else {
        // Yoksa sepete ekle
        return [...prevSepet, { name, count }];
      }
    });
  };
  
 
  const handleClick = () =>{
    setCount(count+1);
    setAddCard(true);
  }

  const handleAzalt = () => {
    if (count>1) {
    setCount(count-1)
    }
    else {
      setCount(count-1);
      setAddCard(false)
    }
  }
  
  const handleArttır = () => {
    setCount(count + 1);
  };
  
  // count her değiştiğinde konsola yazdıracak bir useEffect
  useEffect(() => {
    console.log(sepet);
    
    console.log(`Index: ${index}, Name: ${name}, Count: ${count}`);
  }, [count]); // count değişkeni değiştiğinde useEffect tetiklenirmişş
//-1 yaptık yoksa 0dan değil 1den başlıyor direk


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
