import { useState } from "react"
import React from "react"
import Payment from "./components/Payment"
import ProductList from "./components/ProductList"

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <section className="container m-auto p-12">        
        <div id="heroSection" className="flex ">
        <ProductList setCartItems={setCartItems} cartItems={cartItems}></ProductList>
        <Payment cartItems={cartItems} setCartItems={setCartItems}></Payment>
        </div>
      </section>
    </>
  )
}

export default App
