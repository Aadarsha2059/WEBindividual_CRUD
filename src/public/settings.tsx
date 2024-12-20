import React, { useState } from 'react';
import '../assets/css/settings.css';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    alert(`Dark mode ${!darkMode ? 'enabled' : 'disabled'}`);
  };

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>, setting: string) => {
    alert(`${setting} set to: ${event.target.value}`);
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="title">Settings</h1>

      {/* Appearance Section */}
      <div className="setting-option">
        <i className="fas fa-paint-brush"></i>
        <p>Appearance</p>
        <div className="toggle-btn">
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label htmlFor="darkModeToggle"></label>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="setting-option">
        <i className="fas fa-bell"></i>
        <p>Notifications</p>
        <select onChange={(e) => handleDropdownChange(e, 'Notifications')}>
          <option value="all">All Notifications</option>
          <option value="important">Important Only</option>
          <option value="none">None</option>
        </select>
      </div>

      {/* Settings and Privacy */}
      <div className="setting-option">
        <i className="fas fa-user-shield"></i>
        <p>Settings and Privacy</p>
        <select onChange={(e) => handleDropdownChange(e, 'Privacy Settings')}>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Account Ownership */}
      <div className="setting-option">
        <i className="fas fa-user-cog"></i>
        <p>Account Ownership</p>
        <select onChange={(e) => handleDropdownChange(e, 'Account Management')}>
          <option value="manage">Manage Account</option>
          <option value="deactivate">Deactivate Account</option>
          <option value="delete">Delete Account</option>
        </select>
      </div>

      {/* Reading Preferences */}
      <div className="setting-option">
        <i className="fas fa-book"></i>
        <p>Reading Preferences</p>
        <select onChange={(e) => handleDropdownChange(e, 'Reading Preferences')}>
          <option value="day">Day Mode</option>
          <option value="night">Night Mode</option>
          <option value="sepia">Sepia Mode</option>
        </select>
      </div>

      {/* Font Size */}
      <div className="setting-option">
        <i className="fas fa-font"></i>
        <p>Font Size</p>
        <select onChange={(e) => handleDropdownChange(e, 'Font Size')}>
          <option value="small">Small</option>
          <option value="medium" selected>Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* Language */}
      <div className="setting-option">
        <i className="fas fa-language"></i>
        <p>Language</p>
        <select onChange={(e) => handleDropdownChange(e, 'Language')}>
          <option value="en" selected>English</option>
          <option value="ne">Nepali</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
