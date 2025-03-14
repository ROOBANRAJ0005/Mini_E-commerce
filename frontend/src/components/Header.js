import React from 'react'
import { Search } from './Search';
import { Link } from 'react-router-dom';

export const Header = ({cartItems}) => {
  console.log(cartItems.length+'header');
  return (
    <nav className="navbar row bg-dark navbar-dark">
    <div className="col-12 col-md-3">
      <Link to="/" >
      <div className="navbar-brand">
        
        <img width="150px" src="./images/logo.jpg"  className="rounded-circle me-3" style={{height:"30px", width:"30px"}}/>
        Cry Baby
      </div>
    </Link>
    </div>

    <div className="col-12 col-md-6 mt-2 mt-md-0">
       <Search/>
    </div>

    <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
      <Link to='/cart'>
      <span id="cart" className="ml-3 text-white">Cart</span></Link>
      <span className="ml-1 text-white bg-primary" id="cart_count">{cartItems.length}</span>
    </div>
  </nav>

  );
}
