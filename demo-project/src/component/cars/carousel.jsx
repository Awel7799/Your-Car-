import './carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carImage from '../../assets/Group 1133.png';
import leftArrow from '../../assets/Arrow Left.png';
import rightArrow from '../../assets/Arrow Left (1).png';

import React, { useContext, useRef, useState } from 'react';
import Slider from "react-slick";
import { useProductContext } from '../cartContext/productContext';
import cartContext from '../cartContext/cartContext';

function Carousel() {
  const { products } = useProductContext();
  const { addToCart } = useContext(cartContext);
  const sliderRef = useRef(); // 👈 Reference to control the slider

  const [counts, setCounts] = useState({});

  const increase = (productId) => {
    setCounts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const decrease = (productId) => {
    setCounts(prev => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
  };
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // default for large screens
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // for tablets and small laptops
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700, // for mobile devices
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

return (
 <div id="cars" className="general-car-container">
  <div className="car-tittle">
    <div className="big-car-tittle">
      <p className="p-big-car-tittle">CARS</p>
    </div>
    <div className="small-car-tittle">
      <p className="p-small-car-tittle">Cars</p>
    </div>
  </div>

  {/* Arrows + Carousel in one row */}
  <div className="carousel-wrapper">
    
  <button className="custom-arrow-left" onClick={() => sliderRef.current.slickPrev()}>
      <img src={leftArrow} alt="Prev" />
    </button>
    <div className="carousel-section">
      
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="card-list">
            <div className="cards-car">
              <img className="car-img" src={product.image} alt={product.name} />
            </div>
            <div className="cards-discription">
              <p className="product-name">{product.name}</p>
              <p className="product-brand">{product.brand}</p>
              <p className="p-cards-discription">{product.description}</p>
            </div>

            <div className="cards-button">
              <div className="seat-No">
                <img src={carImage} alt="seat" />
              </div>
              <div className="No-of-item">
                <button className="innc-btn" onClick={() => decrease(product.id)}>-</button>
                <p className="counter">{counts[product.id] || 0}</p>
                <button className="innc-btn" onClick={() =>{ increase(product.id);addToCart(product)}}>+</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <button className="custom-arrow-right" onClick={() => sliderRef.current.slickNext()}>
             <img src={rightArrow} alt="Next" />
      </button>
  </div>
</div>

);

}

export default Carousel;
