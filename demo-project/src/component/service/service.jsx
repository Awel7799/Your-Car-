import './service.css';
import firsticon from '../../assets/Group 1084.png';
import secondicon from '../../assets/icons8-lease-100 1.png';
import thirdicon from '../../assets/Vector (2).png';
function service(){
    return(<>
      <div className="service-container">
       <div className='service-tittle'>
         <p className='big-service'>SERVICES</p>
         <p className='small-service'>Services</p>
       </div>
       <div className='service-detail'>
          <div className='car-sele'>
            <div className='first-icon'>
             <img className='first-icon-image' src={firsticon} alt="star-icon" />
            </div>
            <div className='first-discription'>
                 <p><span className='discription-tittle'> Car sales</span><br /><br /> 
                    <span>At YourCar, we offer
                     a wide selection of luxury vehicles
                     for sale. Whether you're in the 
                     market for a sleek sports car or 
                     a spacious <br /> SUV, we have the perfect 
                     vehicle to fit your needs.</span></p>
            </div>
          </div>
          <div className='car-rent'>
             <div className='second-icon'>
                <img className='second-icon-image' src={secondicon} alt="hand-icon" />
             </div>
             <div className='second-discription'>
                 <p> <span className='discription-tittle'> Car rental</span> <br /><br />
                    If you're in need of a 
                    luxury car rental, look no further
                     than YourCar. Our fleet of high-end
                      vehicles is regularly maintained <br/>
                      and serviced to ensure that you have 
                      a safe and comfortable driving experience.</p>
             </div>
          </div>
          <div className='car-selling'>
             <div className='third-icon'>
               <img className='third-icon-image' src={thirdicon} alt="dimond-icon" />
             </div>
             <div className='third-discription'>
                 <p> <span className='discription-tittle'>Car selling </span> <br /> <br />
                  At YourCar, we make it easy to sell
                  your car. Simply bring your vehicle in for an appraisal, and we'll handle 
                  the rest. We offer fair prices and a hassle-free selling process, 
                  so you can get  your vehicle with minimal effort.</p>
             </div>
          </div>
       </div>
      </div>
    </>);
}

export default service