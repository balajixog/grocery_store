// src/pages/ProfilePage.js
import React from 'react';
import Profile from '../components/Profile';
import OrderHistory from '../components/OrderHistory';
import Wishlist from '../components/Wishlist';
import Cart from '../components/Cart';
import '../css/ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Profile />
      <OrderHistory />
      <Wishlist />
      <Cart />
    </div>
  );
};

export default ProfilePage;
