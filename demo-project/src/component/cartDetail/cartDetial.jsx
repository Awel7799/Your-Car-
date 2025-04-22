import './cartDetail.css';
import cartContext from '../cartContext/cartContext';
import { useContext, useState } from 'react';



function cartDetail({ isCartOpen }){

    const {clearCart,removeFromCart,updatequantity,cartItems}=useContext(cartContext);

if(!isCartOpen) return null;
   
   
    return(
<div className='cartDetailContrainer'>
   <div className='item-section'>
     {cartItems.length===0  ? (<p>your cart is empty</p>):
     (cartItems.map((item)=>(
       <div className='individual-item'>
            <div className='item-discription'>
              <p className='item-name'>{item.name}</p>
              <div className='inc-dec-btn'>
                    <button className='dec-btn' onClick={() => updatequantity(item.id, item.quantity - 1)}>-</button>
                    <p className='counter'>{item.quantity}</p>
                    <button className='inc-btn'  onClick={() => updatequantity(item.id, item.quantity + 1)}>+</button>
                    <button className='delete-icon'  onClick={()=>removeFromCart(item.id)}>🗑️</button>
              </div>
            </div>
            <div key={item.id} className='item-img'>
              <img src={item.image} alt="photo of car" />
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