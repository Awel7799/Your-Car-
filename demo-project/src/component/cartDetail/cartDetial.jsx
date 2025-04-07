import './cartDetail.css';
import cartContext from '../cartContext/cartContext';
import { useContext } from 'react';


function cartDetail({ isCartOpen }){

    const {cart: carts,clearCart}=useContext(cartContext);

if(!isCartOpen) return null;

    return(
<div className='cartDetailContrainer'>
   <div className='item-section'>
     {carts.length===0  ? (<p>your cart is empty</p>):
     (carts.map((item)=>(<div key={item.id} className='cart-item'>
        <p>{item.name}</p>
        <p>price : {item.price}</p>
     </div>)))}
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