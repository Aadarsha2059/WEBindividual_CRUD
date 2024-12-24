import React from 'react';
import '../assets/css/BookLoader.css';
import video from '../assets/images/bestloading.mp4'; 

const BookLoader: React.FC = () => {
    return (
        <div className="loader-wrapper">
            <video className="loader-video" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default BookLoader;
