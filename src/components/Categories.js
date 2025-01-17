// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Categories.css';
import groceriesImage from '../assets/groceries.jpg';


const categories = [
  { name: 'Groceries', image: groceriesImage, path: '/categories/groceries' },
 
];

const Categories = () => {
  return (
    <div>
      <div className="categories-header">
        <h1>Our Categories</h1>
        <p>Discover a variety of products across different categories</p>
      </div>
      <div className="categories-section">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <Link to={category.path} className="shop-now-button">Shop Now</Link>
          </div>
        ))}
      </div>
      <div className="featured-content">
        <h2>Featured Products</h2>
        <p>Explore our range of top-selling and trending products across various categories. Get the best deals and discounts exclusively available on our platform.</p>
        <Link to="/featured" className="cta-button">View Featured Products</Link>
      </div>
    </div>
  );
};

export default Categories;
