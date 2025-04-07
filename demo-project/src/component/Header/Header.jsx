import React, { useState, useContext } from 'react';
import cart from '../../assets/Group.svg';
import menu from '../../assets/Vector (1).svg';
import './Header.css';
import cartContext from '../cartContext/cartContext.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Use context value here
  const { cart: carts } = useContext(cartContext);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div>
          <p className='logo'>Your<span className='car-span'>Car</span></p>
        </div>
        {
          isOpen && (
            <div className='link-container'>
              <ul className='nav-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Cars</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          )
        }
        <div className='cart-icon'>
          <img src={cart} alt="shopping cart" />
          <p className='item-amount'>{carts?.length || 0}</p>
        </div>
        <div className='menu-icon'>
          <button className='menu-btn' onClick={handleMenu} >
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
