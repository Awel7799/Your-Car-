import React, { useState } from "react";
import cartContext from "./cartContext";

const CartProvider = ({ children }) => {
    const [carts, setCart] = useState(['name','']);

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
