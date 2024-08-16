import React from 'react';

const Button = ({ name, price, setCartItems, cartItems, buttonStates, setButtonStates }) => {
    const addCard = buttonStates[name]?.addCard || false;
    const count = buttonStates[name]?.count || 0;

    const handleClick = () => {
        setButtonStates(prevState => ({
            ...prevState,
            [name]: { addCard: true, count: count + 1 }
        }));

        const newCartItem = { name, price, count: 1 };
        const existingItem = cartItems.find(item => item.name === name);

        if (existingItem) {
            const updatedCartItems = cartItems.map(item =>
                item.name === name ? { ...item, count: item.count + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, newCartItem]);
        }
    };

    const handleAzalt = () => {
        if (count > 1) {
            setButtonStates(prevState => ({
                ...prevState,
                [name]: { addCard: true, count: count - 1 }
            }));
            setCartItems(cartItems.map(item =>
                item.name === name ? { ...item, count: item.count - 1 } : item
            ));
        } else {
            setButtonStates(prevState => ({
                ...prevState,
                [name]: { addCard: false, count: 0 }
            }));
            setCartItems(cartItems.filter(item => item.name !== name));
        }
    };

    return (
        <div>
            {!addCard ? (
                <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center w-44 p-2 rounded-3xl bg-white border-2 border-orange-600 font-bold"
                    onClick={handleClick}
                >
                    <img src="assets/images/icon-add-to-cart.svg" alt="shopping icon" className='px-2' />
                    Add to Cart
                </button>
            ) : (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-between w-44 p-2 rounded-3xl bg-orange-600 text-white font-bold">
                    <button onClick={handleAzalt} className="px-2 border-2 rounded-full hover:bg-white hover:text-orange-600 hover:border-orange-600">-</button>
                    <div>{count}</div>
                    <button onClick={handleClick} className="px-2 border-2 rounded-full hover:bg-white hover:text-orange-600 hover:border-orange-600">+</button>
                </div>
            )}
        </div>
    );
};

export default Button;
