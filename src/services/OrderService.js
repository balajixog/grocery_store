import axios from 'axios';

const API_URL = 'http://localhost:8080/api/orders';

class OrderService {
  createOrder(order) {
    return axios.post(API_URL, order);
  }

  getOrderById(orderId) {
    return axios.get(`${API_URL}/${orderId}`);
  }

  getOrdersByUserId(userId) {
    return axios.get(`${API_URL}/user/${userId}`);
  }

  getAllOrders() {
    return axios.get(API_URL);
  }

  updateOrderStatus(orderId, status) {
    return axios.put(`${API_URL}/${orderId}/status`, { status });
  }

  deleteOrder(orderId) {
    return axios.delete(`${API_URL}/${orderId}`);
  }
}

export default new OrderService();
