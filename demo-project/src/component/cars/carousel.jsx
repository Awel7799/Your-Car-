import './carousel.css'
import React ,{useState} from 'react';
import { useProductContext } from '../cartContext/productContext';
function carousel(){

    const {products}=useProductContext();
    const [startIndex,setStartIndex]=useState(0);
    const visibleCount=1;

    const handleNext =()=>{
        if(startIndex + visibleCount<products.length){
            setStartIndex(startIndex+1);
        }
    };

    const handlePrev=()=>{
        if(startIndex > 0 ){
            setStartIndex(startIndex-1);
        }
    };

    const visibleProducts=products.slice(startIndex,startIndex+visibleCount)


    return(
     <div className='general-car-container'>
         <div className='car-tittle'>
            <div className='big-car-tittle'>
               <p className='p-big-car-tittle'>CARS</p>
            </div>
            <div className='small-car-tittle'>
               <p className='p-small-car-tittle'>Cars</p>
            </div>
         </div>
         <button className='prv-btn' onClick={handlePrev}> left</button>
         { visibleProducts.map((product)=>(
             <div key={product.id} className='card-list'>
             <div className='cards-car'>
                 <img className='car-img' src={product.image} alt={product.name} />
             </div>
             <div className='cards-discription'>
                 {product.description}
             </div>
             <div className='cards-button'>
  
             </div>
           </div>
         ))}
          <button className='Next-btn' onClick={handleNext}> right</button>
     </div>
    );
};

export default carousel;

