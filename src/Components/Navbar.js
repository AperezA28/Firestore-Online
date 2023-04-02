import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/singup">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/cart">
        <div className="cart-btn">
          <FaShoppingCart className="cart-icon-css" />
          <span className="cart-icon-css"> 0 </span>
        </div>
      </Link>

      <Link to="userprofile">
        <FaUserAlt className="profile.icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
