import Header from "./component/Header/Header"
import About from "./component/About/About"
import Service from "./component/service/service"
import Carousel from "./component/cars/carousel"
import Gallary from "./component/carGallary/Gallary"
import Testimonial from "./component/testimonial/Testimonial"
import CarsBrand from "./component/carsBrand/carsBrand"
import CartProvider from "./component/cartContext/CartProvider"
import CartDetail from "./component/cartDetail/cartDetial"
import Main from "./component/Header/main"
import React,{useState} from "react"
import { Productprovider } from "./component/cartContext/productContext"

function App() {
  const [isCartOpen,setIsCartOpen]=useState(false);

  return (
    <>
    <Productprovider>
    <CartProvider>
        <Header onCartClick={() => setIsCartOpen((prev) => !prev)}  />
        <CartDetail isCartOpen={isCartOpen} />
        <Main />
        <About />
        <Service />
        <Carousel />
        <Gallary />
        <Testimonial />
        <CarsBrand />
    </CartProvider>
    </Productprovider>
    </>
  )
}

export default App
