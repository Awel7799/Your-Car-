import './Footer.css';
import message from '../../assets/mdi_email.png';
import FB from '../../assets/Vector (5).png';
import twitter from '../../assets/Vector (6).png';
import instagram from '../../assets/Vector (7).png';
import phone from '../../assets/Vector (8).png';
import location from '../../assets/Vector (9).png';

function Footer() {
  return (
    <div id="contact" className="footer">
      <div className="footer-general-container">
        {/* Description Section */}
        <div className="footer-section">
          <h2 className="footer-logo">Your<span className="span-car">Car</span></h2>
          <p className="footer-description">
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.<br /><br />
            We are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">
            Subscribe to our newsletter for updates, news and exclusive offers.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <div className="contact-item">
            <img src={location} alt="location" />
            <span>2038 2nd Avenue, Las Vegas, United States</span>
          </div>
          <div className="contact-item">
            <img src={phone} alt="phone" />
            <span>01477678449405 |<br /> 01444773421423</span>
          </div>
          <div className="contact-item">
            <img src={message} alt="email" />
            <span>info@YourCar.com</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="social-icons">
          <img src={FB} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
        <hr />
        <p className="copyright">
          © Copyright 2023 · YourCar All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
