// import statements remain unchanged
import React from 'react';
import { ArrowUpRight } from "lucide-react";
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', href: '/', id: 'nav-home' },
  { label: 'About', href: '/about', id: 'nav-about' },
  { label: 'Service', href: '/service', id: 'nav-service' },
  { label: 'Cars', href: '/cars', id: 'nav-cars' },
  { label: 'Contact', href: '/contact', id: 'nav-contact' },
  { label: 'Cart', href: '/cart', id: 'nav-cart' },
];

function Header() {
  return (
    <header className='header-container'>
      <nav className='nav-bar'>
        <div className='logo'>YourCar</div>
        <div className='cart'>cart</div>
        <div className='menu-bar'>---</div> 
      </nav>
    </header>
  );
}

export default Header;