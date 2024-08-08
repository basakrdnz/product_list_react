import React from "react"
import Card from "./components/Card"
import Payment from "./components/Payment"
import ProductList from "./components/ProductList"

function App() {

  return (
    <>
      <section className="container m-auto p-10">
        <h1 className="text-4xl font-bold my-6">Desserts</h1>
        <div id="heroSection">
        <ProductList></ProductList>
        <Payment></Payment>
        </div>
        
      </section>
    </>
  )
}

export default App
