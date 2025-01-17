import React from 'react';
import '../css/HomePage.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Ecommerce checkout laptop-bro.png';
import Categories from '../components/Categories';
import offerbannerfin from '../assets/offerbannerfin.png';
import QuickBox from '../assets/QuickBox.png'

const HomePage = () => {
  return (
    <div>
      <div className="home-page">
        <div className="hero-text">
          <h1>Welcome to QuickBox</h1>
          <p>Your one-stop shop for all your needs</p>
          <Link to="/categories" className="btn shop-now-button">Shop Now</Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Ecommerce Checkout" />
        </div>
      </div>
      <div className="categories-section-container">
        <Categories />
      </div>
      <div className="about-us-section">
        <h2>About Us</h2>
        <p>QuickBox is an innovative eCommerce platform where you can find everything you need in one place. We connect customers directly with sellers, offering a seamless shopping experience without intermediaries. Join us for an unparalleled shopping experience with exclusive benefits and subscription models for both sellers and customers.</p>
      </div>
      <div className="features-section">
     
        <div className="features-grid">
          <div className="feature-item">
            <h3>Fast Delivery</h3>
            <p>Get your products delivered quickly and efficiently.</p>
          </div>
          <div className="feature-item">
            <h3>24/7 Support</h3>
            <p>Our support team is available around the clock to assist you.</p>
          </div>
          <div className="feature-item">
            <h3>Secure Payment</h3>
            <p>We offer secure payment options for your peace of mind.</p>
          </div>
          <div className="feature-item">
            <h3>Wide Range of Products</h3>
            <p>Choose from a vast selection of products across various categories.</p>
          </div>
        </div>
      </div>
      {/* Replace the offers-section with the offer banner */}
      <div className="offer-banner-section">
        <img src={QuickBox} alt="Special Offer" className="offer-banner" />
      </div>
    </div>
  );
};

export default HomePage;
