import { useState } from "react"
import React from "react"
import Payment from "./components/Payment"
import ProductList from "./components/ProductList"

function App() {

  //BUNLARI BURDA YAPMAMAK LAZIM
  
  const [cartItems, setCartItems] = useState([]);
  //sepetteki ürün silindiğinde ürün üzerindeki butonu da 0lamak için yeni bir state
  //bunu confirm kapanırken de kullanıcam
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
    const resetAllButtonStates = () => {
    // Tüm butonların durumunu sıfırlar
    setButtonStates(prevState => {
        const newState = { ...prevState };
        for (let key in newState) {
            newState[key] = { addCard: false, count: 0 };
        }
        return newState;
    });
};

  return (
    <>
      <section className="bg-rose-50">        
        <div id="heroSection" className="flex flex-col md:flex-row m-auto p-12 container gap-6">
          <ProductList setCartItems={setCartItems} cartItems={cartItems} setButtonStates={setButtonStates} buttonStates={buttonStates}></ProductList>
          <Payment cartItems={cartItems} setCartItems={setCartItems} resetButtonState={resetButtonState} resetAllButtonStates={resetAllButtonStates}></Payment>
        </div>
      </section>
    </>
  )
}

export default App
