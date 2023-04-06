import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
            <Link to="order">Order</Link>
            <Link to="Order">Order Review</Link>
            <Link to="Inventory">Inventory</Link>
            <Link to="Login">Login</Link>
            </div>
            
        </div>
        
      </>
    );
};

export default Header;