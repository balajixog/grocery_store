import React, { useEffect, useState } from 'react';
import OrderService from '../services/OrderService';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    OrderService.getAllOrders().then((response) => {
      setOrders(response.data);
    }).catch((error) => {
      console.error('Error fetching orders:', error);
    });
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id}, Total Amount: {order.totalAmount}, Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
