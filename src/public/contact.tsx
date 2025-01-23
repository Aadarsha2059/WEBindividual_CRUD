import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBox, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import video from '../assets/images/contact_final_stuthrift.mp4';
import '../assets/css/contact.css';

function Contact() {
  const [showAd, setShowAd] = useState(true);
  const [timeLeft, setTimeLeft] = useState(20);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [placeName, setPlaceName] = useState('');
  const [weatherAlert, setWeatherAlert] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showLocationDialog, setShowLocationDialog] = useState(false);

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

  // Fetch user's location and weather details
  useEffect(() => {
    const fetchWeatherDetails = async (latitude, longitude) => {
      try {
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_WEATHER_API_KEY&units=metric`
        );
        const weatherData = await weatherResponse.json();
        const weatherAlert = `🌦️ Weather: ${weatherData.weather[0].description}, Temp: ${weatherData.main.temp}°C`;
        setWeatherAlert(weatherAlert);
      } catch (error) {
        setWeatherAlert('Unable to fetch weather information.');
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Fetch place name using reverse geocoding API
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_OPENCAGE_API_KEY`
            );
            const data = await response.json();
            const place = data.results[0]?.components?.city || 'Unknown location';
            setPlaceName(place);

            // Fetch weather details after place name
            fetchWeatherDetails(latitude, longitude);
          } catch (error) {
            setPlaceName('Unable to fetch place name.');
          }
        },
        (error) => {
          setErrorMessage('Unable to fetch location.');
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      <video className="contact-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="contact-box">
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{' '}
              <a href="mailto:donorsnepal123456@gmail.com">stuthrift111@gmail.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faBox} /> <strong>Post Box:</strong> 980098
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> 98000000000
            </p>
            <button
              className="location-button"
              onClick={() => setShowLocationDialog(true)}
              style={{
                marginTop: '10px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                padding: '10px 15px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> View My Location
            </button>
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

      {/* Location Dialog */}
      {showLocationDialog && (
        <div className="location-dialog">
          <div className="dialog-content">
            <h3>Your Current Location</h3>
            {location.latitude && location.longitude ? (
              <>
                <p>
                  <strong>Coordinates:</strong> Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
                <p>
                  <strong>City:</strong> {placeName}
                </p>
                <p>
                  <strong>Weather Alert:</strong> {weatherAlert}
                </p>
              </>
            ) : (
              <p>{errorMessage || 'Fetching location...'}</p>
            )}
            <button
              onClick={() => setShowLocationDialog(false)}
              style={{
                marginTop: '10px',
                backgroundColor: '#FF0000',
                color: '#fff',
                border: 'none',
                padding: '10px 15px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
