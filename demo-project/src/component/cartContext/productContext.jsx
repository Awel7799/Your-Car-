import React,{createContext,useContext} from "react";
import productsData from "../data/products";
import { Children } from "react";
import products from "../data/products";

const ProductContext = createContext();
export const Productprovider = ({children })=>{
    return (
        <ProductContext.Provider value={{products: productsData}}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = ()=> useContext(ProductContext);