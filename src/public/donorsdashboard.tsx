import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
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
  const books = [
    { imgSrc: arrivalOne, title: "Book Title One", author: "Suraj", price: "Rs. 500" },
    { imgSrc: arrivalTwo, title: "Book Title Two", author: "Aadarsha", price: "Rs. 400" },
    { imgSrc: arrivalThree, title: "Book Title 3", author: "Bishnu", price: "FREE OF COST" },
    { imgSrc: arrivalFour, title: "Book Title 4", author: "Anuj", price: "Rs. 200" },
    { imgSrc: arrivalSix, title: "Book Title 5", author: "Ram bahadur", price: "FREE OF COST" },
    { imgSrc: arrivalseven, title: "Book Title 5", author: "Shyam bahadur", price: "FREE OF COST" },
    { imgSrc: arrivalEight, title: "Book Title 5", author: "Hari Bahadur", price: "Rs. 800" },
    { imgSrc: arrivalnine, title: "Book Title 5", author: "Krishna Bahadur", price: "Rs. 600" },
    { imgSrc: arrivalten, title: "Book Title 5", author: "Purna Bahadur", price:"FREE OF COST" },
  ];

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
              <i className='bx bx-donate-heart'></i>
              <span className="text">Donate Books</span>
            </a>
          </li>
          <li>
            <a href="sellerspage" onClick={() => navigate("/sellerspage")}> {/* Added onClick handler for suggestions */}
              <i className='bx bx-dollar-circle'></i>
              <span className="text">Sell Books</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/suggestions")}> {/* Updated to navigate to suggestions page */}
              <i className='bx bx-message-square-detail'></i>
              <span className="text">Drop your Suggestions</span>
            </a>
          </li>
          <li>
          <a href="settings" onClick={() => navigate("/settings")}> {/* Updated to navigate to suggestions page */}
              <i className='bx bx-cog'></i>
              <span className="text">Settings</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#" onClick={() => navigate("/donorsprofile")}> {/* Added onClick handler for My Profile */}
              <i className='bx bx-user-circle'></i>
              <span className="text">My Profile</span>
            </a>
          </li>
          <li>
            <a href="article" onClick={() => navigate("/article")}> {/* Added onClick handler for articles */}
              <i className='bx bx-news'></i> 
              <span className="text">Study Journals</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout" onClick={() => navigate("/")}> {/* Updated to navigate to home.tsx */}
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
          <a href="#" className="nav-link">Categories</a>
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
    </div>
  );
};

export default DonorsDashboard;
