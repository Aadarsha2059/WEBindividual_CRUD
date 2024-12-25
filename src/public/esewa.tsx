import React, { useState } from 'react';
import '../assets/css/esewa.css';
import esewaLogo from '../assets/images/esewa.jpeg';
import qrcode from '../assets/images/qr.jpeg'; // QR image you want to display

const Esewa = () => {
  const [showQr, setShowQr] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [esewaId, setEsewaId] = useState('');
  const [password, setPassword] = useState('');
  const [receiverNumber, setReceiverNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleShowQr = () => setShowQr(true);
  const handleCloseQr = () => setShowQr(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock login validation
    if (esewaId === '112233' && password === 'abc123') {
      setShowPaymentDialog(true); // Show payment dialog on successful login
    } else {
      alert('Invalid eSewa ID or password');
    }
  };

  const handlePayment = () => {
    // Mock payment processing
    if (receiverNumber && pincode && paymentAmount) {
      setPaymentSuccess(true); // Set payment as successful
      setShowPaymentDialog(false); // Close payment dialog
    } else {
      alert('Please fill in all payment details');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src={esewaLogo} alt="eSewa Logo" className="esewa-logo" />
      </div>
      <div className="login-box">
        <h2>Welcome to eSewa</h2>
        <p>Please enter your credentials to continue</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="esewa-id">eSewa ID</label>
          <input
            type="text"
            id="esewa-id"
            placeholder="Enter eSewa ID"
            value={esewaId}
            onChange={(e) => setEsewaId(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <button className="qr-button" onClick={handleShowQr}>Show QR Code</button>
      </div>

      {/* QR Code Popup */}
      {showQr && (
        <>
          <div className="overlay" onClick={handleCloseQr}></div>
          <div className="qr-popup">
            <h3>Scan the QR Code</h3>
            <img src={qrcode} alt="QR Code" className="qr-image" />
            <button onClick={handleCloseQr}>Close</button>
          </div>
        </>
      )}

      {/* Payment Dialog */}
      {showPaymentDialog && (
        <>
          <div className="overlay"></div>
          <div className="qr-popup">
            <h3>Pay Now</h3>
            <label htmlFor="receiver-number">Enter Receiver's Number</label>
            <input
              type="text"
              id="receiver-number"
              placeholder="Enter receiver's number"
              value={receiverNumber}
              onChange={(e) => setReceiverNumber(e.target.value)}
            />
            <label htmlFor="pincode">Enter Confirmation Pincode</label>
            <input
              type="text"
              id="pincode"
              placeholder="Enter confirmation pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <label htmlFor="payment-amount">Enter Payment Amount in NRS</label>
            <input
              type="number"
              id="payment-amount"
              placeholder="Enter amount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
            />
            <button onClick={handlePayment} className="payment-button">Confirm Payment</button>
          </div>
        </>
      )}

      {/* Payment Success Dialog */}
      {paymentSuccess && (
        <>
          <div className="overlay"></div>
          <div className="qr-popup">
            <h3>Transaction Successfully Done</h3>
            <button onClick={() => setPaymentSuccess(false)} className="close-button">Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Esewa;
