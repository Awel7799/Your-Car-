// import statements remain unchanged
import React from 'react';
import cart from '../../assets/Group.svg';
import menu from '../../assets/Vector (1).svg';
import './Header.css';

function Header() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div>
          <p className='logo'>Your<span className='car-span'>Car</span></p>
        </div>

        <div className='link-container'>
          <ul className='nav-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className='cart-icon'>
          <img src={cart} alt="shopping cart" />
          <p className='item-amount'>90</p>
        </div>

        <div className='menu-icon'>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
