import React from "react";

function Payment() {
    return (
        <section 
        className="bg-red-50 flex flex-col h-full py-6 shadow-xl rounded-md w-4/5 p-4 gap-2 min-w-72 max-w-96 mx-4" id="payment">
            <h1 className="text-xl font-bold ">Your Cart ( )</h1>
            <div className="items-center flex flex-col gap-2"> 
            <img src="assets\images\illustration-empty-cart.svg" alt="" />
            <p className="text-gray-500 font-medium text-sm text-center mb-6">Your added items will appear here</p>
            </div>
        </section> 
    );
}

export default Payment;


// {productCount}