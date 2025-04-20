import './Footer.css'

function footer(){
    return(
    <div id='contact' className='footer'>   
        <div className='footer-general-container'>
           <div className='footer-discription'>
              <div className='discription-tittle'>
                <p className='p-discription-tittle'>Your <span className='spancar'>Car</span></p>
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
            <p className='location'>2038 2nd Avenue, <br />
            Las Vegas, United States</p>
            <p className='phone-No'> 01477678449405 <br /> 01444773421423</p>
             <p className='email-adress'>info@YourCar.com</p>
           </div>
        </div>
        <div className='social-media'>
         
        </div>
    </div>     

    );
};

export default footer;