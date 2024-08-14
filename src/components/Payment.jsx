import React from "react";

function Payment({ cartItems, setCartItems}) {
    let content; // Render edilecek içeriği tutacak değişken

    const totalPriceCount = cartItems.reduce((total, item) => {
        return total + item.price * item.count;
    }, 0).toFixed(2);
    
    //deleteitem eğer bir parametre istemiyorsa fonksiyon şeklinde çağırılabilir ancak
    //burda olduğu gibi name gibi bir parametre beklentisi varsa const çevrilmeli
    const deleteItem = (name) => {
        const updatedCartItems = cartItems.filter(item => item.name !== name);
        setCartItems(updatedCartItems);
        setAddCard(false);
    };
    

    if (cartItems.length === 0) {
        // Eğer sepet boşsa
        content = (
            <>
                <img src="assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
                <p className="text-gray-500 font-medium text-sm text-center mb-6">Your added items will appear here</p>
            </>
        );
    } else {
        // Eğer sepette ürün varsa
        content = (
            <>
                {cartItems.map((item, index) => (
                    <div key={index} className="w-full gap-4 flex flex-col">
                        <div className="flex justify-between">
                            <div className="flex-col flex">
                                <span className="font-bold">{item.name}</span>
                                <div className="flex gap-2">
                                    <span className="text-orange-700 font-bold">x{item.count}</span>
                                    <span className="font-thin">@${item.price.toFixed(2)}</span>
                                    <span className="font-normal">${(item.price * item.count).toFixed(2)}</span>
                                </div>
                            </div>
                            <div>
                            <button 
                                    className="flex rounded-full border-2 p-1 border-orange-900 items-center justify-center mt-2 font-light"
                                    onClick={() => deleteItem(item.name)} // Butona tıklanınca ürünü sil
                                >
                                    <img src="assets/images/icon-remove-item.svg" alt="Remove Item" />
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
                <div className="border-t-2 w-full my-2"></div>
                <div className="items-center flex justify-between mt-4 w-full">
                    <p className="font-bold">Order Total</p>
                    <span className="font-bold text-lg">${totalPriceCount}</span>
                </div>
                <div className="bg-gray-200 w-full flex justify-around items-center p-4 mt-4 rounded-md">
                    <img src="assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral Icon" />
                    <p>This is a <b>carbon-neutral</b> delivery</p>
                </div>
                <button className="bg-orange-600 text-white font-bold p-4 rounded-lg w-full mt-4">Confirm Order</button>
            </>
        );
    }
    

    return (
        <section className="bg-gray-100 flex flex-col h-full py-6 shadow-xl rounded-md w-[90%] p-4 gap-2 min-w-72 max-w-96 mx-auto" id="payment">
            <h1 className="text-xl font-bold text-orange-700">Your Cart ({cartItems.length})</h1>
            <div className="items-center flex flex-col gap-4 my-4">
                {content}
            </div>
        </section>
    );
    
}

export default Payment;
