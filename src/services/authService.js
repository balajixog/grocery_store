// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Adjust the base URL to your backend

export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data.message; // Assuming the backend returns a message
  } catch (error) {
    throw new Error(error.response.data.message || 'Registration failed');
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.message; // Assuming the backend returns a message
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};
