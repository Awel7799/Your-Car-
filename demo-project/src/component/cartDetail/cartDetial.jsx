import './cartDetail.css';
import cartContext from '../cartContext/cartContext';
import { useContext, useEffect, useRef } from 'react';

function CartDetail({ isCartOpen, setIsCartOpen }) {
    const { clearCart, removeFromCart, updatequantity, cartItems } = useContext(cartContext);
    const cartRef = useRef(null);

    // Hide cart on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        }

        if (isCartOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCartOpen, setIsCartOpen]);

    if (!isCartOpen) return null;

    return (
        <div className='cartDetailContrainer' ref={cartRef}>
            <div className='item-section'>
                {cartItems.length === 0 ? (
                    ""
                ) : (
                    cartItems.map((item) => (
                        <div className='individual-item' key={item.id}>
                            <div className='item-discription'>
                                <p className='item-name'>{item.name}</p>
                                <div className='inc-dec-btn'>
                                    <button className='dec-btn' onClick={() => updatequantity(item.id, item.quantity - 1)}>-</button>
                                    <p className='counter'>{item.quantity}</p>
                                    <button className='inc-btn' onClick={() => updatequantity(item.id, item.quantity + 1)}>+</button>
                                    <button className='delete-icon' onClick={() => removeFromCart(item.id)}>🗑️</button>
                                </div>
                            </div>
                            <div className='item-img'>
                                <img src={item.image} alt="photo of car" />
                            </div>
                        </div>
                    ))
                )}
            </div>

            {cartItems.length > 0 && (
                <div>
                    <button className='delete-btn' onClick={() => clearCart()}>
                        Clear All
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartDetail;
