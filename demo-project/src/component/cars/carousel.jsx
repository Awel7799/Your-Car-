import './carousel.css';
import carImage from '../../assets/Group 1133.png';
import left from '../../assets/Arrow Left.png';
import right from '../../assets/Arrow Left (1).png';
import React, { useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useProductContext } from '../cartContext/productContext';
import cartContext from '../cartContext/cartContext';
function Carousel() {
  const { products } = useProductContext();
  const { addToCart } = useContext(cartContext); // ✅ Use hook at the top level

  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const visibleCount = isMobile ? 1 : 3;

  const handleNext = () => {
    if (startIndex + visibleCount < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  // ✅ Individual count per product (optional improvement)
  const [counts, setCounts] = useState({});

  const increase = (productId) => {
    setCounts((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const decrease = (productId) => {
    setCounts((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
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

      <div className="right-left-btn">
        <button className="prv-btn" onClick={handlePrev}><img src={left} alt="" /></button>

        {visibleProducts.map((product) => (
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
                <button className="innc-btn" onClick={() => increase(product.id)}>+</button>

                {/* ✅ Add the correct product */}
                <button className='add-to-cart' onClick={() => addToCart(product)}>+</button>
              </div>
            </div>
          </div>
        ))}

        <button className="Next-btn" onClick={handleNext}><img src={right} alt="" /></button>
      </div>
    </div>
  );
}

export default Carousel;
