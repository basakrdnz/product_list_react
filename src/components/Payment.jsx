import React, { useState } from "react";

function Payment({ cartItems, setCartItems, resetButtonState, resetAllButtonStates }) {

    //popup başta false
    const [orderConfirm, setOrderConfirm] = useState(false);

    const openConfirmPage = () => {
        setOrderConfirm(true);
    };

    const closeConfirmPage = () => {
        setOrderConfirm(false);
        setCartItems([]);
        resetAllButtonStates();
    };

    // Siparişin toplam fiyatını hesaplar
    const totalPriceCount = cartItems.reduce((total, item) => {
        return total + item.price * item.count;
    }, 0).toFixed(2);

    // Sepetten bir ürün silme fonksiyonu
    const deleteItem = (name) => {
        const updatedCartItems = cartItems.filter(item => item.name !== name);
        setCartItems(updatedCartItems);
        resetButtonState(name);
    };

    // Sepet içeriği veya boş sepet durumu
    let content;

    if (cartItems.length === 0) {
        content = (
            <>
                <img src="assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
                <p className="text-gray-500 font-medium text-sm text-center mb-6">Your added items will appear here</p>
            </>
        );
    } else {
        content = (
            <>
                {cartItems.map((item, index) => (
                    <div key={index} className="w-full gap-4 flex flex-col">
                        <div className="flex justify-between">
                            <div className="flex-col flex">
                                <span className="font-bold">{item.name}</span>
                                <div className="flex gap-2">
                                    <span className="text-red font-bold">x{item.count}</span>
                                    <span className="font-thin">@${item.price.toFixed(2)}</span>
                                    <span className="font-normal">${(item.price * item.count).toFixed(2)}</span>
                                </div>
                            </div>
                            <div>
                                <button 
                                    className="flex rounded-full border-2 p-1 border-rose-400 items-center justify-center mt-2 font-light hover:border-rose-800"
                                    onClick={() => deleteItem(item.name)}
                                >
                                    <img src="assets/images/icon-remove-item.svg" alt="Remove Item" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                
                <div className="border-t-2 w-full my-2"></div>
                <div className="items-center flex justify-between w-full">
                    <p className="font-medium">Order Total</p>
                    <span className="font-bold text-lg">${totalPriceCount}</span>
                </div>
                <div className="bg-rose-50 w-full flex justify-around items-center p-4 mt-4 rounded-md">
                    <img src="assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral Icon" />
                    <p>This is a <b>carbon-neutral</b> delivery</p>
                </div>
                <button onClick={openConfirmPage} className="bg-red text-white font-bold p-4 rounded-lg w-full mt-4">
                    Confirm Order
                </button>
            </>
        );
    }

    return (
        <>
            <section className="bg-white flex flex-col h-full py-6 shadow-sm rounded-md w-[85%] p-4 gap-2 min-w-72 max-w-96 mx-auto" id="payment">
                <h1 className="text-xl font-bold text-red">Your Cart ({cartItems.length})</h1>
                <div className="items-center flex flex-col gap-4 my-4">
                    {content}
                </div>
            </section>

            {orderConfirm && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex flex-col items-left mb-6 gap-2">
                <img src="assets\images\icon-order-confirmed.svg" alt="" width={50} height={50} />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed</h2>
                <p className="text-rose-400">We hope you enjoy your food!</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
                {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded mr-4" />
                            <div>
                                <span className="block font-medium text-gray-800">{item.name}</span>
                                <span className="text-red text-sm mr-3">x{item.count}</span>
                                <span className="text-rose-400 text-sm">@${item.price.toFixed(2)}</span>

                            </div>
                        </div>
                        <span className="font-semibold text-gray-800">${(item.price * item.count).toFixed(2)}</span>
                    </div>
                ))}
                <div className="mt-4 flex justify-between ">
                    <p className="text-gray-800 font-medium">Order Total</p>
                    <p className="font-bold text-lg">${totalPriceCount}</p>
                </div>
            </div>
            <button onClick={closeConfirmPage} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg w-full mt-6">
                Start New Order
            </button>
        </div>
    </div>
)}

        </>
    );
}

export default Payment;
