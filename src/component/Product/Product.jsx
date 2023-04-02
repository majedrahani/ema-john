import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const {seller, price,img, name, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4 className='product-info'>{name}</h4>
            <h5 className='product-info'>Price : ${price}</h5>
            <p className='product-info'>Menufecturer : {seller}</p>
            <h6 className='product-info'>Ratings : {ratings}</h6>
            <button className='btn-cart' onClick={()=>handleAddToCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;