import './service.css';
import firsticon from '../../assets/Group 1084.png';
import secondicon from '../../assets/icons8-lease-100 1.png';
import thirdicon from '../../assets/Vector (2).png';
function Service(){
    return(
       <div id='service' className='service-page-container'>
         <div className='service-tittle'>
                <div className='big-S-tittle'>
                    <p className='p-big-S-tittle'>Services</p>
                </div>
                <div className='small-s-tittle'>
                    <p className='p-small-s-tittle'>Services</p>
                </div>
         </div>
         <div className='service-cards'>
             <div className='card'>
                  <div className='icon'>
                      <img src={thirdicon} alt="star icon" />
                  </div>
                  <div className='diamond-discription'>
                    <p className='p-diamond-discription'>
                    <span className='diamond-tittle'>Car selling</span><br /><br />
                      At YourCar, we make it easy to sell your car.
                      Simply bring your vehicle in for an appraisal,
                      and we'll handle the rest. We offer fair prices
                      and a hassle-free selling process, so you can get
                      your vehicle with minimal effort.
                    </p>
                  </div>
             </div>
             <div className='card'>
                  <div className='icon'>
                    <img src={secondicon} alt="hands icon" />
                  </div>
                  <div className='hands-icon-discription'>
                      <p className='p-hands-icon-discription'>
                    <span className='hands-tittle'>Car rental</span><br /><br />  
                     If you're in need of a luxury car 
                     rental, look no further than YourCar.
                     Our fleet of high-end vehicles is
                     regularly maintained and serviced
                     to ensure that you have a safe and 
                     comfortable driving experience.
                      </p>
                  </div>
             </div>
             <div className='card'>
                <div className='icon'>
                      <img src={firsticon} alt="" />
                </div>
                <div className='star-icon-discription'>
                       <p className='p-star-icon-discription'>
                      <span className='star-tittle'> Car sales</span><br /><br />
                        At YourCar, we offer a wide selection
                        of luxury vehicles for sale. Whether 
                        you're in the market for a sleek sports 
                        car or a spacious SUV, we have the perfect 
                        vehicle to fit your needs.
                       </p>
                </div>
             </div>
         </div>
       </div>
    );
};
export default Service;
