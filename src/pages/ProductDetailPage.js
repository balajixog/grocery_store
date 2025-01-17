import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/ProductDetailsPage.css';
import { CartContext } from '../context/CartContext';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch the main product details
    axios.get(`http://localhost:8080/api/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });

    // Fetch related products
    axios.get(`http://localhost:8080/api/products/related/${productId}`)
      .then(response => {
        setRelatedProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching related products:', error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: Number(quantity) });
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity: Number(quantity) });
    navigate('/checkout');
  };

  return (
    <div className="product-details-page">
      <div className="product-details-section">
        <div className="product-image-section">
          <img src={product.image} alt={product.productName} className="product-image" />
        </div>
        <div className="product-info-section">
          <h2 className="product-name">{product.productName}</h2>
          <p className="product-description">{product.description}</p>
          <div className="product-details">
            <div className="product-detail-item"><strong>Weight:</strong> {product.weight || '2kg'}</div>
            
            <div className="product-detail-item"><strong>Price:</strong> Rs.{product.price}</div>
            
            <div className="product-detail-item"><strong>Status:</strong> {product.status || 'Available'}</div>
            <div className="product-detail-item"><strong>Rating:</strong> {product.rating || 4} / 5</div>
          </div>
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <div className="action-buttons">
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
            <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="related-products-section">
        <h3>Related Products</h3>
        <div className="related-products-list">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <div className="related-product-card" key={relatedProduct.id}>
                <img src={relatedProduct.image} alt={relatedProduct.productName} className="related-product-image" />
                <p className="related-product-name">{relatedProduct.productName}</p>
                <p className="related-product-price">Rs.{relatedProduct.price}</p>
              </div>
            ))
          ) : (
            <p>No related products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
