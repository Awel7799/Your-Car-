import React, { useState } from "react";
import cartContext from "./cartContext";
import carImage from '../../assets/image 3.png'
import carImage2 from '../../assets/image 3 (1).png'

const CartProvider = ({ children }) => {
    const [carts, setCart] = useState([{ id: 1, name: 'SUV' ,discription:'Mercedes M class ',Image: carImage2},
        { id: 2, name: 'BUSINESS CLASS', discription:'Mercedes G - wagon',  Image:carImage},
        ]);
        const [isCartOpen, setIsCartOpen]=useState(false);
        function handlecart(){
           setIsCartOpen(!isCartOpen);
        }
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <cartContext.Provider value={{ cart: carts, addToCart, removeFromCart, clearCart }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;
