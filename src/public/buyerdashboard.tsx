import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import '../assets/css/buyerdashboard.css';

// Importing the images
import imageOne from "../assets/images/ProductOne.jpeg";
import imageTwo from "../assets/images/ProductFour.jpeg";
import imageThree from "../assets/images/ProductSix.jpeg";
import imageFour from "../assets/images/ProductThree.jpeg";
import imageFive from "../assets/images/Study Chair.png";
import imageSix from "../assets/images/Mouse.png";
import imageSeven from "../assets/images/keyboard.png";
import imageEight from "../assets/images/surajbook7.jpeg";

const BuyerDashboard: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('All');
  const [searchVisible, setSearchVisible] = useState<boolean>(false); // State to control the visibility of the search input box
  const navigate = useNavigate(); // Initializing useNavigate hook

  const sellers = [
    { email: "surajtamang@gmail.com", item: "New item", },
    { email: "anujsingh@gmail.com", item: "Second hand" },
    { email: "bishnu@gmail.com", item: "New item" },
    { email: "chirayu@gmail.com", item: "Second hand" },
    { email: "chirayu@gmail.com", item: "New item" },
    { email: "nirajan@gmail.com", item: "First hand" },
    { email: "chirayu@gmail.com", item: "New item" },
    { email: "aadarsha@gmail.com", item: "New item" },

  ];

  const addToCart = (title: string, author: string, price: number, sellerIndex: number) => {
    setCart([...cart, { title, author, price, seller: sellers[sellerIndex] }]);
    setTotal(total + price);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    const removedItem = updatedCart.splice(index, 1);
    setCart(updatedCart);
    setTotal(total - removedItem[0].price);
  };

  const payNow = () => {
    navigate('/payment'); 
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
              <span className="text">BUY MORE PRODUCTS/ GET FREE PRODUCTS</span>
            </a>
          </li>
          <li>
          <a href="chattingpage" onClick={() => navigate("/chattingpage")}>
              <i className='bx bx-message-square-dots'></i>
              <span className="text">Chat</span>
            </a>
          </li>
          <li>
          <a href="suggestions" onClick={() => navigate("/suggestions")}> {/* Added onClick handler for suggestion*/}
              <i className="bx bxs-book-open"></i>
              <span className="text">Drop your Suggestions</span>
            </a>
          </li>
          <li>
          <a href="settings" onClick={() => navigate("/settings")}>
              <i className="bx bx-cog"></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
          <a href="#" onClick={() => navigate("/donorsprofile")}>
              <i className="bx bx-user-circle"></i>
              <span className="text">My Profile</span>
            </a>
          </li>
          <li>
            <a href="jobpage" onClick={() => navigate("/jobpage")}>
              <i className='bx bx-dollar-circle'></i>
              <span className="text">Do Projects and Earn</span>
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
            <i 
              className="bx bx-search-alt" 
              onClick={() => setSearchVisible(!searchVisible)} // Toggle the visibility of the search input box
            ></i>
            {searchVisible && (
              <input 
                type="text" 
                placeholder="Search required goods" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
              />
            )}
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
              <p>PRODUCT: Paid Products</p>
              <span className="price">Rs. {index % 2 === 0 ? 300 : 500}</span>
              <div className="cart">
                <button onClick={() => addToCart(`Book ${index + 1}`, `Author Name ${index + 1}`, index % 2 === 0 ? 300 : 500, index % sellers.length)}>
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
          <h4>Sellers Information</h4>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                Seller: {item.seller.email}, Item: {item.seller.item}
              </li>
            ))}
          </ul>
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
