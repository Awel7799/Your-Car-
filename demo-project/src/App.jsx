import Header from "./component/Header/Header"
import CartProvider from "./component/cartContext/CartProvider"
import CartDetail from "./component/cartDetail/cartDetial"
import Main from "./component/Header/main"
import React,{useState} from "react"

function App() {
  const [isCartOpen,setIsCartOpen]=useState(false);

  return (
    <>
    <CartProvider>
        <Header onCartClick={() => setIsCartOpen((prev) => !prev)}  />
        <CartDetail isCartOpen={isCartOpen} />
        <Main />

    </CartProvider>
    </>
  )
}

export default App
