// src/components/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/Product.css';

const products = {
  groceries: [
    { id: 1, name: 'Tomato', price: 'Rs.0.70', image: tomatoImage, description: 'Fresh tomatoes', rating: 4.5, reviews: 120 },
    { id: 2, name: 'Straw', price: 'Rs.1.20', image: strawImage, description: 'Fresh straw', rating: 4.0, reviews: 80 },
    { id: 3, name: 'Chilli Powder', price: 'Rs.0.50', image: chilliPowderImage, description: 'Spicy chilli powder', rating: 4.8, reviews: 200 },
    { id: 4, name: 'Nutella', price: 'Rs.3.00', image: nutellaImage, description: 'Delicious Nutella', rating: 4.9, reviews: 150 },
  ],
  clothing: [
    { id: 5, name: 'Black Tee', price: 'Rs.200.00', image: blackTeeImage, description: 'Comfortable black tee', rating: 4.2, reviews: 90 },
    { id: 6, name: 'Yellow Dress', price: 'Rs.500.00', image: yellowImage, description: 'Stylish yellow dress', rating: 4.7, reviews: 60 },
    { id: 7, name: 'Denim Jeans', price: 'Rs.800.00', image: denimJeanImage, description: 'Classic denim jeans', rating: 4.4, reviews: 110 },
    { id: 8, name: 'Woollen Tee', price: 'Rs.700.00', image: woollenTeeImage, description: 'Warm woollen tee', rating: 4.6, reviews: 75 },
  ],
};

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <img src={require(`../assets/${product.image}`)} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
