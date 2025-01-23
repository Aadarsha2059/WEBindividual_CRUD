import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/payment.css';

// Importing images
import cashOnDelivery from '../assets/images/cash on delivery.jpeg';
import eSewa from '../assets/images/esewa.jpeg';

const Payment: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate to other routes
  const [showHistory, setShowHistory] = useState(false); // State to toggle the transaction history dialog

  const handleEsewaClick = () => {
    navigate('/esewa'); // Navigate to esewa.tsx
  };

  const handleCashOnDeliveryClick = () => {
    navigate('/cashpayment'); // Navigate to cashpayment.tsx
  };

  const handleShowHistory = () => {
    setShowHistory(!showHistory); // Toggle the history dialog visibility
  };

  const transactionHistory = [
    { id: 'TX001', receiver: 'Bishnu Budhathoki', amount: '1000', date: '2024-12-01' },
    { id: 'TX002', receiver: 'Nirajan Bhattrai', amount: '1500', date: '2024-12-02' },
    { id: 'TX003', receiver: 'Suraj Tamang', amount: '2000', date: '2024-12-03' },
  ];

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="indicator"></div>
        <h2>Payment Method</h2>
        <div className="payment-options">
          {/* eSewa - Clickable to navigate */}
          <div className="payment-option esewa" onClick={handleEsewaClick}>
            <img src={eSewa} alt="eSewa" />
            <span>eSewa</span>
          </div>

          {/* Cash On Delivery - Clickable to navigate */}
          <div
            className="payment-option cash-on-delivery"
            onClick={handleCashOnDeliveryClick}
          >
            <img src={cashOnDelivery} alt="Cash On Delivery" />
            <span>Cash On Delivery</span>
          </div>
        </div>
      </div>

      {/* Show History Button */}
      <button className="history-button" onClick={handleShowHistory}>
        Show History
      </button>

      {/* Transaction History Dialog */}
      {showHistory && (
        <div className="history-dialog">
          <div className="history-overlay" onClick={handleShowHistory}></div>
          <div className="history-content">
            <h3>Transaction History</h3>
            <table>
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Receiver's Name</th>
                  <th>Amount Sent (NRS)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.receiver}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleShowHistory}
              className="close-history-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
