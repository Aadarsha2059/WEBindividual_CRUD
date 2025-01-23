import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import '../assets/css/cashpayment.css';

const CashPayment: React.FC = () => {
  const [formData, setFormData] = useState({
    receiverName: '',
    productName: '',
    quantity: 0,
    price: 0,
    totalAmount: 0,
  });

  const [history, setHistory] = useState<any[]>([]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = name === 'quantity' || name === 'price' ? parseFloat(value) || 0 : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
      totalAmount: name === 'quantity' || name === 'price' 
        ? (name === 'quantity' ? parsedValue * prevData.price : prevData.quantity * parsedValue)
        : prevData.totalAmount,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send data to backend using axios
      await axios.post('http://localhost:8080/cashpay', {
        receiverName: formData.receiverName,
        productName: formData.productName,
        quantity: formData.quantity,
        pricePerUnit: formData.price,
        totalAmount: formData.totalAmount,
      });

      // Save data to history
      setHistory((prevHistory) => [...prevHistory, formData]);

      // Reset form data
      setFormData({
        receiverName: '',
        productName: '',
        quantity: 0,
        price: 0,
        totalAmount: 0,
      });

      alert('Cash Payment submitted successfully!');
    } catch (error) {
      console.error('Error submitting cash payment:', error);
      alert('Failed to submit payment, please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>
        <i className="bx bxs-wallet"></i> Cash Payment
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Receiver Name */}
        <div className="form-group">
          <label htmlFor="receiverName">
            <i className="bx bxs-user"></i> Receiver's Name
          </label>
          <input
            type="text"
            id="receiverName"
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
            placeholder="Enter receiver's name"
            required
          />
        </div>

        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="productName">
            <i className="bx bxs-box"></i> Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Quantity */}
        <div className="form-group">
          <label htmlFor="quantity">
            <i className="bx bxs-layer"></i> Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Price */}
        <div className="form-group">
          <label htmlFor="price">
            <i className="bx bxs-dollar-circle"></i> Price per Unit
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        {/* Total Amount */}
        <div className="form-group">
          <label htmlFor="totalAmount">
            <i className="bx bxs-calculator"></i> Total Amount
          </label>
          <input
            type="text"
            id="totalAmount"
            name="totalAmount"
            value={formData.totalAmount.toFixed(2)}
            readOnly
            disabled
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          <i className="bx bxs-check-circle"></i> Submit
        </button>
      </form>
    </div>
  );
};

export default CashPayment;
