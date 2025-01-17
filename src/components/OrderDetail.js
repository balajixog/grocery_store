import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderService from '../services/OrderService';

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    OrderService.getOrderById(orderId).then((response) => {
      setOrder(response.data);
    }).catch((error) => {
      console.error('Error fetching order details:', error);
    });
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Total Amount: {order.totalAmount}</p>
      <p>Status: {order.status}</p>
      {/* Display additional order details here */}
    </div>
  );
};

export default OrderDetail;
