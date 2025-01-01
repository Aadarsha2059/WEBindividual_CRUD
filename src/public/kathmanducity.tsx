// src/public/kathmanducity.tsx
import React, { useEffect } from 'react';
import '../assets/css/kathmanducity.css'

const KathmanduCityMap: React.FC = () => {
  useEffect(() => {
    // Load the Google Maps script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhyuMDPsromXqxgpHcr0L5hB8ROkzzYe8&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Initialize the map once the script is loaded
    window.initMap = () => {
      const mapOptions = {
        center: { lat: 27.7172, lng: 85.3240 }, // Kathmandu Coordinates
        zoom: 12,
      };
      new window.google.maps.Map(document.getElementById('map'), mapOptions);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Kathmandu City Map</h2>
      <div id="map" style={{ width: '100%', height: '500px', borderRadius: '8px', border: '2px solid #ccc' }}></div>
    </div>
  );
};

export default KathmanduCityMap;
