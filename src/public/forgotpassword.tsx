import React, { useState } from 'react';
import '../assets/css/forgotpassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [favoriteFood, setFavoriteFood] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [petName, setPetName] = useState('');
  const [holidayDestination, setHolidayDestination] = useState('');
  const [showPinDialog, setShowPinDialog] = useState(false);
  const [showPasswordRecoveryDialog, setShowPasswordRecoveryDialog] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const securityQuestions = [
    'Your favorite food',
    'Your favorite color',
    'Your pet’s name',
    'Your favorite holiday destination',
  ];

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const handleSendVerification = () => {
    setErrorMessages([]);
    if (!email) {
      setErrorMessages((prev) => [...prev, 'Email is required.']);
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessages((prev) => [...prev, 'Please enter a valid email.']);
      return;
    }
    setResponseMessage('A verification pin has been sent to your email.');
    setShowPinDialog(true);
  };

  const handlePinSubmit = () => {
    setErrorMessages([]);
    if (!pin) {
      setErrorMessages((prev) => [...prev, 'Pin code is required.']);
      return;
    }
    if (pin.length !== 6) {
      setErrorMessages((prev) => [...prev, 'Pin code must be 6 digits.']);
      return;
    }
    setResponseMessage('Pin code verified. Please answer the security questions.');
    setShowPinDialog(false);
    setShowPasswordRecoveryDialog(true);
  };

  const handlePasswordRecoverySubmit = () => {
    setErrorMessages([]);
    if (!newPassword || !confirmNewPassword || !favoriteFood || !favoriteColor || !petName || !holidayDestination) {
      setErrorMessages((prev) => [...prev, 'Please fill all fields.']);
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setErrorMessages((prev) => [...prev, 'Passwords do not match.']);
      return;
    }
    if (!validatePassword(newPassword)) {
      setErrorMessages((prev) => [...prev, 'Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.']);
      return;
    }
    setResponseMessage('Password successfully changed!');
    setShowPasswordRecoveryDialog(false);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Please enter your valid email address to recover your password.</p>
      <div className="input-group">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <button onClick={handleSendVerification}>Send Verification</button>

      {showPinDialog && (
        <div className="dialog">
          <h3>Enter PIN Code</h3>
          <div className="input-group">
            <i className="fas fa-key"></i>
            <input
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              required
            />
          </div>
          <button onClick={handlePinSubmit}>Submit</button>
        </div>
      )}

      {showPasswordRecoveryDialog && (
        <div className="dialog">
          <h3>Recover Password</h3>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="Confirm New Password"
              required
            />
          </div>
          <p>Answer security questions</p>
          <div className="input-group">
            <i className="fas fa-utensils"></i>
            <select
              value={favoriteFood}
              onChange={(e) => setFavoriteFood(e.target.value)}
              required
            >
              <option value="">Your favorite food</option>
              <option value="Pizza">Pizza</option>
              <option value="Pasta">Pasta</option>
              <option value="Burger">Burger</option>
              <option value="Sushi">Sushi</option>
            </select>
          </div>
          <div className="input-group">
            <i className="fas fa-paint-brush"></i>
            <select
              value={favoriteColor}
              onChange={(e) => setFavoriteColor(e.target.value)}
              required
            >
              <option value="">Your favorite color</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
            </select>
          </div>
          <div className="input-group">
            <i className="fas fa-paw"></i>
            <select
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              required
            >
              <option value="">Your pet's name</option>
              <option value="Max">Max</option>
              <option value="Bella">Bella</option>
              <option value="Charlie">Charlie</option>
              <option value="Lucy">Lucy</option>
            </select>
          </div>
          <div className="input-group">
            <i className="fas fa-sun"></i>
            <select
              value={holidayDestination}
              onChange={(e) => setHolidayDestination(e.target.value)}
              required
            >
              <option value="">Your favorite holiday destination</option>
              <option value="Paris">Paris</option>
              <option value="Bali">Bali</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
            </select>
          </div>
          <button onClick={handlePasswordRecoverySubmit}>Submit</button>
        </div>
      )}

      {errorMessages.length > 0 && (
        <div className="error-messages">
          {errorMessages.map((message, index) => (
            <p key={index} className="error-message">{message}</p>
          ))}
        </div>
      )}

      {responseMessage && <div className="response-message">{responseMessage}</div>}
    </div>
  );
};

export default ForgotPassword;
