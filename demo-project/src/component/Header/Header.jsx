import React, { useState, useEffect, useContext, useRef } from 'react';
import cart from '../../assets/Group.svg';
import menu from '../../assets/Vector (1).svg';
import './Header.css';
import cartContext from '../cartContext/cartContext.jsx';

function Header({ onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cartItems } = useContext(cartContext);

  const sidebarRef = useRef();     // 👈 for sidebar
  const menuBtnRef = useRef();     // 👈 for menu button

  const handleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Hide sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !menuBtnRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div>
        <p className='logo'>Your<span className='car-span'>Car</span></p>
      </div>

      <div ref={sidebarRef} className={`link-container ${isOpen ? 'open' : ''}`}>
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
        <button ref={menuBtnRef} className='menu-btn' onClick={handleMenu}>
          <img src={menu} alt="menu" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
