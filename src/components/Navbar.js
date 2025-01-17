import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { CartContext } from '../context/CartContext';
import logo from '../assets/Box Delivery Service (1).png';
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaShoppingCart, FaWallet, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [userEmail, setUserEmail] = useState(null);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="QuickBox" className="navbar-logo" />
        QuickBox
      </Link>
      <div className="nav-items">
        <div className="nav-item">
          <IoHomeSharp />
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <BiSolidCategory />
          <Link to="/categories">Categories</Link>
        </div>
        {userEmail ? (
          <>
            <div className="nav-item">
              <FaWallet />
              <Link to="/wallet">Wallet</Link>
            </div>
            <div className="nav-item">
              <FaUserCircle />
              <span>{userEmail.split('@')[0]}</span>
            </div>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <div className="nav-item">
              <RiLoginCircleFill />
              <Link to="/login">Login</Link>
            </div>
            <div className="nav-item">
              <RiLoginCircleFill />
              <Link to="/register">Register</Link>
            </div>
          </>
        )}
        <div className="nav-item cart-icon">
          <FaShoppingCart />
          <Link to="/cart" className="cart-link">
            Cart <span className="cart-counter">{cartItemCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
