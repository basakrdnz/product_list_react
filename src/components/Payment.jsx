import React from "react";

function Payment({ cartItems, setCartItems, resetButtonState }) {

    // reduce: bir dizi üzerinde işlemler yapıp tek bir değer döndürür
    const totalPriceCount = cartItems.reduce((total, item) => {
        // total: her ürünün countuyla çarpılıp totale eklenmesi 
        return total + item.price * item.count;
    }, 0).toFixed(2);

    const deleteItem = (name) => {
        const updatedCartItems = cartItems.filter(item => item.name !== name);
        setCartItems(updatedCartItems);
        // kritik
        resetButtonState(name);
    };

    // Bir değer koymadan değerin ismini belirtme
    let content;

    if (cartItems.length === 0) {
        // Eğer sepette hiç ürün yoksa bu
        content = (
            <>
                <img src="assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
                <p className="text-gray-500 font-medium text-sm text-center mb-6">Your added items will appear here</p>
            </>
        );
    } else {
        // Varsa burayı çalıştır
        content = (
            <>
                {cartItems.map((item, index) => (
                    <div key={index} className="w-full gap-4 flex flex-col">
                        <div className="flex justify-between">
                            <div className="flex-col flex">
                                <span className="font-bold">{item.name}</span>
                                <div className="flex gap-2">
                                    <span className="text-red font-bold">x{item.count}</span> {/* text-orange-700 => text-red */}
                                    <span className="font-thin">@${item.price.toFixed(2)}</span>
                                    <span className="font-normal">${(item.price * item.count).toFixed(2)}</span>
                                </div>
                            </div>
                            <div>
                                <button 
                                    className="flex rounded-full border-2 p-1 border-rose-400 items-center justify-center mt-2 font-light hover:border-rose-800"
                                    onClick={() => deleteItem(item.name)} // Butona tıklanınca ürünü sil
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
                <button className="bg-red text-white font-bold p-4 rounded-lg w-full mt-4">Confirm Order</button> {/* bg-orange-600 => bg-red */}
            </>
        );
    }

    return (
        <section className="bg-white flex flex-col h-full py-6 shadow-sm rounded-md w-[85%] p-4 gap-2 min-w-72 max-w-96 mx-auto" id="payment">
            <h1 className="text-xl font-bold text-red">Your Cart ({cartItems.length})</h1> {/* text-orange-700 => text-red */}
            <div className="items-center flex flex-col gap-4 my-4">
                {content}
            </div>
        </section>
    );
}

export default Payment;
