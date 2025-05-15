import Header from "./component/Header/Header"
import About from "./component/About/About"
import Service from "./component/service/service"
import Carousel from "./component/cars/carousel"
import Gallary from "./component/carGallary/Gallary"
import Testimonial from "./component/testimonial/Testimonial"
import CarsBrand from "./component/carsBrand/carsBrand"
import Footer from "./component/Footer/Footer"
import CartProvider from "./component/cartContext/CartProvider"
import CartDetail from "./component/cartDetail/cartDetial"
import Main from "./component/Header/main"
import React,{useState} from "react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Productprovider } from "./component/cartContext/productContext"

function App() {
  const [isCartOpen,setIsCartOpen]=useState(false);

  return (
    <>
    <Productprovider>
    <CartProvider>
        <Header onCartClick={() => setIsCartOpen((prev) => !prev)}  />
       <CartDetail isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <Main />
        <About />
        <Service />
        <Carousel />
        <Gallary />
        <Testimonial />
        <CarsBrand />
        <Footer />
    </CartProvider>
    </Productprovider>
    </>
  )
}

export default App;
