import { useState } from "react"
import React from "react"
import Payment from "./components/Payment"
import ProductList from "./components/ProductList"

<style>
  
</style>


function App() {

  //BUNLARI BURDA YAPMAMAK LAZIM
  
  const [cartItems, setCartItems] = useState([]);
  //sepetteki ürün silindiğinde ürün üzerindeki butonu da 0lamak için yeni bir state
  const [buttonStates, setButtonStates] = useState({});

  const resetButtonState = (name) => {
    // önceki durumu korumak sadece istenileni sıfırlamak için
    setButtonStates(prevState => {
        // yeni durum nesnesi
        const newState = { ...prevState };
        // belirtilen ürünün durumu name ile 0lama
        newState[name] = { addCard: false, count: 0 };
        return newState;
    });
};

  return (
    <>
      <section className="bg-rose-50">        
        <div id="heroSection" className="flex m-auto p-14 container gap-6">
          <ProductList setCartItems={setCartItems} cartItems={cartItems} setButtonStates={setButtonStates} buttonStates={buttonStates}></ProductList>
          <Payment cartItems={cartItems} setCartItems={setCartItems} resetButtonState={resetButtonState}></Payment>
        </div>
      </section>
    </>
  )
}

export default App
