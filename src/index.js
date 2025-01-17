import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/CartContext'; // Named import
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <CartProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
  </CartProvider>,
  document.getElementById('root')
);
