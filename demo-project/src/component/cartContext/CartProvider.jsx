// src/component/cartContext/CartProvider.jsx
import React, { useState } from "react";
import cartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

 const addToCart = (product) => {
  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.id === product.id);

    if (existingItem) {
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
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
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updatequantity,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
