import React from "react"
import Payment from "./components/Payment"
import ProductList from "./components/ProductList"

function App() {

  return (
    <>
      <section className="container m-auto p-12">        
        <div id="heroSection" className="flex ">
        <ProductList></ProductList>
        <Payment></Payment>
        </div>
      </section>
    </>
  )
}

export default App
