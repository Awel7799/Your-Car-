import React, { useState } from "react";
import cartContext from "./cartContext";
import carImage from '../../assets/image 3.png';
import carImage2 from '../../assets/image 3 (1).png';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'SUV', discription: 'Mercedes M class', Image: carImage2, quantity: 1 },
    { id: 2, name: 'BUSINESS CLASS', discription: 'Mercedes G - wagon', Image: carImage, quantity: 1 },
  ]);

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
