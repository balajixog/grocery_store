import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/CheckoutPage.css';
import { CartContext } from '../context/CartContext';

const API_URL = 'http://localhost:8080/api/orders';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [shippingAddress, setShippingAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidPhoneNumber = (number) => /^[0-9]{10}$/.test(number);

  const handlePlaceOrder = () => {
    if (!shippingAddress || !contactNumber) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!isValidPhoneNumber(contactNumber)) {
      setError('Please enter a valid contact number.');
      return;
    }

    setLoading(true);

    const order = {
      shippingAddress,
      contactNumber,
      paymentMethod,
      promoCode,
      items: cart,
      totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0)
    };

    axios.post(API_URL, order)
      .then((response) => {
        console.log('Order placed successfully:', response.data);
        clearCart();
        navigate('/order-tracking');
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        setError('Failed to place order. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = 50;
  const taxRate = 0.18;
  const taxAmount = totalPrice * taxRate;
  const discount = promoCode === 'SAVE10' ? 0.10 * totalPrice : 0;
  const finalTotal = totalPrice + shippingCost + taxAmount - discount;

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <span>{item.name} (x{item.quantity})</span>
                <span>{`Rs.${(item.price * item.quantity).toFixed(2)}`}</span>
              </div>
            ))}
            <div className="summary-costs">
              <div className="summary-item">
                <span>Shipping Cost:</span>
                <span>{`Rs.${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="summary-item">
                <span>Tax (18%):</span>
                <span>{`Rs.${taxAmount.toFixed(2)}`}</span>
              </div>
              {discount > 0 && (
                <div className="summary-item">
                  <span>Discount:</span>
                  <span>{`-Rs.${discount.toFixed(2)}`}</span>
                </div>
              )}
              <div className="summary-total">
                <span>Total:</span>
                <span>{`Rs.${finalTotal.toFixed(2)}`}</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="checkout-form">
        <h3>Shipping Information</h3>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <input
            type="text"
            id="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder="Enter your shipping address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your contact number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="promoCode">Promo Code:</label>
          <input
            type="text"
            id="promoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code (if any)"
          />
        </div>
        <button
          onClick={handlePlaceOrder}
          className="place-order-button"
          disabled={loading}
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
