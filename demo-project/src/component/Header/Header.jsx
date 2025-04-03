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
    <header className="header-container">
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-logo">
          <a href="/" title="YourCar Home">YourCar</a>
        </div>
        <ul className="navbar-menu">
          {NAV_LINKS.map(({ label, href, id }) => (
            <li key={id} className="navbar-item">
              <a href={href} aria-label={label}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-text">
        <div className="text-tittle">
          <span>Find the perfect car for you at YourCar.</span>
        </div>
        <div className="discription-text">
          <span>
            We offer a wide range of cars that cater to your needs and budget. 
            Visit us today and drive away with your dream car
          </span>
        </div>
        <button 
          className="discover-button"
          aria-label="Discover our car collection"
        >
          Discover <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default Header;