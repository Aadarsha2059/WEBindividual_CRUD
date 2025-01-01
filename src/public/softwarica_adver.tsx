import React, { useState, useEffect } from "react";
import softwaricaImage from "../assets/images/softwarica.png"; // Softwarica College image
import computerImage from "../assets/images/computer.png";
import alphabetaImage from "../assets/images/alphabeta.png"; // Alpha Beta Consultancy image
import foreignStudyImage from "../assets/images/foreignstudy.png"; // Foreign Study image
import '../assets/css/softwarica_adver.css';

const AdvertisementSection: React.FC = () => {
  const [showSoftwaricaAd, setShowSoftwaricaAd] = useState<boolean>(true);
  const [showAlphaBetaAd, setShowAlphaBetaAd] = useState<boolean>(false);

  useEffect(() => {
    // Toggle between ads every 10 seconds
    const adSwitchInterval = setInterval(() => {
      setShowSoftwaricaAd((prev) => !prev);
      setShowAlphaBetaAd((prev) => !prev);
    }, 10000); // 10 seconds interval

    // Clean up the interval on component unmount
    return () => clearInterval(adSwitchInterval);
  }, []);

  return (
    <div className="advertisement-container">
      <h2 className="heading">Our Angel Investors</h2>
      <p className="slogan">Get into their touch to ensure your bright future.</p>

      {showSoftwaricaAd && (
        <div className="advertisement softwarica-ad">
          <button
            className="close-ad-button"
            onClick={() => {
              setShowSoftwaricaAd(false);
              setShowAlphaBetaAd(true); // Ensure the other ad shows up
            }}
          >
            &times;
          </button>
          <div className="softwarica">
            <img src={softwaricaImage} alt="Softwarica College" />
          </div>
          <div className="content">
            <span>Join Now for</span>
            <h3>Bachelor's & Master's in IT</h3>
            <p>Offer ends in 5 days</p>
            <p className="ad-text">Enroll at Softwarica College of IT & E-Commerce for an advanced career in the IT field.</p>
            <p className="ad-text">Location: Softwarica College, Opposite to Cafe 98, Mahakavi Marga</p>
            <a href="https://www.softwarica.edu.np" className="btn" target="_blank" rel="noopener noreferrer">Register Now</a>
          </div>
          <div className="computer">
            <img src={computerImage} alt="Computer" />
          </div>
        </div>
      )}

      {showAlphaBetaAd && (
        <div className="advertisement alphabeta-ad">
          <button
            className="close-ad-button"
            onClick={() => {
              setShowAlphaBetaAd(false);
              setShowSoftwaricaAd(true); // Ensure the other ad shows up
            }}
          >
            &times;
          </button>
          <div className="alphabeta">
            <img src={alphabetaImage} alt="Alpha Beta Consultancy" />
          </div>
          <div className="content">
            <span>Travel the World with</span>
            <h3>Alpha Beta Consultancy</h3>
            <p>Helping students travel to Europe, America & Australia</p>
            <p className="ad-text">Alpha Beta Consultancy helps you with all your travel and study abroad needs.</p>
            <p className="ad-text">Get assistance with visas, travel arrangements, and much more!</p>
            <a href="https://www.alphabeta.com" className="btn" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
          <div className="foreign-study">
            <img src={foreignStudyImage} alt="Study Abroad" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisementSection;
