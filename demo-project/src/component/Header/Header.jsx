import React, { useState, useEffect, useContext } from 'react';
import cart from '../../assets/Group.svg';
import menu from '../../assets/Vector (1).svg';
import './Header.css';
import { Link } from 'react-router-dom'; 
import cartContext from '../cartContext/cartContext.jsx';

function Header({ onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ New state

  const { cartItems } = useContext(cartContext);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ✅ Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200); // Change when scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div>
        <p className='logo'>Your<span className='car-span'>Car</span></p>
      </div>

      <div className={`link-container ${isOpen ? 'open' : ''}`}>
        <ul className='nav-links'>
          <li><a className='contact-link' href="#home">Home</a></li>
          <li><a className='contact-link' href="#about">About</a></li>
          <li><a className='contact-link' href="#service">Service</a></li>
          <li><a className='contact-link' href="#cars">Cars</a></li>
          <li><a className='contuctus-link' href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className='cart-icon' onClick={onCartClick}>
        <img className='cart-img' src={cart} alt="shopping cart" />
        <p className='item-amount'>{cartItems?.length || 0}</p>
      </div>

      <div className='menu-icon'>
        <button className='menu-btn' onClick={handleMenu}>
          <img src={menu} alt="menu" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
