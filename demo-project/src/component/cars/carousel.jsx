// Caruosel.jsx
import { useState } from 'react';
import './carousel.css';
const cars = [    
    { id: 1, name: 'Lamborghini Huracan', price: '$200,000', image: '/src/assets/Background.png' },
    { id: 1, name: 'Lamborghini Huracan', price: '$200,000', image: '/src/assets/Background.png' },
    { id: 1, name: 'Lamborghini Huracan', price: '$200,000', image: '/src/assets/CTA BG.png' },
    { id: 1, name: 'Lamborghini Huracan', price: '$200,000', image: '/src/assets/Background.png' },
    { id: 1, name: 'Lamborghini Huracan', price: '$200,000', image: '/src/assets/Background.png' },
    { id: 1, name: 'Lamborghini Huracan', price: '$200,000', image: '/src/assets/Background.png' },
];

function Caruosel() {  // Component names should be PascalCase
    const [currentIndex, setCurrentIndex]=useState(0);
    const carsToshow=3;

    const handleNext = ()=>{
        if(currentIndex<cars.length-carsToshow){
            setCurrentIndex(currentIndex+1);
        }
    }

    const handlePrev = ()=>{
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1);
        }
    }
    return (
        <>  
        <div className='car-container'>
        <div className='car-body-container'>
            <div className='car-tittle'>

            </div>
            <button className='arrow left-arrow' onClick={handlePrev}>prev</button>
            <button className='arrow right-arrow' onClick={handleNext}>next</button>
            <div className='container'>
            {cars.slice(currentIndex, currentIndex + carsToshow).map(car => (
                    <div key={car.id} className="car-card">
                        <img src={car.image} alt={car.name} />
                        <p>{car.name}</p>
                    </div>
                ))}
            </div>
            
        </div>
        </div>
        </>
    );
}

export default Caruosel;

{/**
          <div className='container'>
            {cars.map((car) => (  // Added map to properly render the array
               
               <div className="car-card" key={car.id}>  // Added key for React list rendering
                    <img src={car.image} alt={car.name} />
                    <h3>{car.name}</h3>
                    <p>{car.price}</p>
                </div>
                
            ))}
            </div> */}