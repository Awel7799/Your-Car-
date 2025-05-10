import "./About.css"
import carimage from '../../assets/pngegg 1.png';
import background from '../../assets/pngegg (1) 1.png';
function About(){
    return(
      <div id="about" className="about-page-container">
          <div className="page-text">
                <div className="tittle">
                   <div className="small-tittle">
                      <p className="small-tittle-p">About </p>
                   </div>
                   <div className="bigg-tittle">
                      <p className="p-bigg-tittle">ABOUT&nbsp;US </p>    
                   </div>
                </div>
                <div className="discription">
                   <span>YourCar is a luxury car dealership that
                      offers a personalized and first-class 
                      experience to its clients. Our team of 
                      experienced professionals is dedicated 
                      to providing exceptional service and 
                      finding the perfect vehicle to match our 
                      clients' unique preferences and requirements.
                      We have an extensive selection of high-end 
                      vehicles, ranging from sports cars to SUVs,
                     all of which are maintained to the highest
                     standards of quality and safety. <br /><br /> At YourCar,
                      we are committed to creating a stress-free
                       and enjoyable car buying experience. We 
                       understand that purchasing a luxury car 
                       can be a significant investment, which 
                       is why we offer flexible financing options
                        to make the process more manageable. Our 
                        team is available to answer any questions
                         and provide guidance throughout the entire
                          buying process. We take pride in our 
                          outstanding customer service and attention
                           to detail, and we are confident that our 
                           clients will be satisfied with their 
                           experience at YourCar.</span>
                </div>
          </div>
          <div className="About-page-car-img">
            <div className="background-img">
               <img src={background} alt="" />
            </div>
            <div className="Abt-page-car-img">
               <img src={carimage} alt="car-image" />
            </div>
          </div>

      </div>
    );
}
export default About;
