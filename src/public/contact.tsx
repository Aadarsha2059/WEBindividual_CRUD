import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBox, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import video from '../assets/images/finalcontact.mp4';
import '../assets/css/contact.css';

function Contact() {
  const navigate = useNavigate();
  const [showAd, setShowAd] = useState(true);
  const [timeLeft, setTimeLeft] = useState(20);

  // Handle countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setShowAd(false);
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <>
      <video className="contact-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <button
        className="back-button"
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px',
          zIndex: 1000,
        }}
      >
        BACK
      </button>
      <div className="contact-box">
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{' '}
              <a href="mailto:donorsnepal123456@gmail.com">hamropathsala@gmail.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faBox} /> <strong>Post Box:</strong> 980098
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> 98000000000
            </p>
          </div>
        </section>
        {showAd && (
          <div className="advertisement">
            <div className="ad-header">
              <span className="timer">{timeLeft}s</span>
              <button className="close-ad" onClick={() => setShowAd(false)}>
                ✖
              </button>
            </div>
            <div className="ad-content">
              <p className="ad-title">🎓"Expert Visa Consultancy"🌏📚🚀🎓✈️ </p>
              <p className="ad-location"><strong>Location:</strong> Opposite to Softwarica College of IT and E-commerce</p>
              <p>
                Why wait to transform your dreams into reality? Study at top universities across Europe!!! 
                <strong> Limited spots for our prep classes—act fast!</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
