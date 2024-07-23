import React from 'react';
import '../assets/css/BookLoader.css';
import video from '../assets/images/preloadervideoo.mp4'; // Add your video file path

const BookLoader: React.FC = () => {
    const pages = Array.from({ length: 18 }, (_, i) => i);
    const quotes = [
        "Show me a family of readers, and I will show you the people who move the world   ->Napoleon Bonaparte",
        "I think books are like people, in the sense that they’ll turn up in your life when you most need them    -> Emma Thompson",
        "Innovative idea by    ->AADARSHA BABU DHAKAL..............."
    ];

    return (
        <div className="loader-wrapper">
            <video className="loader-video" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className="loader-container">
                <h1>"BOOK DONORS NEPAL 2024" <br />("Dreaming, Studying & Living"...)</h1>
                <div className="book">
                    <div className="inner">
                        <div className="left"></div>
                        <div className="middle"></div>
                        <div className="right"></div>
                    </div>
                    <ul>
                        {pages.map((_, index) => (
                            <li key={index}></li>
                        ))}
                    </ul>
                </div>
                <div className="quotes">
                    {quotes.map((quote, index) => (
                        <p key={index}>{quote}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookLoader;
