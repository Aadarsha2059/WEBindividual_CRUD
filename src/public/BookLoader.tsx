import React from 'react';
import '../assets/css/BookLoader.css';

const BookLoader: React.FC = () => {
    const pages = Array.from({ length: 18 }, (_, i) => i);
    const quotes = [
        "Show me a family of readers, and I will show you the people who move the world   ->Napoleon Bonaparte",


        "I think books are like people, in the sense that they’ll turn up in your life when you most need them    -> Emma Thompson",

        "Innovative idea by    ->AADARSHA BABU DHAKAL..............."
    ];

    return (
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
                {/* <a className="dribbble" href="https://dribbble.com/shots/7199149-Book-Loader" target="_blank" rel="noopener noreferrer">
                    <img src="https://dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png" alt="Dribbble" />
                </a> */}
            </div>
            <div className="quotes">
                {quotes.map((quote, index) => (
                    <p key={index}>{quote}</p>
                ))}
            </div>
        </div>
    );
};

export default BookLoader;
