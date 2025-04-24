import React, { useState } from "react";
import cartContext from "./cartContext";
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };
  
  const updatequantity = (id, newQuantity) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <cartContext.Provider
      value={{
        cartItems, // <- FIXED: Expose this instead of "cart"
        addToCart,
        removeFromCart,
        clearCart,
        updatequantity,
        isCartOpen,
        setIsCartOpen // Optional if you want to control visibility elsewhere
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
