import React, { useEffect, useState } from 'react';

const Button = ({ name, price, index, setCartItems, cartItems }) => {
    const [addCard, setAddCard] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        setAddCard(true);
        const newCartItem = { name, price, count: 1 }; // Yeni ürün öğesi

        // Eğer ürün zaten sepette varsa, sadece miktarını arttır
        const existingItem = cartItems.find(item => item.name === name);
        //item=> kısmı item üzerinde işlem yapmak için itemin adı var mı yok mu ya bakıyoruz
        if (existingItem) {
            const updatedCartItems = cartItems.map(item =>
                item.name === name ? { ...item, count: item.count + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            // Eğer ürün sepette yoksa, yeni öğeyi ekle
            setCartItems([...cartItems, newCartItem]);
        }
    };

    const handleAzalt = () => {
        if (count > 1) {
            setCount(count - 1);
            setCartItems(cartItems.map(item =>
                item.name === name ? { ...item, count: item.count - 1 } : item
            ));
        } else {
            setCount(count - 1);
            setAddCard(false);
            setCartItems(cartItems.filter(item => item.name !== name));
        }
    };

    const handleArttır = () => {
        setCount(count + 1);
        console.log(cartItems);
        setCartItems(cartItems.map(item=> {
          if(item.name===name){
            return{
              ...item,
              count:item.count+1
            };
          }
          else{
            return item;
          }
        }))
      };
// setcartitems appde bulunan cartitemslarım güncellenme state durumu değişimi için kullanılır yani ilk aşamada boş bi
//array tanımladık usestate ile daha sonra handleclick ile bu state'e değerleri ekledik 3 çeşit olacak şekilde 
//şimdi de burdayız ve map ile her bir item üzernden kontroller yapılacak şekilde itemın ismi isme eşit iseden devam ediyoruz...
//şimid burda ternary operator denilen koşullu ifadeyi kullandık. bu da if-else yapısına benzer ancak tek satırda yazılan versiyonu.
//şöyle ki  yapısı --->>>>>>>>   
// koşul ? true ise yapılacak işlem : false ise yapılacak işlem şeklinde...
// amac isime bakarken şu soru.. bu item arttırmak istediğimiz ürün mü?
// eğer öyleyse ------->>>>> { ...item, count: item.count + 1 } burası için konuşacak olursak bu ifade jsde
//"spread syntax" yani yayılma sözdizimi olarak biliniyor ve bir nesnenin kopyasını oluşturmak ardından
//bu kopya üzerinden bzı değişiklikler yapmak için kullanılır. 


    useEffect(() => {
        console.log(`Index: ${index}, Name: ${name}, Count: ${count}`);
    }, [count]);

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
                    <button onClick={handleArttır} className="px-2 border-2 rounded-full hover:bg-white hover:text-orange-600 hover:border-orange-600">+</button>
                </div>
            )}
        </div>
    );
};

export default Button;
