import './cartDetail.css';
import cartContext from '../cartContext/cartContext';
import { useContext, useState } from 'react';



function cartDetail({ isCartOpen }){

    const {cart: carts,clearCart,removeFromCart}=useContext(cartContext);

if(!isCartOpen) return null;
   
   const [count,setCount]=useState(0);
   const increase=()=>{
    setCount(count+1);
   }

   const decrease=()=>{
    setCount(count-1);
   }

    return(
<div className='cartDetailContrainer'>
   <div className='item-section'>
     {carts.length===0  ? (<p>your cart is empty</p>):
     (carts.map((item)=>(
       <div className='individual-item'>
            <div className='item-discription'>
              <p className='item-name'>{item.name}</p>
              <p className='item-text'>{item.discription}</p>
              <div className='inc-dec-btn'>
                    <button className='dec-btn' onClick={decrease}>-</button>
                    <p className='counter'>{count}</p>
                    <button className='inc-btn' onClick={increase}>+</button>
                    <button className='delete-icon'  onClick={()=>removeFromCart(item.id)}>🗑️</button>
              </div>
            </div>
            <div key={item.id} className='item-img'>
              <img src={item.Image} alt="photo of car" />
            </div>
       </div>
        )))}
   </div>
   <div>
        <button className='delete-btn'
               onClick={()=>clearCart()} >
            Clear All
        </button>
     </div>
</div>
    );
};

export default cartDetail;