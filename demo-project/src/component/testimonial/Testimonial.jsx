import './Testimonial.css'
import stars from '../../assets/Group 1118.png'
import car from '../../assets/car4.png'


function Testimonial(){
    return(
        <div className='testimonial-container'>
         <div className='tstm-tittle'>
              <div className='tstm-big-tittle'>
                <p className='p-tstm-big-tittle'>TESTIMONIALS</p>
              </div>
              <div className='tstm-small-tittle'>
                <p className='p-tstm-small-tittle'>Testimonials</p>
              </div>
         </div>
         <div className='tstm-discription'>
            <p className='p-tstm-discription'>
            I recently bought a car through
             YourCar and I was blown away by
              their exceptional service. The 
              staff were friendly and knowledgeable, 
              and they helped me find the perfect 
              car for my needs. I highly recommend 
              YourCar to anyone looking for a luxury 
              car buying experience.
            </p>
            <div className='5-star'>
                <img className='star-img' src={stars} alt="" />
                <p className='tstm-name'>Annie Rudy</p>
                <p className='tstm-adress'>Las vegas</p>
                <img className='tstm-img' src={car} alt="car image" />
            </div>
         </div>
        </div>
    );
};

export default Testimonial;