import React, { useState } from "react";
import cartContext from "./cartContext";

const CartProvider = ({ children }) => {
    const [carts, setCart] = useState([{ id: 1, name: 'Toyota Corolla', price: 12000 ,discription:'car discription'},
        { id: 2, name: 'Honda Civic', price: 14000 },
        { id: 2, name: 'Honda Civic', price: 14000 }]);
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
