// src/pages/CategoriesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Categories.css';
import groceriesImage from '../assets/groceries.jpg';
const categories = [
  { name: 'Groceries', image: groceriesImage, path: '/categories/groceries' },
 
];

const CategoriesPage = () => {
  return (
    <div className="categories-section">
      {categories.map((category) => (
        <div className="category-card" key={category.name}>
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
          <p>Explore a wide range of {category.name.toLowerCase()}.</p>
          <Link to={category.path} className="shop-now-button">Shop Now</Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
