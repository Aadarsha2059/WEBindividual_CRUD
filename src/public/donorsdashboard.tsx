import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/donorsdashboard.css';
import arrivalOne from '../assets/images/arrival_1.jpg';
import arrivalTwo from '../assets/images/arrival_2.jpg';
import arrivalThree from '../assets/images/arrival_3.jpg';
import arrivalFour from '../assets/images/arrival_4.jpg';
import arrivalFive from '../assets/images/arrival_5.jpg';
import arrivalSix from '../assets/images/arrival_6.jpg';
import arrivalseven from '../assets/images/arrival_7.jpg';
import arrivalEight from '../assets/images/arrival_8.webp';
import arrivalnine from '../assets/images/arrival_9.jpg';
import arrivalten from '../assets/images/arrival_10.jpg';

const DonorsDashboard: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [showCategories, setShowCategories] = useState(false); // State to toggle dropdown visibility
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State for selected category
  const [showDialog, setShowDialog] = useState(false); // State to toggle dialog box

  const books = [
    { imgSrc: arrivalOne, title: "Book Title One", author: "Suraj", price: "Rs. 500", category: "Literature" },
    { imgSrc: arrivalTwo, title: "Book Title Two", author: "Aadarsha", price: "Rs. 400", category: "Politics" },
    { imgSrc: arrivalThree, title: "Book Title 3", author: "Bishnu", price: "FREE OF COST", category: "Science" },
    { imgSrc: arrivalFour, title: "Book Title 4", author: "Anuj", price: "Rs. 200", category: "Geo Politics" },
    { imgSrc: arrivalSix, title: "Book Title 5", author: "Ram bahadur", price: "FREE OF COST", category: "Information Tech" },
    { imgSrc: arrivalseven, title: "Book Title 6", author: "Shyam bahadur", price: "FREE OF COST", category: "Literature" },
    { imgSrc: arrivalEight, title: "Book Title 7", author: "Hari Bahadur", price: "Rs. 800", category: "Science" },
    { imgSrc: arrivalnine, title: "Book Title 8", author: "Krishna Bahadur", price: "Rs. 600", category: "Politics" },
    { imgSrc: arrivalten, title: "Book Title 9", author: "Purna Bahadur", price: "FREE OF COST", category: "Geo Politics" },
  ];

  const categories = ["Literature", "Politics", "Geo Politics", "Information Tech", "Science"];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowDialog(true);
  };

  const filteredBooks = books.filter(book => book.category === selectedCategory);

  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className='bx bxs-smile'></i>
          <span className="text">DONOR/SELLER PathSala</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className='bx bxs-dashboard'></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="donorspage">
            <i className='bx bx-dollar-circle'></i>
              <span className="text">Donate/Sell Books</span>
            </a>
          </li>
         
          <li>
            <a href="#" onClick={() => navigate("/suggestions")}>
              <i className='bx bx-message-square-detail'></i>
              <span className="text">Drop your Suggestions</span>
            </a>
          </li>
          <li>
            <a href="settings" onClick={() => navigate("/settings")}>
              <i className='bx bx-cog'></i>
              <span className="text">Settings</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#" onClick={() => navigate("/donorsprofile")}>
              <i className='bx bx-user-circle'></i>
              <span className="text">My Profile</span>
            </a>
          </li>

          <li>
            <a href="donorvisualization" onClick={() => navigate("/donorvisualization")}>
              <i className='bx bx-loader-circle bx-spin'></i>
              <span className="text">Books transactions & Progress</span>
            </a>
          </li>
          <li>
            <a href="jobpage" onClick={() => navigate("/jobpage")}>
              <i className='bx bx-dollar-circle'></i>
              <span className="text">Do Projects and Earn</span>
            </a>
          </li>
          <li>
            <a href="chattingpage" onClick={() => navigate("/chattingpage")}>
              <i className='bx bx-message-square-dots'></i>
              <span className="text">Chat</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout" onClick={() => navigate("/")}>
              <i className='bx bx-log-out-circle'></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}

      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className='bx bx-menu'></i>
          <a href="#" className="nav-link" onClick={() => setShowCategories(!showCategories)}>Categories</a>

          {/* Dropdown Menu */}
          {showCategories && (
            <ul className="dropdown">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#" onClick={() => handleCategorySelect(category)}>{category}</a>
                </li>
              ))}
            </ul>
          )}

          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className='bx bx-search'></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
        </nav>
        {/* NAVBAR */}

        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <ul className="breadcrumb"></ul>
            </div>
          </div>

          {/* Book Section */}
          <div className="book-section">
            {books.map((book, index) => (
              <div className="book-card" key={index}>
                <img src={book.imgSrc} alt={book.title} />
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <span className="price">{book.price}</span>
              </div>
            ))}
          </div>
        </main>
      </section>
      {/* CONTENT */}

      {/* Dialog Box */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>{selectedCategory} Books</h2>
            <button className="close-btn" onClick={() => setShowDialog(false)}>Close</button>
            <div className="dialog-content">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book, index) => (
                  <div key={index} className="dialog-book-item">
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                  </div>
                ))
              ) : (
                <p>No books available in this category.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorsDashboard;
