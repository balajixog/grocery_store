import React from 'react';

const Wallet = () => {
  // Example data - replace with actual data source
  const balance = 12050.00; // Example balance in rupees
  const transactions = [
    { id: 1, date: '2024-08-01', amount: -2000.00, description: 'Purchase at Store A' },
    { id: 2, date: '2024-07-30', amount: 5000.00, description: 'Deposit' },
    { id: 3, date: '2024-07-25', amount: -1000.00, description: 'Purchase at Store B' },
    // Add more transactions here
  ];

  const handleButtonClick = (action) => {
    // Implement the button click handling logic here
    console.log(action);
  };

  return (
    <div className='wallet' style={{ backgroundColor: '#F5EDED', minHeight: '100vh' }}>
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Wallet</h1>
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Available Balance</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>₹{balance.toFixed(2)}</p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button 
              onClick={() => handleButtonClick('withdraw')}
              style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '4px', backgroundColor: '#4CAF50', color: '#fff', cursor: 'pointer' }}
            >
              Withdraw
            </button>
            <button 
              onClick={() => handleButtonClick('send')}
              style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '4px', backgroundColor: '#2196F3', color: '#fff', cursor: 'pointer' }}
            >
              Send
            </button>
            <button 
              onClick={() => handleButtonClick('cards')}
              style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '4px', backgroundColor: '#FFC107', color: '#fff', cursor: 'pointer' }}
            >
              Cards
            </button>
            <button 
              onClick={() => handleButtonClick('addMoney')}
              style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '4px', backgroundColor: '#FF5722', color: '#fff', cursor: 'pointer' }}
            >
              Add Money
            </button>
          </div>
          
          <h2 style={{ marginTop: '30px' }}>Transaction History</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {transactions.map(transaction => (
              <li key={transaction.id} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Date: {transaction.date}</span>
                  <span>Amount: ₹{transaction.amount.toFixed(2)}</span>
                </div>
                <div>Description: {transaction.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wallet;