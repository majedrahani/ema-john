import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./ReviewItem.css"

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {img, quantity ,price, name, id} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>Price : <span className='orange-color'>{price}</span></p>
                <p>Product Quantity : <span className='orange-color'>${quantity}</span></p>
            </div>
            <button className='btn-delete'
            onClick={()=> handleRemoveFromCart(id)}
            >
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;