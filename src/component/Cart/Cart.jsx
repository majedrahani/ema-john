import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {cart,handleClearCart, children} = props;
    
    // console.log(cart)

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        total = total+ product.price *product.quantity;
        totalShipping = totalShipping+ product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 20 / 100;
    const grandTotal = total+ totalShipping+ tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge : ${totalShipping}</p>
            <p>Tax : ${tax}</p>
            <h6>Grand Total : ${grandTotal}</h6>
             <button 
             className='btn-clear'
             onClick={handleClearCart}
             >Clear Cart 
             <FontAwesomeIcon icon={faTrashAlt} className='icon' />
             </button>
             {children}
        </div>
    );
};

export default Cart;