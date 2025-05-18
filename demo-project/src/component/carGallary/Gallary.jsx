
import './Gallary.css';
import img1 from '../../assets/Car.png';
import img2 from '../../assets/Car (7).png';
import img3 from '../../assets/Car (1).png';
import img4 from '../../assets/Car (2).png';
import img5 from '../../assets/Rectangle 2.png';
import img6 from '../../assets/Car (3).png';
import img7 from '../../assets/Car (5).png';
import img8 from '../../assets/Car (4).png';
import img9 from '../../assets/Car (6).png';
function Gallary() {
      const carImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
return(
    <div id="gallary" className="gallery-container">
          {carImages.map((image, index) => (
       <div
           className={`gallery-item ${index === 4 ? 'center-item' : ''} ${
           [1, 4, 7].includes(index) ? 'show-on-mobile' : ''
                 }`}
         key={index} >
             <img src={image} alt={`Car ${index + 1}`} />
             {index === 4 && (
      <div className="overlay">
        <h2>Tesla Model 3</h2>
        <p>Disruptive, avant-garde, futuristic, innovative.</p>
        <a href="#contact"><button>Contact</button></a>
      </div>
    )}
  </div>
))}

    </div>
  );
}


export default Gallary;
