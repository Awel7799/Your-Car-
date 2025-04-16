import './main.css'
import arrowimage from '../../assets/akar-icons_arrow-up-right.png';
function main(){
    return(
        <div className='cont'>
         <div className='hero-section-detail'>
          <div className='hero-tittle'>
                 <p>
                 Find the perfect car
                 for you at YourCar.
                 </p>
          </div>
          <div className='hero-section-discription'>
          <p>
            We offer a wide range of cars that 
            cater to your needs and budget.
            Visit us today and drive away with 
            your dream car!
           </p>
          </div>
           <button className='discover-button'><span className='discover-word'>Discover</span> <img className='arrow-img' src={arrowimage} alt="arrow" /></button>
         </div>
        </div>
    );
}

export default main;