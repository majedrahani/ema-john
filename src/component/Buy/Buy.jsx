import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Buy.css'
import { Link } from 'react-router-dom';

const Buy = () => {
    const [product, setProduct] = useState([]);
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1 -- find the id
        for(const id in storedCart ){
            // step 2 -- find product using id
           const addedProduct = product.find(products => products.id === id)
           // step 3 -- find quantity
        //    this check for ignore an error 
          if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            // step 4 : add the added product to the saved cart
            savedCart.push(addedProduct)
          }

        }
        // step 5: set cart
        setCart(savedCart)
    },[product])

    const handleAddToCart = (product) =>{
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id)
    }
    const handleClearCart =()=>{
      setCart([]);
      deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            
              <div className='product-container'>
                {
                    product.map(products => <Product 
                    key={products.id}
                    product={products}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
               
            </div>
            <div>
            <Cart 
            cart={cart}
            handleClearCart={handleClearCart}
            >
              <Link to="/order">
              <button className='btn-check'>Review Order</button>
              </Link>
            </Cart>
              
            </div>
        </div>
    );
};

export default Buy;