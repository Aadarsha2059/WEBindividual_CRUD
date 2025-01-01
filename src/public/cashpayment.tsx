import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/cashpayment.css';

const CashPayment: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    contactNumber: '',
    email: '',
    paymentStatus: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      // Send POST request to the backend API to save data in PostgreSQL
      const response = await axios.post('http://localhost:8080/cash_payment', formData);
      
      // Handle success
      setResponseMessage('Cash Payment saved successfully!');
      setIsSubmitting(false);
    } catch (error) {
      // Handle error
      console.error('Error saving cash payment:', error);
      setResponseMessage('Failed to save cash payment. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>
        <i className="bx bxs-wallet"></i> Cash on Delivery
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Customer Name */}
        <div className="form-group">
          <label htmlFor="customerName">
            <i className="bx bxs-user"></i> Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">
            <i className="bx bxs-map"></i> Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="form-group">
          <label htmlFor="contactNumber">
            <i className="bx bxs-phone"></i> Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">
            <i className="bx bxs-envelope"></i> Email ID
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Payment Status */}
        <div className="form-group">
          <label htmlFor="paymentStatus">
            <i className="bx bxs-check"></i> Payment Status
          </label>
          <input
            type="checkbox"
            id="paymentStatus"
            name="paymentStatus"
            checked={formData.paymentStatus}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <i className="bx bxs-check-circle"></i> Submit
            </>
          )}
        </button>
      </form>

      {/* Response Message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default CashPayment;
