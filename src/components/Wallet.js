import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wallet = ({ userId }) => {
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/wallet/${userId}`);
      setWallet(response.data);
    } catch (error) {
      console.error('Error fetching wallet details:', error);
    }
  };

  const handleAddFunds = async () => {
    try {
      await axios.post(`http://localhost:8080/api/wallet/${userId}/addFunds`, null, {
        params: { amount: parseFloat(amount) }
      });
      setAmount('');
      fetchWallet();
    } catch (error) {
      console.error('Error adding funds:', error);
    }
  };

  if (!wallet) return <p>Loading...</p>;

  return (
    <div className="wallet-container">
      <h2>Wallet Details</h2>
      <p>User ID: {wallet.userId}</p>
      <p>Current Balance: ${wallet.balance.toFixed(2)}</p>
      
      <div className="add-funds">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to add"
        />
        <button onClick={handleAddFunds}>Add Funds</button>
      </div>
    </div>
  );
};

export default Wallet;
