import React from 'react';
import '../assets/css/cashpayment.css';

const CashPayment: React.FC = () => {
  return (
    <div className="form-container">
      <h2>
        <i className="bx bxs-wallet"></i> Cash on Delivery
      </h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            <i className="bx bxs-user"></i> Customer Name
          </label>
          <input 
            type="text" 
            id="name" 
            placeholder="Enter your name" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">
            <i className="bx bxs-map"></i> Address
          </label>
          <input 
            type="text" 
            id="address" 
            placeholder="Enter your address" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">
            <i className="bx bxs-phone"></i> Contact Number
          </label>
          <input 
            type="tel" 
            id="contact" 
            placeholder="Enter your contact number" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <i className="bx bxs-envelope"></i> Email ID
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            required 
          />
        </div>

        <button type="submit" className="submit-button">
          <i className="bx bxs-check-circle"></i> Submit
        </button>
      </form>
    </div>
  );
};

export default CashPayment;