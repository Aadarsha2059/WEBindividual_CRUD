import React, { useState } from 'react';
import '../assets/css/buyerdashboard.css';

// Importing the images
import imageOne from "../assets/images/surajbook1.jpeg";
import imageTwo from "../assets/images/surajbook2.jpeg";
import imageThree from "../assets/images/surajbook3.jpeg";
import imageFour from "../assets/images/surajbook10.jpeg";
import imageFive from "../assets/images/surajbook11.jpeg";
import imageSix from "../assets/images/surajbook12.jpeg";
import imageSeven from "../assets/images/surajbook6.jpeg";
import imageEight from "../assets/images/surajbook7.jpeg";

const BuyerDashboard: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('All');

  const addToCart = (title: string, author: string, price: number) => {
    setCart([...cart, { title, author, price }]);
    setTotal(total + price);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    const removedItem = updatedCart.splice(index, 1);
    setCart(updatedCart);
    setTotal(total - removedItem[0].price);
  };

  const payNow = () => {
    alert('Proceeding to payment...');
    // Add payment logic here
  };

  const filterBooks = (category: string) => {
    setCategory(category);
    // Implement filtering logic here based on selected category
  };

  return (
    <div className="buyer-dashboard">
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">SEEKER/BUYER PATHSALA</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
          <a href="seekerspage" onClick={() => navigate("/seekerspage")}> {/* Added onClick handler for My seekerspage */}
              <i className="bx bxs-book-bookmark"></i>
              <span className="text">Get Free Books</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-book-bookmark"></i>
              <span className="text">Buy Books</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-trophy"></i>
              <span className="text">Rewards</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-book-open"></i>
              <span className="text">Drop your Suggestions</span>
            </a>
          </li>
          <li>
            <a href="settings.html">
              <i className="bx bx-cog"></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="profile.html">
              <i className="bx bx-user-circle"></i>
              <span className="text">My Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-dollar-circle"></i>
              <span className="text">Payment</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <div className="main-content">
        <div className="top-bar">
          <div className="search-container">
            <i className="bx bx-search-alt"></i>
            <input 
              type="text" 
              placeholder="Search for books..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
          <div className="category-container">
            <select 
              value={category} 
              onChange={(e) => filterBooks(e.target.value)} 
              className="category-select"
            >
              <option value="All">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Science">Science</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
          <div className="cart-container">
            <span
              className="notification"
              style={{ position: 'absolute', top: 20, right: 70, cursor: 'pointer' }}
              onClick={() => alert('Cart clicked')}
            >
              🛒 <span className="badge">{cart.length}</span>
            </span>
            <span
              className="notification"
              style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }}
              onClick={() => alert('Cart clicked')}
            >
              🔔 <span className="badge">{cart.length}</span>
            </span>
          </div>
        </div>

        <div className="book-section">
          {[imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight].map((image, index) => (
            <div key={index} className="book-card">
              <img src={image} alt={`Book ${index + 1}`} />
              <h3>{`Book ${index + 1}`}</h3>
              <p>Author: Author Name</p>
              <span className="price">Rs. {index % 2 === 0 ? 300 : 500}</span>
              <div className="cart">
                <button onClick={() => addToCart(`Book ${index + 1}`, `Author Name ${index + 1}`, index % 2 === 0 ? 300 : 500)}>
                  Add to Cart <i className="bx bxs-cart-add"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div id="cart-items" className={cart.length > 0 ? 'visible' : 'hidden'}>
          <h3>Cart Items</h3>
          <ul id="cart-list">
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} by {item.author} - Rs. {item.price}
                <button onClick={() => removeFromCart(index)} style={{ marginLeft: '10px', color: 'red' }}>Remove</button>
              </li>
            ))}
          </ul>
          <p id="total-price" style={{ fontWeight: 'bold' }}>
            Total: Rs. {total}
          </p>
          <button
            id="pay-now"
            className={cart.length > 0 ? 'visible' : 'hidden'}
            onClick={payNow}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
