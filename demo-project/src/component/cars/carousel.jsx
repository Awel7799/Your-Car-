import './carousel.css'
import carImage from '../../assets/Group 1133.png'
import React ,{useState , useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';
import { useProductContext } from '../cartContext/productContext';
function carousel(){

    const {products}=useProductContext();
    const [startIndex,setStartIndex]=useState(0);
    const isMobile = useMediaQuery({ maxWidth: 700 });
    const visibleCount = isMobile ? 1 : 3;

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

    const [count,setCount]=useState(0);
    const increase=()=>{
     setCount(count+1);
    }

const decrease=()=>{
    setCount(count-1);
   }

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
         <div className='right-left-btn'>
         <button className='prv-btn' onClick={handlePrev}> left</button>
         { visibleProducts.map((product)=>(
             <div key={product.id} className='card-list'>
             <div className='cards-car'>
                 <img className='car-img' src={product.image} alt={product.name} />
             </div>
             <div className='cards-discription'>
                <p className='product-name'>{product.name}</p>
                <p className='product-brand'>{product.brand}</p>
                 <p className='p-cards-discription'>{product.description}</p>
             </div>
             <div className='cards-button'>
                <div className='seat-No'>
                      <img src={carImage} alt="" />
                </div>
                <div className='No-of-item'>
                    <button className='dec-btn' onClick={decrease}>-</button>
                    <p className='counter'>{count}</p>
                    <button className='inc-btn' onClick={increase}>+</button>
                </div>
             </div>
           </div>
         ))}
          <button className='Next-btn' onClick={handleNext}> right</button>
         </div>
     </div>
    );
};

export default carousel;

