// import statements remain unchanged
import React from 'react';
import cart from '../../assets/Group.svg';
import menu from '../../assets/Vector (1).svg';
import './Header.css';

function Header() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='logo'>
          <p>YourCar</p>
        </div>

        <div className='nav-links'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Cars</a>
          <a href="#">Contact Us</a>
        </div>

        <div className='cart-icon'>
          <img src={cart} alt="shopping cart" />
        </div>

        <div className='menu-icon'>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
