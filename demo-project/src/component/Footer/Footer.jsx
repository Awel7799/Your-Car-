import './Footer.css'
import message from '../../assets/mdi_email.png';
import FB from '../../assets/Vector (5).png';
import twitter from '../../assets/Vector (6).png';
import instagram from '../../assets/Vector (7).png';
import phone from '../../assets/Vector (8).png';
import location from '../../assets/Vector (9).png';



function footer(){
    return(
    <div id='contact' className='footer'>   
        <div className='footer-general-container'>
           <div className='footer-discription'>
              <div className='discription-tittle'>
                <p className='p-discription-tittle'>Your<span className='spancar'>Car</span></p>
              </div>
              <div className='discription-detail'>
                  <p className='p-discription-detail'>
                  We are known for luxurious and 
                  premium chaffeur services worldwide. 
                  We are simply the best you can find. <br /><br />
                  we are dedicated to providing our 
                  customers with a first-class car 
                  buying, selling, and renting experience.
                  </p>
              </div>
           </div>
           <div className='footer-subscription'> 
                <div className='subscription-tittle'>
                     <p className='p-subscription-tittle'>News Letter</p>
                </div>
                <div className='subscription-discription'>
                    <p className='p-subscription-discription'>Subscribe to our 
                        news letter for updates,
                         news and exclusive offers</p>
                </div>
                <div className='email-box'>
                   <button className='subsc-btn'>Subscribe</button>
                   <input className='input-box' type="emial" placeholder='Email' />
                </div>
           </div>
           <div className='footer-contact'>
            <p className='contact-tittle'>Contact</p>
            <p className='location'><span>2038 2nd Avenue,</span>
            <img src={location} alt="" />
            <span className='cont-info'>Las Vegas,United States</span></p>
            <p className='phone-No'> <span>01477678449405</span>
            <img src={phone} alt="" />
             <span className='cont-info'>01444773421423</span></p>
             <p className='email-adress'>
            <span >info@YourCar.com</span><img  src={message} alt="" />
                </p>
           </div>
        </div>
        <div className='social-media'>
        <div className='social-med-cont'>
            <img src={FB} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
         </div>
         <hr />
         <p className='copyright-txt'>© Copyright 2023 · YourCar All rights reserved </p>
        </div>
    </div>     

    );
};

export default footer;