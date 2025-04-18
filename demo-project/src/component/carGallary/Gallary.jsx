import './Gallary.css';
import img1 from '../../assets/Car.png';
import img2 from '../../assets/Car (4).png';
import img3 from '../../assets/Car (1).png';
import img4 from '../../assets/Car (2).png';
import img6 from '../../assets/Car (3).png';
import img7 from '../../assets/Car (5).png';
import img8 from '../../assets/Car (4).png';
import img9 from '../../assets/Car (6).png';

function Gallary() {
    
return(
     <div className='Gallary-container'>
       <div className='first-Gallary'>
           <img src={img1} alt="first car" />
           <img src={img4} alt="second car" />
           <img src={img7} alt="third car" />
       </div>
       <div className='second-Gallary'>
            <img src={img2} alt="fifth car" />
            <div className='tesla-model'>
               <p className='tesla-tittle'>Tesla Model 3</p>
               <p className='tesla-discription'>Disruptive, avant-garde, futuristic, innovative.</p>
               <button className='tesla-contact-btn'>Contact</button>
            </div>
            <img src={img6} alt="sixth car" />
       </div>
       <div className='third-Gallary'>
             <img src={img3} alt="seventh car" />
             <img src={img8} alt="eighth car" />
             <img src={img9} alt="tenth car" />
       </div>
     </div>
);
};

export default Gallary;
