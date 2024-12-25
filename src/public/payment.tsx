import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import '../assets/css/payment.css';

// Importing images
import cashOnDelivery from '../assets/images/cash on delivery.jpeg';
import creditCard from '../assets/images/creditcard.jpeg';
import eSewa from '../assets/images/esewa.jpeg';
import imePay from '../assets/images/ime pay.jpeg';
import khalti from '../assets/images/khalti.jpeg';
import masterCard from '../assets/images/master card.jpeg';
import qr from '../assets/images/qr.jpeg';
import visa from '../assets/images/visa images.jpeg';

const Payment: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate to other routes
  const [showHistory, setShowHistory] = useState(false); // State to toggle the transaction history dialog

  const handleEsewaClick = () => {
    navigate('/esewa'); // Navigate to esewa.tsx
  };

  const handleShowHistory = () => {
    setShowHistory(!showHistory); // Toggle the history dialog visibility
  };

  const transactionHistory = [
    { id: 'TX001', receiver: 'Bishnu Budhathoki', amount: '1000', date: '2024-12-01' },
    { id: 'TX002', receiver: 'Nirajan Bhattrai', amount: '1500', date: '2024-12-02' },
    { id: 'TX003', receiver: 'Suraj Tamang', amount: '2000', date: '2024-12-03' },
    { id: 'TX004', receiver: 'Shyam Bahadur', amount: '500', date: '2024-12-04' },
    { id: 'TX005', receiver: 'Ishan Shrestha', amount: '750', date: '2024-12-05' },
    { id: 'TX006', receiver: 'Chirayu Baij', amount: '1200', date: '2024-12-06' },
    { id: 'TX007', receiver: 'Anuj Singh', amount: '800', date: '2024-12-07' },
    { id: 'TX008', receiver: 'Ram Bahadur', amount: '950', date: '2024-12-08' },
    { id: 'TX009', receiver: 'Shyam Bahadur', amount: '1100', date: '2024-12-09' },
    { id: 'TX010', receiver: 'Hari Bahadur', amount: '1300', date: '2024-12-10' },
  ];

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="indicator"></div>
        <h2>Payment Method</h2>
        <div className="payment-options">
          {/* Visa Card */}
          <div className="payment-option">
            <img src={visa} alt="Visa Card" />
            <span>Visa Card</span>
          </div>

          {/* eSewa - Clickable to navigate */}
          <div className="payment-option selected" onClick={handleEsewaClick}>
            <img src={eSewa} alt="eSewa" />
            <span>eSewa</span>
          </div>

          {/* IME Pay */}
          <div className="payment-option">
            <img src={imePay} alt="IME Pay" />
            <span>IME Pay</span>
          </div>

          {/* Khalti */}
          <div className="payment-option">
            <img src={khalti} alt="Khalti" />
            <span>Khalti</span>
          </div>

          {/* Cash On Delivery */}
          <div className="payment-option">
            <img src={cashOnDelivery} alt="Cash On Delivery" />
            <span>Cash On Delivery</span>
          </div>

          {/* Credit Card */}
          <div className="payment-option">
            <img src={creditCard} alt="Credit Card" />
            <span>Credit Card</span>
          </div>

          {/* Master Card */}
          <div className="payment-option">
            <img src={masterCard} alt="Master Card" />
            <span>Master Card</span>
          </div>

          {/* QR Code */}
          <div className="payment-option">
            <img src={qr} alt="QR Code" />
            <span>QR Code</span>
          </div>
        </div>
      </div>

      {/* Show History Button */}
      <button className="history-button" onClick={handleShowHistory}>Show History</button>

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
            <button onClick={handleShowHistory} className="close-history-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
