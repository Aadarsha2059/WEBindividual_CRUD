import React, { useState } from 'react';
import '../assets/css/donorsprofile.css';
import video from '../assets/images/finalprofileusers.mp4';

const DonorsProfile: React.FC = () => {
  const [fullName, setFullName] = useState<string>('Aadarsha Babu Dhakal');
  const [age, setAge] = useState<number>(22);
  const [location, setLocation] = useState<string>('Kathmandu, Nepal');
  const [gender, setGender] = useState<string>('Male');
  const [contact, setContact] = useState<string>('+977-9800000000');
  const [email, setEmail] = useState<string>('abd@example.com');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordAlert, setPasswordAlert] = useState<boolean>(false);

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const validatePassword = () => {
    setPasswordAlert(password !== confirmPassword);
  };

  const saveProfile = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-page">
      <div className="video-container">
        <video className="background-video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <h2 className="profile-name">{fullName}</h2>
            <div className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>

          <div className="profile-details">
            <form id="update-profile-form">
              <div className="input-group">
                <label htmlFor="full-name">
                  <i className="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  value={fullName}
                  onChange={updateUsername}
                />
              </div>
              <div className="input-group">
                <label htmlFor="age">
                  <i className="fa fa-calendar"></i> Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>
              <div className="input-group">
                <label htmlFor="location">
                  <i className="fa fa-map-marker-alt"></i> Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="gender">
                  <i className="fa fa-venus-mars"></i> Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="contact">
                  <i className="fa fa-phone"></i> Contact
                </label>
                <input
                  type="tel"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">
                  <i className="fa fa-key"></i> Update Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">
                  <i className="fa fa-key"></i> Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validatePassword();
                  }}
                  placeholder="Confirm new password"
                />
              </div>
              {passwordAlert && (
                <div id="password-alert" style={{ color: 'red', fontSize: '0.9rem' }}>
                  Passwords do not match!
                </div>
              )}
              <div className="input-group">
                <label htmlFor="email">
                  <i className="fa fa-envelope"></i> Update Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="profile-actions">
                <button type="button" onClick={saveProfile}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorsProfile;
