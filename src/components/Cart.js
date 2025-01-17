import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../css/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      updateCartItemQuantity(productId, quantity);
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                  min="1"
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
