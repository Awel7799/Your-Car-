import React , {children , useState} from "react";
import cartContext from "./cartContext";

const Cartprovider = ({children })=>{
    const [carts,setCart]=useState([{id:1},{id:2},{id:3}]);

    const addToCart = (item)=>{
        setCart((prevcart)=>[...prevcart, item])
    }

    const removeFromCart=(id)=>{
        setCart((prevcart)=>prevcart.filter((item)=> item.id !==id));
    }

    const clearCart=()=>{
        setCart([]);
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children }
      </cartContext.Provider> 
    );
};

export default Cartprovider;